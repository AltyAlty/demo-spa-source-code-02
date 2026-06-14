import {PageTitle} from './PageTitle.tsx';
import {TrackList} from './TrackList.tsx';
import {TrackDetails} from './TrackDetails.tsx';
import {useSelectedTrackId} from '../bll/useSelectedTrackId.tsx';

export const MainPage = () => {
    const {selectedTrackId, setSelectedTrackId}: {
        selectedTrackId: string | null,
        setSelectedTrackId: (trackId: string | null) => void
    } = useSelectedTrackId();

    const onTrackSelectedClick = (trackId: string | null): void => setSelectedTrackId(trackId);

    return <div>
        <PageTitle/>

        <div style={{display: 'flex', gap: '30px'}}>
            <TrackList selectedTrackId={selectedTrackId} onTrackSelected={onTrackSelectedClick}/>
            <TrackDetails trackId={selectedTrackId}/>
        </div>
    </div>;
};