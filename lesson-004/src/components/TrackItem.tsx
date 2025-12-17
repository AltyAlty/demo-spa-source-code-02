export function TrackItem({track, isSelected, onTrackSelectedClick}) {
    const handleTrackSelectedClick = () => onTrackSelectedClick?.(track.id);

    return <li key={track.id}
               style={{border: isSelected ? '1px solid orange' : 'none'}}
    >
        <div onClick={handleTrackSelectedClick}>{track.attributes.title}</div>
        <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>;
};