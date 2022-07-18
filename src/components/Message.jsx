import React from 'react';

export default function Message ({ msg, bgColor }) {
  let styles = {
    padding: '1rem',
    marginBottom: '1rem',
    textAlign: 'center',
    backgroundColor: bgColor,
    color: 'var(--semi-white)',
    fontWeight: 'bold',
    borderRadius: 'var(--rad)'
  }
 
  return (
    <div style={styles}>
      <p>{msg}</p>
    </div>
  )
}
