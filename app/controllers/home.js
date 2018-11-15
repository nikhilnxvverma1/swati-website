const express = require('express');
const router = express.Router();
const db = require('../models');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {
  db.Article.findAll().then((articles) => {
    res.render('index', {
		activeLink:getActiveLinkOn('work'),
		layout:"header-body-footer"
    });
  });
});

router.get('/about', (req, res, next) => {
	db.Article.findAll().then((articles) => {
	  res.render('about', {
		activeLink:getActiveLinkOn('about'),
		layout:"header-body-footer"
	  });
	});
});

function getActiveLinkOn(link){
	const activeLink={
		work:false,
		about:false,
		blog:false,
	}
	switch(link){
		case "work":activeLink.work=true;
		break;
		case "about":activeLink.about=true;
		break;
		case "blog":activeLink.blog=true;
		break;
	}
	return activeLink;
}