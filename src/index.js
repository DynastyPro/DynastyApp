import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './component/navbar';
import reportWebVitals from './reportWebVitals';
import Banner from './component/banner';
import Banner2 from './component/banner2';
import Banner3 from './component/banner3';
import Nearchart from './component/nearchart';
import About from './component/about';
import AboutUs from './component/about-us';
import Ourservice from './component/ourservice';
import Patners from './component/patners';
import Footer from './component/footer';
import Testing2 from './component/testing2';
import RecentListing from './component/recentlisting';
import Collection from './component/collection';
import Listed from './component/listed';
import Testing from './component/testing';
import CollectionDetails from './component/collection details';

ReactDOM.render(
  <React.StrictMode>
    {/* <Navbar /> */}
    <Banner />
    {/* <Listed /> */}
    {/* <Nearchart /> */}
    <RecentListing />
    <Ourservice />
    {/* <Testing2 /> */}
    {/* <Testing /> */}
    <About />
    {/* <AboutUs /> */}
    <Patners />
    {/* <Collection /> */}
    {/* <CollectionDetails /> */}
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
