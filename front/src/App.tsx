import React from "react";

import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WellcomePage } from "pages/wellcomepage";
import { SignupPage } from "pages/SignupPage";
import { SigninPage } from "pages/SigninPage";
import { PostPage } from "pages/PostPage";

function App() {
  return (
<BrowserRouter>
<Routes>
<Route
            path="/"
            element={
              
                <WellcomePage />
              
            }
          />

<Route
            path="/signup"
            element={
              
                <SignupPage />
              
            }
          />
          <Route
            path="/signin"
            element={
              
                <SigninPage />
              
            }
          />
          <Route
            path="/post"
            element={
              
                <PostPage />
              
            }
          />
</Routes>
</BrowserRouter>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
