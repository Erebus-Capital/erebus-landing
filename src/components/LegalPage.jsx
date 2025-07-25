import React from 'react';
import SmallHeader from './SmallHeader'; // Header with smaller logo
import '../LegalPage.css';

const content = {
  privacy: {
    title: "Privacy Policy",
    body: <>"Coming Soon"</>
  },
  cookies: {
    title: "Cookie Policy",
    body: <>"Coming Soon"</>
  },
  terms: {
    title: "Terms and Conditions",
    body: <>"Coming Soon"</>
  },
  investor: {
    title: "Investor Privacy",
    body: <>"Coming Soon"</>
  },
  disclosure: {
    title: "Disclosure",
    body: <>"Coming Soon"</>
  }
};

const LegalPage = ({ page }) => {
  const current = content[page];

  return (
    <div className="legal-wrapper">
  <div className="legal-content-container">
    <SmallHeader />
    <div className="legal-body">
      <h1>{current.title}</h1>
      <p>{current.body}</p>
    </div>
  </div>
</div>
  );
};

export default LegalPage;
