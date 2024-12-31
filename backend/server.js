import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './config/db.js';
import productRoutes from './routes/product.route.js';
import path from "path";

console.log("MongoDB URI:", process.env.MONGODB_URI);  // Check if the variable is loaded


const __dirname = path.resolve();


const app = express();
app.use(express.json());
app.use('/api/products', productRoutes);

app.use(express.static(path.join(__dirname, "frontend/dist")));
// Catch-all route to serve `index.html`
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    connectDB();
    console.log(`Backend Server started on port ${PORT}`);
})