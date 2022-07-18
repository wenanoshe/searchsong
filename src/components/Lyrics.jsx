import React, { useState } from 'react';

// <p>The resource could not be accessed</p>
export default function Lyrics ({ lyrics, title }) {

  return (
    <div style={{marginTop: '4rem'}}>
      <h3>{title}</h3>
      <blockquote style={{ whiteSpace: 'pre-wrap'}}>{lyrics}</blockquote>
    </div>
  )
}
