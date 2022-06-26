import React from 'react';
import MeetupDetails from '../../components/meetups/MeetupDetails';

export default function index(props) {
console.log(props);

  return (
    <MeetupDetails props={props} />
  )
}

export async function getStaticPaths(){
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "1"
        }
      },
      {
        params: {
          meetupId: "2"
        }
      },
    ]
  }
}

export async function getStaticProps(context) {
    //API fetch for single meetup data

    console.log(context);
    return {
        props: {
          chosenMeetup: {
            id: "1",
            image:
              "https://www.esl-languages.com/sites/default/files/styles/image_gallery/public/city/gallery/esl-vienna-language-stay-hero.jpg?itok=B_R79XbR",
            address: "2532 West St. Vienna",
            title: "Vienna Walk",
          }  
        }
    }
}
