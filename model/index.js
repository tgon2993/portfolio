const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
//create connection 
const client = new MongoClient(url);

// Database Name
const dbName = 'studbud';

function connect(callback){
    MongoClient.connect(url,function(err, client){
        if(err){
            console.log("",err);
        }else{
            let db = client.db(dbName);
            callback && callback(db);
            client.close();
        }
    })
}

module.exports = {
    connect
}