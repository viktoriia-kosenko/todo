### Simple TODO (React) App

## Used technologies:
- React
- Node JS
- Mongo DB

## Install instructions:
- clone this repository
- install node_modules into root directory
- install node_modules into client directory\
	use command for that:
	```
	npm install
	```
- make sure you have Mongo db installed.\
	alternatively, if you use Docker, pull "mongo" image:
	```
	docker pull mongo
	```
- create 'todo_app' db in Mongo server,\
  you may want to use free Mondo GUI tool: [Robo 3T](https://robomongo.org/download)
  
## Startup instructions:
- Start mongo db. If it runs on Docker, then use this command:
	```
	docker run -i -t --rm -p 27017:27017 --name "mongo_db" --network=bridge mongo
	```
- Start "client" and "server" app with npm:
	```
	npm run dev
	```