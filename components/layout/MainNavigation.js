import Link from 'next/link';

function MainNavigation() {

  return (
    <header className="flex flex-row justify-between items-center px-10 h-16 bg-amber-700 text-white shadow-">
      <div className='font-bold text-xl'>React Meetups</div>
      <nav>
        <ul className="flex flex-row justify-between items-center gap-6 ">
          <li>
            <Link href='/'>All Meetups</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;