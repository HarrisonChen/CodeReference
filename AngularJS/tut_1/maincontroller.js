app.controller('MainController', function($scope){
	$scope.searchFilter = null;
	$scope.selectedPerson = 0;
	$scope.selectedGenre = null;
	$scope.people = [
		{
			id: 0,
			name: 'Harrison',
			music: [
				'Rock',
				'Hip-Hop',
				'House'
				]
		},
		{
			id: 1,
			name: 'Manon Barbier',
			music: [
				'Jazz',
				'Country',
				'Dubstep'
			]
		},
		{
			id: 2,
			name: 'Toshiro Sugihara',
			music: [
				'Rock',
				'Metal',
				'Heavy Metal',
				'Screamo'
			]
		},
		{
			id: 3,
			name: 'Baby-D',
			music: [
				'Pop',
				'Kpop',
				'Jpop'
				]
		}
	];
});