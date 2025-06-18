# Changelog

All notable changes to this project are documented here.

## [0.0.2] - 2025-06-18
### Added
- Dockerization for all microservices using Dockerfiles and docker-compose.
- Environment variable support via `.env` files for all services.
- File-based logging for requests and important events in each microservice (logs directory).
- LAN access support for all services (bind to 0.0.0.0).
- Removed deprecated MongoDB connection options for compatibility with latest drivers.

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


