//  /api/new-meetup
// POST, /api/new-meetup
// endpoint for "create new meetup"

import { MongoClient } from "mongodb";

const handler = async (req, res) => {
    console.log('REQ.BODY');
  console.log(req.body);

  if (req.method === "POST") {
    const data = req.body;
    const { title, image, address, description } = data;

    try {
      const MONGODB_URI =
        "mongodb+srv://Ben:JqTTk0PPTtTkIPHp@cluster0.wp6ebn8.mongodb.net/?retryWrites=true&w=majority";
      const client = await MongoClient.connect(MONGODB_URI);
      console.log(client);
      const db = client.db();
      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.insertOne(data);
      client.close();

      res.status(201).json({ message: "Item Added to DB!" });
    } catch (err) {
      console.log(err);
    }
  }

  // if (req.method === 'GET'){
  //     const body = req.body;

  //     try {
  //         const response = await meetupsCollection.find({})

  //     } catch (err) {
  //         console.log(err);
  //     }
  // }
};

export default handler;
