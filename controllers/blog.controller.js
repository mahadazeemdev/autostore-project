import express from 'express';

export const blog_page = (req, res) => {
    res.render('blog');
};

export const blog_post = (req, res) => {
    res.render('blog-post');
};