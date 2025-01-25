import React from 'react';


const Header: React.FC = () => {

    const badgeUrl:string = `https://img.shields.io/badge/shields.io-Badge%20Generator-blue?style=flat`;


  

  return (
    <header className="header">
      <h1><span>Shields.io</span> Badge Generator</h1>
      <img src={badgeUrl} alt="Shields.io Badge" />
    </header>
  );
};

export default Header;