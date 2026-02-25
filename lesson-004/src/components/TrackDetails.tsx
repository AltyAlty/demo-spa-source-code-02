import {useState, useEffect} from 'react';

type PropsType = { trackId: string | null };

type TrackDetailsResourceType = {
    id: string
    attributes: {
        title: string
        lyrics: string | null
    }
};

export function TrackDetails({trackId}: PropsType) {
    const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResourceType | null>(null);

    useEffect(() => {
        if (!trackId) {
            setSelectedTrack(null);
            return;
        }

        fetch(`${import.meta.env.VITE_BASE_URL}playlists/tracks/${trackId}`, {
            headers: {'api-key': import.meta.env.VITE_API_KEY}
        })
            .then(res => res.json())
            .then(json => setSelectedTrack(json.data));
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