const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Route trả danh sách sản phẩm (bạn có thể thay đổi nội dung tùy ý)
app.get('/products', (req, res) => {
  res.json([
    { name: "Flame Blue", price: 125000 },
    { name: "Molotow Premium", price: 150000 }
  ]);
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
