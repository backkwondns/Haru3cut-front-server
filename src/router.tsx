import { Diary, Friend, Party, Register, Login, Layout, WriteDiary, Save, Setting, UpdateDiary } from 'pages';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="/"
          element={
            <React.Suspense fallback={<>...</>}>
              <Layout />
            </React.Suspense>
          }
        >
          <Route
            path="diary"
            element={
              <React.Suspense fallback={<>...</>}>
                <Diary />
              </React.Suspense>
            }
          />
          <Route
            path="friend"
            element={
              <React.Suspense fallback={<>...</>}>
                <Friend />
              </React.Suspense>
            }
          />
          <Route
            path="party"
            element={
              <React.Suspense fallback={<>...</>}>
                <Party />
              </React.Suspense>
            }
          />
          <Route
            path="writeDiary"
            element={
              <React.Suspense fallback={<>...</>}>
                <WriteDiary />
              </React.Suspense>
            }
          />
          <Route
            path="writeDiary/:postID"
            element={
              <React.Suspense fallback={<>...</>}>
                <UpdateDiary />
              </React.Suspense>
            }
          />
          <Route
            path="save"
            element={
              <React.Suspense fallback={<>...</>}>
                <Save />
              </React.Suspense>
            }
          />
          <Route
            path="setting"
            element={
              <React.Suspense fallback={<>...</>}>
                <Setting />
              </React.Suspense>
            }
          />
          <Route path="*" element={<div>404 Not Found!</div>} />
        </Route>
      </Routes>
      <ToastContainer position="top-center" autoClose={1000} style={{ zIndex: 100000 }} />
    </BrowserRouter>
  );
}

export default Router;
