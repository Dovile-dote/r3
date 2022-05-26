import './App.css';
import {useEffect, useState} from 'react';
import rand from './Functions/rand'

// REACT useState & useEffect PROJECT (MyLittleFarm)


// Sukurti tuščią “Ganyklą”. Ją padalinti į dvi dalis su užrašais- Avys ir Karvės. Sukurti mygtuką “į ganyklą”, kurį paspaudus dešinė pusė būtų apgyvendinta avimis, kurias vaizduoja apskritimai, o kairė pusė karvėmis, kurias vaizduoja keturkampiai. Avių ir karvių skaičius rand 5 - 20. Kiekvieno gyvulio viduje yra random identifikacinis numeris: pvz avim A0254787, karvėm K0007898, kur skaičius yra septynženklis rand skaičius. Perkrovus puslapį avių ir karvių skaičius ir jų identifikaciniai numeriai turi nekisti (tik patį pirmą kartą “Ganykla” turi būti tuščia). Paspaudus ant avies arba karvės ji turi perbėgti į priešingą ganyklos pusę (antrą kartą paspaudus grįžti atgal). Perkrovus puslapį perbėgimai turi išlikti nepakitę. Pakartotinai paspaudus “į ganyklą”, turi atsirasti nauji gyvuliai, kaip ir pirmą kartą.

// Pastaba: karvė avių ganyklos pusėje lieka karve, o avis- avimi. Nemutuojam! Perbėgusios avys ir karvės yra dedamos į bandos galą. 


function App() {
  const [avis, setAvis] = useState(null);
  const [karve, setKarve] = useState(null);

  const addAnimals = () => {
    for(let i = 0; i <= rand(1, 5); i++ ) {
      setAvis(k => [...k, ['A' + rand(0, 9999999), 'avis']]); 
    }
    for(let i = 0; i <= rand(1, 5); i++ ) {
      setKarve(k => [...k, ['K' + rand(0, 9999999), 'karve']]);
    }
  }

  const migracija = () => {
    // console.log(avis);
    // console.log(avis.indexOf(avis.key));
    setKarve(k => [...k, avis[0]]);
    setAvis(k => k.slice(1));
  }

  const migracija2 = () => {
    setAvis(k => [...k, karve[0]]);
    setKarve(k => k.slice(1));
  }

  const remAnimals = () => {
    setAvis(k => k.slice(-1, (k.length-1)));
    setKarve(k => k.slice(-1, (k.length-1)))
    }

  useEffect(() => {
    setAvis(JSON.parse(localStorage.getItem('avis') ?? '[]'));
  }, []);

  useEffect(() => {
    setKarve(JSON.parse(localStorage.getItem('karve') ?? '[]'));
  }, []);

  useEffect(() => {
    if (null === avis) {
      return;
    }
    localStorage.setItem('avis', JSON.stringify(avis));
  }, [avis]);

  useEffect(() => {
    if (null === karve) {
      return;
    }
    localStorage.setItem('karve', JSON.stringify(karve));
  }, [karve]);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={addAnimals}>i ganykla</button>
        <div className="ganykla">
          <div className='avys'>
            <h2>Avys</h2>
            <div className="flex">
              {
                avis ? avis.map((av, i) => <div className={av[1]} key={i} onClick={migracija}>{av[0]}</div>) : null
              }
            </div>
          </div>
                
          <div className='karves'>
            {/* <button onClick={addKarve}>ADD [2]</button> */}
            <h2>Karves</h2>
            <div className="flex">
              {
                karve ? karve.map((c, i) => <div className={c[1]} key={i} onClick={migracija2}>{c[0]}</div>) : null
              }
            </div>
          </div>
        </div>
        <button onClick={remAnimals}>is naujo</button>
      </header>
    </div>
  );
}

export default App;