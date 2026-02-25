import {useState} from 'react';
import {PageTitle} from './PageTitle.tsx';
import {TracksList} from './TracksList.tsx';
import {TrackDetails} from './TrackDetails.tsx';

export function MainPage() {
    const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);
    const onTrackSelectedClick = (trackId: string | null) => setSelectedTrackId(trackId);

    return <div>
        <PageTitle/>

        <div style={{display: 'flex', gap: '30px'}}>
            <TracksList
                selectedTrackId={selectedTrackId}
                onTrackSelected={onTrackSelectedClick}
            />

            <TrackDetails trackId={selectedTrackId}/>
        </div>
    </div>;
}