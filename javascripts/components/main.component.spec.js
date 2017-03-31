// GOAL:

// 1. Type in user, hit search

// 2. Have find user, re-route if success

// 3. If not success, re-route elsewhere

"use strict";

describe("Main Component", function(){
	var mainComponent, APIFactory, UserFactory, $httpBackend, $q, $state;

	const addy = "https://api.github.com/users/";

	beforeEach(angular.mock.module("app"));

	beforeEach(inject(function(_APIFactory_, _UserFactory_, _$httpBackend_, _$state_, _$q_, _$componentController_){
		APIFactory = _APIFactory_;
		UserFactory = _UserFactory_;
		$httpBackend = _$httpBackend_;
		$state = _$state_;
		$q = _$q_;
		mainComponent = _$componentController_("mainComponent", { $scope : {} });
	}));

	describe("Checking mainComponent's existence", function(){
		it("should exist", function(){
			expect(mainComponent).toBeDefined();
		});

		it("should have a search method called searchGithub()", function(){
			expect(mainComponent.searchGithub).toBeDefined();
		});
	});

	describe("Checking if the searchGithub() worked correctly", function(){
		var result;

		beforeEach(function(){
			spyOn(mainComponent, "searchGithub").and.callThrough();
			spyOn(APIFactory, "getAPI");
			result = {};
		});

		it("should have searchText not to bedefined", function(){
			expect(mainComponent.searchText).not.toBeDefined();
		});

		it("should be defined and not called", function(){
			expect(mainComponent.searchGithub).toBeDefined();
			expect(mainComponent.searchGithub).not.toHaveBeenCalled();
			expect(UserFactory).toBeDefined();
			expect(mainComponent.User).not.toBeDefined();
		});

		it("should make a call to UserFactory", function(){
			mainComponent.searchText = "minusthebear";
			expect(mainComponent.searchText).toBeDefined();
			mainComponent.searchGithub();

			console.log(result);

			$httpBackend.whenGET(addy + mainComponent.searchText).respond(200, $q.when(RESPONSE_SUCCESS));
			$httpBackend.flush();

			expect(APIFactory.getAPI).toHaveBeenCalledWith(mainComponent.searchText);
		});
	});

	const RESPONSE_SUCCESS = {
		status: 200,
		data: {
			"login": "minusthebear",
			"id": 8847098,
			"avatar_url": "https://avatars1.githubusercontent.com/u/8847098?v=3",
			"html_url": "https://github.com/minusthebear",
			"followers_url": "https://api.github.com/users/minusthebear/followers",
			"following_url": "https://api.github.com/users/minusthebear/following{/other_user}",
			"subscriptions_url": "https://api.github.com/users/minusthebear/subscriptions",
			"organizations_url": "https://api.github.com/users/minusthebear/orgs",
			"repos_url": "https://api.github.com/users/minusthebear/repos",
			"name": null,
			"company": null,
			"blog": null,
			"location": null,
			"email": null,
			"bio": null,
			"public_repos": 14,
			"public_gists": 0,
			"followers": 1,
			"following": 1,
			"created_at": "2014-09-21T01:35:11Z",
			"updated_at": "2017-02-03T20:12:43Z"			
		}

	};
});