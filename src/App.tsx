import './App.css';

import aries from './assets/svg/aries.svg';
import ConstellationComponent from './components/Constellation';
import { Constellation } from './components/Constellation/Constellation.types';
import data from './data';

function App() {
  const zodiacConstellations: Constellation[] = data.zodiacConstellations;

  return (
    <div className="App">
      <header className="App-header">
        <div className="body">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              position: 'relative',
              width: '100%',
              height: '100vh',
            }}
          >
            <img src={aries} alt="aries" />
            {zodiacConstellations.map((constellation, index) => (
              <ConstellationComponent key={index} constellation={constellation} />
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
