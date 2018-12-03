var i18n=require('i18n');
var hbs = require('handlebars');

module.exports = function() {
	
	var _helpers = {};
	
	// standard hbs equality check, pass in two values from template
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
	// {{#listCSV csv}} 
	_helpers.listCSV = function (csv){
		const array = arrayFrom(csv);
		var list = '';
		for(var i = 0;i<array.length;i++){
			list+= '<li>' + array[i] + '</li>';
		}
		return new hbs.SafeString(list);
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