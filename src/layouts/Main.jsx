import { Outlet } from 'react-router-dom';
import Navbar from '../pages/sharedpages/Navbar/Navbar';
import Footer from '../pages/sharedpages/Footer/Footer';

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-80px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
