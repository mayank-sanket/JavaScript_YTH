// how does JSON look like?

// eg:

// {
//     // this object has no name
//     // here keys are also in string format " "
//     "name": "Mayank",
//     "courseName": "JS in Hindi",
//     "price": "free"
// }



// example: https://api.github.com/users/mayank-sanket

/*


{
  "login": "mayank-sanket",
  "id": 152572407,
  "node_id": "U_kgDOCRgR9w",
  "avatar_url": "https://avatars.githubusercontent.com/u/152572407?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mayank-sanket",
  "html_url": "https://github.com/mayank-sanket",
  "followers_url": "https://api.github.com/users/mayank-sanket/followers",
  "following_url": "https://api.github.com/users/mayank-sanket/following{/other_user}",
  "gists_url": "https://api.github.com/users/mayank-sanket/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mayank-sanket/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mayank-sanket/subscriptions",
  "organizations_url": "https://api.github.com/users/mayank-sanket/orgs",
  "repos_url": "https://api.github.com/users/mayank-sanket/repos",
  "events_url": "https://api.github.com/users/mayank-sanket/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mayank-sanket/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Mayank",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Private repositories at: \r\n@mayanksanket",
  "twitter_username": null,
  "public_repos": 19,
  "public_gists": 1,
  "followers": 2,
  "following": 6,
  "created_at": "2023-12-01T01:09:46Z",
  "updated_at": "2024-06-16T19:59:03Z"
}


*/


// sometimes you get APIs in the form of array, eg: [{}, {}, {}, {}]

// interesting thing to do:
// random user me API 
/*
1. copy the API from the URL
2. format the API using JSON formatter
3. there you will get options such as code, form, text, tree, view

*/
