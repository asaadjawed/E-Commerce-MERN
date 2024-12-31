import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/product.route.js';
import path from "path";

const __dirname = path.resolve();

dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/products', productRoutes);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'frontend/dist')));
    app.get("*", (req,res)=> {
        res.sendFile(path.join(__dirname, 'frontend, dist, index.html'));
    })
}

const PORT = process.env.PORT || 5001;


app.listen(PORT, () => {
    connectDB();
    console.log(`Backend Server started on port ${PORT}`);
})