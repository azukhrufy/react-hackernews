import React, {useEffect, useState} from 'react';
import { getStory } from "../services/hnApi";
import {StoryWrapper} from '../styles/StoryStyles';


export const Story = ({storyId}) => {
    const [story, setStory] = useState({});
    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data)); // validation when get stories
    }, []); 
    return story && story.url ? (
        <StoryWrapper data-testid="story">
            <a href={story.url}>{story.title}</a>
            <p></p>
            By : <p>{story.by}</p>
            Posted : <p>{story.time}</p>
        </StoryWrapper>
    ): null;
}