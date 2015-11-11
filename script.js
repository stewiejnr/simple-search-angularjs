var app = angular.module("checkinz", []);

app.filter('searchFor', function() {
	
	return function(arg, queryString) {
		
		if(!queryString) {
			return arg;
		}
	
		var result = [];
	
		queryString = queryString.toLowerCase();
		
		angular.forEach(arg, function(item) {
			if(item.title.toLowerCase().indexOf(queryString) !== -1) {
				result.push(item);
			}
		});
	
		return result;
	};
	
});

function GuestSearchController($scope) {
	$scope.items = [
		{
			resid: 1,
			title: 'Theodore Mathews',
			image: 'http://www.tutorialspoint.com/android/images/android-mini-logo.jpg',
			nguest: 1,
			status: 1
			
		},
		{
			resid: 2,
			title: 'Lenard Brown ',
			image: 'http://www.tutorialspoint.com/angularjs/images/angularjs-mini-logo.jpg',
			nguest: 1,
			status: 2
		},
		{
			resid: 3,
			title: 'Carl Blake',
			image: 'http://www.tutorialspoint.com/html5/images/html5-mini-logo.jpg',
			nguest: 1,
			status: 0
		},
		{
			resid: 4,
			title: 'Angela Brown',
			image: 'http://www.tutorialspoint.com/css/images/css-mini-logo.jpg',
			nguest: 1,
			status: 0
		},
		{
			resid: 8,
			title: 'Lenval Thomas',
			image: 'http://www.tutorialspoint.com/java/images/java-mini-logo.jpg',
			nguest: 1,
			status: 1
		},
		{
			resid: 9,
			title: 'Martha Thox',
			image: 'http://www.tutorialspoint.com/joomla/images/joomla-mini-logo.jpg',
			nguest: 1,
			status: 0
		},
		{
			resid: 10,
			title: 'Semoy Cather',
			image: 'http://www.tutorialspoint.com/html/images/html-mini-logo.jpg',
			nguest: 1,
			status: 2
		}
	];
	
	
} 

