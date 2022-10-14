import React, { useEffect, useState } from 'react';

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

  return (
    <div className={`nav ${show && 'nav_black'}`}>

    <nav>
<h2 className='nav_logo' style={{color:'red', fontFamily:'sans-serif'}}>NETFLIX</h2>

<div className='navig'>
<button className='btn1'>sign In</button>
<button className='btn'>sign Up</button>

</div>

<img
style={{borderRadius:'5px'}}
  className="nav_avatar"
  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
  alt="nav logo"
/>
    </nav>

      
    </div>
  );
}
