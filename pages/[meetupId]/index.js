import React from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";

export default function index(props) {
  const chosenMeetup = JSON.parse(props.chosenMeetup);
  console.log(chosenMeetup);

  return <MeetupDetails chosenMeetup={chosenMeetup} />;
}

export async function getStaticPaths() {
  const MONGODB_URI =
    "mongodb+srv://Ben:JqTTk0PPTtTkIPHp@cluster0.wp6ebn8.mongodb.net/?retryWrites=true&w=majority";
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  //fetch all document objects but only include the _id of each item
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  // console.log(meetups);

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  //API fetch for single meetup data
  const meetupId = context.params.meetupId;
  // console.log(meetupId);
  const MONGODB_URI =
    "mongodb+srv://Ben:JqTTk0PPTtTkIPHp@cluster0.wp6ebn8.mongodb.net/?retryWrites=true&w=majority";
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)});

  return {
    props: {
      chosenMeetup: JSON.stringify(selectedMeetup),
    },
  };
}
