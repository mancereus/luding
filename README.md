# luding.org polymer web app
## Overview
mini test for polymer spa 
## Get Started
Install:
```
bower install
npm install OR yarn
```
Build the App:
```
webpack
```
Serve the App:
```
polymer serve
```

## Docker

docker build -t mancereus/luding-client .
docker run -p 49160:8080 mancereus/luding-client

http://localhost:41960

### Tasks

* Splash screen neu machen
* swipe navigation left right (Gesture)
* toast onTap action
* refaktor luding list
* app-localstoreage /firebase
* user auth
* chip popout with link
* country sprache anzeige


### bugs
* sequelize mysql date (moment parse date)
* bug iron list