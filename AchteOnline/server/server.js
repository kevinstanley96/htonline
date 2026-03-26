const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Serve front-end files
app.use(session({ secret: 'giftcard-secret', resave: false, saveUninitialized: true }));

// Placeholder product data
const products = [
  { id: 1, name: "Amazon Gift Card", price: 25, balance: "TBD" },
  { id: 2, name: "Netflix Gift Card", price: 50, balance: "TBD" },
  { id: 3, name: "Spotify Gift Card", price: 15, balance: "TBD" }
];

// Routes
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/cart', (req, res) => {
  const { productId } = req.body;
  // Placeholder cart logic
  res.json({ message: `Product ${productId} added to cart.` });
});

app.post('/api/checkout', (req, res) => {
  // Placeholder checkout logic
  res.json({ message: "Checkout complete. Gift card codes will be emailed later." });
});

// User authentication placeholder
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // Replace with real authentication later
  if (username === "test" && password === "1234") {
    req.session.user = username;
    res.json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
