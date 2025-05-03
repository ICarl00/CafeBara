const mongoose = require('mongoose');
const Product = require('./models/Product'); 

mongoose.connect("mongodb://localhost:5000/productsDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    await Product.deleteMany();
    await Product.insertMany([
      {
        name: "Hot Americano",
        category: "Hot Coffee",
        price: 120,
        image: "http://localhost:5000/images/hot-americano.jpg"
      },
      {
        name: "Iced Latte",
        category: "Iced Coffee",
        price: 150,
        image: "http://localhost:5000/images/iced-latte.jpg"
      },
      {
        name: "Chocolate Cake",
        category: "Cake",
        price: 250,
        image: "http://localhost:5000/images/chocolate-cake.jpg"
      },
      {
        name: "Strawberry Frappe",
        category: "Frappe",
        price: 180,
        image: "http://localhost:5000/images/strawberry-frappe.jpg"
      },
      {
        name: "Croissant",
        category: "Pastries",
        price: 90,
        image: "http://localhost:5000/images/croissant.jpg"
      }
    ]);
    console.log("SAMPLEDB ONLY!");
    process.exit();
  })
  .catch(err => console.error("DB connection failed:", err));
