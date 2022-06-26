import React from "react";
import { useRouter } from "next/router";
import { dummyData } from "../../pages";

export default function MeetupDetails() {
  const router = useRouter();
  const meetupId = router.query.meetupId;
  console.log(meetupId);

  const chosenMeetup = dummyData.find((item) => item.id === meetupId);
  console.log(chosenMeetup);

  //   return <div>Meetup Details for Meetup: {chosenMeetup.title}</div>;
  return (
      chosenMeetup &&
    <section className="section">
      <div className="bg-cover w-1/2">
        <img className="w-full" src={chosenMeetup.image}></img>
      </div>
      <div>
        <h3>{chosenMeetup.title}</h3>
        <p>{chosenMeetup.address}</p>
      </div>
    </section>
  );
}
