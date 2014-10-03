var app = angular.module("app", []);

app.directive("relocate", function(){
	return{
		restrict: "A",
		controller: function($scope){

		},
		link: function(scope, element){
			var canvas = element[0];

			element.css({
				left: "0px",
				top: "0px"
			});

			element.bind("click", function(){
				var leftMargin = Math.floor(Math.random() * window.innerWidth);
				var topMargin = Math.floor(Math.random() * window.innerHeight);

				if(leftMargin + canvas.width > window.innerWidth){
					leftMargin = window.innerWidth - canvas.width;
				}
				if(topMargin + canvas.height > window.innerHeight){
					topMargin = window.innerHeight - canvas.height;
				}

				element.css({
					left: leftMargin.toString() + "px",
					top: topMargin.toString() + "px"
				});
			});
		}
	}
});

app.directive("changeColor", function(){
	return{
		restrict: "A",
		controller: function($scope){

		},
		link: function(scope, element){
			var canvas = element[0];

			element.bind("click", function(){
				var prevColor = canvas.style.backgroundColor;

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

				element.css({
					backgroundColor: newColor
				});
			});
		}
	}
});

app.directive("draggable", ['$document', function($document){
	return{
		restrict: "A",
		controller: function($scope){

		},
		link: function(scope, element){
			var startX = 0, startY = 0, left = 0, top = 0;
			element.on("mousedown", function(event){
				event.preventDefault();
				startX = event.pageX - left;
        startY = event.pageY - top;
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
			});

			function mousemove(event) {
        top = event.pageY - startY;
        left = event.pageX - startX;
        element.css({
          left:  left + 'px',
          top: top + 'px'
        });
      }

      function mouseup() {
        $document.off('mousemove', mousemove);
        $document.off('mouseup', mouseup);
      }
		}
	}
}]);