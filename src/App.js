import React, { useRef, useEffect } from 'react';
import './App.css';
import { ReactComponent as FriendsSvg } from './assets/friends_online.svg';
import gsap from 'gsap';

function App() {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;

    const user = elements.getElementById('user');
    const friend1 = elements.getElementById('friend1');
    const friend2 = elements.getElementById('friend2');
    const friend3 = elements.getElementById('friend3');

    gsap.set([user, friend1, friend2, friend3], {
      autoAlpha: 0,
      transformOrigin: 'center',
    });

    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
    tl.fromTo(
      user,
      { x: '+=400' },
      { duration: 1, x: '-=400', autoAlpha: 1 }
    ).fromTo(
      friend1,
      { scale: 0, y: '+=100' },
      { duration: 0.5, scale: 1, y: '-=100', autoAlpha: 1 }
    ).fromTo(
      friend2,
      { scale: 0, y: '+=100' },
      { duration: 0.5, scale: 1, y: '-=100', autoAlpha: 1 }
    ).fromTo(
      friend3,
      { scale: 0, y: '+=100' },
      { duration: 0.5, scale: 1, y: '-=100', autoAlpha: 1 }
    )
    
    ;
  });

  return (
    <div ref={wrapper} className="App">
      <FriendsSvg />
    </div>
  );
}

export default App;
