const { MongoClient } = require("mongodb"); //object distucting

MongoClient.connect("mongodb://localhost:27017/Todo-app", (err, client) => {
  if (err) {
    return console.log("Unable to connect to Mongodb Server");
  } else {
    console.log("Connected to Mongodb Server");
    const db = client.db("Todos");

    db.collection("User")
      .findOneAndUpdate(
        {
          name: "arfa"
        },
        {
          $set: {
            address: "DHA"
          },
          $inc: {
            age: 1
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(result => {
        console.log(result);
      });

    client.close();
  }
});
