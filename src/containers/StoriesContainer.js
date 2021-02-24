import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnApi';
import { Story } from '../components/Story';
import { StoriesContainerWrapper, GlobalStyle } from '../styles/StoriesContainerStyles';

export const StoriesContainer = () => {
	const [storyIds, setStoryIds] = useState([]);

	useEffect(() => {
		getStoryIds().then((result) => setStoryIds(result));
	}, []);

	return (
		<>
			<GlobalStyle />
			<StoriesContainerWrapper data-test-id="stories-container">
				<h1>Hacker News Stories</h1>
				{storyIds.map((storyId) => (
					<Story key={storyId} storyId={storyId} />
				))}
			</StoriesContainerWrapper>
		</>
	);
};
