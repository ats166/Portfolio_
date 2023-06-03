import React from "react";
import tw, { styled } from "twin.macro";

import WillumpTV from "../../assets/WillumpTV.jpg";
import Returnz from "../../assets/returnz.gif";
import Zzalu from "../../assets/zzalu.gif";
import Buddiary from "../../assets/Buddiary.gif";

export default function ProjectASection(props) {
  const img = [WillumpTV, Zzalu, Returnz, Buddiary];
  const data = props.data;
  console.log("프롭", props.data);
  return (
    <Container>
      <ImageContainer>
        <ImageBox src={img[props.data.id - 1]} alt="사진" />
      </ImageContainer>
      <ContentContainer>
        <TitleSection>
          <TitleEHead>{data.e_name}</TitleEHead>
          <TitleKHead>({data.k_name})</TitleKHead>
        </TitleSection>

        <OverViewSection>
          <OverViewBox>{data.overview}</OverViewBox>
        </OverViewSection>

        <DurationSection>
          <DurationHead>기간</DurationHead>
          <DurationBox>
            - {data.starttime} ~ {data.endtime}({data.Week})
          </DurationBox>
        </DurationSection>

        <PersonSection>
          <PersonHead>인원</PersonHead>
          <PersonBox>- {data.personnel}</PersonBox>
        </PersonSection>

        <ContributionSection>
          <ContributionHead>기여도</ContributionHead>
          <ContributionBox>- {data.contribution}</ContributionBox>
        </ContributionSection>

        <FunctionSection>
          <FunctionHead>서비스 전체 기능</FunctionHead>
          {data.function.category.map((func, idx) => (
            <FunctionBox key={idx}>- {func}</FunctionBox>
          ))}
        </FunctionSection>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  ${tw`max-w-[1152px] mx-auto flex font-intro`}
`;

const ImageContainer = styled.div`
  ${tw`w-[45%] mr-[5%] h-[90vh] flex justify-center items-center`}
`;

const ImageBox = styled.img`
  ${tw`mb-24 border-2 border-black`}
`;

const ContentContainer = styled.div`
  ${tw`w-[50%] h-[90vh] flex flex-col justify-center px-12 pb-40`}
`;

const TitleSection = styled.div`
  ${tw`flex items-end `}
`;

const TitleEHead = styled.div`
  ${tw`text-[3.2rem] mr-4`}
`;

const TitleKHead = styled.div`
  ${tw`text-2xl overflow-hidden`}
`;

const OverViewSection = styled.div`
  ${tw`mt-2 mb-8`}
`;

const OverViewBox = styled.div`
  ${tw`text-[1.25rem]`}
`;

const DurationSection = styled.div`
  ${tw``}
`;
const DurationHead = styled.div`
  ${tw`text-lg font-bold`}
`;

const DurationBox = styled.div`
  ${tw`ml-4`}
`;

const PersonSection = styled.div`
  ${tw``}
`;

const PersonHead = styled.div`
  ${tw`text-lg font-bold`}
`;

const PersonBox = styled.div`
  ${tw`ml-4`}
`;

const ContributionSection = styled.div`
  ${tw``}
`;

const ContributionHead = styled.div`
  ${tw`text-lg font-bold`}
`;

const ContributionBox = styled.div`
  ${tw`ml-4`}
`;

const FunctionSection = styled.div`
  ${tw``}
`;

const FunctionHead = styled.div`
  ${tw`text-lg font-bold`}
`;

const FunctionBox = styled.div`
  ${tw`ml-4`}
`;
