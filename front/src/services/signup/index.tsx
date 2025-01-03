import "./index.scss";

import React from "react";
// import { AuthContext } from "../../App";
import Title from "components/title";
import BackButton from "components/back-button";
import FormField from "components/formfield";
import Box from "components/box";
import Grid from "components/grid";

export const Signup: React.FC = () => {
  // const auth = useContext(AuthContext);

  return (
    <Grid>
      <Box>
        <Title
          title="Registration"
          desctiption="Введите данные для регистрации"
        />
        <div className="page_name">
          <BackButton />
          <FormField
            button="Continue"
            name={true}
            email={true}
            alert={true}
            // pass={true}
            // textField={false}
            // text="Code"
            question="Already have an account?"
            link={
              <a href="/signin" className="feild__link-signin">
                Sign In
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

export default Signup;
