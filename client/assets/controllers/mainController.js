myApp.controller('mainController', function($location) {

	var self = this;

	this.getClass = function(path){
		return ($location.hash() === path) ? 'active' : 'inactive';
	}
	this.getLiClass = function(path){
		return ($location.hash() === path) ? 'activeLi' : 'inactiveLi';
	}
	this.getPortfolioClass = function(){
		console.log($location.hash())
		return (['pythonpage','rubypage','meanpage'].indexOf($location.hash() ) >=0) ? 'active' : 'inactive';
	}
	this.getBackgroundClass = function() {
		var pathjson = { 
			"/python" : 'pythonPage',
			"/ruby"		: 'rubyPage',
			"/mean"		: 'meanPage',
			"/cv"			: 'cvPage',
			"/icv"		: 'icvPage',
			"/contact": 'contactPage',
			'/'				: "mainPage"
		}
		return(pathjson[$location.path()]);
	}


})