use("webCrud");

db.createCollection('pInfo');

// db.pInfo.insertMany([
//     { "name": "Sushanth", "age": 19 },
//     { "name": "Aarav", "age": 20 },
//     { "name": "Meera", "age": 18 },
//     { "name": "Rohan", "age": 22 },
//     { "name": "Priya", "age": 21 },
//     { "name": "Karthik", "age": 19 },
//     { "name": "Neha", "age": 23 },
//     { "name": "Vikram", "age": 20 },
//     { "name": "Ananya", "age": 18 },
//     { "name": "Rahul", "age": 22 }
//   ]);


db.pInfo.updateOne(
        { name: "Sushanth" },
        { $set : { age: 20 } }
      );

db.pInfo.find({name : "Sushanth"});