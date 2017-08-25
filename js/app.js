var app = angular.module('ERSApp', ['ngRoute']);

app.config(["$routeProvider",
function ($routeProvider) {
	$routeProvider.
	when('/Home', {
		templateUrl: 'home.html'
	}).
	when('/Results', {
		templateUrl: 'result.html'
	}).
	when('/Confirmation', {
		templateUrl: 'confirmation.html'
	}).
	otherwise({
		templateUrl: 'home.html'
	});
}]);
//=========================Main App Controllers
	var aminity_p =  [
		{
			"type":"Bed Type",
			"img":"bed.jpg",
			"id":1,
			"options":[
				{
					"option":"King Size",
					"check":false,
					"price":10
				},
				{
					"option":"Queen Size",
					"check":true,
					"price":5
				}
			]
		},
		{
			"type":"View Type",
			"img":"view.png",
			"id":2,
			"options":[
				{
					"option":"Pool",
					"check":false,
					"price":0
				},
				{
					"option":"Ocean",
					"check":false,
					"price":0
				},
				{
					"option":"Standard",
					"check":true,
					"price":0
				},
			]
		},
		{
			"type":"Floor Type",
			"img":"floor.jpg",
			"id":3,
			"options":[
				{
					"option":"High",
					"check":false,
					"price":10
				},
				{
					"option":"Low",
					"check":true,
					"price":0
				}
			]
		}
	];
		var aminity_p1 =  [
		{
			"type":"Bed Type",
			"img":"bed.jpg",
			"id":1,
			"options":[
				{
					"option":"King Size",
					"check":false,
					"price":10
				},
				{
					"option":"Queen Size",
					"check":true,
					"price":5
				}
			]
		},
		{
			"type":"View Type",
			"img":"view.png",
			"id":2,
			"options":[
				{
					"option":"Pool",
					"check":false,
					"price":0
				},
				{
					"option":"Ocean",
					"check":false,
					"price":0
				},
				{
					"option":"Standard",
					"check":true,
					"price":0
				},
			]
		},
		{
			"type":"Floor Type",
			"img":"floor.jpg",
			"id":3,
			"options":[
				{
					"option":"High",
					"check":false,
					"price":10
				},
				{
					"option":"Low",
					"check":true,
					"price":0
				}
			]
		}
	];
		var aminity_p2 =  [
		{
			"type":"Bed Type",
			"img":"bed.jpg",
			"id":1,
			"options":[
				{
					"option":"King Size",
					"check":false,
					"price":10
				},
				{
					"option":"Queen Size",
					"check":true,
					"price":5
				}
			]
		},
		{
			"type":"View Type",
			"img":"view.png",
			"id":2,
			"options":[
				{
					"option":"Pool",
					"check":false,
					"price":0
				},
				{
					"option":"Ocean",
					"check":false,
					"price":0
				},
				{
					"option":"Standard",
					"check":true,
					"price":0
				},
			]
		},
		{
			"type":"Floor Type",
			"img":"floor.jpg",
			"id":3,
			"options":[
				{
					"option":"High",
					"check":false,
					"price":10
				},
				{
					"option":"Low",
					"check":true,
					"price":0
				}
			]
		}
	];
	var aminity =  [
		{
			"type":"Bed Type",
			"img":"bed.jpg",
			"id":1,
			"options":[
				{
					"option":"King Size",
					"check":false,
					"price":10
				},
				{
					"option":"Queen Size",
					"check":true,
					"price":5
				}
			]
		},
		{
			"type":"View Type",
			"img":"view.png",
			"id":2,
			"options":[
				{
					"option":"Pool",
					"check":false,
					"price":10
				},
				{
					"option":"Ocean",
					"check":false,
					"price":5
				},
				{
					"option":"Standard",
					"check":true,
					"price":0
				},
			]
		},
		{
			"type":"Floor Type",
			"img":"floor.jpg",
			"id":3,
			"options":[
				{
					"option":"High",
					"check":false,
					"price":10
				},
				{
					"option":"Low",
					"check":true,
					"price":0
				}
			]
		}
	];
		var aminity1 =  [
		{
			"type":"Bed Type",
			"img":"bed.jpg",
			"id":1,
			"options":[
				{
					"option":"King Size",
					"check":false,
					"price":10
				},
				{
					"option":"Queen Size",
					"check":true,
					"price":5
				}
			]
		},
		{
			"type":"View Type",
			"img":"view.png",
			"id":2,
			"options":[
				{
					"option":"Pool",
					"check":false,
					"price":10
				},
				{
					"option":"Ocean",
					"check":false,
					"price":5
				},
				{
					"option":"Standard",
					"check":true,
					"price":0
				},
			]
		},
		{
			"type":"Floor Type",
			"img":"floor.jpg",
			"id":3,
			"options":[
				{
					"option":"High",
					"check":false,
					"price":10
				},
				{
					"option":"Low",
					"check":true,
					"price":0
				}
			]
		}
	];
		var aminity2 =  [
		{
			"type":"Bed Type",
			"img":"bed.jpg",
			"id":1,
			"options":[
				{
					"option":"King Size",
					"check":false,
					"price":10
				},
				{
					"option":"Queen Size",
					"check":true,
					"price":5
				}
			]
		},
		{
			"type":"View Type",
			"img":"view.png",
			"id":2,
			"options":[
				{
					"option":"Pool",
					"check":false,
					"price":10
				},
				{
					"option":"Ocean",
					"check":false,
					"price":5
				},
				{
					"option":"Standard",
					"check":true,
					"price":0
				},
			]
		},
		{
			"type":"Floor Type",
			"img":"floor.jpg",
			"id":3,
			"options":[
				{
					"option":"High",
					"check":false,
					"price":10
				},
				{
					"option":"Low",
					"check":true,
					"price":0
				}
			]
		}
	];
