import Navbar from '../Component/Navbar';
import Banner from '../Component/Banner';
import Nearchart from '../Component/NearChart';
import RecentListing from '../Component/RecentListing';
import Ourservice from '../Component/OurService';
import About from '../Component/About';
import Partners from '../Component/Partners';
import Footer from '../Component/Footer';

function Home() {
  return (

    <>
      <Navbar />
      <Banner/>
      <Nearchart />
      <RecentListing />
      <Ourservice />
      <About />
      <Partners />
      <Footer />
    </>
  );
}

export default Home;
