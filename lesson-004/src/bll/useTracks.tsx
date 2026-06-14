import {useState, useEffect} from 'react';
import {api, type TrackListItemResourceType} from '../dal/api.ts';

export const useTracks = (): {
    tracks: TrackListItemResourceType[] | null,
    refreshTracks: () => void
} => {
    const [tracks, setTracks] = useState<Array<TrackListItemResourceType> | null>(null);
    useEffect(() => { api.getTracks().then(json => setTracks(json.data)); }, []);

    const refreshTracks = (): void => {
        setTracks(null);
        api.getTracks().then(json => setTracks(json.data));
    };

    return {tracks, refreshTracks};
};