import React from 'react';
import PageWrapper from '../PageWrapper/PageWrapper';
import Page from '../Page/Page';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

export default function ({ albumIds = [], pathname }) {
  return (
    <PageWrapper>
      <Page>
        {albumIds.map((id) => {
          return (
            <Link to={`${pathname}/${id}`} key={`key-${id}`}>
              <Card title={`Album ${id}`} className="flex" />
            </Link>
          );
        })}
      </Page>
    </PageWrapper>
  );
}
