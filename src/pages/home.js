import Navbar from '../component/Navbar';
import Banner from '../component/banner';
import Nearchart from '../component/nearchart';
import RecentListing from '../component/recentlisting';
import Ourservice from '../component/ourservice';
import About from '../component/about';
import Partners from '../component/Partners';
import Footer from '../component/Footer';
import Testing2 from '../component/testing2';

function Home() {
  return (

    <>
      <Navbar />
      <Banner/>
      <Nearchart />
      <RecentListing />
      <Ourservice />
      <Testing2 />
      <About />
      <Partners />
      <Footer />
    </>
  );
}

export default Home;
