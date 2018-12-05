const express = require('express');
const router = express.Router();
const db = require('../models');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {
	db.CaseStudy.findAll(
		{
			order:["id"]
		}
	).then((caseStudies) => {
		res.render('index', {
			caseStudies:caseStudies,
			activeLink:getActiveLinkOn('work'),
			layout:"body-footer"
		});
	});
});

router.get('/about', (req, res, next) => {
	res.render('about', {
		activeLink:getActiveLinkOn('about'),
		layout:"header-body-footer"
	});
});

router.get('/case-study', (req, res, next) => {

	db.CaseStudy.findAll(
		{
			order:["id"]
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
		res.render(thisCaseStudy.name, {
			previous:previous,
			caseStudy:thisCaseStudy,
			roles:arrayFrom(thisCaseStudy.myRolesCommaSeperated),
			goals:arrayFrom(thisCaseStudy.inletGoalsCommaSeperated),
			painPoints:arrayFrom(thisCaseStudy.inletPainPointsCommaSeperated),
			next:next,
			activeLink:getActiveLinkOn('work'),//case study comes from work
			layout:"case-study"
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

function arrayFrom(csv){
	const delemitedValues = csv.split(",");
	for(var i =0;i<delemitedValues.length;i++){
		delemitedValues[i] = delemitedValues[i].trim();
	}
	return delemitedValues;
}