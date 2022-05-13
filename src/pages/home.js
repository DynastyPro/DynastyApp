import Navbar from '../component/navbar';
import Banner from '../component/banner';
import Nearchart from '../component/nearchart';
import RecentListing from '../component/recentlisting';
import Ourservice from '../component/ourservice';
import About from '../component/about';
import Patners from '../component/patners';
import Footer from '../component/footer';

function Home() {
  return (

    <>
      <Navbar />
      <Banner/>
      <Nearchart />
      <RecentListing />
      <Ourservice />
      <About />
      <Patners />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
