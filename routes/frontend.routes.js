import express from 'express';
import * as shop from '../controllers/shop.controller.js';
import * as user from '../controllers/user.controller.js';
import * as blog from '../controllers/blog.controller.js';
import * as page from '../controllers/page.controller.js';
import * as cart from '../controllers/cart.controller.js';
const router = express.Router();

// Shop Routes
router.get('/', shop.home_page);
router.get('/shop', shop.shop_list);
router.get('/product', shop.product_page);

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
router.get('/blog', blog.blog_page);
router.get('/post', blog.blog_post);

// Cart Routes
router.get('/cart', cart.cart_page);
router.get('/cart-empty', cart.empty_cart);
router.get('/checkout', cart.checkout);
router.get('/wishlist', cart.wishlist);

// Othe Pages Route
router.get('/compare', page.comparison_page);
router.get('/about-us', page.about_page);
router.get('/contact-us', page.contact_page);
router.get('/faq', page.faq_page);
router.get('/terms-and-conditions', page.terms_conditions_page);

// Error Pages
router.get('/404', (req, res) => {
    res.render('404');
});

export default router;