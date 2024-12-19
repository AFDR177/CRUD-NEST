import Page from 'components/page';
import React from 'react';
import Wellcome from 'services/wellcomepage';
import '../styles/wellcomepage.scss'

export const WellcomePage: React.FC = () => {
    return (
      <Page className="wellcomepage">
        <Wellcome />
      </Page>
    );
  };