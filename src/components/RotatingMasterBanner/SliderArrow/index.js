import React from 'react'

import FontAwesome from 'react-fontawesome';
require('../arrows.css')
export default ({className, to, onClick}) => (
  <div className="arrows">

    <button type="button" onClick={onClick} className={`button button--text button--icon ${className}`} aria-label={to}>
      <FontAwesome name="caret-left" icon={to} />
    </button>
</div>
)
