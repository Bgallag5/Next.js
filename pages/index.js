import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import {MongoClient} from 'mongodb';
import Head from 'next/head';

export default function HomePage(props) {
  return (
    <div className="">
      <Head>
        <title>Meetups</title>
        <meta name="description" content="Find local hiking meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </div>
  );
}

//set props on load
// on load, fetch our database collection and set our props.meetups to the meetups
// NONE of the code in getStaticProps() will be exposed to the client side - can write credentials and keys in this function
export async function getStaticProps() {
  const MONGODB_URI =
    "mongodb+srv://Ben:JqTTk0PPTtTkIPHp@cluster0.wp6ebn8.mongodb.net/?retryWrites=true&w=majority";
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString()
      }))
    },
    revalidate: 1,
  };
}
