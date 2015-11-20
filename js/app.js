var app = angular.module('app', []);

app.controller('ctrl', function ($scope, $http){
	
	$scope.form = {};
	$scope.customers = [];
	
	var reload = function (){
		$http.get('http://localhost:8080/customer').then(function (res){
			console.log(res);
			$scope.customers = res.data;
		});
	}
	
	$scope.saveCustomer = function (){
		var data = angular.copy($scope.form);
		$http.post('http://localhost:8080/customer', data).then(function (res){
			alert("Data pelanggan berhasil disimpan");
			reload();
			$scope.form = {};
		});
	}
	
	reload();
	
});