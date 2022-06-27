import { useRef } from 'react';

import Card from '../ui/Card';

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    console.log(meetupData);

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className='flex flex-col p-8 gap-2 h-auto w-[25rem] m-4' onSubmit={submitHandler}>
        <div className='flex flex-col gap-1'>
          <label className='label' htmlFor='title'>Meetup Title</label>
          <input className='input' type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='label' htmlFor='image'>Meetup Image</label>
          <input className='input' type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='label' htmlFor='address'>Address</label>
          <input className='input' type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='label' htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className='flex flex-col'>
          <button className='btn'>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;