// Example model


module.exports = (sequelize, DataTypes) => {

	const CaseStudy = sequelize.define('CaseStudy', {
		name:DataTypes.STRING,
		startDate: DataTypes.STRING,
		status:DataTypes.STRING,
		mainUrl: DataTypes.STRING,
		projectSummary:DataTypes.STRING,
		deliverables:DataTypes.STRING,
		clientName:DataTypes.STRING,
		clientLinkedIn:DataTypes.STRING,
		openingHeader:DataTypes.STRING,
		openingSubText:DataTypes.TEXT,
		introduction:DataTypes.STRING,
		challenge:DataTypes.TEXT,
		myRolesCommaSeperated:DataTypes.STRING,
		stageOneHeader:DataTypes.STRING,
		stageOneText:DataTypes.TEXT,

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
  
  