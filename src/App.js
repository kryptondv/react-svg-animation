import React, { useRef, useEffect } from 'react';
import './App.css';
import { ReactComponent as FriendsSvg } from './assets/friends_online.svg';
import gsap from 'gsap';

function App() {
  const wrapper = useRef(null);

  useEffect(() => {
    const [ elements ] = wrapper.current.children;
    const user = elements.getElementById('user'); 
    const friend1 = elements.getElementById('friend1'); 
    const friend2 = elements.getElementById('friend2'); 
    const friend3 = elements.getElementById('friend3'); 
    gsap.set([user, friend1, friend2, friend3], {autoAlpha: 0});
  });

  return (
    <div ref={wrapper} className="App">
      <FriendsSvg />
    </div>
  );
}

export default App;
