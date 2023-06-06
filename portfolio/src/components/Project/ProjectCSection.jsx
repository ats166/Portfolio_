import React from "react";
import tw, { styled } from "twin.macro";

export default function ProjectCSection(props) {
  // 기획배경 및 서비스소개(사진)
  console.log(props.data, "dd");
  return (
    <Container>
      <ContentContainer>
        <PlanningSection>How I did?</PlanningSection>
        <PlanningItemList>
          {props.data.troublename.map((item, idx) => (
            <div key={idx}>
              <TroubleName>
                이슈 {idx + 1}. {item}{" "}
              </TroubleName>
              <TroubleReason>
                <LittleTitle>이슈 내용</LittleTitle>
                <ContentBox>{props.data.troublereason[idx]}</ContentBox>
              </TroubleReason>
              <TroubleAnswer>
                <LittleTitle>해결 방법</LittleTitle>
                <ContentBox>{props.data.troubleanswer[idx]}</ContentBox>
              </TroubleAnswer>
              <TroubleImage>
                {props.data.troubleimg[idx] === "" ? null : (
                  <img src={props.data.troubleimg[idx]} alt="" />
                )}
              </TroubleImage>
            </div>
          ))}
        </PlanningItemList>
      </ContentContainer>
      <BackGround />
    </Container>
  );
}

const Container = styled.div`
  ${tw`relative w-full flex font-intro h-full pb-20`}
`;

const ContentContainer = styled.div`
  ${tw`w-[1152px] mx-auto z-10`}
`;

const PlanningSection = styled.div`
  ${tw`mt-[4%] text-8xl text-center`}
`;

const PlanningItemList = styled.div`
  ${tw``}
`;

const TroubleName = styled.div`
  ${tw`text-4xl mt-[5%] font-bold`}
`;

const TroubleReason = styled.div`
  ${tw``}
`;

const LittleTitle = styled.div`
  ${tw`ml-[3%] text-2xl font-bold mt-[5%]`}
`;

const ContentBox = styled.div`
  ${tw`ml-[3%] mt-[1%] text-xl`}
  white-space: pre-line;
  line-height: 50px;
`;

const TroubleAnswer = styled.div`
  ${tw`mt-[5%]`}
`;

const TroubleImage = styled.div`
  ${tw``}
`;

const BackGround = styled.div`
  ${tw`absolute inset-0 w-full h-full z-0 bg-gray-400`}
`;
