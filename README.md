# Maven Home Quest
The cilent folder holds the UI presented to the user, and make api calls to the server, which in its turn connects with MongoDB to store and fetch the players details and their scores.

## To start the game
start MongoDB
cd ./server && npm install && npm start
cd ../client && npm install && npm start

Enter your name in the new tab opened in your browser, and start playing.

## To pring leaderboard
You can uncomment lines 27-28 in /client/src/app.tsx to make the leaderboard print to console on game start.

### Assumptions:
- After pressing 'START' a new player record is saved with score = 0. For existing player, the current game sets to 0, and their record in the DB only updates if they get a higher score than that.
- Players names are case sensitive
