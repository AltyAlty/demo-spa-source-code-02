import {useState} from 'react';

export const useSelectedTrackId = (): {
    selectedTrackId: string | null,
    setSelectedTrackId: (trackId: string | null) => void
} => {
    const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);
    return {selectedTrackId, setSelectedTrackId};
};