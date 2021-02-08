import React, {useEffect, useState} from 'react';
import {getStoryIds, getStory} from '../services/hnApi';
import { Story } from '../components/Story';

export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);
  
    useEffect(() => {
      getStoryIds().then(result => setStoryIds(result));
      // getStory('26061892').then(result => console.log(result));
      // console.log(getStoryIdeas());
    }, []);
    
    return storyIds.map(storyId => <Story storyId={storyId} /> );
  };