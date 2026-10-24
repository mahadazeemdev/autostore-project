import express from 'express';

export const cart_page = (req, res) => {
    res.render('cart');
};

export const empty_cart = (req, res) => {
    res.render('cart-empty');
};

export const checkout = (req, res) => {
    res.render('checkout');
};

export const wishlist = (req, res) => {
    res.render('wishlist');
};