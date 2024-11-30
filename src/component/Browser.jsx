import React from 'react';
import Head from './Head';
import useNowPlaying from '../utils/useNowPlaying';
import VideoContainer from './VideoContainer';

function Browser() {

  const nowPlaying = useNowPlaying()

  return (
    <div className='w-full  bg-slate-600  h-full'>
      <div id="head">
      <Head />
      </div>

      <main>
      <div id="video-container">
      <VideoContainer/>
      </div>
      <div id="movies-container">

      </div>
      </main>
      <footer>

      </footer>
      
    </div>
  );
}

export default Browser;
