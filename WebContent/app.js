var appModule=angular.module('app',[]);
var mainController= function($scope,$http){
	$scope.test="PTE Adviser";
	$scope.searchName="IMG_9355";
	$scope.message="";
	$scope.person={
		firstName:"Arijeet",
		lastName:"Sarkar",
		imgSrc:[
			{
				type:"linkedin",
				url:"https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAsVAAAAJDZjNGFmZTNkLWZjMDktNDNlMS1hOGI1LTE2ZDBhMzc5N2Y2NQ.jpg"
			},
			{
				type:"facebook",
				url:"./IMG_9355.JPG"
			}
		]
	};
	var responseData=function(response){
		$scope.user=response.data;
		$http.get($scope.user.repos_url).then(
				function(response){
					$scope.repos=response.data;
				},
				function(reason){
					$scope.message="Repos not found"
				}
		)
	};
	var errorData=function(reason){
		$scope.message="Image not found"
	}
	var getData=$http.get("https://api.github.com/users/angular");
	getData.then(responseData);
	$scope.getSearchData=function(){
		for(var i=0;i<$scope.person.imgSrc.length;i++){
			if($scope.person.imgSrc[i].type==$scope.searchName)
				$scope.image=$scope.person.imgSrc[i].url
		}
		
	}
};
appModule.controller('MainController',['$scope','$http',mainController]);