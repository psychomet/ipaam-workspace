import React from 'react';
import { Helmet } from 'react-helmet-async';

/* eslint-disable-next-line */
export interface HtmlMetaProps {
  title: React.ReactNode;
  disableSiteName?: boolean;
}

export function HtmlMeta(props: HtmlMetaProps) {
  const siteName = props.disableSiteName ? '' : ` توبانک | ToBank`;

  return (
    <Helmet>
      <title>
        {props.title ? props.title + ' | ' : ''}
        {siteName}
      </title>
    </Helmet>
  );
}

export default HtmlMeta;
