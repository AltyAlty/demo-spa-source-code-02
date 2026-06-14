import type {TrackListItemResourceType} from '../dal/api.ts';
import styles from './TrackItem.module.css';
import clsx from 'clsx';

type PropsType = {
    track: TrackListItemResourceType
    isSelected: boolean
    onTrackSelectedClick: (trackId: string) => void
};

export const TrackItem = ({track, isSelected, onTrackSelectedClick}: PropsType) => {
    const handleTrackSelectedClick = (): void => onTrackSelectedClick?.(track.id);

    return <li className={clsx({[styles.track]: true, [styles.selected]: isSelected})} key={track.id}>
        <div onClick={handleTrackSelectedClick}>{track.attributes.title}</div>
        <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>;
};