require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 3000;

const githubData = {
  "login": "amankrsingh2001",
  "id": 141403170,
  "node_id": "U_kgDOCG2kIg",
  "avatar_url": "https://avatars.githubusercontent.com/u/141403170?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/amankrsingh2001",
  "html_url": "https://github.com/amankrsingh2001",
  "followers_url": "https://api.github.com/users/amankrsingh2001/followers",
  "following_url": "https://api.github.com/users/amankrsingh2001/following{/other_user}",
  "gists_url": "https://api.github.com/users/amankrsingh2001/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/amankrsingh2001/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/amankrsingh2001/subscriptions",
  "organizations_url": "https://api.github.com/users/amankrsingh2001/orgs",
  "repos_url": "https://api.github.com/users/amankrsingh2001/repos",
  "events_url": "https://api.github.com/users/amankrsingh2001/events{/privacy}",
  "received_events_url": "https://api.github.com/users/amankrsingh2001/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2023-08-04T08:25:01Z",
  "updated_at": "2024-03-17T16:16:09Z"
}

app.get("/", (req, res) => {
  res.send("App is running");
});
app.get("/twit", (req, res) => {
  res.send("twitter started");
});


app.get("/github",(req,res)=>{
  res.json(githubData)
})


app.get("/local", (req, res) => {
  res.send("<h1>Please login at chai or code</h1>");
});

app.listen(PORT, () => {
  console.log(`Example App is listining in ${PORT}`);
});
