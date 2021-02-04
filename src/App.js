import React, {useEffect, useState} from 'react';
import {getStoryIds} from '../src/services/hnApi';

export const App = () => {
  const [storyIds, setStoryIds] = useState();

  useEffect(() => {
    getStoryIds().then(result => setStoryIds(result));
    // console.log(getStoryIdeas());
  }, []);
  
  return (
    <div>
      <p>{JSON.stringify(storyIds)}</p>
    </div>
  )
}

export default App;

