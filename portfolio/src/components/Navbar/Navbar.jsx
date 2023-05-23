import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import tw, { styled } from "twin.macro";
import PFimg from "../../assets/PF.jpg";
import Hamburger from "../../assets/hambuger.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleGoMain = () => {
    navigate(`/home`);
    setOpenModal(false);
    setActive(0);
  };
  const handleGoProject = () => {
    navigate(`/project`);
    setOpenModal(false);
    setActive(1);
  };
  const handleGoOther = () => {
    navigate(`/other`);
    setOpenModal(false);
    setActive(2);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <NavContainer>
      <ImgContainer onClick={handleGoMain}>
        <ImgBox src={PFimg} />
        <TextBox>김준영's Portfolio</TextBox>
      </ImgContainer>
      <MenuContanier>
        <MenuItem onClick={handleGoMain} active={active} num={0}>
          About
        </MenuItem>
        <MenuItem onClick={handleGoProject} active={active} num={1}>
          Project
        </MenuItem>
        <MenuItem onClick={handleGoOther} active={active} num={2}>
          Other
        </MenuItem>
      </MenuContanier>
      <HamburgerMenu onClick={handleOpenModal}>
        <img src={Hamburger} alt="햄버거" />
      </HamburgerMenu>
      {openModal ? (
        <SideModalContainer>
          <SideModalOutConatiner
            onClick={handleCloseModal}
          ></SideModalOutConatiner>
          <SideModalInConatiner openModal={openModal}>
            <HambugerMenuContanier>
              <MenuItem onClick={handleGoMain} active={active} num={0}>
                About
              </MenuItem>
              <MenuItem onClick={handleGoProject} active={active} num={1}>
                Project
              </MenuItem>
              <MenuItem onClick={handleGoOther} active={active} num={2}>
                Other
              </MenuItem>
            </HambugerMenuContanier>
          </SideModalInConatiner>
        </SideModalContainer>
      ) : null}
    </NavContainer>
  );
}

const NavContainer = styled.div`
  ${tw`w-full font-mmf flex items-center max-w-[1152px] mx-auto`}
  height: 10vh;
  min-height: 42px;
`;

const ImgContainer = styled.button`
  ${tw`flex items-center`}
  width:70%;

  @media screen and (max-width: 480px) {
    ${tw``}
    width: 60%;
  }
`;

const ImgBox = styled.img`
  ${tw`mx-2`}
  height:5vh;
  min-height: 42px;
`;

const TextBox = styled.div`
  ${tw`text-2xl `}
  @media screen and (max-width: 480px) {
    ${tw`text-sm`}
  }
`;

const MenuContanier = styled.div`
  ${tw`flex justify-evenly`}
  width: 50%;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const HamburgerMenu = styled.button`
  ${tw`ml-auto mr-2`}
  width:10%;
  @media screen and (min-width: 480px) {
    display: none;
  }
`;

const MenuItem = styled.button`
  ${tw`hover:text-my-blue`}
  ${(props) => (props.active === props.num ? tw`text-my-blue` : tw`text-black`)}
`;

// 사이드 모달

const SideModalContainer = styled.div`
  ${tw`fixed inset-0 flex`}
`;

const SideModalOutConatiner = styled.div`
  ${tw`h-full`}
  width:55%;
`;

const SideModalInConatiner = styled.div`
  ${tw`h-full bg-gray-100 rounded-l-xl `}
  width:45%;

  animation-name: opensidebar;
  animation-duration: 1s;
  animation-fill-mode: forwards;

  @keyframes opensidebar {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;

const HambugerMenuContanier = styled.div`
  ${tw`flex flex-col items-start justify-evenly mx-auto`}
  height:30%;
  width: 70%;
`;
