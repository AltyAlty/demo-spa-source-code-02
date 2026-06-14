import type {TrackListItemResourceType} from '../dal/api.ts';

type PropsType = {
    track: TrackListItemResourceType
    isSelected: boolean
    onTrackSelectedClick: (trackId: string) => void
};

export const TrackItem = ({track, isSelected, onTrackSelectedClick}: PropsType) => {
    const handleTrackSelectedClick = (): void => onTrackSelectedClick?.(track.id);

    return <li key={track.id} style={{border: isSelected ? '1px solid orange' : 'none'}}>
        <div onClick={handleTrackSelectedClick}>{track.attributes.title}</div>
        <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>;
};