import PropTypes from 'prop-types';
import './card.css';
import { Button } from '../button/Button.jsx';

export const Card = ({formatUsername, username, userImage, isFollowing, children})=>{
  const IMG = `https://unavatar.io/github/${userImage}`;  
  return (
    <article className='card'>
      <header>
        <img src={IMG} alt="Image" className='card__avatar' />
        <div className='card__info-container'>
          {children}
          <strong><p>{formatUsername(username)}</p></strong>
        </div>
      </header>
      <aside>
        <Button initialIsFollowing={isFollowing}/>
      </aside>
    </article>
  )
}

Card.propTypes = {
  formatUsername: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  userImage: PropTypes.string,
  isFollowing:PropTypes.bool,
  children: PropTypes.element,
}