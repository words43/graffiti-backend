const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Route trả danh sách sản phẩm (có thêm trường `image`)
app.get('/products', (req, res) => {
  res.json([
    {
      name: "Flame Blue",
      price: 125000,
      image: "https://asiaflame.netlify.app/images/flame_blue.jpg"
    },
    {
      name: "Molotow Premium",
      price: 150000,
      image: "https://asiaflame.netlify.app/images/molotow_premium.jpg"
    }
  ]);
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
