import React from 'react';
import { Helmet } from 'react-helmet';

export default function MetaHelmet({ title = "Farpy Grid Console", description = "Decentralized rendering for the chaos age. Powered by CoolBeans™ and NodeMonks." }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/og-farpy-preview.png" />
      <meta property="og:url" content="https://farpy-mvp-1de43.web.app" />
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
}
