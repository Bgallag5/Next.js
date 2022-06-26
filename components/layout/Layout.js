import MainNavigation from './MainNavigation';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className="flex flex-col m-5">{props.children}</main>
    </div>
  );
}

export default Layout;