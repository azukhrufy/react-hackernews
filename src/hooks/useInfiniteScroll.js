import { useState, useEffect } from 'react';
import { MAX_STORIES, STORIES_INCREMENT } from '../constants/index';

export const useInfiniteScroll = () => {
	const [loading, setloading] = useState(false);
	const [count, setCount] = useState(STORIES_INCREMENT);

	const handleScroll = () => {
		if (
			window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight ||
			loading
		) {
            return false;
		}
        setloading(true);
	};

    useEffect(() => {
        if(!loading) return;
        if(count + STORIES_INCREMENT >= MAX_STORIES){
            setCount(MAX_STORIES);
        }else{
            setCount(count + STORIES_INCREMENT);
        }
        setloading(false);
    }, [loading]);

    useEffect(() => {
        window.addEventListener('scroll',handleScroll);
        return () => {
            window.removeEventListener('scroll',handleScroll);
        }
    }, []);

    return {count};
};
