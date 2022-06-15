import Navbar from '../component/Navbar';
import Banner from '../component/Banner';
import Nearchart from '../component/NearChart';
import RecentListing from '../component/RecentListing';
import Ourservice from '../component/OurService';
import About from '../component/About';
import Partners from '../component/Partners';
import Footer from '../component/Footer';

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
