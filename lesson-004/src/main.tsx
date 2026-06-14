import {createRoot, type Root} from 'react-dom/client';
import './index.css';
import {MainPage} from './ui/MainPage.tsx';

const rootEl: HTMLElement | null = document.getElementById('root')!;
const reactRootEl: Root = createRoot(rootEl);
reactRootEl.render(<MainPage/>);