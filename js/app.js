function MyViewModel() {
	var self = this;
	
	self.movies = ko.observableArray();
	self.searchTerm = ko.observable();
	
	self.search = function () {
		$.getJSON("http://www.omdbapi.com/?s=" + self.searchTerm() + "&type=movie", function (data) {

			ko.mapping.fromJS(data.Search, {}, self.movies)
		});
	};
	
	self.displayDetails = ko.observable();
	self.searchDisplay = function(movie) {
		$.getJSON("http://www.omdbapi.com/?i=" + self.imdbID, function(data){
			ko.mapping.fromJS(data.Search, {}, self.displayDetails)
		});
	};
	/* self.imdbID = ko.observable();
	self.displayDetails = ko.observable();
	
	self.searchDisplay = function() {
		
	}; 
	*/
};
ko.applyBindings(new MyViewModel());