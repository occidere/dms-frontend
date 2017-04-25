angular.module('starter.controllers')
.controller('PreferencesCtrl', function($scope, $ionicModal, $timeout,
	LoginService,FolderFactory, DocumentFactory, UserFactory, $http,BackendPath) {
	console.log(LoginService.credential)
  	console.log(LoginService.user.userId)
 	var userId = LoginService.user.userId;
	console.log(userId)
	$http.get(BackendPath.userServicePath+"/user/"+userId+"/relationships")
	.then(function(resp){
		if(resp.status == 200){
			$scope.directBossList = resp.data;
			console.log(resp.data)
		}
	})

	$http.get(BackendPath.userServicePath+"/users")
	.then(function(resp){
		if(resp.status == 200){
			$scope.allUserList = resp.data;
			console.log(resp.data)
			$scope.select = {
		        availableOptions: resp.data,
		        selectedOption: {id: '0', name: 'Please Select ...'}
		    };
		    $scope.addBoss = function(){
		        $http({
			        method: 'POST',
			        url: BackendPath.userServicePath+'/newRelationship',
			        headers: {'Content-Type': 'application/json'},
			        data: {
			        	"bossId" : $scope.select.selectedOption.userId,
			        	"subordinateId" : userId
			        }
		      	})
				.then(function(resp){
					if(resp.status == 200){
						$scope.directBossList = $scope.directBossList.concat([$scope.select.selectedOption]);
						console.log(resp.data)
					}
				})
		      }

		}
	})

	$scope.removeRelationship = function(bossId, index){
		$http({
	        method: 'POST',
	        url: BackendPath.userServicePath+'/removeRelationship',
	        headers: {'Content-Type': 'application/json'},
	        data: {
	        	"bossId" : bossId,
	        	"subordinateId" : userId
	        }
      	})
		.then(function(resp){
			if(resp.status == 200){
				$scope.directBossList.splice(index, 1)
				console.log(resp.data)
			}
		})
	}

	$scope.showUsertoAdd = function(){
		$scope.showUser = function(){
			return true;
		}
		$scope.close = function(){
			$scope.showUser = function(){
				return false;
			}
		}
	}
})

