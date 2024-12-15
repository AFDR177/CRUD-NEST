import Page from 'components/page';
import React from 'react';
import Wellcome from 'services/wellcomepage';

export const WellcomePage: React.FC = () => {
    return (
      <Page className="welcomepage">
        <Wellcome />
      </Page>
    );
  };