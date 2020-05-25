import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import PageWrapper from '../PageWrapper/PageWrapper';
import Page from '../Page/Page';
import Loader from 'react-loader-spinner';
export default function () {
  return (
    <PageWrapper>
      <Page>
        <Loader type="Puff" color="#00BFFF" height={300} width={300} />
      </Page>
    </PageWrapper>
  );
}
