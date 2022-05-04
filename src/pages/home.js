// import logo from '../logo.svg';
import '../App.css';
import Navbar from '../component/navbar';
import Banner from '../component/banner';
import Nearchart from '../component/nearchart';
import RecentListing from '../component/recentlisting';
import Ourservice from '../component/ourservice';
import About from '../component/about';
import Patners from '../component/patners';
import Footer from '../component/footer';

function App() {
  return (

    <div className=''>
      <Navbar />
      <Banner />
      <Nearchart />
      <RecentListing />
      <Ourservice />
      <About />
      <Patners />
      <Footer />
    </div>
  );
}

export default App;
