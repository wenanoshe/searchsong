import React from 'react';

import Lyrics from './Lyrics';
import Artist from './Artist';
import Message from './Message';
import './styles/SongDetails.css';

export default function SongDetails ({ search, lyric, bio }) {
  
   if(!lyric || !bio) return null;

  return (
   <div className='songDetails'>
      {
         lyric.error || lyric.err || lyric.name === "AbortError" 
         ? <Message msg={`Error, the song "${search.song}" doesn't exist`} bgColor='#dc3545' /> 
         : <Lyrics title={search.song} lyrics={lyric.lyrics}/>
      }

     { bio.artists 
         ? <Artist bio={bio}/> 
         :(
            <Message 
               msg={`Error, the performer "${search.artist}" doesn't exits`} 
               bgColor='#dc3545' 
            />
         )
     }

   </div>
  )
}
