// import logo from '../logo.svg';
import '../App.css';
import Navbar from '../Component/Navbar';
import Banner2 from '../Component/Banner2';
// import Collection from '../component/collection';
// import About from '../component/about';
import Footer from '../Component/Footer';
import CollectionLisiting from '../Component/CollectionLisiting';

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
