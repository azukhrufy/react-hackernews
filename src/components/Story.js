import React, {useEffect, useState} from 'react';
import { getStory } from "../services/hnApi";
import {StoryTitles, StoryWrapper, StoryMeta, StoryMetaElement} from '../styles/StoryStyles';


export const Story = ({storyId}) => {
    const [story, setStory] = useState({});
    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data)); // validation when get stories
    }, []); 
    return story && story.url ? (
        <StoryWrapper data-testid="story">
            <StoryTitles>
            <a href={story.url}>{story.title}</a>
            </StoryTitles>

            <StoryMeta>
                <span className="story__by" data-testid="story-by">
                <StoryMetaElement color="#000">By :</StoryMetaElement>{story.by}
                </span>
                <span className="story__time" data-testid="story-time">
                <StoryMetaElement color="#000">Posted :</StoryMetaElement>{` `}
                {story.time}
                </span>
            </StoryMeta>
        </StoryWrapper>
    ): null;
}