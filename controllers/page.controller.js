import express from 'express';

export const comparison_page = (req, res) => {
    res.render('compare');
};

export const about_page = (req, res) => {
    res.render('about-us');
};

export const contact_page = (req, res) => {
    res.render('contact-us');
};

export const faq_page = (req, res) => {
    res.render('faq');
};

export const terms_conditions_page = (req, res) => {
    res.render('terms-and-conditions');
};