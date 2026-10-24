import express from 'express';

export const home_page = (req, res) => {
    res.render('index');
};

export const shop_list = (req, res) => {
    res.render('shop');
};

export const product_page = (req, res) => {
    res.render('product');
};