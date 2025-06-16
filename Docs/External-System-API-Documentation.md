# Wired City Banking System External System API Documentation (Wiki)

## Overview
This documentation is for external systems (e.g., fast food restaurants, retail stores) that wish to integrate with the Wired City Banking System for payment and balance services. The backend database is MySQL.

---

## Authentication
- All endpoints require an API Key.
- Include the API Key in the `Authorization` header:
  - `Authorization: API-Key <key>`
- API keys must be kept confidential and never exposed publicly.
- All requests must be made over HTTPS.

---

## External System Endpoints

### Register External System
- **POST** `/api/external/register`
- **Body:**
  ```json
  { "systemName": "string", "contact": "string" }
  ```
- **Response:** API key or credentials for integration
- **Notes:**
  - Each external system must register to receive a unique API key.
  - Contact information is required for support and notifications.

### Payment Request
- **POST** `/api/external/payment`
- **Body:**
  ```json
  { "customerAccountId": "string", "amount": number, "reference": "string" }
  ```
- **Headers:** `Authorization: API-Key <key>`
- **Response:** Transaction result (success/failure, updated balances)
- **Notes:**
  - Used by external systems to initiate payments from customer accounts.
  - Reference field can be used for order or transaction tracking.
  - Amount must be positive and customer must have sufficient balance.

### Balance Inquiry
- **GET** `/api/external/balance?accountId=...`
- **Headers:** `Authorization: API-Key <key>`
- **Response:**
  ```json
  { "accountId": "string", "balance": number }
  ```
- **Notes:**
  - Used by external systems to check the balance of a customer account.

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
1. Register and receive an API key.
2. Send payment requests to `/api/external/payment`.
3. Check balances with `/api/external/balance`.
4. All actions are logged and auditable by bank admins.

---

## Contact
For integration support, contact the system administrator or project maintainer.
