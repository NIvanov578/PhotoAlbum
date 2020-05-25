import React from 'react';
import './PageWrapper.css';

function PageWrapper({ children }) {
  return <main className="wrapper">{children}</main>;
}

export default PageWrapper;
