"use strict";


(function(){
	const User = function(data){
		console.log(data);

		this.login = data.login;
		this.id = data.id;
		this.avatar_url = data.avatar_url;
		this.html_url = data.html_url;
		this.followers = data.followers;
		this.following = data.following;
		this.public_repos = data.public_repos;
		this.public_gists = data.public_gists;
		this.created_at = data.created_at;
		this.updated_at = data.updated_at;
		this.name = data.name;
		this.company = data.company;
		this.blog = data.blog;
		this.location = data.location;
		this.bio = data.bio;
		this.hireable = data.hireable;
		this.email = data.email;
		this.links = {
			followers_url: data.followers_url,
			following_url: data.following_url,
			subscriptions_url: data.subscriptions_url,
			repos_url: data.repos_url,
			organizations_url: data.organizations_url
		}
	};

	angular.module("app").factory("UserFactory", function(){
		const x = {};

		x.User = User;

		return x;
	});
})();