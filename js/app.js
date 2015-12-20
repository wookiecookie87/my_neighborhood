
var searchList = [];

var locations = [
	{
		name : "Home",
		pos : {
			lat : 37.564359,
			lng : 127.034917
		}
	},
	{
		name : "Work",
		pos : {
			lat : 37.583654,
			lng : 127.003655
		}
	},
	{
		name : "Gym",
		pos : {
			lat : 37.582544,
			lng : 127.002459
		}
	},
	{
		name : "Lunch place",
		pos : {
			lat : 37.580489,
			lng : 127.004239
		}	
	},
	{
		name : "Changdeogung Palace",
		pos : {
			lat : 37.579151,
			lng : 126.990947
		}	
	},
	{
		name : "Library",
		pos : {
			lat : 37.580958,
			lng : 126.983066
		}	
	},
	{
		name : "Gyeongbokgung Palace",
		pos : {
			lat : 37.577952,
			lng : 126.976939
		}	
	},
	{
		name : "The Blue House",
		pos : {
			lat : 37.584856,
			lng : 126.975995
		}	
	},
]

var model = function(data){
	this.locationName = ko.observable(data.name);
	this.pos = ko.observable(data.pos);
	this.lat = ko.observable(data.pos.lat);
	this.lng = ko.observable(data.pos.lng);
}

var viewModel = function(){
	var self = this;
	var list = $(".search-list ul");

	var mapCanvas = document.getElementById('map');

    var mapOptions = {
      center: new google.maps.LatLng(37.5500, 126.9667),
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);



	this.searchText = ko.observable("");
	this.locationList = ko.observableArray([]);

	locations.forEach(function(location){
		var Locations = new model(location);
		var marker = new google.maps.Marker({
			position : Locations.pos(),
			map : map, 
			title : Locations.locationName()
		})
		self.locationList().push(Locations);
	});




	this.filterList = function(){
		var list = $(".search-list ul");
		var filter = self.searchText();

		var List = $(list).find("li:contains(" + filter + ")");
		console.dir(List[1].innerText);

		$(list).find("li:not(:contains(" + filter + "))").hide();
		$(list).find("li:contains(" + filter + ")").show();

	}

}


ko.applyBindings(new viewModel());

