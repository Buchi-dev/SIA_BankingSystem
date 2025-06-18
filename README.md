# Changelog

> **Table of Contents**
> - [v0.0.2 - 2025-06-18](#002---2025-06-18)
> - [v0.0.1 - 2025-06-17](#001---2025-06-17)

---

## [0.0.2] - 2025-06-18
### Added
- Docker support for all microservices (Dockerfiles and docker-compose).
- Centralized environment variable management via `.env` files.
- LAN access enabled (services bind to 0.0.0.0).
- Updated MongoDB connection for latest driver compatibility.


---

## [0.0.1] - 2025-06-17
### Added
- Project initialized: Wired City Banking System.
- MongoDB models: User, Account, Transaction, ExternalSystem.
- User controller: registration, login, profile endpoints.
- Account controller: create, view, update, delete, balance endpoints.
- Transaction controller: deposit, withdraw, transfer, history endpoints.
- ExternalSystem controller: register, payment, balance inquiry endpoints.
- API routes for all modules under `/api`.
- Express server setup with MongoDB connection, CORS, and JSON body parsing.
- `package.json` with scripts and dependencies.


