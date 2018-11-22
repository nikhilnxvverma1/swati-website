// Example model


module.exports = (sequelize, DataTypes) => {

	const CaseStudy = sequelize.define('CaseStudy', {
		name:DataTypes.TEXT,
		url:DataTypes.STRING,
		previewImage:DataTypes.STRING,
		previewCaption:DataTypes.TEXT, // case study, view on behance etc.
		tagText:DataTypes.STRING, //eg. 'ongoing', can be null for empty
		heroImage:DataTypes.STRING,
		startDate: DataTypes.DATE,
		status:DataTypes.STRING,
		desktopAvailability:DataTypes.STRING.BINARY,
		tabletAvailability:DataTypes.STRING.BINARY,
		mobileAvailability:DataTypes.STRING.BINARY,
		projectUrl: DataTypes.STRING,
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
		inletQuote:DataTypes.TEXT,
		inletText:DataTypes.TEXT,
		inletGoalsCommaSeperated:DataTypes.TEXT,
		inletPainPointsCommaSeperated:DataTypes.TEXT,
		inletCaption:DataTypes.STRING(1000),
		stage1Subheader3:DataTypes.STRING,
		stage1Subheader3Text:DataTypes.TEXT,
		stage1ClosingImage:DataTypes.STRING,
		stage1ClosingImageCaption:DataTypes.STRING(1000),
		stage2Header:DataTypes.TEXT,
		stage2Text:DataTypes.TEXT,
		stage2Image:DataTypes.STRING,
		stage2ImageCaptions:DataTypes.STRING(1000),
		stage3Header:DataTypes.TEXT,
		stage3Text:DataTypes.TEXT,
		stage3Subheader1:DataTypes.TEXT,
		stage3Subheader1Text:DataTypes.TEXT,
		stage3MoodboardImage1:DataTypes.STRING,
		stage3MoodboardImage2:DataTypes.STRING,
		stage3MoodboardImage3:DataTypes.STRING,
		stage3MoodboardImage4:DataTypes.STRING,
		stage3MoodboardImage5:DataTypes.STRING,
		stage3MoodboardCaptions:DataTypes.STRING(1000),
		stage3Subheader2:DataTypes.TEXT,
		stage3Subheader2Text:DataTypes.TEXT,
		stage3Subheader3:DataTypes.TEXT,
		stage3Subheader3Text:DataTypes.TEXT,
		stage3ClosingImage:DataTypes.STRING,
		stage3ClosingImageCaptions:DataTypes.STRING(1000),
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
  
  