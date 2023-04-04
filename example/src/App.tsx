import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import {pull} from 'bear-jsutils/array';
import {simpleDate} from 'bear-jsutils/date';

import './App.css';
import './bootstrap-base.min.css';




function App() {

    const res = pull(['a', 'b'], 'c').join('-');
    const date = simpleDate('2023-04-04');

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <div>
                <code>
                   import {pull} from 'bear-jsutils/array';

                   const res = pull(['a', 'b'], 'c').join('-');
                </code>
                {res}
                </div>
                <div>
                    <code>
                        import {simpleDate} from 'bear-jsutils/date';

                        const date = simpleDate('2023-04-04');
                    </code>
                    {date}
                </div>

                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>

        </div>
    );
}

export default App;
