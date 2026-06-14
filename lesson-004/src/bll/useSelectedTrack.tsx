import {useEffect, useState} from 'react';
import {api, type TrackDetailsResourceType} from '../dal/api.ts';

export const useSelectedTrack = (trackId: string | null): { selectedTrack: TrackDetailsResourceType | null } => {
    const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResourceType | null>(null);

    useEffect(() => {
        if (!trackId) {
            setSelectedTrack(null);
            return;
        }

        api.getTrack(trackId).then(json => setSelectedTrack(json.data));
    }, [trackId]);

    return {selectedTrack};
};