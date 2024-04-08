import { useState } from 'react';
import { Casillero } from './Casillero';
import './app.css';

function App() {
    const JUG_1 = 'X';
    const JUG_2 = 'O';
    
    const [tablero, setTablero] = useState(Array(9).fill(''));
    const [fichasResaltadas, setFichasResaltadas] = useState(Array(3).fill(''));

    const [juegoTerminado, setJuegoTerminado] = useState(false);
    const [turno, setTurno] = useState(JUG_1);

    const actualizarTablero = (indiceCasilla)=> {
      if(juegoTerminado || tablero[indiceCasilla] != 0){ return; }

      tablero[indiceCasilla] = turno;
      setTablero(tablero);
      cambiarTurno(indiceCasilla);
    }

    const cambiarTurno = (indiceClickeado)=> {
      tablero[indiceClickeado] = turno;
      const jugadorActual = turno;
      if(hayGanador(indiceClickeado)){
        console.log(`El ganador es el jugador "${jugadorActual}"!!!`);
        setJuegoTerminado(true);
        resaltarFichasGanadoras(indiceClickeado);
      }else{
        setTurno((jugadorActual == JUG_1) ? JUG_2 : JUG_1);
        return jugadorActual;
      }
    }

    const resaltarFichasGanadoras = (indiceClickeado)=> {
      const fichaIngresada =  tablero[indiceClickeado];
      // Horizontal
      if(tablero[0] == fichaIngresada && tablero[1] == fichaIngresada && tablero[2] == fichaIngresada){setFichasResaltadas([0, 1, 2]); }
      if(tablero[3] == fichaIngresada && tablero[4] == fichaIngresada && tablero[5] == fichaIngresada){setFichasResaltadas([3, 4, 5]); }
      if(tablero[6] == fichaIngresada && tablero[7] == fichaIngresada && tablero[8] == fichaIngresada){setFichasResaltadas([6, 7, 8]); }
      
      // Vertical
      if(tablero[0] == fichaIngresada && tablero[3] == fichaIngresada && tablero[6] == fichaIngresada){setFichasResaltadas([0, 3, 6]); }
      if(tablero[1] == fichaIngresada && tablero[4] == fichaIngresada && tablero[7] == fichaIngresada){setFichasResaltadas([1, 4, 7]); }
      if(tablero[2] == fichaIngresada && tablero[5] == fichaIngresada && tablero[8] == fichaIngresada){setFichasResaltadas([2, 5, 8]); }
      
      // Diagonal
      if(tablero[0] == fichaIngresada && tablero[4] == fichaIngresada && tablero[8] == fichaIngresada){setFichasResaltadas([0, 4, 8]) }
      if(tablero[2] == fichaIngresada && tablero[4] == fichaIngresada && tablero[6] == fichaIngresada){setFichasResaltadas([2, 4, 6]) }
      fichasResaltadas.push[indiceClickeado];
    }

    const hayGanador = (indiceClickeado) => {     
      const fichaIngresada =  tablero[indiceClickeado];
      // Horizontal
      if(tablero[0] == fichaIngresada && tablero[1] == fichaIngresada && tablero[2] == fichaIngresada){return true; }
      if(tablero[3] == fichaIngresada && tablero[4] == fichaIngresada && tablero[5] == fichaIngresada){return true; }
      if(tablero[6] == fichaIngresada && tablero[7] == fichaIngresada && tablero[8] == fichaIngresada){return true; }
      
      // Vertical
      if(tablero[0] == fichaIngresada && tablero[3] == fichaIngresada && tablero[6] == fichaIngresada){return true; }
      if(tablero[1] == fichaIngresada && tablero[4] == fichaIngresada && tablero[7] == fichaIngresada){return true; }
      if(tablero[2] == fichaIngresada && tablero[5] == fichaIngresada && tablero[8] == fichaIngresada){return true; }
      
      // Diagonal
      if(tablero[0] == fichaIngresada && tablero[4] == fichaIngresada && tablero[8] == fichaIngresada){return true; }
      if(tablero[2] == fichaIngresada && tablero[4] == fichaIngresada && tablero[6] == fichaIngresada){return true; }
      
      return false;
    }

  return (
    <>
      <section className='container'>
        <section className="tablero">
          { 
            tablero.map((_, index)=>{
              return (
                <Casillero 
                  casilleroIndice = { index } 
                  actualizarTablero = { actualizarTablero } 
                  key={index}
                  resaltada = {fichasResaltadas.includes(index)}
                >
                  { tablero[index] }
                </Casillero>
              )
            })
          }
        </section>
        <div className='indicadorTurno'>
            <Casillero isSelected={ turno === JUG_1 }>
              { JUG_1 }
            </Casillero>
            <Casillero isSelected={ turno === JUG_2 }>
              { JUG_2 }
            </Casillero>
        </div>
      </section>
    </>
  )
}

export default App
