// const MongoClient = require("mongodb").MongoClient; 
const {MongoClient}= require('mongodb');//object distucting  
// var user = {name:'rehan',age:22};
// var {name}=user;
// console.log(name);
MongoClient.connect("mongodb://localhost:27017/Todo-app", (err, client) => {
  if (err) {
    return console.log("Unable to connect to Mongodb Server");
  } else {
    console.log("Connected to Mongodb Server");
    const db = client.db('Todos')

    // db.collection('Todos').insertOne({
    //     text:'Somthing to do',
    //     completed:false
    // },(err,result)=>{
    //     if(err){
    //         console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })
    db.collection('User').insertOne({
        name:'Humna',
        age:22,
        address:'shaheen valley'
    },(err,result)=>{
        if(err){
            console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
    })
    client.close();
  }
});
