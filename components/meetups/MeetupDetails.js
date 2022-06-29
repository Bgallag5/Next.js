import React from "react";

export default function MeetupDetails({chosenMeetup}) {
console.log(chosenMeetup);


  return (
    chosenMeetup && (
      <section className="section">
        <div className="bg-cover w-1/2">
          <img className="w-full" src={chosenMeetup.image}></img>
        </div>
        <div>
          <h3>{chosenMeetup.title}</h3>
          <p>{chosenMeetup.address}</p>
        </div>
      </section>
    )
  );
}
