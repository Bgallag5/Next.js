import MeetupItem from './MeetupItem';

function MeetupList(props) {
    // const {meetups} = props
    console.log(props);
  return (
    <ul className="flex flex-col items-center content-center gap-1 w-screen">
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;