import {useState, useEffect} from 'react';

export function App() {
    const [tracks, setTracks] = useState(null);
    const [selectedTrackId, setSelectedTrackId] = useState(null);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}playlists/tracks`, {
            headers: {
                'api-key': import.meta.env.VITE_API_KEY,
            }
        })
            .then(res => res.json())
            .then(json => setTracks(json.data));
    }, []);

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
            <button onClick={() => setSelectedTrackId(null)}>Reset selection</button>

            <ul>
                {tracks.map((track) => {
                    return (
                        <li key={track.id}
                            style={{border: track.id === selectedTrackId ? '1px solid orange' : 'none'}}
                        >
                            <div onClick={() => { setSelectedTrackId(track.id); }}>
                                {track.attributes.title}
                            </div>
                            <audio src={track.attributes.attachments[0].url} controls></audio>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};