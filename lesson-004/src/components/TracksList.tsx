import {useState, useEffect} from 'react';
import {TrackItem} from './TrackItem.tsx';

export function TracksList({selectedTrackId, onTrackSelected}) {
    const [tracks, setTracks] = useState(null);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}playlists/tracks`, {
            headers: {'api-key': import.meta.env.VITE_API_KEY}
        })
            .then(res => res.json())
            .then(json => setTracks(json.data));
    }, []);

    if (!tracks) return <div><span>Loading ...</span></div>;
    if (tracks.length === 0) return <div><span>No tracks</span></div>;
    const onResetSelectionClick = () => onTrackSelected?.(null);
    const onTrackSelectedClick = (trackId) => onTrackSelected?.(trackId);

    return <div>
        <button onClick={onResetSelectionClick}>Reset selection</button>

        <ul>
            {tracks.map((track) => <TrackItem
                key={track.id}
                track={track}
                isSelected={track.id === selectedTrackId}
                onTrackSelectedClick={onTrackSelectedClick}
            />)}
        </ul>
    </div>;
};