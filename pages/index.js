import React from "react";
import MeetupList from "../components/meetups/MeetupList";

export const dummyData = [
  {
    id: "1",
    image:
      "https://www.esl-languages.com/sites/default/files/styles/image_gallery/public/city/gallery/esl-vienna-language-stay-hero.jpg?itok=B_R79XbR",
    address: "2532 West St. Vienna",
    title: "Vienna Walk",
  },
  {
    id: "2",
    image:
      "https://www.investmentmonitor.ai/wp-content/uploads/sites/7/2021/10/Warsaw-skyline-2-934x657-1.jpg",
    address: "1111 East St. Warsaw",
    title: "Warsaw Walk",
  },
];
export default function HomePage(props) {
    console.log(props.meetups);
  return (
    <div className="w-screen h-auto">
      <MeetupList meetups={props.meetups} />
    </div>
  );
}

export async function getStaticProps () {
    return {
        props: {
            meetups: dummyData
        },
        revalidate: 10
    }
}
