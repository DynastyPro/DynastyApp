// import logo from '../logo.svg';
import '../App.css';
import Navbar from '../component/Navbar';
import Banner2 from '../component/Banner2';
// import Collection from '../component/collection';
// import About from '../component/about';
import Footer from '../component/Footer';
import CollectionLisiting from '../component/CollectionLisiting';

function ListingPage() {
  return (

    <div className=''>
      <Navbar />
      <Banner2 />
      <CollectionLisiting/>
      {/* <Collection /> */}
      <Footer />
    </div>
  );
}

export default ListingPage;
