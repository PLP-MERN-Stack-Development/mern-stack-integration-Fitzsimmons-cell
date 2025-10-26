const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Import routes
const postRoutes = require('./routes/posts');
const categoryRoutes = require('./routes/categories');
const productRoutes = require("./routes/products");

// Use routes
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);
app.use("/api/products", productRoutes);
// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected successfully');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error('❌ MongoDB connection error:', err));
