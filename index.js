const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url, (err, client) => {
	assert.equal(err, null);

	console.log("Dope!!");
	const db = client.db(dbname);
	const collection = db.collection('dishes');
	collection.insertOne({ 'name': 'hfj', 'desc': 'dope' }).then((d) => {
		console.log(d);
	});
	collection.find({}).toArray().then((dishes) => {
		console.log(dishes);
		collection.remove().then((d) => {
			console.log(d);
		});
	});
	collection.find({}).toArray().then((dishes) => {
		console.log("jjhkdh",dishes);
	});

});