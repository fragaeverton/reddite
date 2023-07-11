import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import { fetchSubreddits, selectSubreddits } from '../../store/subRedditSlice';
import './Subreddits.css';

const Subreddits = () => {
    
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch]);
    return (
        <Card className="subreddit-card">
            <h2>Subreditts</h2>
            <ul className="subreddits-list">
            {
                subreddits.map((subreddit) => (
                    <li key={subreddit.id}>
                        <button type='button'>
                            <img src={subreddit.icon_img || `https://api.adorable.io/avatars/25/${subreddit.display_name}`}
                                alt={`${subreddit.display_name}`}
                                className="subreddit-icon"
                                style={{ border: `3px solid ${subreddit.primary_color}` }}/>
                            {subreddit.display_name}
                        </button>
                    </li>
                ))
            }
            </ul>
        </Card>
    )
}

export default Subreddits;