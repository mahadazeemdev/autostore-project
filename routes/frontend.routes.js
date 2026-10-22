import express from 'express';
import * as user from '../controllers/user.controller.js';
const router = express.Router();

// Home Page Route
router.get('/', (req, res) => {
    res.render('index');
});

// User Routes
router.get('/dashboard', user.dashboard);
router.get('/adresses', user.addresses);
router.get('/edit-address', user.edit_address);
router.get('/login', user.login);
router.get('/order-details', user.order_details);
router.get('/orders', user.orders);
router.get('/password', user.password);
router.get('/profile', user.profile);
router.get('/track-order', user.track_order);
router.get('/order-success', user.order_success);

// Blog Routes
router.get('/blog', (req, res) => {
    res.render('blog');
});

router.get('/post', (req, res) => {
    res.render('blog-post');
});

// About Us Route
router.get('/about-us', (req, res) => {
    res.render('about-us');
});

// Contact Us Route
router.get('/contact-us', (req, res) => {
    res.render('contact-us');
});

// Error Pages
router.get('/404', (req, res) => {
    res.render('404');
});

// Cart Routes
router.get('/cart', (req, res) => {
    res.render('cart');
});

router.get('/cart-empty', (req, res) => {
    res.render('cart-empty');
});

router.get('/checkout', (req, res) => {
    res.render('checkout');
});

router.get('/wishlist', (req, res) => {
    res.render('wishlist');
});

// Comparison Route
router.get('/compare', (req, res) => {
    res.render('compare');
});

// FAQ Route
router.get('/faq', (req, res) => {
    res.render('faq');
});

// Shop Routes
router.get('/shop', (req, res) => {
    res.render('shop');
});

router.get('/product', (req, res) => {
    res.render('product');
});

// Terms and Conditions Route
router.get('/terms-and-conditions', (req, res) => {
    res.render('terms-and-conditions');
});

export default router;