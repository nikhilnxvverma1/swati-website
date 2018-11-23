// Example model


module.exports = (sequelize, DataTypes) => {

	const CaseStudy = sequelize.define('CaseStudy', {
		name:DataTypes.TEXT,
		externalPortfolioUrl:DataTypes.STRING,
		previewImage:DataTypes.STRING,
		previewCaption:DataTypes.TEXT, // case study, view on behance etc.
		tagText:DataTypes.STRING, //eg. 'ongoing', can be null for empty
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
		openingHeader:DataTypes.TEXT,
		openingSubText:DataTypes.TEXT,
		introduction:DataTypes.TEXT,
		challenge:DataTypes.TEXT,
		myRolesCommaSeperated:DataTypes.TEXT,
		stage1Header:DataTypes.TEXT,
		stage1Text:DataTypes.TEXT,
		stage1Subheader1:DataTypes.TEXT,
		stage1Subheader1Text:DataTypes.TEXT,
		stage1Subheader2:DataTypes.TEXT,
		stage1Subheader2Text:DataTypes.TEXT,
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
		stage1Subheader3:DataTypes.STRING,
		stage1Subheader3Text:DataTypes.TEXT,
		stage1ClosingImage:DataTypes.STRING,
		stage1ClosingImageCaptions:DataTypes.TEXT,
		stage2Header:DataTypes.TEXT,
		stage2Text:DataTypes.TEXT,
		stage2Image:DataTypes.STRING,
		stage2ImageCaptions:DataTypes.TEXT,
		stage2Subheader1:DataTypes.TEXT,
		stage2Subheader1Text:DataTypes.TEXT,
		stage2Subheader2:DataTypes.TEXT,
		stage2Subheader2Text:DataTypes.TEXT,
		stage2Subheader3:DataTypes.TEXT,
		stage2Subheader3Text:DataTypes.TEXT,
		stage3Header:DataTypes.TEXT,
		stage3Text:DataTypes.TEXT,
		stage3Subheader1:DataTypes.TEXT,
		stage3Subheader1Text:DataTypes.TEXT,
		stage3MoodboardImage1:DataTypes.STRING,
		stage3MoodboardImage2:DataTypes.STRING,
		stage3MoodboardImage3:DataTypes.STRING,
		stage3MoodboardImage4:DataTypes.STRING,
		stage3MoodboardImage5:DataTypes.STRING,
		stage3MoodboardCaptions:DataTypes.TEXT,
		stage3Subheader2:DataTypes.TEXT,
		stage3Subheader2Text:DataTypes.TEXT,
		stage3Subheader3:DataTypes.TEXT,
		stage3Subheader3Text:DataTypes.TEXT,
		stage3ClosingImage:DataTypes.STRING,
		stage3ClosingImageCaptions:DataTypes.TEXT,
		clientRemarksHeader:DataTypes.TEXT,
		clientRemarks:DataTypes.TEXT,
		clientPortfolioPic:DataTypes.STRING,
		clientTitleAndPosition:DataTypes.STRING,
		conclusion:DataTypes.TEXT,
		conclusionText:DataTypes.TEXT

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
  
  