import React from "react";
import { useNavigate } from "react-router-dom";
import tw, { styled } from "twin.macro";

export default function IntroPage() {
  const navigate = useNavigate();
  setTimeout(() => {
    console.log("실");
    navigate(`/home`);
  }, 27000);
  return (
    <IntroContainer>
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

          <MiddleText time={8.8}>사용자 경험을 먼저 생각하는</MiddleText>
          <MiddleText time={11.8}>
            새로운 기술을 배우는 것을 좋아하는
          </MiddleText>
          <MiddleText time={14.8}>
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
  animation-delay: 25.5s;
  animation-duration: 1s;
  animation-fill-mode: both;
`;

const FirstRightBlind = styled.div`
  ${tw`border-red-200 bg-red-200 h-screen`}
  width:50vw;

  animation-name: openrightdoor;
  animation-delay: 25.5s;
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
  animation-delay: 25.25s;
  animation-duration: 1s;
  animation-fill-mode: both;
`;

const SecondRightBlind = styled.div`
  ${tw`border-my-blue bg-blue-200 h-screen`}
  width:50vw;

  animation-name: openrightdoor;
  animation-delay: 25.25s;
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
  animation-delay: 25s;
  animation-duration: 1s;
  animation-fill-mode: both;
`;

const ThirdRightBlind = styled.div`
  ${tw`border-my-blue bg-black h-screen`}
  width:50vw;

  animation-name: openrightdoor;
  animation-delay: 25s;
  animation-duration: 1s;
  animation-fill-mode: both;
`;

// 텍스트

const FirstTextContainer = styled.div`
  ${tw`h-screen w-screen fixed flex items-center justify-center`}
`;

const FirstTextBox = styled.div`
  ${tw`text-white relative text-8xl`}

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
  ${tw`absolute text-white text-4xl h-[34%] bg-gray-200 w-full z-10`}

  animation-name: hideandshow;
  animation-duration: 2s;
  animation-delay: 3.95s;
  animation-fill-mode: both;
`;

const SecondBox = styled.div`
  ${tw`absolute text-white text-4xl h-[33%] bg-gray-200 w-full overflow-hidden z-10`}
  transform: translateY(100%);

  animation-name: hideandshow;
  animation-duration: 2s;
  animation-delay: 4s;
  animation-fill-mode: both;
`;

const ThirdBox = styled.div`
  ${tw`absolute text-white text-4xl h-[33%] bg-gray-200 w-full z-10`}
  transform: translateY(195%);

  animation-name: hideandshow;
  animation-duration: 2s;
  animation-delay: 4.05s;
  animation-fill-mode: both;
`;

const Text = styled.p`
  animation-name: showtext;
  animation-duration: 5s;
  animation-fill-mode: both;
`;

// 두번째 텍스트

const TopText = styled.div`
  ${tw`text-white text-center `}

  animation-name: uptext, moreuptext, deleteall;
  animation-duration: 1s, 1s, 1.5s;
  animation-delay: 6s, 18s, 24s;
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
  ${tw`absolute w-full text-center text-6xl mt-4`}

  animation-name: sidemove;
  animation-duration: 3s;
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
  ${tw`text-6xl text-center absolute w-full opacity-0`}

  animation-name : ${(props) => props.name}, deleteall;
  animation-delay: 19s, 24s;
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
      transform: translateY(120%);
    }
    20% {
      transform: translateY(90%);
    }
    25% {
      transform: translateY(120%);
    }
    30% {
      transform: translateY(100%);
    }
    35% {
      transform: translateY(120%);
    }
    40% {
      transform: translateY(105%);
    }
    45% {
      transform: translateY(120%);
    }
    50% {
      transform: translateY(110%);
    }
    55% {
      transform: translateY(120%);
    }
    60% {
      transform: translateY(112%);
    }
    65% {
      transform: translateY(120%);
    }
    70% {
      transform: translateY(114%);
    }
    75% {
      transform: translateY(120%);
    }
    80% {
      transform: translateY(115%);
    }
    85% {
      transform: translateY(120%);
    }
    90% {
      transform: translateY(116%);
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
      transform: translateY(240%);
    }
    30% {
      transform: translateY(210%);
    }
    35% {
      transform: translateY(240%);
    }
    40% {
      transform: translateY(220%);
    }
    44% {
      transform: translateY(240%);
    }
    48% {
      transform: translateY(225%);
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
    66% {
      transform: translateY(232%);
    }
    72% {
      transform: translateY(240%);
    }
    78% {
      transform: translateY(234%);
    }
    83% {
      transform: translateY(240%);
    }
    87% {
      transform: translateY(235%);
    }
    93% {
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
  animation-delay: 6.3s, 18s, 24s;
  animation-fill-mode: both, both, forwards;

  @keyframes upbottomtext {
    0% {
      opacity: 0;
      transform: translateY(50%);
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
      ${tw`mt-24`}
    }
    100% {
      ${tw`mt-60`}
    }
  }
`;
