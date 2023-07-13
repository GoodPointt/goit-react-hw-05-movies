const { default: styled } = require('@emotion/styled');
const { NavLink, Link } = require('react-router-dom');

export const NavButton = styled(NavLink)`
  text-decoration: none;

  font-size: 1rem;
  padding: 0.7rem 1.5rem;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  cursor: pointer;
  text-transform: uppercase;
  background-color: rgb(14, 14, 26);
  color: rgb(234, 234, 234);
  font-weight: 700;
  transition: 0.6s;
  box-shadow: 0px 0px 60px #1f4c65;
  -webkit-box-reflect: below 10px
    linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));

  &:active {
    scale: 0.92;
  }

  &:hover {
    background: rgb(2, 29, 78);
    background: linear-gradient(
      270deg,
      rgba(2, 29, 78, 0.681) 0%,
      rgba(31, 215, 232, 0.873) 60%
    );
    color: rgb(4, 4, 38);
  }

  &.active {
    box-shadow: 0px 0px 60px #fbf6f6;
  }
`;

export const SearchBtn = styled.button`
  text-decoration: none;

  font-size: 1rem;
  padding: 0.7rem 1.5rem;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  cursor: pointer;
  text-transform: uppercase;
  background-color: rgb(14, 14, 26);
  color: rgb(234, 234, 234);
  font-weight: 700;
  transition: 0.6s;
  box-shadow: 0px 0px 60px #1f4c65;
  -webkit-box-reflect: below 10px
    linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));

  &:active {
    scale: 0.92;
  }

  &:hover {
    background: rgb(2, 29, 78);
    background: linear-gradient(
      270deg,
      rgba(2, 29, 78, 0.681) 0%,
      rgba(31, 215, 232, 0.873) 60%
    );
    color: rgb(4, 4, 38);
  }
`;

export const NavBar = styled.nav`
  text-decoration: none;

  padding: 15px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const MainContainer = styled.div`
  width: fit-content;
  padding: 80px 30px;
  margin: 0 auto;
`;

export const StyledLinkHome = styled(Link)`
  color: #d4d4d4;
  text-decoration: none;

  &:hover {
    text-shadow: 0px 0px 10px #fbf6f6;
  }
`;

export const StyledLinkMovie = styled(Link)`
  display: block;
  text-decoration: none;
  min-width: 80px;
  max-width: fit-content;
  margin: 10px 0;

  position: relative;
  padding: 10px 20px;
  border-radius: 7px;
  border: 1px solid rgb(61, 106, 255);
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  background: transparent;
  color: #fff;
  overflow: hidden;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;

  &:hover {
    background: rgb(61, 106, 255);
    box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.815);
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
  }

  &:hover::before {
    -webkit-animation: sh02 0.5s 0s linear;
    -moz-animation: sh02 0.5s 0s linear;
    animation: sh02 0.5s 0s linear;
  }

  &::before {
    content: '';
    display: block;
    width: 0px;
    height: 86%;
    position: absolute;
    top: 7%;
    left: 0%;
    opacity: 0;
    background: #fff;
    box-shadow: 0 0 50px 30px #fff;
    -webkit-transform: skewX(-20deg);
    -moz-transform: skewX(-20deg);
    -ms-transform: skewX(-20deg);
    -o-transform: skewX(-20deg);
    transform: skewX(-20deg);
  }

  @keyframes sh02 {
    from {
      opacity: 0;
      left: 0%;
    }

    50% {
      opacity: 1;
    }

    to {
      opacity: 0;
      left: 100%;
    }
  }

  &:active {
    box-shadow: 0 0 0 0 transparent;
    -webkit-transition: box-shadow 0.2s ease-in;
    -moz-transition: box-shadow 0.2s ease-in;
    transition: box-shadow 0.2s ease-in;
  }
`;

export const StyledInput = styled.input`
  margin-top: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  height: 30px;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-weight: 500;
  font-size: 13px;
  color: #fff;
  background-color: rgb(28, 28, 30);
  box-shadow: 0 0 0.4vw rgba(0, 0, 0, 0.5), 0 0 0 0.15vw transparent;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 5px;
  width: 140px;
  transition: 0.4s;

  &:hover {
    box-shadow: 0 0 0 0.15vw rgba(135, 207, 235, 0.186);
  }

  &:focus {
    box-shadow: 0 0 0 0.15vw skyblue;
  }
`;
