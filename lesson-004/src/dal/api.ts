export type TrackDetailsResourceType = {
    id: string
    attributes: {
        title: string
        lyrics: string | null
    }
};

type GetTrackDetailsOutputType = { data: TrackDetailsResourceType };

type getTrackType = (trackId: string) => Promise<GetTrackDetailsOutputType>

type TrackAttachmentType = Array<{ url: string }>;

type TrackListItemAttributes = {
    title: string
    attachments: TrackAttachmentType
};

export type TrackListItemResourceType = {
    id: string
    attributes: TrackListItemAttributes
};

type GetTrackListOutputType = { data: Array<TrackListItemResourceType> };

type getTracksType = () => Promise<GetTrackListOutputType>;

export const getTrack: getTrackType = (trackId) => {
    return fetch(`${import.meta.env.VITE_BASE_URL}playlists/tracks/${trackId}`, {
        headers: {'api-key': import.meta.env.VITE_API_KEY}
    })
        .then(res => res.json());
};

export const getTracks: getTracksType = () => {
    return fetch(`${import.meta.env.VITE_BASE_URL}playlists/tracks`, {
        headers: {'api-key': import.meta.env.VITE_API_KEY}
    })
        .then(res => res.json());
};