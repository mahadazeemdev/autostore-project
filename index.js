import express from 'express';
import ejs from 'ejs';
import frontendRoutes from './routes/frontend.routes.js';
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View Engine
app.set('view engine', 'ejs');

// Routes
app.use('/', frontendRoutes);

// Start Server
app.listen(3000, () => {
    console.log(`Server started port on 3000.`);
})