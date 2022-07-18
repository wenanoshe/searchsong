import React from 'react';

export default function Artist ( bio ) {

   let info = bio.bio.artists[0];
  
  return (
   <div>
      <h3>Name: {info.strArtist}</h3>
      <img src={info.strArtistThumb} />
      <p>{info.intBornYear} - {info.intDiedYear || 'Present'}</p>
      <p>Birthplace: {info.strCountry}</p>
      <p>Gere: {info.strGenre}</p>
      <a href={info.strWebsite} target='_blank' rel='noreferrer' >Web Site</a>
      <p>{info.strBiographyEN}</p>
   </div>
  )
}
