import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import tw, { styled } from "twin.macro";

export default function IntroPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate(`/home`);
    }, 18750);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleGoMain = () => {
    navigate(`/home`);
  };
  return (
    <IntroContainer>
      <GoMain onClick={handleGoMain}> >> </GoMain>
      <ProgressBar></ProgressBar>
      {/* 블라인드 섹션 */}
      <FirstBlind>
        <FirstLeftBlind></FirstLeftBlind>
        <FirstRightBlind></FirstRightBlind>
      </FirstBlind>
      <SecondBlind>
        <SecondLeftBlind></SecondLeftBlind>
        <SecondRightBlind></SecondRightBlind>
      </SecondBlind>
      <ThirdBlind>
        <ThirdLeftBlind></ThirdLeftBlind>
        <ThirdRightBlind></ThirdRightBlind>
      </ThirdBlind>

      {/* 텍스트섹션 */}

      <FirstTextContainer>
        <FirstTextBox>
          <FirstBox></FirstBox>
          <SecondBox></SecondBox>
          <ThirdBox></ThirdBox>
          <Text>방문해주셔서 감사합니다!</Text>
        </FirstTextBox>
      </FirstTextContainer>
      <FirstTextContainer>
        <FirstTextBox>
          <TopText>안녕하세요</TopText>

          <MiddleText time={5.8}>사용자 경험을 먼저 생각하는</MiddleText>
          <MiddleText time={7.8}>새로운 기술을 배우는 것을 좋아하는</MiddleText>
          <MiddleText time={9.8}>
            CSS 애니메이션을 구현하는것을 즐기는
          </MiddleText>

          <MiddleTextSecond name={"one"}>
            사용자 경험을 먼저 생각하는
          </MiddleTextSecond>
          <MiddleTextSecond name={"two"}>
            새로운 기술을 배우는 것을 좋아하는
          </MiddleTextSecond>
          <MiddleTextSecond name={"three"}>
            CSS 애니메이션을 구현하는것을 즐기는
          </MiddleTextSecond>

          <BottomText>프론트엔드 개발자 김준영입니다.</BottomText>
        </FirstTextBox>
      </FirstTextContainer>

      {/* <Link to="/home">홈으로</Link> */}
    </IntroContainer>
  );
}

const GoMain = styled.button`
  ${tw`fixed bottom-10 right-28 border-2 font-bold bg-white h-8 w-12 rounded-xl z-20`}
`;

