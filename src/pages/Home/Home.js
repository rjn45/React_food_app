import React from 'react'
import Layout from "../../component/Layouts/Layout";
import Section1 from './Section1';
import "../../styles/HomeStyle.css";
import Section2 from './Section2';
import Section3 from './Section3';

const Home = () => {
  return (
    <>
      <Layout>
        {/* Home Section Hero Banner  */}
        <Section1 />

        {/* Home Section About */}
        <Section2 />

        {/* Home Section Menu */}
        <Section3 />
      </Layout>
    </>
  )
}

export default Home;