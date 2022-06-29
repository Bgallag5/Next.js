import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import axios from "axios";
import Router, { useRouter } from "next/router";
import Head from "next/head";

export default function NewMeetup() {
  const router = useRouter();

  const handleAddMeetup = async (data) => {
    try {
      const response = await axios({
        method: "POST",
        url: "/api/new-meetup",
        data: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      //if successful POST, nav to homepage
      if (response.status === 201 || 200) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Head>
        <title>Add a New Meetups</title>
        <meta name="description" content="Submit your own meetup" />
      </Head>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </div>
  );
}
