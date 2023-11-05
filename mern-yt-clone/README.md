## SERVER
* `mkdir server`
* `cd server`
* `npm init -y`
* `npm install express nodemon mongoose`
* create `index.js` inside `server` folder - follow instructions @ 3:44
* after seeting up mongoDB, create `.env` inside server to keep the secret keys
* `npm add dotenv`
* create `models` folder inside server, then create schemas for `User.js`, `Video.js`, and `Comment.js`
* create `routes` and `controllers` folder inside `server`
* `routes` points and fetch for specific urls. Create `users.js`, `videos.js`, and `comments.js`
* `controllers` where CRUD operations takes place. Create `user.js`, `video.js`, and `comment.js`
* add each routes to `index.js`
* create `auth.js` inside `routes` and `controllers` to handle authentication
* run `npm add bcryptjs` to use encryption on passwords
* `npm add jsonwebtoken` to add JWT
* add cookie `npm add cookie-parser`