const ProgressBar = styled.div`
  ${tw`fixed bottom-0 h-4 border-2 z-10 bg-gray-200`}

  animation-name: progressbar;
  animation-duration: 18.75s;
  animation-timing-function: linear;

  @keyframes progressbar {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;

const IntroContainer = styled.div`
  ${tw`fixed inset-0 flex font-intro`}

  @keyframes openleftdoor {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes openrightdoor {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

// 첫번째 색깔

const FirstBlind = styled.div`
  ${tw`h-screen w-screen fixed flex`}
`;

const FirstLeftBlind = styled.div`
  ${tw`border-red-200 bg-red-200 h-screen`}
  width:50vw;

  animation-name: openleftdoor;
  animation-delay: 18s;
  animation-duration: 1s;
  animation-fill-mode: both;
`;

const FirstRightBlind = styled.div`
  ${tw`border-red-200 bg-red-200 h-screen`}
  width:50vw;

  animation-name: openrightdoor;
  animation-delay: 18s;
  animation-duration: 1s;
  animation-fill-mode: both;
`;

// 두번째 색깔

const SecondBlind = styled.div`
  ${tw`h-screen w-screen fixed flex`}
`;

const SecondLeftBlind = styled.div`
  ${tw`border-my-blue bg-blue-200 h-screen`}
  width:50vw;

  animation-name: openleftdoor;
  animation-delay: 17.75s;
  animation-duration: 1s;
  animation-fill-mode: both;
`;

const SecondRightBlind = styled.div`
  ${tw`border-my-blue bg-blue-200 h-screen`}
  width:50vw;

  animation-name: openrightdoor;
  animation-delay: 17.75s;
  animation-duration: 1s;
  animation-fill-mode: both;
`;

// 세번째 검은색

const ThirdBlind = styled.div`
  ${tw`h-screen w-screen fixed flex`}
`;

const ThirdLeftBlind = styled.div`
  ${tw`border-my-blue bg-black h-screen`}
  width:50vw;

  animation-name: openleftdoor;
  animation-delay: 17.5s;
  animation-duration: 1s;
  animation-fill-mode: both;
`;

const ThirdRightBlind = styled.div`
  ${tw`border-my-blue bg-black h-screen`}
  width:50vw;

  animation-name: openrightdoor;
  animation-delay: 17.5s;
  animation-duration: 1s;
  animation-fill-mode: both;
`;

// 텍스트

const FirstTextContainer = styled.div`
  ${tw`h-screen w-screen fixed flex items-center justify-center`}
`;

const FirstTextBox = styled.div`
  ${tw`text-white relative text-6xl`}

  @keyframes hideandshow {
    0% {
      width: 0%;
    }
    30% {
      width: 100%;
      margin-left: 0%;
    }
    66% {
      width: 100%;
      margin-left: 0%;
    }
    100% {
      width: 0%;
      margin-left: 100%;
    }
  }

  @keyframes showtext {
    0% {
      opacity: 0;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      display: none;
    }
  }

  @keyframes deleteall {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const FirstBox = styled.div`
  ${tw`absolute text-white text-4xl h-[35%] bg-gray-200 w-full z-10`}

  animation-name: hideandshow;
  animation-duration: 2s;
  animation-delay: 1.95s;
  animation-fill-mode: both;
`;

const SecondBox = styled.div`
  ${tw`absolute text-white text-4xl h-[33.33%] bg-gray-200 w-full overflow-hidden z-10`}
  transform: translateY(100%);

  animation-name: hideandshow;
  animation-duration: 2s;
  animation-delay: 2s;
  animation-fill-mode: both;
`;

const ThirdBox = styled.div`
  ${tw`absolute text-white text-4xl h-[33.33%] bg-gray-200 w-full z-10`}
  transform: translateY(195%);

  animation-name: hideandshow;
  animation-duration: 2s;
  animation-delay: 2.05s;
  animation-fill-mode: both;
`;

const Text = styled.p`
  animation-name: showtext;
  animation-duration: 3s;
  animation-fill-mode: both;
`;

// 두번째 텍스트

const TopText = styled.div`
  ${tw`text-white text-center `}

  animation-name: uptext, moreuptext, deleteall;
  animation-duration: 1s, 1s, 1.5s;
  animation-delay: 4s, 12s, 16s;
  animation-fill-mode: both, both, forwards;

  @keyframes uptext {
    0% {
      opacity: 0;
      transform: translateY(50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  @keyframes moreuptext {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(-50%);
    }
  }
`;

const MiddleText = styled.div`
  ${tw`absolute w-full text-center text-4xl mt-6`}

  animation-name: sidemove;
  animation-duration: 2s;
  animation-delay: ${(props) => props.time}s;
  animation-fill-mode: both;

  @keyframes sidemove {
    0% {
      opacity: 0;
      transform: translateX(-20%);
    }
    33.3% {
      opacity: 1;
      transform: translateX(0%);
    }
    66.6% {
      opacity: 1;
      transform: translateX(0%);
    }
    100% {
      opacity: 0;
      transform: translateX(20%);
    }
  }
`;

const MiddleTextSecond = styled.div`
  ${tw`text-4xl text-center absolute w-full opacity-0`}

  animation-name : ${(props) => props.name}, deleteall;
  animation-delay: 13s, 16s;
  animation-duration: 1.5s, 1.5s;
  animation-fill-mode: both, forwards;

  @keyframes one {
    0% {
      transform: translateY(0%);
    }
    1% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes two {
    0% {
      transform: translateY(0%);
    }
    10% {
      opacity: 1;
      transform: translateY(85%);
    }
    20% {
      transform: translateY(170%);
    }
    25% {
      transform: translateY(170%);
    }
    30% {
      transform: translateY(170%);
    }
    35% {
      transform: translateY(170%);
    }
    40% {
      transform: translateY(150%);
    }
    44% {
      transform: translateY(120%);
    }
    52% {
      transform: translateY(130%);
    }
    95% {
      transform: translateY(120%);
    }
    100% {
      opacity: 1;
      transform: translateY(120%);
    }
    animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  @keyframes three {
    0% {
      transform: translateY(0%);
    }
    20% {
      opacity: 1;
      transform: translateY(290%);
    }
    30% {
      transform: translateY(290%);
    }
    35% {
      transform: translateY(290%);
    }
    40% {
      transform: translateY(290%);
    }
    44% {
      transform: translateY(260%);
    }
    48% {
      transform: translateY(210%);
    }
    52% {
      transform: translateY(240%);
    }
    58% {
      transform: translateY(230%);
    }
    61% {
      transform: translateY(240%);
    }
    100% {
      opacity: 1;
      transform: translateY(240%);
    }
    animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
`;

const BottomText = styled.div`
  ${tw`text-white text-center`}

  animation-name: upbottomtext, donwbottomtext, deleteall;
  animation-duration: 2s, 1s, 1.5s;
  animation-delay: 4s, 12s, 16s;
  animation-fill-mode: both, both, forwards;

  @keyframes upbottomtext {
    0% {
      opacity: 0;
      transform: translateY(100%);
      ${tw`mt-0`}
    }
    50% {
      opacity: 1;
      transform: translateY(0%);
      ${tw`mt-2`}
    }
    70% {
      opacity: 1;
      transform: translateY(0%);
      ${tw`mt-2`}
    }
    100% {
      opacity: 1;
      ${tw`mt-24`}
    }
  }

  @keyframes donwbottomtext {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(140%);
    }
  }
`;
