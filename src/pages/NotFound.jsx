import { NavButton } from 'components/Styled';
import PageNotFoundImg from '../img/404-page-not.png';

export const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img src={PageNotFoundImg} alt="404 Not Found" />
      <NavButton to="/">Return to HOME page</NavButton>
    </div>
  );
};

export default NotFound;
