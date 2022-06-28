import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: transparent;
  padding: 25px 20%;
  color: #fff;
  z-index: 10;

  @media (min-width: 768px) and (max-width: 991px) {
    height: 60px;
    padding: 25px 10%;
  }

  @media (max-width: 767px) {
    height: 50px;
    padding: 25px 5%;
  }
`;

export const LogoDiv = styled.div``;

export const Logo = styled.div`
  line-height: 100%;
  margin-right: 60px;
  font-family: "Orbitron-bold";
  font-size: 24px;
  text-align: center;
  color: #f1f1f1;

  cursor: pointer;

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 18px;
    margin-right: 40px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
    margin-right: 20px;
  }
`;

export const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const MenuDiv = styled.div`
  width: 60%;
  margin-right: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) and (max-width: 991px) {
    width: 40%;
  }

  @media (max-width: 767px) {
    width: 40%;
  }
`;
export const Menu = styled.div`
  color: #f1f1f1;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  cursor: pointer;
  :hover {
    color: #b150f2;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
    display: none;
  }

  transition: 400ms;
  border-bottom: 2px solid transparent;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #b150f2;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
    transition: width 0.3s;
  }
`;

export const HamMenuDiv = styled.div`
  width: 30%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.85);

  &.openMenu {
    animation: menuOpen 1s ease-out;

    @keyframes menuOpen {
      0% {
        transform: translateX(-100%);
        opacity: 0.8;
      }
      100% {
        transform: translateX(0%);
        opacity: 1;
      }
    }
  }

  &.closeMenu {
    opacity: 0;
    visibility: hidden;

    animation: menuClose 1s ease;

    @keyframes menuClose {
      0% {
        transform: translateX(0%);
        opacity: 0.8;
      }
      100% {
        transform: translateX(-100%);
        opacity: 0;
      }
    }
  }
`;

export const HamMenu = styled.span`
  color: #b150f2;
  font-size: 18px;
  padding-bottom: 20px;
  cursor: pointer;

  border-bottom: 2px solid transparent;

  transition: 400ms;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #b150f2;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
    transition: width 0.3s;
  }
`;

export const HamMenuIcon = styled.div`
  display: none;
  font-size: 16px;
  cursor: pointer;

  @media (max-width: 767px) {
    display: block;
  }
`;

export const MenuIconDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60px;
  height: 100%;

  @media (max-width: 767px) {
    width: 100px;
  }
`;

export const IconWrapper = styled.div`
  font-size: 20px;
  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 18px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const UserIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
