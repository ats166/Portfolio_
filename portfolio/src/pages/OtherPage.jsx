import React from "react";
import tw, { styled } from "twin.macro";
import Footer from "../components/Footer";
import github from "../assets/contributions.png";

export default function OtherPage() {
  return (
    <>
      {/* <div className="w-full h-screen border relative font-intro">
        <div className="z-0 absolute w-full h-screen">
          <div className="w-[50%] mt-[5%] text-left pr-[15%] pl-[10%] text-4xl">
            저의 장점은 성실함을 통한 지속적인 성장입니다.
          </div>
          <div className="flex items-start justify-center w-[50%] mt-[5%] h-[100%]">
            <img src={blog} alt="" className="w-[20%] mr-[10%]" />
            <div className="w-[60%] flex flex-col justify-evenly h-[50%]">
              <img src={github} alt="" />
              <div>
                {" "}
                깃허브와 티스토리, 노션을 통해 오늘 공부했던, 최근에 사용했던
                기술을 기록하고 정리하며 항상 어제보다 더 나은 개발자가 되기
                위해 노력하고 있습니다.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={kjy}
        className="fixed top-24 z-0 right-0 opacity-70 mx-auto max-h-screen w-full"
        alt=""
      /> */}
      <Container>
        <EducationContainer>
          <EducationTitle time={0.1}> Education</EducationTitle>
          <EducationName time={0.15}>
            {" "}
            * 삼성 청년 소프트웨어 아카데미 (SSAFY) 8기
          </EducationName>
          <EducationDays time={0.2}> 2022년 7월 5일 ~ 2023년 6월 16일</EducationDays>
        </EducationContainer>

        <AwardsTitle time={0.25}> Awards </AwardsTitle>
        <AwardsItems>
          <AwardsName time={0.3}> * 1학기 성적 우수상 </AwardsName>
          <AwardsDetail time={0.35}>
            [삼성 청년 소프트웨어 아카데미] 1학기 코딩 집중과정 종합성적 광주
            3반 3등
          </AwardsDetail>
          <AwardsDays time={0.4}>2022년 11월 25일</AwardsDays>
        </AwardsItems>
        <AwardsItems>
          <AwardsName time={0.45}>
            {" "}
            * 웹 디자인 트랙 프로젝트 우수상{" "}
          </AwardsName>
          <AwardsDetail time={0.5}>
            [삼성 청년 소프트웨어 아카데미] 2학기 공통 프로젝트 광주 1반 1등
          </AwardsDetail>
          <AwardsDays time={0.55}>2023년 2월 17일</AwardsDays>
        </AwardsItems>
        <AwardsItems>
          <AwardsName time={0.6}>
            {" "}
            * 빅 데이터 분산 트랙 프로젝트 우수상{" "}
          </AwardsName>
          <AwardsDetail time={0.65}>
            [삼성 청년 소프트웨어 아카데미] 2학기 특화 프로젝트 광주 1반 3등
          </AwardsDetail>
          <AwardsDays time={0.7}>2023년 4월 24일</AwardsDays>
        </AwardsItems>

        <EffortTitle time={0.75}> Effort </EffortTitle>
        <EffortName time={0.8}>
          {" "}
          * 저의 장점은 성실함을 통한 지속적인 성장입니다.{" "}
        </EffortName>
        <EffortDetail time={0.85}>
          깃허브와 티스토리, 노션을 통해 오늘 공부했던, 최근에 사용했던 기술을
          기록하고 정리하며 항상 어제보다 더 나은 개발자가 되기 위해 노력하고
          있습니다.
          <img src={github} alt="" />
        </EffortDetail>
        <EffortName time={0.9}>
          {" "}
          * CS 스터디 (CSS tudy) 스터디장 활동 중{" "}
        </EffortName>
        <EffortName time={0.95}>
          {" "}
          * 1 일 1 알고리즘 스터디 (1D1A) 스터디원 활동 중
        </EffortName>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  ${tw`max-w-[1152px] mx-auto font-intro pb-20`}

  @keyframes Tuptext {
    0% {
      opacity: 0;
      transform: translateY(20%);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const EducationContainer = styled.div`
  ${tw`my-[5%]`}
`;

const EducationTitle = styled.div`
  ${tw`w-[80%] mx-auto text-5xl mb-[5%]`}

  animation-name: Tuptext;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: ${(props) => props.time}s;
`;

const EducationName = styled.div`
  ${tw`text-3xl`}

  animation-name: Tuptext;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: ${(props) => props.time}s;
`;

const EducationDays = styled.div`
  ${tw``}

  animation-name: Tuptext;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: ${(props) => props.time}s;
`;

const AwardsTitle = styled.div`
  ${tw`w-[80%] mx-auto text-5xl mb-[5%]`}

  animation-name: Tuptext;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: ${(props) => props.time}s;
`;

const AwardsItems = styled.div`
  ${tw`mb-[5%]`}
`;

const AwardsName = styled.div`
  ${tw`text-3xl`}

  animation-name: Tuptext;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: ${(props) => props.time}s;
`;

const AwardsDetail = styled.div`
  ${tw``}

  animation-name: Tuptext;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: ${(props) => props.time}s;
`;

const AwardsDays = styled.div`
  ${tw``}

  animation-name: Tuptext;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: ${(props) => props.time}s;
`;

const EffortTitle = styled.div`
  ${tw`w-[80%] mx-auto text-5xl mb-[5%]`}

  animation-name: Tuptext;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: ${(props) => props.time}s;
`;

const EffortName = styled.div`
  ${tw`text-3xl mt-8`}

  animation-name: Tuptext;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: ${(props) => props.time}s;
`;

const EffortDetail = styled.div`
  ${tw`mt-4`}

  animation-name: Tuptext;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: ${(props) => props.time}s;
`;
