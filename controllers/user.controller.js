import express from 'express';

export const dashboard = (req, res) => {
    res.render('account-dashboard');
};

export const addresses = (req, res) => {
    res.render('account-addresses');
};

export const edit_address = (req, res) => {
    res.render('account-edit-address');
};

export const login = (req, res) => {
    res.render('account-login');
};

export const order_details = (req, res) => {
    res.render('account-order-details');
};

export const orders = (req, res) => {
    res.render('account-orders');
};

export const password = (req, res) => {
    res.render('account-password');
};

export const profile = (req, res) => {
    res.render('account-profile');
};

export const track_order = (req, res) => {
    res.render('track-order');
};

export const order_success = (req, res) => {
    res.render('order-success');
};