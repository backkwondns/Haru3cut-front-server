import { Diary, Friend, Party, Register, Login, Layout } from 'pages';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route path="diary" element={<Diary />} />
          <Route path="friend" element={<Friend />} />
          <Route path="party" element={<Party />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
