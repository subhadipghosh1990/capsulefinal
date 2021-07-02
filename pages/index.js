import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import styles from '../styles/Home.module.css';

import Header from "./common/Header";
import Banner from "./indexparts/Banner";
import What from "./indexparts/What";
import Grow from "./indexparts/Grow";
import Services from "./indexparts/Services";

export default function Home() {
  return (
    <React.Fragment>
      <Header/>
      <Banner/>
      <What/>
      <Grow/>
      <Services/>
    </React.Fragment>
      
  )
}
