import { useState } from 'react';
import './App.css';
// import randColor from './Functions/randColor';
// import { v4 as uuidv4 } from 'uuid';
// generuojamas random stringas


function App() {

    const [text, setText] = useState('');
    const [select, setSelect] = useState('tree');
    const [cb, setCb] = useState({a: false, b: false, c:true, d:true});
    const [radio, setRadio] = useState('c');
    const [color, setColor] = useState('');

    const inputText = e => {
        // ideti nulius i pradzia stringo, kiek truksta
        console.log('gfh'.padStart(10, 0));
        console.log(e.target.value);
        setText(e.target.value);
    }

    const cbClick = c => {
        // geltoni, apvalus skliausteliai reikalingi, kad react supratu, jog perduodam objekta
        setCb(checkBox => ({...checkBox, [c]: !checkBox[c]}))
    }


    const inputColor = e => {
     setColor(e.target.value);
    }

    return (
        <div className="App">
            <header className="App-header">
                <fieldset>
                    <legend>Input</legend>
                    <input type="text" onChange={inputText} value={text}></input> 
                </fieldset>


                <fieldset>
                <legend>Selector</legend>
                <select value={select} onChange={e => setSelect(e.target.value)}>
                    <option value="one">vienas</option>
                    <option value="two">du</option>
                    <option value="tree">trys</option>
                    <option value="ten">daug</option>
                </select>
                </fieldset>

                <fieldset>
                    <legend>Checkbox</legend>
                    A<input type="checkbox" onChange={() => cbClick('a')} checked={cb.a}></input>
                    B<input type="checkbox" onChange={() => cbClick('b')} checked={cb.b}></input>
                    C<input type="checkbox" onChange={() => cbClick('c')} checked={cb.c}></input>
                    D<input type="checkbox" onChange={() => cbClick('d')} checked={cb.d}></input>
                </fieldset>

                <fieldset>
                    <legend>Radio button</legend>
                    A<input type="radio" name='r' value='a' onChange={e => setRadio(e.target.value)} checked={radio === 'a'}></input>
                    B<input type="radio" name='r' value='b' onChange={e => setRadio(e.target.value)} checked={radio === 'b'}></input>
                    C<input type="radio" name='r' value='c' onChange={e => setRadio(e.target.value)} checked={radio === 'c'}></input>
                    D<input type="radio" name='r' value='d' onChange={e => setRadio(e.target.value)} checked={radio === 'd'}></input>
                </fieldset>

                <fieldset>
                    <legend>uzdavinukas</legend>
                    <input type="color" value={color} onChange={inputColor}></input> 
                    <div className="karve"  style={{backgroundColor: color}}></div>
                </fieldset>
            </header>
        </div>
    );
}


export default App;
