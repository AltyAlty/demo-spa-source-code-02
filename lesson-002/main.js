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

const rootDivElement = document.getElementById('root');

const h1Element = document.createElement('h1');
h1Element.innerText = 'Musicfun Player';
rootDivElement.append(h1Element);

const ulElement = document.createElement('ul');

tracks.forEach((track, i) => {
    const liElement = document.createElement('li');

    const divElement = document.createElement('div');
    divElement.innerHTML = track.title;
    liElement.append(divElement);

    const audioElement = document.createElement('audio');
    audioElement.src = track.url;
    audioElement.controls = true;
    liElement.append(audioElement);

    ulElement.append(liElement);
});

rootDivElement.append(ulElement);