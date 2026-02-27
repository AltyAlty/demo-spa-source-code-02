import {useState, useEffect} from 'react';
import {TrackItem} from './TrackItem.tsx';
import {getTracks, type TrackListItemResourceType} from '../dal/api.ts';

type PropsType = {
    selectedTrackId: string | null
    onTrackSelected: (trackId: string | null) => void
};

export function TracksList({selectedTrackId, onTrackSelected}: PropsType) {
    const [tracks, setTracks] = useState<Array<TrackListItemResourceType> | null>(null);

    useEffect(() => {
        getTracks().then(json => setTracks(json.data));
    }, []);

    if (!tracks) return <div><span>Loading ...</span></div>;
    if (tracks.length === 0) return <div><span>No tracks</span></div>;
    const onResetSelectionClick = () => onTrackSelected?.(null);
    const onTrackSelectedClick = (trackId: string) => onTrackSelected?.(trackId);

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