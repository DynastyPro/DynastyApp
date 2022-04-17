import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './component/navbar';
import reportWebVitals from './reportWebVitals';
import Banner from './component/banner';
import Nearchart from './component/nearchart';
import About from './component/about';
import Ourservice from './component/ourservice';
import Patners from './component/patners';
import Footer from './component/footer';
import Testing from './component/testing';
import RecentListing from './component/recentlisting';
import Collection from './component/collection';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Banner />
    <Nearchart />
    {/* <RecentListing /> */}
    {/* <Ourservice /> */}
    {/* <Testing /> */}
    {/* <About /> */}
    {/* <Patners /> */}
    <Collection />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
