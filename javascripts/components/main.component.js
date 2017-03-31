// 1. Error handling.

// 2. Redirect on successful call

"use strict";

(function(){
	angular.module("app").component("mainComponent", {
		templateUrl: "/templates/main.component.html",
		controllerAs: "vm",
		controller: function(APIFactory, UserFactory, $state){
			const vm = this;


			vm.searchGithub = function(){
				APIFactory.getAPI(vm.searchText).then(function(res){
					res.status !== 200 ? $state.go("404", {errorData: res.data }) : (
						vm.User = new UserFactory.User(res.data),
						$state.go("profile", {userData: vm.User})
					);
				})
				.catch(function(err){
					$state.go("fourOFour");
				});
			};

			vm.$onInit = function(){
				vm.hello = "Hello";
			};
		}
	});
})();