import './App.css';

import aquarius from './assets/svg/aquarius.svg';
import aries from './assets/svg/aries.svg';
import cancer from './assets/svg/cancer.svg';
import capricorn from './assets/svg/capricorn.svg';
import gemini from './assets/svg/gemini.svg';
import leo from './assets/svg/leo.svg';
import libra from './assets/svg/libra.svg';
import pisces from './assets/svg/pisces.svg';
import sagittarius from './assets/svg/sagittarius.svg';
import scorpio from './assets/svg/scorpio.svg';
import taurus from './assets/svg/taurus.svg';
import virgo from './assets/svg/virgo.svg';
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
            <img src={aries} alt="aries" className="constellation" />
            <img src={taurus} alt="taurus" className="constellation" />
            <img src={gemini} alt="gemini" className="constellation" />
            <img src={cancer} alt="cancer" className="constellation" />
            <img src={leo} alt="leo" className="constellation" />
            <img src={virgo} alt="virgo" className="constellation" />
            <img src={libra} alt="libra" className="constellation" />
            <img src={scorpio} alt="scorpio" className="constellation" />
            <img src={sagittarius} alt="sagittarius" className="constellation" />
            <img src={capricorn} alt="capricorn" className="constellation" />
            <img src={aquarius} alt="aquarius" className="constellation" />
            <img src={pisces} alt="pisces" className="constellation" />
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
