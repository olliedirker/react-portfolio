import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


const Navigation = () => {
  return (
    <div className='navbar'>
    <div className='float-left'>
      <h5 className='myname'>Oliver Dirker</h5>
      </div>
      <div className='d-flex flex-row float-right'>
        <p className='link'><Link className='link' to="/About">About Me</Link></p>
        <p className='link'><Link className='link' to="/Portfolio">Portfolio</Link></p>
        <p className='link'><Link className='link' to="/Contact">Contact-Me</Link></p>

      <hr />
    </div>
    </div>
  );
};

export default Navigation;