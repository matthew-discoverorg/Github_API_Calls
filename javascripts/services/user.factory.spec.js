"use strict";

describe("User Factory", function(){
	var UserFactory;

	beforeEach(angular.mock.module("app"));

	beforeEach(inject(function(_UserFactory_){
		UserFactory = _UserFactory_;
	}));

	it("UserFactory and its methods should be defined", function(){
		expect(UserFactory).toBeDefined();
		expect(UserFactory.User).toBeDefined();
	});

	it("should take data and return the correct value", function(){
		let x = new UserFactory.User(RESPONSE_SUCCESS.data);
		expect(x.id).toEqual(8847098);
		expect(x.links.followers_url).toEqual("https://api.github.com/users/minusthebear/followers");
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