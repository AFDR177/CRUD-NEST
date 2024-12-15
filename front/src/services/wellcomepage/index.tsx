import Button from "components/button";
import "./index.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import Heading from "components/heading";

const Wellcome: React.FC = () => {
    const nav = useNavigate();
  
    const handleSignup = () => {
      nav("/signup");
      window.scrollTo(0, 0);
    };
  
    const handleSignin = () => {
      nav("/signin");
      window.scrollTo(0, 0);
    };
    return (
      <>
        <div className="pagebackground">
          <Heading title="">Press the button</Heading>
          
        </div>
        <div className="wellcome-buttons">
          <Button onClick={handleSignup} className="button button--primary">
            Sign Up
          </Button>
          <Button onClick={handleSignin} className="button button--outline">
            Sign In
          </Button>
        </div>
       
      </>
    );
  };
  
  export default Wellcome