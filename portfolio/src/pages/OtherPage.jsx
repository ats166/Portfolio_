import React from "react";
import tw, { styled } from "twin.macro";
import Footer from "../components/Footer";
// import Construction from "../components/Construction";

export default function OtherPage() {
  return (
    <>
      <Container>
        {/* <Construction /> */}
        <EducationContainer>
          <EducationTitle> Education</EducationTitle>
          <EducationName>
            {" "}
            * 삼성 청년 소프트웨어 아카데미 (SSAFY) 8기
          </EducationName>
          <EducationDays> 2022년 7월 5일 ~ 진행중</EducationDays>
        </EducationContainer>

        <AwardsTitle> Awards </AwardsTitle>
        <AwardsItems>
          <AwardsName> * 1학기 성적 우수상 </AwardsName>
          <AwardsDetail>
            [1학기] 코딩 집중과정 종합성적 광주 3반 3등
          </AwardsDetail>
          <AwardsDays>2022년 11월 25일</AwardsDays>
        </AwardsItems>
        <AwardsItems>
          <AwardsName> * 웹 디자인 트랙 프로젝트 우수상 </AwardsName>
          <AwardsDetail>[2학기] 공통 프로젝트 광주 1반 1등</AwardsDetail>
          <AwardsDays>2023년 2월 17일</AwardsDays>
        </AwardsItems>
        <AwardsItems>
          <AwardsName> * 빅 데이터 분산 트랙 프로젝트 우수상 </AwardsName>
          <AwardsDetail>[2학기] 특화 프로젝트 광주 1반 3등</AwardsDetail>
          <AwardsDays>2023년 4월 24일</AwardsDays>
        </AwardsItems>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  ${tw`max-w-[1152px] mx-auto font-intro`}
`;

const EducationContainer = styled.div`
  ${tw`my-[5%]`}
`;

const EducationTitle = styled.div`
  ${tw`w-[80%] mx-auto text-5xl mb-[5%]`}
`;

const EducationName = styled.div`
  ${tw`text-3xl`}
`;

const EducationDays = styled.div`
  ${tw``}
`;

const AwardsTitle = styled.div`
  ${tw`w-[80%] mx-auto text-5xl mb-[5%]`}
`;

const AwardsItems = styled.div`
  ${tw`mb-[5%]`}
`;

const AwardsName = styled.div`
  ${tw`text-3xl`}
`;

const AwardsDetail = styled.div`
  ${tw``}
`;

const AwardsDays = styled.div`
  ${tw``}
`;
