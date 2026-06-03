import React from 'react'
import Layout from "../../component/Layouts/Layout";
import Section1 from './Section1';
import "../../styles/HomeStyle.css";
import Section2 from './Section2';

const Home = () => {
  return (
    <>
      <Layout>
        {/* Home Section Hero Banner  */}
        <Section1 />

        {/* Home Section About */}
        <Section2 />
      </Layout>
    </>
  )
}

export default Home;