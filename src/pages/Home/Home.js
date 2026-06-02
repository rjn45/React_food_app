import React from 'react'
import Layout from "../../component/Layouts/Layout";
import Section1 from './Section1';
import "../../styles/HomeStyle.css";

const Home = () => {
  return (
    <>
      <Layout>
        {/* Home Section Hero Banner  */}
        <Section1 />
      </Layout>
    </>
  )
}

export default Home;