import {useState, useEffect} from 'react';

export function App() {
    const [tracks, setTracks] = useState(null);
    const [selectedTrackId, setSelectedTrackId] = useState(null);
    const [selectedTrack, setSelectedTrack] = useState(null);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}playlists/tracks`, {
            headers: {'api-key': import.meta.env.VITE_API_KEY}
        })
            .then(res => res.json())
            .then(json => setTracks(json.data));
    }, []);

    useEffect(() => {
        if (!selectedTrackId) return;

        fetch(`${import.meta.env.VITE_BASE_URL}playlists/tracks/${selectedTrackId}`, {
            headers: {'api-key': import.meta.env.VITE_API_KEY}
        })
            .then(res => res.json())
            .then(json => setSelectedTrack(json.data));
    }, [selectedTrackId]);

    if (!tracks) {
        return <div>
            <h1>Musicfun</h1>
            <span>Loading ...</span>
        </div>;
    }

    if (tracks.length === 0) {
        return <div>
            <h1>Musicfun</h1>
            <span>No tracks</span>
        </div>;
    }

    return (
        <div>
            <h1>Musicfun Player</h1>
            <button onClick={
                () => {
                    setSelectedTrackId(null);
                    setSelectedTrack(null);
                }
            }>
                Reset selection
            </button>

            <div style={{display: 'flex', gap: '30px'}}>
                <ul>
                    {tracks.map((track) => {
                        return (
                            <li key={track.id}
                                style={{border: track.id === selectedTrackId ? '1px solid orange' : 'none'}}
                            >
                                <div onClick={() => { setSelectedTrackId(track.id); }}>{track.attributes.title}</div>
                                <audio src={track.attributes.attachments[0].url} controls></audio>
                            </li>
                        );
                    })}
                </ul>

                <div>
                    <h3>Details</h3>

                    {!selectedTrack && !selectedTrackId && 'No track selected'}
                    {!selectedTrack && selectedTrackId && 'Loading...'}
                    {selectedTrack && (
                        <div>
                            <h3>{selectedTrack.attributes.title}</h3>
                            <p>{selectedTrack.attributes.lyrics ?? 'no lyrics'}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};