app.controller('ersCtrl',function($http,$scope,$location){
	$scope.userData ="";
	//$scope.rewardNo = "";
	$scope.userName = "";
	$scope.userType = "";
	$scope.user={};
	$scope.perdayPrice_1 = 288.00;
	$scope.totalPrice_1 = 339.16;
	$scope.perdayPrice_2 = 320.00;
	$scope.totalPrice_2 = 350.16;
	$scope.perdayPrice_3 = 335.00;
	$scope.totalPrice_3 = 379.16;
	$scope.totalPrice = 339.16;
	$scope.selhotel = "";
	$scope.aminities_price1 = 5;
	$scope.aminities_price2 = 5;
	$scope.aminities_price3 = 5;
	//$scope.hotels = hotel;
	$scope.aminity = aminity;
	$scope.aminity1 = aminity1;
	$scope.aminity2 = aminity2;
	$scope.userLogin = function(){
		if($scope.user.rewardNo == "11001100"){
			$scope.userData ="Loged In";
			$scope.userName = "Leanne Graham";
			$scope.userType = "Platinum";
			/*$scope.aminity = aminity_p;
			$scope.aminity1 = aminity_p1;
			$scope.aminity2 = aminity_p2;*/
			$scope.aminity = aminity;
			$scope.aminity1 = aminity1;
			$scope.aminity2 = aminity2;

		}else if($scope.user.rewardNo == "22002200"){
			$scope.userData ="Loged In";
			$scope.userName = "John Doe";
			$scope.userType = "Member";
			$scope.aminity = aminity;
			$scope.aminity1 = aminity1;
			$scope.aminity2 = aminity2;
		}else{
			$scope.userData ="";
			$scope.user.rewardNo = "";
			$scope.userName = "";
			$scope.userType = "";
		}
		$scope.getPriceDetails();
	}
//======= Availability ========================

//====================== Home Page==================@@@@
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	var dtom = dd + 1;
	$scope.searchOptions = {};
	if(dd<10) {
		dd = '0'+dd
	}

	if(mm<10) {
		mm = '0'+mm
	}

	today = mm + '/' + dd + '/' + yyyy;
	if(dtom<10) {
		dtom = '0'+dtom
	}
	var tomorrow = mm + '/' + dtom + '/' + yyyy;

	$scope.searchOptions.today = today;
	$scope.searchOptions.tomorrow = tomorrow;
	$scope.getSearchResult = function(){
		console.log($scope.searchOptions);
		 $location.path('/Results');
	}
	$scope.getConfirmation = function($event){
		var datas = $event.currentTarget;
		$scope.selhotel = datas.getAttribute('data-hname');
		$location.path('/Confirmation');
	}
	//console.log($scope.aminity[0].options.length);
	//===Data show hide
	$scope.getTypeDetails = function($event){
		var datas = $event.currentTarget;
		var id = datas.getAttribute('data-id');
		var hotel = datas.getAttribute('data-hotel');
		$('#hotel_'+hotel+'_'+id).slideToggle();
	}
	$scope.getOptionPrice = function($event,index){
		var datas = $event.currentTarget;
		var id = datas.getAttribute('data-id');
		var hotel = datas.getAttribute('data-hotel');
		var price = datas.getAttribute('data-price');
		var check = datas.getAttribute('data-check');
		$('#type_'+hotel+'_'+id).html(price+".0");
		if(hotel ==1){
			if (check == 'false'){
				if(id == 2){
					if(index == 0){
						$scope.aminity[id-1].options[0].check = true;
						$scope.aminity[id-1].options[1].check = false;
						$scope.aminity[id-1].options[2].check = false;
					}else if(index == 1){
						$scope.aminity[id-1].options[0].check = false;
						$scope.aminity[id-1].options[1].check = true;
						$scope.aminity[id-1].options[2].check = false;

					}else{
						$scope.aminity[id-1].options[0].check = false;
						$scope.aminity[id-1].options[1].check = false;
						$scope.aminity[id-1].options[2].check = true;
						$scope.perdayPrice_1 = 288.00;
					}
				}else{
					if(index == 0){
						$scope.aminity[id-1].options[0].check = true;
						$scope.aminity[id-1].options[1].check = false;
					}else if(index == 1){
						$scope.aminity[id-1].options[0].check = false;
						$scope.aminity[id-1].options[1].check = true;
					}
				}

				if($scope.aminity[0].options[1].check == true){
					$scope.perdayPrice_1 = 288.00;
					$scope.totalPrice_1 = 339.16;
					$scope.aminities_price1 = 5;
				}
				if($scope.aminity[0].options[0].check == true){
					$scope.perdayPrice_1 = 293.00;
					$scope.totalPrice_1 = 344.16;
					$scope.aminities_price1 = 10;
				}
				if($scope.aminity[1].options[2].check == true){
					$scope.perdayPrice_1 = $scope.perdayPrice_1;
					$scope.totalPrice_1 = $scope.totalPrice_1;
					$scope.aminities_price1 = $scope.aminities_price1;
				}
				if($scope.aminity[1].options[1].check == true){
					if($scope.userType == "Platinum"){
						$scope.perdayPrice_1 = $scope.perdayPrice_1;
						$scope.totalPrice_1 = $scope.totalPrice_1;
						$scope.aminities_price1 = $scope.aminities_price1;
					}else{
						$scope.perdayPrice_1 = $scope.perdayPrice_1 + 5;
						$scope.totalPrice_1 = $scope.totalPrice_1 + 5;
						$scope.aminities_price1 = $scope.aminities_price1 + 5;
					}
				}
				if($scope.aminity[1].options[0].check == true){
					if($scope.userType == "Platinum"){
						$scope.perdayPrice_1 = $scope.perdayPrice_1;
						$scope.totalPrice_1 = $scope.totalPrice_1;
						$scope.aminities_price1 = $scope.aminities_price1;
					}else{
						$scope.perdayPrice_1 = $scope.perdayPrice_1 + 10;
						$scope.totalPrice_1 = $scope.totalPrice_1 + 10;
						$scope.aminities_price1 = $scope.aminities_price1 + 10;
					}
				}
				if($scope.aminity[2].options[1].check == true){
					$scope.perdayPrice_1 = $scope.perdayPrice_1;
					$scope.totalPrice_1 = $scope.totalPrice_1;
					$scope.aminities_price1 = $scope.aminities_price1;
				}
				if($scope.aminity[2].options[0].check == true){
					$scope.perdayPrice_1 = $scope.perdayPrice_1 + 10;
					$scope.totalPrice_1 = $scope.totalPrice_1 + 10;
					$scope.aminities_price1 = $scope.aminities_price1 +10;
				}
			}
		}else if(hotel == 2){
			if (check == 'false'){
				if(id == 2){
					if(index == 0){
						$scope.aminity1[id-1].options[0].check = true;
						$scope.aminity1[id-1].options[1].check = false;
						$scope.aminity1[id-1].options[2].check = false;
					}else if(index == 1){
						$scope.aminity1[id-1].options[0].check = false;
						$scope.aminity1[id-1].options[1].check = true;
						$scope.aminity1[id-1].options[2].check = false;

					}else{
						$scope.aminity1[id-1].options[0].check = false;
						$scope.aminity1[id-1].options[1].check = false;
						$scope.aminity1[id-1].options[2].check = true;
					}
				}else{
					if(index == 0){
						$scope.aminity1[id-1].options[0].check = true;
						$scope.aminity1[id-1].options[1].check = false;
					}else if(index == 1){
						$scope.aminity1[id-1].options[0].check = false;
						$scope.aminity1[id-1].options[1].check = true;
					}
				}

				if($scope.aminity1[0].options[1].check == true){
					$scope.perdayPrice_2 = 320;
					$scope.totalPrice_2 = 350.16;
					$scope.aminities_price2 = 5;
				}
				if($scope.aminity1[0].options[0].check == true){
					$scope.perdayPrice_2 = 325;
					$scope.totalPrice_2 = 355.16;
					$scope.aminities_price2 = 10;
				}
				if($scope.aminity1[1].options[2].check == true){
					$scope.perdayPrice_2 = $scope.perdayPrice_2;
					$scope.totalPrice_2 = $scope.totalPrice_2;
					$scope.aminities_price2 = $scope.aminities_price2;
				}
				if($scope.aminity1[1].options[1].check == true){
					if($scope.userType == "Platinum"){
						$scope.perdayPrice_2 = $scope.perdayPrice_2;
						$scope.totalPrice_2 = $scope.totalPrice_2;
						$scope.aminities_price2 = $scope.aminities_price2;
					}else{
						$scope.perdayPrice_2 = $scope.perdayPrice_2 + 5;
						$scope.totalPrice_2 = $scope.totalPrice_2 + 5;
						$scope.aminities_price2 = $scope.aminities_price2 + 5;
					}
				}
				if($scope.aminity1[1].options[0].check == true){
					if($scope.userType == "Platinum"){
						$scope.perdayPrice_2 = $scope.perdayPrice_2;
						$scope.totalPrice_2 = $scope.totalPrice_2;
						$scope.aminities_price2 = $scope.aminities_price2;
					}else{
						$scope.perdayPrice_2 = $scope.perdayPrice_2 + 10;
						$scope.totalPrice_2 = $scope.totalPrice_2 + 10;
						$scope.aminities_price2 = $scope.aminities_price2 +10;
					}
				}
				if($scope.aminity1[2].options[1].check == true){
					$scope.perdayPrice_2 = $scope.perdayPrice_2;
					$scope.totalPrice_2 = $scope.totalPrice_2;
					$scope.aminities_price2 = $scope.aminities_price2;
				}
				if($scope.aminity1[2].options[0].check == true){
					$scope.perdayPrice_2 = $scope.perdayPrice_2 + 10;
					$scope.totalPrice_2 = $scope.totalPrice_2 + 10;
					$scope.aminities_price2 = $scope.aminities_price2 + 10;
				}
			}
		}else if(hotel == 3){
			if (check == 'false'){
				if(id == 2){
					if(index == 0){
						$scope.aminity2[id-1].options[0].check = true;
						$scope.aminity2[id-1].options[1].check = false;
						$scope.aminity2[id-1].options[2].check = false;
					}else if(index == 1){
						$scope.aminity2[id-1].options[0].check = false;
						$scope.aminity2[id-1].options[1].check = true;
						$scope.aminity2[id-1].options[2].check = false;

					}else{
						$scope.aminity2[id-1].options[0].check = false;
						$scope.aminity2[id-1].options[1].check = false;
						$scope.aminity2[id-1].options[2].check = true;
					}
				}else{
					if(index == 0){
						$scope.aminity2[id-1].options[0].check = true;
						$scope.aminity2[id-1].options[1].check = false;
					}else if(index == 1){
						$scope.aminity2[id-1].options[0].check = false;
						$scope.aminity2[id-1].options[1].check = true;
					}
				}

				if($scope.aminity2[0].options[1].check == true){
					$scope.perdayPrice_3 = 335;
					$scope.totalPrice_3 = 379.16;
					$scope.aminities_price3 = 5;
				}
				if($scope.aminity2[0].options[0].check == true){
					$scope.perdayPrice_3 = 340;
					$scope.totalPrice_3 = 384.16;
					$scope.aminities_price3 = 10;
				}
				if($scope.aminity2[1].options[2].check == true){
					$scope.perdayPrice_3 = $scope.perdayPrice_3;
					$scope.totalPrice_3 = $scope.totalPrice_3;
					$scope.aminities_price3 = $scope.aminities_price3;
				}
				if($scope.aminity2[1].options[1].check == true){
					if($scope.userType == "Platinum"){
						$scope.perdayPrice_3 = $scope.perdayPrice_3;
						$scope.totalPrice_3 = $scope.totalPrice_3;
						$scope.aminities_price3 = $scope.aminities_price3;
					}else{
						$scope.perdayPrice_3 = $scope.perdayPrice_3 + 5;
						$scope.totalPrice_3 = $scope.totalPrice_1 + 5;
						$scope.aminities_price3 = $scope.aminities_price3 + 5;
					}
				}
				if($scope.aminity2[1].options[0].check == true){
					if($scope.userType == "Platinum"){
						$scope.perdayPrice_3 = $scope.perdayPrice_3;
						$scope.totalPrice_3 = $scope.totalPrice_3;
						$scope.aminities_price3 = $scope.aminities_price3;
					}else{
						$scope.perdayPrice_3 = $scope.perdayPrice_3 + 10;
						$scope.totalPrice_3 = $scope.totalPrice_3 + 10;
						$scope.aminities_price3 = $scope.aminities_price3 + 10;
					}
				}
				if($scope.aminity2[2].options[1].check == true){
					$scope.perdayPrice_3 = $scope.perdayPrice_3;
					$scope.totalPrice_3 = $scope.totalPrice_3;
					$scope.aminities_price3 = $scope.aminities_price3;
				}
				if($scope.aminity2[2].options[0].check == true){
					$scope.perdayPrice_3 = $scope.perdayPrice_3 + 10;
					$scope.totalPrice_3 = $scope.totalPrice_3 + 10;
					$scope.aminities_price3 = $scope.aminities_price3 + 10;
				}
			}
		}

	}
	$scope.getPriceDetails = function(){
		//================ For Hotel 1 =============================================
		if($scope.aminity[0].options[1].check == true){
					$scope.perdayPrice_1 = 288.00;
					$scope.totalPrice_1 = 339.16;
					$scope.aminities_price1 = 5;
				}
				if($scope.aminity[0].options[0].check == true){
					$scope.perdayPrice_1 = 293.00;
					$scope.totalPrice_1 = $scope.totalPrice_1 + 5;
					$scope.aminities_price1 = $scope.aminities_price1 + 5;
				}
				if($scope.aminity[1].options[2].check == true){
					$scope.perdayPrice_1 = $scope.perdayPrice_1;
					$scope.totalPrice_1 = $scope.totalPrice_1;
					$scope.aminities_price1 = $scope.aminities_price1;
				}
				if($scope.aminity[1].options[1].check == true){
					if($scope.userType == "Platinum"){
						$scope.perdayPrice_1 = $scope.perdayPrice_1;
						$scope.totalPrice_1 = $scope.totalPrice_1;
						$scope.aminities_price1 = $scope.aminities_price1;
					}else{
						$scope.perdayPrice_1 = $scope.perdayPrice_1 + 5;
						$scope.totalPrice_1 = $scope.totalPrice_1 + 5;
						$scope.aminities_price1 = $scope.aminities_price1 + 5;
					}
				}
				if($scope.aminity[1].options[0].check == true){
					if($scope.userType == "Platinum"){
						$scope.perdayPrice_1 = $scope.perdayPrice_1;
						$scope.totalPrice_1 = $scope.totalPrice_1;
						$scope.aminities_price1 = $scope.aminities_price1;
					}else{
						$scope.perdayPrice_1 = $scope.perdayPrice_1 + 10;
						$scope.totalPrice_1 = $scope.totalPrice_1 + 10;
						$scope.aminities_price1 = $scope.aminities_price1 + 10;
					}
				}
				if($scope.aminity[2].options[1].check == true){
					$scope.perdayPrice_1 = $scope.perdayPrice_1;
					$scope.totalPrice_1 = $scope.totalPrice_1;
					$scope.aminities_price1 = $scope.aminities_price1;
				}
				if($scope.aminity[2].options[0].check == true){
					$scope.perdayPrice_1 = $scope.perdayPrice_1 + 10;
					$scope.totalPrice_1 = $scope.totalPrice_1 + 10;
					$scope.aminities_price1 = $scope.aminities_price1 +10;
				}
		//=============== For Hotel 2===============================================
		if($scope.aminity1[0].options[1].check == true){
					$scope.perdayPrice_2 = 320;
					$scope.totalPrice_2 = 350.16;
					$scope.aminities_price2 = 5;
				}
				if($scope.aminity1[0].options[0].check == true){
					$scope.perdayPrice_2 = $scope.perdayPrice_2 + 5;
					$scope.totalPrice_2 = $scope.totalPrice_2 + 5;
					$scope.aminities_price2 = $scope.aminities_price2 + 5;
				}
				if($scope.aminity1[1].options[2].check == true){
					$scope.perdayPrice_2 = $scope.perdayPrice_2;
					$scope.totalPrice_2 = $scope.totalPrice_2;
					$scope.aminities_price2 = $scope.aminities_price2;
				}
				if($scope.aminity1[1].options[1].check == true){
					if($scope.userType == "Platinum"){
						$scope.perdayPrice_2 = $scope.perdayPrice_2;
						$scope.totalPrice_2 = $scope.totalPrice_2;
						$scope.aminities_price2 = $scope.aminities_price2;
					}else{
						$scope.perdayPrice_2 = $scope.perdayPrice_2 + 5;
						$scope.totalPrice_2 = $scope.totalPrice_2 + 5;
						$scope.aminities_price2 = $scope.aminities_price2 + 5;
					}
				}
				if($scope.aminity1[1].options[0].check == true){
					if($scope.userType == "Platinum"){
						$scope.perdayPrice_2 = $scope.perdayPrice_2;
						$scope.totalPrice_2 = $scope.totalPrice_2;
						$scope.aminities_price2 = $scope.aminities_price2;
					}else{
						$scope.perdayPrice_2 = $scope.perdayPrice_2 + 10;
						$scope.totalPrice_2 = $scope.totalPrice_2 + 10;
						$scope.aminities_price2 = $scope.aminities_price2 +10;
					}
				}
				if($scope.aminity1[2].options[1].check == true){
					$scope.perdayPrice_2 = $scope.perdayPrice_2;
					$scope.totalPrice_2 = $scope.totalPrice_2;
					$scope.aminities_price2 = $scope.aminities_price2;
				}
				if($scope.aminity1[2].options[0].check == true){
					$scope.perdayPrice_2 = $scope.perdayPrice_2 + 10;
					$scope.totalPrice_2 = $scope.totalPrice_2 + 10;
					$scope.aminities_price2 = $scope.aminities_price2 + 10;
				}
		//for hotel 3
		if($scope.aminity2[0].options[1].check == true){
					$scope.perdayPrice_3 = 335;
					$scope.totalPrice_3 = 379.16;
					$scope.aminities_price3 = 5;
				}
				if($scope.aminity2[0].options[0].check == true){
					$scope.perdayPrice_3 = $scope.perdayPrice_3 + 5;
					$scope.totalPrice_3 = $scope.totalPrice_3 + 5;
					$scope.aminities_price3 = $scope.aminities_price3 + 5;
				}
				if($scope.aminity2[1].options[2].check == true){
					$scope.perdayPrice_3 = $scope.perdayPrice_3;
					$scope.totalPrice_3 = $scope.totalPrice_3;
					$scope.aminities_price3 = $scope.aminities_price3;
				}
				if($scope.aminity2[1].options[1].check == true){
					if($scope.userType == "Platinum"){
						$scope.perdayPrice_3 = $scope.perdayPrice_3;
						$scope.totalPrice_3 = $scope.totalPrice_3;
						$scope.aminities_price3 = $scope.aminities_price3;
					}else{
						$scope.perdayPrice_3 = $scope.perdayPrice_3 + 5;
						$scope.totalPrice_3 = $scope.totalPrice_1 + 5;
						$scope.aminities_price3 = $scope.aminities_price3 + 5;
					}
				}
				if($scope.aminity2[1].options[0].check == true){
					if($scope.userType == "Platinum"){
						$scope.perdayPrice_3 = $scope.perdayPrice_3;
						$scope.totalPrice_3 = $scope.totalPrice_3;
						$scope.aminities_price3 = $scope.aminities_price3;
					}else{
						$scope.perdayPrice_3 = $scope.perdayPrice_3 + 10;
						$scope.totalPrice_3 = $scope.totalPrice_3 + 10;
						$scope.aminities_price3 = $scope.aminities_price3 + 10;
					}
				}
				if($scope.aminity2[2].options[1].check == true){
					$scope.perdayPrice_3 = $scope.perdayPrice_3;
					$scope.totalPrice_3 = $scope.totalPrice_3;
					$scope.aminities_price3 = $scope.aminities_price3;
				}
				if($scope.aminity2[2].options[0].check == true){
					$scope.perdayPrice_3 = $scope.perdayPrice_3 + 10;
					$scope.totalPrice_3 = $scope.totalPrice_3 + 10;
					$scope.aminities_price3 = $scope.aminities_price3 + 10;
				}
	}
});
//============== Controllers
