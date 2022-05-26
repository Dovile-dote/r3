import './App.css';
import {useState} from 'react';
import randColor from './Functions/randColor';
import { v4 as uuidv4 } from 'uuid';
// generuojamas random stringas


function App() {
    const [avys, setAvys] = useState([]);

    const newA = () => {
        const avis = {
            id: uuidv4(), 
            color: randColor(), 
            where: 'ganykla'
        }
    setAvys(a => [...a, avis])
    }

    const go = id => {
        // setAvys(a => a.map(avis => avis.id === id ? {...avis, where: 'kirpykla'} : avis))
    
   
    setAvys(a => {
         // issiimam avi
        const avele = a.filter(av => av.id === id)[0];
        avele.where = 'kirpykla';
        const kitos = a.filter(av => av.id !== id);
        return [...kitos, avele];

    });
    }

    return (
        <div className="App">
          <header className="App-header">
          <div className="flex">
              {
                avys.filter(a => a.where === 'kirpykla').map(a => <div className='avis' key={a.id} style={{background:a.color}}></div>)
              }
            </div>
            <h1>AVYS</h1>
            <div className="flex">
              {
                avys.filter(a => a.where === 'ganykla').map(a => <div onClick={() => go(a.id)} className='avis' key={a.id} style={{background:a.color}}></div>)
              }
            </div>
              <button onClick={newA}>Naujas Avinas</button>
          </header>
        </div>
      );
    }


export default App;
