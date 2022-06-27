import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import axios from "axios";

export default function NewMeetup() {
  const handleAddMeetup = async (data) => {
    console.log(data);

    try {
      const response = await axios({
        method: 'POST',
        url: '/api/new-meetup',
        // data: JSON.stringify(data),
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      const data = await response.json();
      console.log(data);
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
