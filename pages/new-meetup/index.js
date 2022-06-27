import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import axios from "axios";

import Router, { useRouter } from "next/router";

export default function NewMeetup() {


  const router = useRouter();

  const handleAddMeetup = async (data) => {
    console.log(data);

    try {
      const response = await axios({
        method: 'POST',
        url: '/api/new-meetup',
        // body: JSON.stringify(data),
        data: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);

      //if successful POST, nav to homepage
      if (response.status === 201 || 200){
          router.push('/')
      }

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </div>
  );
}
