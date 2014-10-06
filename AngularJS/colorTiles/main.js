var app = angular.module("app", []);

app.controller('platformCtrl', ['$scope', function($scope){
	$scope.tiles = [];

	$scope.unfold = function(){
		var tags = [];

		for(var i = 0; i < 15; ++i){
			var row = [];
			for(var j = 0; j < 15; ++j){
				row.push(0);
			}
			tags.push(row);
		}

		createTiles(0, 0, 15, 15, tags)
	}

	function createTiles(top, left, hSpan, vSpan, tags){
		if(hSpan <= 0 || vSpan <= 0 || tags[hSpan - 1][vSpan - 1] == 1){
			return;
		}

		tags[hSpan - 1][vSpan - 1] = 1;

		$scope.tiles.push({top: top.toString() + "px", left: left.toString() + "px", color: randomColor()});

		// var html = "<tile top-margin='" + top + "px' left-margin='" + 
		// 	left + "px' color='" + randomColor() + "'></tile>";

		// var newTile = $compile(html)($scope);
		// $element.parent().append(newTile);

		createTiles(top + 50, left, hSpan, vSpan - 1, tags);
		createTiles(top, left + 50, hSpan - 1, vSpan, tags);
		createTiles(top + 50, left + 50, hSpan - 1, vSpan - 1, tags);
	}

	function randomColor(){
		var r = Math.floor(Math.random() * 8);
		var newColor = "";

		switch(r){
			case 0:
				newColor = "#000000";
				break;
			case 1:
				newColor = "#FF0000";
				break;
			case 2:
				newColor = "#00FF00";
				break;
			case 3:
				newColor = "#0000FF";
				break;
			case 4:
				newColor = "#FFFF00";
				break;
			case 5:
				newColor = "#00FFFF";
				break;
			case 6:
				newColor = "#FF00FF";
				break;
			case 7:
				newColor = "#C0C0C0";
				break;
		}

		return newColor;
	}
}]);

app.directive('tile', ['$compile', function($compile){
	return{
		restrict: 'AE',
		templateUrl: 'tile.html',
		scope: {
			leftMargin: '@leftMargin',
			topMargin: '@topMargin',
			color: '@color'
		},
		controller: function($scope, $element){
			
		},
		link: function(scope, element, attrs){

		}
	}
}]);