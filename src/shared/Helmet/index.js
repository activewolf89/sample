import React from 'react';
import Div from 'shared/Div';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';


// -----
const funcC0mp = (props) =>{
  return (
  <Helmet>
    <title>{props.title}</title>
    <meta name={props.name} content={props.content} />
    <link rel='canonical' href={props.href} />
  </Helmet>
  )
}
funcC0mp.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}
export default funcC0mp;
