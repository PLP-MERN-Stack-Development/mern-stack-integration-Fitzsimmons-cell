import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', background: '#f0f0f0', display: 'flex', gap: '10px' }}>
        <Link to="/">Home</Link>
        <Link to="/add">Add Product</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
