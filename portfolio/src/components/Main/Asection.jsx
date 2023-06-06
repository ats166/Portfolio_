import React, { useEffect, useState } from "react";
import tw, { styled } from "twin.macro";
import photo from "../../assets/Kjy.jpg";
import github from "../../assets/github.png";
import tistory from "../../assets/tistory.png";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

export default function Asection() {
  const navigate = useNavigate();
  const [ref, inView] = useInView({ threshold: 0.7 });

  const handleGoIntro = () => {
    navigate(`/`);
  };

  const handleGoTop = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    if (inView) {
    } else {
    }
  }, [inView]);
  return (
    <>
      {inView === false ? <GoTop onClick={handleGoTop}>▲</GoTop> : null}
      <GoIntro onClick={handleGoIntro}>인트로 다시보기</GoIntro>
      <SectionContainer ref={ref}>
        <LeftSection>
          <ImageBox>
            <MyPicture src={photo} alt="사진" />
            <HidePicBox />
          </ImageBox>
          <MarginBox />
          <ContactContainer>
            <ContactBox>
              <HideBox />
              <ShowText>김준영</ShowText>
            </ContactBox>
            <MyEmail>
              <HideBox2 />
              <ShowText>ats166@naver.com</ShowText>
            </MyEmail>
            <LinkBox>
              <a href="https://github.com/ats166">
                <img src={github} alt="" className="h-12 w-12 ml-4" />
              </a>
              <a href="https://bt-to-tp.tistory.com/">
                <img src={tistory} alt="" className="h-12 w-12 ml-4" />
              </a>
            </LinkBox>
          </ContactContainer>
        </LeftSection>
        <RightSection>
          <RightText>
            <TextAnimation time={4}>최</TextAnimation>
            <TextAnimation time={4.05}>고</TextAnimation>
            <TextAnimation time={4.1}>의</TextAnimation>
            <TextAnimation time={4.15}>&nbsp;</TextAnimation>
            <TextAnimation time={4.2}>사</TextAnimation>
            <TextAnimation time={4.25}>용</TextAnimation>
            <TextAnimation time={4.3}>자</TextAnimation>
            <TextAnimation time={4.35}>&nbsp;</TextAnimation>
            <TextAnimation time={4.4}>경</TextAnimation>
            <TextAnimation time={4.45}>험</TextAnimation>
            <TextAnimation time={4.5}>을</TextAnimation>
            <TextAnimation time={4.55}>&nbsp;</TextAnimation>
            <TextAnimation time={4.6}>제</TextAnimation>
            <TextAnimation time={4.65}>공</TextAnimation>
            <TextAnimation time={4.7}>하</TextAnimation>
            <TextAnimation time={4.75}>는</TextAnimation>
            <br />
            <TextAnimation time={5}>U</TextAnimation>
            <TextAnimation time={5.05}>X</TextAnimation>
            <TextAnimation time={5.1}>/</TextAnimation>
            <TextAnimation time={5.15}>U</TextAnimation>
            <TextAnimation time={5.2}>I</TextAnimation>
            <TextAnimation time={5.25}>에</TextAnimation>
            <TextAnimation time={5.3}>&nbsp;</TextAnimation>
            <TextAnimation time={5.35}>대</TextAnimation>
            <TextAnimation time={5.4}>해</TextAnimation>
            <TextAnimation time={5.45}>&nbsp;</TextAnimation>
            <TextAnimation time={5.5}>고</TextAnimation>
            <TextAnimation time={5.55}>민</TextAnimation>
            <TextAnimation time={5.6}>하</TextAnimation>
            <TextAnimation time={5.65}>는</TextAnimation>
            <br />
            <TextAnimation time={5.9}>프</TextAnimation>
            <TextAnimation time={5.95}>론</TextAnimation>
            <TextAnimation time={6}>트</TextAnimation>
            <TextAnimation time={6.05}>엔</TextAnimation>
            <TextAnimation time={6.1}>드</TextAnimation>
            <TextAnimation time={6.15}>&nbsp;</TextAnimation>
            <TextAnimation time={6.2}>개</TextAnimation>
            <TextAnimation time={6.25}>발</TextAnimation>
            <TextAnimation time={6.3}>자</TextAnimation>
            <TextAnimation time={6.35}>&nbsp;</TextAnimation>
            <MyName>
              <UnderLine />
              <TextAnimation time={6.4}>김</TextAnimation>
              <TextAnimation time={6.45}>준</TextAnimation>
              <TextAnimation time={6.5}>영</TextAnimation>
            </MyName>
            <TextAnimation time={6.55}>입</TextAnimation>
            <TextAnimation time={6.6}>니</TextAnimation>
            <TextAnimation time={6.65}>다</TextAnimation>
          </RightText>
        </RightSection>
      </SectionContainer>
      <Helper>
        <HelperText>
          Learn more about me{" "}
          <HelperMouse>
            <HelperWheel />
          </HelperMouse>
        </HelperText>
      </Helper>
    </>
  );
}

const GoIntro = styled.button`
  ${tw`fixed bottom-8 right-20 border-2 p-2 font-mmf rounded-xl bg-gray-400 text-white z-20`}
`;

