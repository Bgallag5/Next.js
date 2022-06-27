//  /api/new-meetup
// POST, /api/new-meetup
// endpoint for "create new meetup"

import {MongoClient} from 'mongodb';

const handler = async (req, res) => {

    // const MONGODB_URI = process.env.MONGODB_URI;
    // console.log(MONGODB_URI);
    const MONGODB_URI = 'mongodb+srv://Ben:JqTTk0PPTtTkIPHp@cluster0.wp6ebn8.mongodb.net/?retryWrites=true&w=majority';

  if (req.method === "POST"){
    const data = req.body;

    const {title, image, address, description} = data;

    try {
        
        const client = await MongoClient.connect(MONGODB_URI);
        console.log(client);
        const db = client.db();
    
        const meetupsCollection = db.collection('meetups');
       const result = await meetupsCollection.insertOne({title, image, address, description});
       console.log(result);
       client.close();

       res.status(201).json({message: 'Item Added to DB!'})
    } catch (err) {
        console.log(err);
    }

}

}

export default handler;


