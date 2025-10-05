export function App() {
    const tracks = [
        {
            title: 'Musicfun soundtrack',
            url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'
        },

        {
            title: 'Musicfun soundtrack instrumental',
            url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3'
        },
    ];

    const track01El = <li>
        <div>{tracks[0].title}</div>
        <audio src={tracks[0].url} controls></audio>
    </li>;

    const track02El = <li>
        <div>{tracks[1].title}</div>
        <audio src={tracks[1].url} controls></audio>
    </li>;

    const tracks01Els = [track01El, track02El];

    const tracks02Els = tracks.map(
        (track, index) => {
            return (
                <li key={index}>
                    <div>{track.title}</div>
                    <audio src={track.url} controls></audio>
                </li>
            )
        }
    );

    return (
        <div>
            <h1>Musicfun Player</h1>

            <ul>
                <h3>001</h3>

                <li>
                    <div>Musicfun soundtrack</div>
                    <audio src="https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3" controls></audio>
                </li>

                <li>
                    <div>Musicfun soundtrack instrumental</div>
                    <audio src="https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3"
                           controls></audio>
                </li>

                <hr></hr>
                <h3>002</h3>

                <li>
                    <div>{tracks[0].title}</div>
                    <audio src={tracks[0].url} controls></audio>
                </li>

                <li>
                    <div>{tracks[1].title}</div>
                    <audio src={tracks[1].url} controls></audio>
                </li>

                <hr></hr>
                <h3>003</h3>

                {track01El}
                {track02El}

                <hr></hr>
                <h3>004</h3>

                {/*React может распарсить массив и отрисовать его элементы сам автоматически.*/}
                {tracks01Els}

                <hr></hr>
                <h3>005</h3>

                {tracks02Els}

                <hr></hr>
                <h3>006</h3>

                {
                    tracks.map(
                        (track, index) => {
                            return (
                                <li key={index}>
                                    <div>{track.title}</div>
                                    <audio src={track.url} controls></audio>
                                </li>
                            )
                        }
                    )
                }
            </ul>
        </div>
    );
};
