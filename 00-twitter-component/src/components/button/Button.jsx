import PropTypes from 'prop-types';
import './button.css';
import { useState } from 'react';

export const Button = ({initialIsFollowing})=>{
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const claseBoton = isFollowing ? 'follow-button following' : 'follow-button'; 
  const texto = isFollowing ? "Following" : "Follow";
    
  return (
    <button 
      className={claseBoton} 
      onClick={ ()=> setIsFollowing(!isFollowing)}>
      <span className='follow-button__text follow-button__follow'>{texto}</span>
      <span className='follow-button__text follow-button__following'>Unfollow</span>
    </button>
  )
}

Button.propTypes = {
  initialIsFollowing: PropTypes.bool,
}