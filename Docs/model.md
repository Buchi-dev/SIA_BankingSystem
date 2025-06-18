1. Business & User Models (for Account Management)
Model Name	Description	Key Fields
Business	Stores business client data	id, name, registration_no, industry, status
BusinessUser	Users tied to a business (staff accounts)	id, business_id, email, role, password_hash
Role (optional)	Defines roles for user permissions	id, name, permissions[]
AuditLog	Tracks changes to sensitive business data	id, business_id, action, user_id, timestamp

2. Account & Transaction Models (for Payments)
Model Name	Description	Key Fields
Account	A bank account tied to a business	id, business_id, account_number, type, balance
Transaction	Every transfer or payment between accounts	id, from_account_id, to_account_id, amount, status, timestamp
TransferRequest	Optional for approval-based transfers	id, initiator_id, from_account, to_account, approved_by, status
Statement	Monthly/periodic summaries	id, account_id, period_start, period_end, pdf_url

3. Invoicing & Billing Models (for B2B Billing)
Model Name	Description	Key Fields
Invoice	Invoice from one business to another	id, sender_business_id, receiver_business_id, due_date, status
InvoiceItem	Line items inside each invoice	id, invoice_id, description, quantity, unit_price
Payment	Payments made toward an invoice	id, invoice_id, payer_account_id, amount, timestamp
TaxRule (opt)	Tax info if needed for billing	id, region, rate, description

4.  Notification Table
Column Name	Data Type	Constraints	Description
id	INT / UUID	PK, Auto Increment	Unique ID for each notification
user_id	INT / UUID	FK → BusinessUser.id, Not Null	The recipient business user
type	VARCHAR(50)	Not Null	e.g. invoice_due, transfer_received
message	TEXT	Not Null	Body/content of the notification
is_read	BOOLEAN	Default: false	Whether the user has read it
created_at	TIMESTAMP	Default: current time	When it was created

5. APIKey Table
Column Name	Data Type	Constraints	Description
id	INT / UUID	PK, Auto Increment	Unique key ID
business_id	INT / UUID	FK → Business.id, Not Null	Which business this API key belongs to
key	VARCHAR(128)	Unique, Not Null	The hashed API key (NEVER store plain text)
label	VARCHAR(100)	Nullable	Custom name like "Internal Payroll System"
scopes	JSON / TEXT	Nullable	Permissions like ["read:invoices", "write:payments"]
is_active	BOOLEAN	Default: true	Toggle to activate or deactivate key
created_at	TIMESTAMP	Default: current time	When the key was created
expires_at	TIMESTAMP	Nullable	Optional expiration date