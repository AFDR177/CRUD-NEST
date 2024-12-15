import "../styles/authpage.scss";
import Page from "components/page";

import React from "react";
import Signup from "../services/signup";



export const SignupPage: React.FC = () => {
  return (
    <Page className="authpage">
      <Signup />
    </Page>
  );
};