import React, {useEffect, useState} from 'react';
import { getStory } from "../services/hnApi";


export const Story = ({storyId}) => {
    const [story, setStory] = useState({});
    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data)); // validation when get stories
    }, []); 
    return story && story.url ? (
        <div>
            <a href={story.url}>{story.title}</a>
            <p></p>
            By : <p>{story.by}</p>
            Posted : <p>{story.time}</p>
        </div>
    ): null;
}