const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Graffiti Backend is Running ✅');
});

// Tạo hóa đơn đơn giản
app.post('/api/invoice', (req, res) => {
  const doc = new PDFDocument();
  res.setHeader('Content-Type', 'application/pdf');
  doc.text('🧾 Hóa đơn đơn hàng', { align: 'center' });
  doc.text(`Tên: ${req.body.name}`);
  doc.text(`Sản phẩm: ${req.body.product}`);
  doc.text(`Tổng tiền: ${req.body.total}`);
  doc.end();
  doc.pipe(res);
});

// Gửi email test
app.post('/api/sendmail', async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: '"Graffiti Shop" <graffiti@shop.com>',
      to: req.body.to,
      subject: req.body.subject,
      text: req.body.message,
    });

    res.send({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send({ success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
