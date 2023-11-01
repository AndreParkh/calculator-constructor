import React, { MouseEvent, useState } from 'react';
import './css/styles.css';
import { EyeSVG } from './svg/eyeSVG';
import { ConstructorSVG } from './svg/constructorSVG';
import { DisplayPanel } from './components/displayPanel/displayPanel';
import { ActionsPanel } from './components/actionsPanel/actionsPanel';
import { NumberPanel } from './components/numberPanel/numberPanel';
import { ToEquelPanel } from './components/toEquelPanel/panelToEquel';
import { ImageSVG } from './svg/imageSVG';
import cn from 'classnames'

function App() {  

  const [mode, setMode] = useState<'runtime' | 'constructor'>('constructor')

  const mouseDownHandler = (event: MouseEvent) => {
    if (event.target instanceof Element) {
      if (event.target.classList.contains('panel')) {
        console.log('In mouseDownHandler', event.target.classList)
        
      }
    }
  }


  return (
    <div className="App">
      <div className="container" onMouseDown={(e) => mouseDownHandler(e)}>
        <div className="slider__wrapper">
          <div className="slider">
            <button className= {cn({
              slider__runtime: true,
              slider__runtime__active: mode === 'runtime'
            })}
            onClick={() => setMode('runtime')}
            >
              <EyeSVG/>
              <p>Runtime</p>
            </button>
            <button className= {cn({
              slider__constructor: true,
              slider__constructor__active: mode === 'constructor'
            })}
            onClick={() => setMode('constructor')}
            > 
              <ConstructorSVG/>
              <span>Constructor</span>
            </button>
          </div>
        </div>
        <div className="app__body">
          <div className="constructor">
            <DisplayPanel/>
            <ActionsPanel/>
            <NumberPanel/>
            <ToEquelPanel/>
          </div>
          <div className="calculator">
            <ImageSVG/>
            <h2 className="">Перетащите сюда</h2>
            <p>любой элемент из левой панели</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
