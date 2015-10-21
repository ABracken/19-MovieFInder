function MyViewModel() {
	var self = this;
	
	self.movies = ko.observableArray();
	self.searchTerm = ko.observable();
	
	self.search = function () {
		$.getJSON("http://www.omdbapi.com/?s=" + self.searchTerm() + "&type=movie", function (data) {

			ko.mapping.fromJS(data.Search, {}, self.movies)
		});
	};
	
	self.displayDetails = {
		Title: ko.observable(),
		Year: ko.observable(),
		Rated: ko.observable(),
		Poster: ko.observable(),
		Released: ko.observable(),
		Runtime: ko.observable(),
		Genre: ko.observable(),
		Director: ko.observable(),
		Writer: ko.observable(),
		Actors: ko.observable(),
		Plot: ko.observable(),
		Language: ko.observable(),
		Country: ko.observable(),
		Awards: ko.observable(),
		imdbRating: ko.observable(),	
	};
	self.searchDisplay = function(movie) {
		$.getJSON("http://www.omdbapi.com/?i=" + movie.imdbID(), function(data){
			ko.mapping.fromJS(data, {}, self.displayDetails)
		});
	};

};
ko.applyBindings(new MyViewModel());
