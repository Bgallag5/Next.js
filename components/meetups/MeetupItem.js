import {useRouter} from 'next/router';
import Card from '../ui/Card';

function MeetupItem(props) {

    const router = useRouter();
    console.log(props);


    const handleShowDetails = () => {
        console.log(router);
        console.log(props.id);
        //router.push - pushes additional params onto our current url 
        // ourdomain.com, router.push(`/meetups/${props.id}`) => ourdomain.com/meetups/${id}
        router.push(`/meetups/${props.id}`);
    }

  return (
    <li className="flex shadow-lg my-2 w-auto">
      <Card>
        <div className="bg-cover w-[40rem]">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="flex flex-col items-center">
          <h3 className='font-bold'>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className="flex flex-col items-center m-3">
          <button onClick={handleShowDetails} className="btn w-1/3">Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;