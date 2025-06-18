const { Invoice, InvoiceItem, Payment } = require('../b.model');

exports.createInvoice = async (req, res) => {
  try {
    const invoice = new Invoice(req.body);
    await invoice.save();
    res.status(201).json(invoice);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.listInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find({ $or: [
      { sender_business_id: req.query.business_id },
      { receiver_business_id: req.query.business_id }
    ] });
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addInvoiceItem = async (req, res) => {
  try {
    const item = new InvoiceItem({ ...req.body, invoice_id: req.params.id });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.payInvoice = async (req, res) => {
  try {
    const payment = new Payment({ ...req.body, invoice_id: req.params.id });
    await payment.save();
    await Invoice.findByIdAndUpdate(req.params.id, { status: 'paid' });
    res.status(201).json(payment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};