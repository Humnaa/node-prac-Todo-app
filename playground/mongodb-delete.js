const { MongoClient } = require("mongodb"); //object distucting

MongoClient.connect("mongodb://localhost:27017/Todo-app", (err, client) => {
  if (err) {
    return console.log("Unable to connect to Mongodb Server");
  } else {
    console.log("Connected to Mongodb Server");
    const db = client.db("Todos");
//     db.collection("User").deleteMany({name:'Humna'}).then((result)=>{
//         console.log(result);
//             });

//     db.collection("User").deleteOne({name:'Humna'}).then((result)=>{
// console.log(result);
//     });
    
    db.collection("User").findOneAndDelete({age:21}).then((result)=>{
        console.log(result);
            });
            
        
    client.close();
  }
});
