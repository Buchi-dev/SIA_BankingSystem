# Wired City Banking System Project Checklist (Wiki)

## 1. Models (MongoDB)
- [x] Design and create User table (id, username, password_hash, role, created_at, etc.)
- [x] Design and create Account table (id, user_id, balance, status, created_at, etc.)
- [x] Design and create Transaction table (id, from_account_id, to_account_id, amount, type, timestamp, status, etc.)
- [x] Design and create ExternalSystem table (id, system_name, api_key, contact, registered_at, etc.)

## 2. Controllers (Business Logic)
- [x] Implement User controller (registration, authentication, profile management)
- [x] Implement Account controller (CRUD operations, balance checks)
- [x] Implement Transaction controller (deposit, withdraw, transfer, history)
- [x] Implement ExternalSystem controller (registration, payment, balance inquiry)

## 3. Routes / API Endpoints
- [x] Set up User routes (register, login, profile)
- [x] Set up Account routes (create, view, update, delete)
- [x] Set up Transaction routes (deposit, withdraw, transfer, history)
- [x] Set up ExternalSystem routes (register, payment, balance inquiry)

## 4. Security
- [ ] Implement JWT authentication for users/admins
- [ ] Implement API key authentication for external systems
- [ ] Implement role-based access control (RBAC)
- [ ] Secure all endpoints with middleware
- [ ] Use HTTPS and encrypt sensitive data

## 5. Logging & Auditing
- [ ] Log all transactions and API calls (with timestamps, user/system IDs)
- [ ] Create audit trails for critical actions (account changes, external payments)
- [ ] Provide admin tools for viewing/exporting logs

## 6. Dashboard & Analytics
- [ ] Build admin dashboard (transaction monitoring, system health, user activity)
- [ ] Add analytics for transaction trends, user activity, and system usage
- [ ] Provide visualizations (charts, graphs) for key metrics

## 7. Testing
- [ ] Unit test all models (database logic)
- [ ] Unit test all controllers (business logic)
- [ ] Integration test with mock external systems
- [ ] Security and performance testing (penetration, load testing)

## 8. Documentation
- [ ] Document all API endpoints (internal and external)
- [ ] Write user and admin guides
- [ ] Provide integration documentation for external partners

## 9. Deployment & Presentation
- [ ] Deploy the system to a test/staging environment
- [ ] Prepare deployment scripts and environment variables
- [ ] Set up monitoring and alerting for production
- [ ] Prepare project presentation and demo scripts
