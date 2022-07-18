import React, { useEffect, useState } from 'react';

import helpHttp from '../helpers/helpHttp.js';
import Form from './Form';
import SongDetails from './SongDetails';
import Loader from './Loader';

export default function SongSearch () {
  const [search, setSearch] = useState(null);
  const [lyric, setlyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loadding, setLoadding] = useState(false);
  
  const handleSearch = (data) => {
    setSearch(data)
  }

  useEffect(() => {
    if(search === null) return;

    const fetchData = async () => {
      const {artist, song} = search;

      let songURL = `https://api.lyrics.ovh/v1/${artist}/${song}`.replace(/ /g, '%20');

      let artistURL = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`.replace(/ /g, '%20');

      setLoadding(true);

       const [artistRes, songRes] = await Promise.all([
         helpHttp().get(artistURL),
         helpHttp().get(songURL),
       ])

       setlyric(songRes);
       setBio(artistRes);

       console.log(songRes);
       console.log(artistRes);

      setLoadding(false);
      
    }

    fetchData();
  }, [search])

  return (
    <>
      {loadding && <Loader />}
      <Form 
        handleSearch={handleSearch}
      />
     {
        search && !loadding && (
         <SongDetails
            search={search} 
            lyric={lyric}
            bio={bio}
         />
        )
     }
    </>
  )
}
