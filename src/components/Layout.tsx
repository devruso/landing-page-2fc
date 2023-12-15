import React from 'react';
import { Helmet } from 'react-helmet';
import logo from '../assets/NEWLOGO.svg'; 
import logo1 from "../assets/NEWLOGOMOBILE.png"

const Layout: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>2FC</title>
        <link rel="icon" type="image/png" href={logo1} />
      </Helmet>
</div>
  );
};

export default Layout;
