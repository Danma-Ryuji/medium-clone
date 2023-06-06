import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomepageBS from './Components/Homepage_BS/HomepageBS';
import HomepageAS from './Components/Homepage_AS/HomepageAS';
import Notification from './Components/Pages/Notification';
import Story from './Components/Pages/Story';
import Create from './Components/Pages/Create';
import Bookmark from './Components/Pages/Bookmark';
import SinglePost from './Components/midPart/singlePost';
import OurStory from './Components/OurStory'
import Membership from './Components/Membership'
import Creators from './Components/Creators'


function App() {
  return ( 
    <Routes>
      <Route path="/" element={<HomepageBS />} />
      <Route path="/homepage" element={<HomepageAS />} />
      <Route path="/our-story" element={<OurStory />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/creators" element={<Creators />} />
      <Route path="/homepage/:postId" element={<SinglePost />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/story" element={<Story />} />
      <Route path="/create" element={<Create />} />
      <Route path="/bookmark" element={<Bookmark />} />
    </Routes>
  );
}

export default App;
