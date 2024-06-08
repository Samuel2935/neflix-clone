import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  const sign = (e) => {
    e.preventDefault();
    alert('Not yet implemented!');
  };

  const out = (e) => {
    e.preventDefault();
    alert('Not yet implemented!');
  };

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <nav>
        <h2
          className="nav_logo"
          style={{ color: 'red', fontFamily: 'sans-serif' }}
        >
          NETFLIX
        </h2>

        <div className="navig">
          <button onClick={sign} className="btn1">
            sign in
          </button>
          <button onClick={out} className="btn">
            sign up
          </button>
        </div>
        <div className="avatar_div">
          <Stack direction="row" spacing={2}>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </Stack>
        </div>
      </nav>
    </div>
  );
}
