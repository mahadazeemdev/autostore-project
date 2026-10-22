import express from 'express';
import ejs from 'ejs';
import expressLayouts from 'express-ejs-layouts';
import frontendRoutes from './routes/frontend.routes.js';
const app = express();

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
app.listen(3000, () => {
    console.log(`Server started port on 3000.`);
});