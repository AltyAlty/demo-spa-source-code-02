import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {App} from './App.tsx';

/*В TypeScript знак "!" означает, что мы уверены, что какой-то элемент не равен null или undefined, даже если TypeScript
думает, что он может быть null.*/
const rootEl = document.getElementById('root')!;
const reactRootEl = createRoot(rootEl);

reactRootEl.render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
