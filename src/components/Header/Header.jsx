import { NavBar, NavButton } from 'components/Styled';

const Header = () => {
  return (
    <NavBar>
      <NavButton to="/">Home</NavButton>
      <NavButton to="/movies">Movies</NavButton>
    </NavBar>
  );
};

export default Header;
