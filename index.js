import express from 'express';
import ejs from 'ejs';
import expressLayouts from 'express-ejs-layouts';
import frontendRoutes from './routes/frontend.routes.js';
import db from "./config/database.js";
import User from './models/user.model.js';
import dotenv from 'dotenv';
const app = express();
dotenv.config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// View Engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Routes
app.use('/', frontendRoutes);

// Start Server
// const port = process.env.DB_PORT || 3000;
// app.listen(port, () => {
//     console.log(`Server started on port ${port}`);
// })

const PORT = 3000;

User.createTable()
  .then(() => {
    console.log('Database connected, users table ready');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('DB connection failed:', err.message);
  });