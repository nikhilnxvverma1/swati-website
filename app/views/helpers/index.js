var i18n=require('i18n');
var hbs = require('handlebars');

module.exports = function() {
	
	var _helpers = {};
	
	// standard hbs equality check, pass in two values from template
	// Usage
	// {{#ifeq keyToCheck data.myKey}} [requires an else blockin template regardless]
	_helpers.ifeq = function(a, b, options) {
		console.log("a :"+a+" b: "+b);
		if (a == b) {
			console.log("equal");
			return options.fn(this);
		} else {
			console.log("unequal");
			return options.inverse(this);
		}
	};

	// converts a comma separated string value into a chunk of html <li> list elements
	// Usage
	// {{listCSV csv}} 
	_helpers.listCSV = function (csv){
		const array = arrayFrom(csv);
		var list = '';
		for(var i = 0;i<array.length;i++){
			list+= '<li>' + array[i] + '</li>';
		}
		return new hbs.SafeString(list);
	}

	// converts a comma separated string value into an iteratable array list
	// Usage
	// {{arrayFrom csv}} 
	_helpers.arrayFrom = function (csv){
		return arrayFrom(csv);
	}

	// returns true if a number is even, false otherwise
	// Usage
	// {{isEven n}} 
	_helpers.isEven = function(n){
		return n%2==0
	}

	// converts a milliseconds value into <MON YYYY> format for example Nov 2017
	// Usage
	// {{monyyyy date}}
	_helpers.monyyyy = function(milliseconds){
		const date = new Date(milliseconds);
		const monthNumber = date.getMonth();
		const monthName = monthNameFrom(monthNumber);
		const year = date.getFullYear();
		return (monthName + ' ' + year);
	}
	
	//i18n internationalization
	//register hbs helpers in res.locals' context which provides this.locale
	//Usage
	//{{__ "key"}}
	_helpers.__ = function () {
		return i18n.__.apply(this, arguments);
	}
	
	//i18n internationalization
	//Usage
	//{{__n "key 3"}}
	_helpers.__n = function () {
		return i18n.__n.apply(this, arguments);
	}
	
	return _helpers;
};


function arrayFrom(csv){
	const delemitedValues = csv.split(",");
	for(var i =0;i<delemitedValues.length;i++){
		delemitedValues[i] = delemitedValues[i].trim();
	}
	return delemitedValues;
}

function monthNameFrom(monthNumber){
	switch(monthNumber){
		case 0: return "Jan";
		case 1: return "Feb";
		case 2: return "Mar";
		case 3: return "Apr";
		case 4: return "May";
		case 5: return "Jun";
		case 6: return "Jul";
		case 7: return "Aug";
		case 8: return "Sep";
		case 9: return "Oct";
		case 10: return "Nov";
		case 11: return "Dec";
	}
	return "UNKOWN MONTH";
}