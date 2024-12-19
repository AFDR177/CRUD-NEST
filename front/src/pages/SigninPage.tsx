import Page from "components/page";

import React from "react";
import Signin from "services/signin";



export const SigninPage: React.FC = () => {
  return (
    <Page className="authpage">
      <Signin />
    </Page>
  );
};