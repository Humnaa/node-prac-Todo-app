const { MongoClient } = require("mongodb"); //object distucting

MongoClient.connect("mongodb://localhost:27017/Todo-app", (err, client) => {
  if (err) {
    return console.log("Unable to connect to Mongodb Server");
  } else {
    console.log("Connected to Mongodb Server");
    const db = client.db("Todos");
    //instead of getting pointer to doc we get an array
    // db.collection("User")
    //   .find({ address: "shadbagh" })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log("User");
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log("Unable to fetch user", err);
    //     }
    //   );

    db.collection("User")
    .find({name:"Humna"})
    .count()
    .then(
      count => {
        console.log(`User count: ${count}`);
      },
      err => {
        console.log("Unable to fetch user", err);
      }
    );


    client.close();
  }
});
