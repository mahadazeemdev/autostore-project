import express from 'express';
import { getData } from 'country-list';
import User from '../models/user.model.js';
import bcrypt, { hashSync } from 'bcryptjs';

export const dashboard = (req, res) => {
    res.render('account-dashboard');
};

export const addresses = (req, res) => {
    res.render('account-addresses');
};

export const edit_address = (req, res) => {
    res.render('account-edit-address');
};

export const register_page = (req, res) => {
    const countries = getData().filter(
        country => country.code === "PK"
    );
    res.render('account-register', { countries });
}

export const register = async (req, res) => {
  try {
    const { first_name, last_name, email, phone, password } = req.body;

    // if (!name || !email || !password) {
    //   return res.status(400).json({ message: 'All fields are required' });
    // }

    // const existing = await User.findByEmail(email);
    // if (existing) {
    //   return res.status(409).json({ message: 'Email already registered' });
    // }

    const hashedPassword = await bcrypt.hash(password, 10);
    const id = await User.create({ first_name, last_name, email, phone, password: hashedPassword });

    res.status(201).json({ message: 'User registered', userId: id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

export const login = (req, res) => {
    res.render('account-login');
};

export const order_details = (req, res) => {
    res.render('account-order-details');
};

export const orders_history = (req, res) => {
    res.render('account-orders-history');
};

export const password = (req, res) => {
    res.render('account-password');
};

export const edit_profile = (req, res) => {
    res.render('edit-profile');
};

export const track_order = (req, res) => {
    res.render('track-order');
};

export const order_success = (req, res) => {
    res.render('order-success');
};

export const logout = (req, res) => {
    res.render('account-login');
};