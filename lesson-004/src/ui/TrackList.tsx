import {TrackItem} from './TrackItem.tsx';
import {useTracks} from '../bll/useTracks.tsx';
import type {TrackListItemResourceType} from '../dal/api.ts';
import styles from './TrackList.module.css';

type PropsType = {
    selectedTrackId: string | null
    onTrackSelected: (trackId: string | null) => void
};

export const TrackList = ({selectedTrackId, onTrackSelected}: PropsType) => {
    const {tracks, refreshTracks}: {
        tracks: TrackListItemResourceType[] | null,
        refreshTracks: () => void
    } = useTracks();

    if (!tracks) return <div><span>Loading ...</span></div>;
    if (tracks.length === 0) return <div><span>No tracks</span></div>;
    const onResetSelectionClick = (): void => onTrackSelected?.(null);
    const onRefreshTracksClick = (): void => refreshTracks();
    const onTrackSelectedClick = (trackId: string): void => onTrackSelected?.(trackId);

    return <div>
        <button onClick={onResetSelectionClick}>Reset selection</button>
        <button onClick={onRefreshTracksClick}>Refresh tracks</button>

        <ul className={styles.tracks}>
            {tracks.map((track) => <TrackItem
                key={track.id}
                track={track}
                isSelected={track.id === selectedTrackId}
                onTrackSelectedClick={onTrackSelectedClick}
            />)}
        </ul>
    </div>;
};