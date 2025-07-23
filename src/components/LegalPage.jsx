import React from 'react';
import SmallHeader from './SmallHeader'; // Header with smaller logo
import '../LegalPage.css';

const content = {
  privacy: {
    title: "Privacy Policy",
    body: (
      <>
        <p>
          This website, Shadowfall.com (our “Site”) is operated by ShadowFall Capital & Research LLP (“we”).
        </p>
        <p>
          We are registered in England and Wales under company number OC415602 and are authorised and regulated by the Financial Conduct Authority (“FCA”) (Firm Reference Number 782080).
        </p>
        <h2>Who We Are</h2>
        <p>
          Our registered office address is 55 Bartholomew Close, London, EC1A 7BF.
        </p>
        <h2>What This Policy Covers</h2>
        <p>
          This Privacy Policy applies to the personal information we collect from our Site and how we may use it.
        </p>
        <p>
          The terms “you”, “your” and “yours” when used in this Privacy Policy refer to any visitor to or user of this Site.
        </p>
        <h2>Data Protection</h2>
        <p>
          Any personal information you supply to us via the Site (and by other means) will be treated in accordance with applicable data protection law (see Your Personal Data and Your Legal Rights section below).
        </p>
        <p>
          Where you provide us with personal information relating to others via the Site, you confirm that you have their consent or are otherwise entitled to provide this information to us and for us to use it in the ways described in this Policy.
        </p>
        <h2>Acceptance</h2>
        <p>
          By proceeding with access to the Site you are deemed to have accepted the Terms and Conditions (including the terms of this Privacy Policy).
        </p>
        <p>
          If you do not agree with the Terms and Conditions as they apply to the Site, then please refrain from accessing or using the Site.
        </p>
        <p>
          This Privacy Policy applies to the personal information we collect from our Site and how we may use it.
        </p>
        <p>
          The terms “you”, “your” and “yours” when used in this Privacy Policy refer to any visitor to or user of this Site.
        </p>
        <h2>Data Protection</h2>
        <p>
          Any personal information you supply to us via the Site (and by other means) will be treated in accordance with applicable data protection law (see Your Personal Data and Your Legal Rights section below).
        </p>
        <p>
          Where you provide us with personal information relating to others via the Site, you confirm that you have their consent or are otherwise entitled to provide this information to us and for us to use it in the ways described in this Policy.
        </p>
        <h2>Acceptance</h2>
        <p>
          By proceeding with access to the Site you are deemed to have accepted the Terms and Conditions (including the terms of this Privacy Policy).
        </p>
        <p>
          If you do not agree with the Terms and Conditions as they apply to the Site, then please refrain from accessing or using the Site.
        </p>
      </>
    )
  },
  terms: {
    title: "Terms and Conditions",
    body: "These are our terms..."
  },
  shareholder: {
    title: "Shareholder Rights Directive",
    body: "Information about shareholder rights..."
  },
  stewardship: {
    title: "UK Stewardship Code",
    body: "Details about our commitment to stewardship..."
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
