
hgtApp.controller('postController', ['$scope', 'multipartForm', function($scope, multipartForm){
	$scope.customer = {};
	$scope.createPost = function(){
		var uploadUrl = '/api/post';
		multipartForm.post(uploadUrl, $scope.newPost);
	}
}]);
