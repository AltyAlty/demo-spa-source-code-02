type TrackAttachmentType = Array<{ url: string }>;

type TrackListItemAttributes = {
    title: string
    attachments: TrackAttachmentType
};

export type TrackListItemResourceType = {
    id: string
    attributes: TrackListItemAttributes
};

type PropsType = {
    track: TrackListItemResourceType
    isSelected: boolean
    onTrackSelectedClick: (trackId: string) => void
};

export function TrackItem({track, isSelected, onTrackSelectedClick}: PropsType) {
    const handleTrackSelectedClick = () => onTrackSelectedClick?.(track.id);

    return <li key={track.id}
               style={{border: isSelected ? '1px solid orange' : 'none'}}
    >
        <div onClick={handleTrackSelectedClick}>{track.attributes.title}</div>
        <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>;
};