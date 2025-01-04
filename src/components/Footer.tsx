import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <p>
          Created with ❤️ by <a href="https://github.com/NicoG11">NicoG11</a>
        </p>
        <p>{currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;