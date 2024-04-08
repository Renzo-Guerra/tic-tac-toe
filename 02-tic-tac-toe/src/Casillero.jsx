import PropTypes from 'prop-types';
import './casillero.css';

export const Casillero = ({casilleroIndice, actualizarTablero, isSelected, resaltada, children})=>{
  let clase = isSelected ? 'casillero casillero-selected' : 'casillero'; 
  if(resaltada == true) { clase = clase.concat(' ganadora'); }
  
  const handleClick = () => {
    actualizarTablero(casilleroIndice);
  }

  return (
    <div className={clase} onClick={()=> handleClick()}>{children}</div>
  );
}

Casillero.propTypes = {
  casilleroIndice: PropTypes.number,
  actualizarTablero: PropTypes.func,
  isSelected: PropTypes.bool,
  resaltada: PropTypes.bool,
  children: PropTypes.string,
}