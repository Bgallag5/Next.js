function Card(props) {
    return <div className="flex flex-col gap-1 w-auto h-auto bg-slate-100 shadow-md">{props.children}</div>;
  }
  
  export default Card;