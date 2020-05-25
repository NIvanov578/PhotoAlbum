import React from 'react';
import './Page.css';

function Page({ children }) {
  return <article className="content">{children}</article>;
}

export default Page;
