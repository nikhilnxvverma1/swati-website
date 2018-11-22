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

router.get('/case-study', (req, res, next) => {

	db.CaseStudy.findAll(
		{
			order:["startDate"]
		}
	).then((caseStudies) => {

		// look for the case study itself and the case studies previous and next to it
		var previous = null;
		var next = null;
		var thisCaseStudy = null;
		for(let i=0;i<caseStudies.length;i++){

			if(caseStudies[i].id==req.query.id){
				thisCaseStudy = caseStudies[i];
				if(i<caseStudies.length-1){
					next = caseStudies[i+1];
				}
				break;
			}

			previous = caseStudies[i];
		}

		// render the case study page
		res.render('case-study', {
			previous:previous,
			caseStudy:thisCaseStudy,
			next:next,
			activeLink:getActiveLinkOn('work'),//case study comes from work
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