const GoTop = styled.button`
  ${tw`fixed bottom-8 right-56 border-2 p-2 h-12 w-12 rounded-full text-black`}
`;

const SectionContainer = styled.div`
  ${tw`h-[70vh] flex font-intro`}
`;

const LeftSection = styled.div`
  ${tw`w-[240px] h-[90%] ml-[5%]`}
`;

const MarginBox = styled.div`
  ${tw`h-[0px]`}

  animation-name: downmargin;
  animation-delay: 0.8s;
  animation-duration: 1s;
  animation-fill-mode: both;

  @keyframes downmargin {
    0% {
      height: 360px;
    }
    100% {
      height: 0px;
    }
  }
`;

const ImageBox = styled.div`
  ${tw`mt-[30%] bg-black bg-contain h-[360px] overflow-hidden relative`}

  animation-name: downimgbox;
  animation-delay: 0.8s;
  animation-duration: 1s;
  animation-fill-mode: both;

  @keyframes downimgbox {
    0% {
      height: 0px;
      ${tw`rounded-b-full`}
    }
    100% {
      height: 360px;
    }
  }
`;

const MyPicture = styled.img`
  ${tw`border-2 border-black w-full h-full absolute`}
`;

const HidePicBox = styled.div`
  ${tw`bg-black w-full h-full absolute`}

  animation-name: downhidebox;
  animation-delay: 2s;
  animation-duration: 1s;
  animation-fill-mode: both;

  @keyframes downhidebox {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
  }
`;

const ContactContainer = styled.div`
  line-height: 50px;
`;

const ContactBox = styled.div`
  ${tw`text-2xl font-bold mt-10 relative w-[30%] overflow-hidden`}
`;

const MyEmail = styled.div`
  ${tw`relative overflow-hidden w-[60%]`}
`;
const HideBox = styled.span`
  ${tw`absolute bg-gray-300 z-10`}
  width: 25%;
  height: 100%;

  animation-name: firsthidetext;
  animation-delay: 0s;
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;

  @keyframes firsthidetext {
    0% {
      width: 0%;
    }
    30% {
      width: 100%;
    }
    60% {
      margin-left: 0%;
      width: 100%;
    }
    100% {
      margin-left: 100%;
      width: 100%;
    }
  }
`;

const HideBox2 = styled.span`
  ${tw`absolute bg-gray-300 z-10`}
  height: 40%;
  transform: translateY(70%);

  animation-name: secondhidetext;
  animation-delay: 0.2s;
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;

  @keyframes secondhidetext {
    0% {
      width: 0%;
    }
    30% {
      width: 100%;
    }
    60% {
      margin-left: 0%;
      width: 100%;
    }
    100% {
      margin-left: 100%;
      width: 100%;
    }
  }
`;

const ShowText = styled.div`
  animation-name: Ashowtext;
  animation-delay: 0.8s;
  animation-duration: 0.5s;
  animation-fill-mode: both;

  @keyframes Ashowtext {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const LinkBox = styled.div`
  ${tw`flex`}

  animation-name: showlinkbox;
  animation-delay: 2.5s;
  animation-duration: 1s;
  animation-fill-mode: both;

  @keyframes showlinkbox {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const RightSection = styled.div`
  ${tw`text-right flex justify-end break-words`}
  width: calc(95% - 240px);
`;

const RightText = styled.div`
  ${tw`mt-[120px] text-4xl w-[100%] mr-[10%]`}
  line-height: 60px;
`;

const TextAnimation = styled.span`
  ${tw`inline-block`}

  animation-name: textanimation;
  animation-delay: ${(props) => props.time}s;
  animation-duration: 0.5s;
  animation-fill-mode: both;

  @keyframes textanimation {
    0% {
      opacity: 0;
      transform: translateY(-20%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;

const MyName = styled.span`
  ${tw`relative font-bold`}
`;

const UnderLine = styled.span`
  ${tw`absolute border-my-blue border-b-4`}
  height:130%;

  animation-name: drawunderline;
  animation-delay: 7.5s;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;

  @keyframes drawunderline {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;

const Helper = styled.div`
  ${tw`h-[20vh] flex justify-center`}

  animation-name: showhelperbox;
  animation-delay: 3s;
  animation-duration: 1s;
  animation-fill-mode: both;

  @keyframes showhelperbox {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const HelperText = styled.div`
  ${tw`text-center text-2xl text-gray-400`}
`;

const HelperMouse = styled.div`
  ${tw`border mx-auto mt-[5%] w-8 h-12 rounded-full relative border-black`}
`;

const HelperWheel = styled.div`
  ${tw`h-2 w-2 rounded-full border mx-auto mt-[30%] bg-black`}

  animation-name: WheelAnimation;
  animation-delay: 2s;
  animation-duration: 2.5s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;

  @keyframes WheelAnimation {
    0% {
      opacity: 1;
      transform: translate(0, 0);
    }
    10% {
      opacity: 1;
      transform: translate(0, -35%);
    }
    50% {
      opacity: 0;
      transform: translate(0, 200%);
    }
    100% {
      opacity: 0;
    }
  }
`;
