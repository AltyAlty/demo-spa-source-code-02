import {useState, useEffect} from 'react';
import {getTrack, type TrackDetailsResourceType} from '../dal/api.ts';

type PropsType = { trackId: string | null };

export function TrackDetails({trackId}: PropsType) {
    const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResourceType | null>(null);

    useEffect(() => {
        if (!trackId) {
            setSelectedTrack(null);
            return;
        }

        getTrack(trackId).then(json => setSelectedTrack(json.data));
    }, [trackId]);

    return <div>
        <h3>Details</h3>

        {!selectedTrack && !trackId && 'No track selected'}
        {!selectedTrack && trackId && 'Loading...'}
        {selectedTrack && (
            <div>
                <h3>{selectedTrack.attributes.title}</h3>
                <p>{selectedTrack.attributes.lyrics ?? 'no lyrics'}</p>
            </div>
        )}
    </div>;
};