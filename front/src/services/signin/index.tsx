import "./index.scss";

import React from "react";
// import { AuthContext } from "../../App";
import Title from "components/title";
import BackButton from "components/back-button";
import FormField from "components/formfield";
import Grid from "components/grid";
import Box from "components/box";

export const Signin: React.FC = () => {
  // const auth = useContext(AuthContext);

  return (
    <Grid>
      <Box>
      
      <Title title="Entrance" desctiption="Please enter your login details" />
      
      <div className="page_name">
      <BackButton />
      <FormField
        button="Continue"
        name = {true}
        email={true}
        alert={true}
        // pass={true}
        // textField={false}
        // text="Code"
        question="Forgot your password?"
        link={
          <a href="/#" className="feild__link-signin">
            Restore
          </a>
        }
        questionOff={true}
        
        // auth={auth}
      />
      </div>
      </Box>
      </Grid>
  );
};

export default Signin;
