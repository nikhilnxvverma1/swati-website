// Example model


module.exports = (sequelize, DataTypes) => {

	const CaseStudy = sequelize.define('CaseStudy', {
		name:DataTypes.TEXT,
		externalPortfolioUrl:DataTypes.STRING,
		isCaseStudy:DataTypes.BOOLEAN,
		ongoing:DataTypes.BOOLEAN,
		pageName:DataTypes.STRING,// this is the handlebars page/file name for this case study
		previewImage:DataTypes.STRING,
		previewCaption:DataTypes.TEXT, // case study, view on behance etc.
		previewOverview:DataTypes.TEXT, // slightly longer text describing project
		heroImage:DataTypes.STRING,
		startDate: DataTypes.DATE,
		status:DataTypes.STRING,
		desktopAvailability:DataTypes.BOOLEAN,
		tabletAvailability:DataTypes.BOOLEAN,
		mobileAvailability:DataTypes.BOOLEAN,
		projectUrl: DataTypes.STRING,
		facebookShare:DataTypes.STRING,
		twitterShare:DataTypes.STRING,
		linkedInShare:DataTypes.STRING,
		projectSummary:DataTypes.TEXT,
		deliverables:DataTypes.STRING,
		clientName:DataTypes.STRING,
		clientLinkedIn:DataTypes.STRING,
		challenge:DataTypes.TEXT,
		myRolesCommaSeperated:DataTypes.TEXT,
		inletImage:DataTypes.STRING,
		inletPersonaName:DataTypes.STRING,
		inletPersonaAge:DataTypes.INTEGER,
		inletPersonaProfession:DataTypes.STRING,
		inletPersonaAddress:DataTypes.STRING,
		inletQuote:DataTypes.TEXT,
		inletText:DataTypes.TEXT,
		inletGoalsCommaSeperated:DataTypes.TEXT,
		inletPainPointsCommaSeperated:DataTypes.TEXT,
		inletCaptions:DataTypes.TEXT,
		clientRemarksHeader:DataTypes.TEXT,
		clientRemarks:DataTypes.TEXT,
		clientPortfolioPic:DataTypes.STRING,
		clientTitleAndPosition:DataTypes.STRING,
	}, {
	  classMethods: {
		associate: (models) => {
		  // example on how to add relations
		  // CaseStudy.hasMany(models.Comments);
		}
	  }
	});
  
	return CaseStudy;
  };
  
  