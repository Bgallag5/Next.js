import MainNavigation from './MainNavigation';

function Layout(props) {
  return (
    <div className=''>
      <MainNavigation />
      <main className="flex flex-col m-5">{props.children}</main>
    </div>
  );
}

export default Layout;