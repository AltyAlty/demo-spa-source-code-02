import {useState} from 'react';

const tracks = [
    {
        id: 1,
        title: 'Musicfun soundtrack',
        url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'
    },
    {
        id: 2,
        title: 'Musicfun soundtrack instrumental',
        url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3'
    }
];

export function App() {
    const [selectedTrackId, setSelectedTrackId] = useState(null);

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
                                {track.title}
                            </div>
                            <audio src={track.url} controls></audio>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};