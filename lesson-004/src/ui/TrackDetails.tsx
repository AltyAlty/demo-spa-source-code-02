import {useSelectedTrack} from '../bll/useSelectedTrack.tsx';
import type {TrackDetailsResourceType} from '../dal/api.ts';

type PropsType = { trackId: string | null };

export const TrackDetails = ({trackId}: PropsType) => {
    const {selectedTrack}: { selectedTrack: TrackDetailsResourceType | null } = useSelectedTrack(trackId);

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