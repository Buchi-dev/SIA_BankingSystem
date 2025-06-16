# Wired City Banking System (Bank API) Documentation (Wiki)

## Overview
This documentation covers the APIs provided by the Wired City Banking System for internal use (bank staff, customers, and admin systems). It includes endpoints for user management, account management, and transaction processing. The backend database is MySQL.

---

## Authentication
- All endpoints require authentication.
- Use JWT for users/admins.
- Include credentials in the `Authorization` header:
  - `Authorization: Bearer <JWT>`
- Passwords must be securely hashed and never stored in plain text.
- All sensitive data should be encrypted in transit (HTTPS) and at rest (where possible).

---

## User Endpoints

### Register User
- **POST** `/api/users/register`
- **Body:**
  ```json
  { "username": "string", "password": "string", "role": "customer|admin" }
  ```
- **Response:**
  - `201 Created` on success
  - Error message on failure
- **Notes:**
  - Usernames must be unique.
  - Passwords are hashed before storage.
  - Role determines access level (customer or admin).

### Login
- **POST** `/api/users/login`
- **Body:**
  ```json
  { "username": "string", "password": "string" }
  ```
- **Response:**
  ```json
  { "token": "JWT string" }
  ```
- **Notes:**
  - Returns a JWT token for authenticated requests.
  - Token should be stored securely on the client side.

### Get Profile
- **GET** `/api/users/profile`
- **Headers:** `Authorization: Bearer <token>`
- **Response:**
  ```json
  { "userId": "string", "username": "string", "role": "string" }
  ```
- **Notes:**
  - Returns the authenticated user's profile information.

---

## Account Endpoints

### Create Account
- **POST** `/api/accounts`
- **Body:**
  ```json
  { "userId": "string", "initialDeposit": number }
  ```
- **Response:** Account details
- **Notes:**
  - Only authenticated users can create accounts.
  - Initial deposit must be a positive number.

### Get Accounts
- **GET** `/api/accounts`
- **Headers:** `Authorization: Bearer <token>`
- **Response:** List of accounts for the user
- **Notes:**
  - Returns all accounts associated with the authenticated user.

### Update Account
- **PUT** `/api/accounts/{accountId}`
- **Body:**
  ```json
  { "field": "value" }
  ```
- **Response:** Updated account details
- **Notes:**
  - Only account owners or admins can update account details.

### Delete Account
- **DELETE** `/api/accounts/{accountId}`
- **Response:** Success or error message
- **Notes:**
  - Only account owners or admins can delete accounts.

---

## Transaction Endpoints

### Deposit
- **POST** `/api/transactions/deposit`
- **Body:**
  ```json
  { "accountId": "string", "amount": number }
  ```
- **Response:** Transaction details
- **Notes:**
  - Amount must be positive.
  - Only account owners or admins can deposit.

### Withdraw
- **POST** `/api/transactions/withdraw`
- **Body:**
  ```json
  { "accountId": "string", "amount": number }
  ```
- **Response:** Transaction details
- **Notes:**
  - Amount must be positive and not exceed account balance.
  - Only account owners or admins can withdraw.

### Transfer
- **POST** `/api/transactions/transfer`
- **Body:**
  ```json
  { "fromAccountId": "string", "toAccountId": "string", "amount": number }
  ```
- **Response:** Transaction details
- **Notes:**
  - Amount must be positive and not exceed sender's balance.
  - Only account owners or admins can initiate transfers.

### Get Transaction History
- **GET** `/api/transactions/history?accountId=...`
- **Response:** List of transactions for the account
- **Notes:**
  - Returns all transactions for the specified account.

---

## Error Handling
- All errors return a JSON object:
  ```json
  { "error": "Error message" }
  ```
- Common HTTP status codes:
  - `400 Bad Request`: Invalid input
  - `401 Unauthorized`: Invalid or missing credentials
  - `404 Not Found`: Resource does not exist
  - `500 Internal Server Error`: Server-side error

---

## Example Integration Flow
1. User registers and creates an account.
2. User logs in and receives a JWT token.
3. User performs transactions (deposit, withdraw, transfer) using authenticated endpoints.
4. All actions are logged and auditable by admins.

---

## Contact
For integration support or questions, contact the system administrator or project maintainer.
