import React from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

export default function NewMeetup() {

    const handleAddMeetup = (data) => {
        console.log(data);
    }

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </div>
  )
}
