import React, { useState } from "react";
import tw, { styled } from "twin.macro";

import WillumpTV from "../../assets/WillumpTV.jpg";
import Returnz from "../../assets/returnz.gif";
import Zzalu from "../../assets/zzalu.gif";
import Buddiary from "../../assets/Buddiary.gif";
import FunctionDetailList from "./FunctionDetailList";

export default function ProjectASection(props) {
  const img = [WillumpTV, Zzalu, Returnz, Buddiary];
  const data = props.data;
  const [id, setId] = useState(["회원", 0]);

  const selectId = (func, idx) => {
    setId([func, idx]);
  };

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

        <SkillSection>
          <SkillHead>사용 기술</SkillHead>
          <SkillBox>
            {data.link.map((item, idx) => (
              <ItemWrap key={idx}>
                <SkillImg src={data.link[idx]} key={idx}></SkillImg>
                <SkillName>{data.skills[idx]}</SkillName>
              </ItemWrap>
            ))}
          </SkillBox>
        </SkillSection>

        <FunctionContainer>
          <FunctionSection>
            <FunctionHead>서비스 전체 기능</FunctionHead>
            {data.function.category.map((func, idx) => (
              <FunctionBox
                key={idx}
                select={id[1]}
                id={idx}
                onClick={() => selectId(func, idx)}
              >
                {func}
              </FunctionBox>
            ))}
          </FunctionSection>{" "}
          <FunctionDetail>
            <p className="text-my-blue text-2xl"> * 프론트 구현 기능</p>
            {data.function.content[id[0]].map((item, idx) => (
              <FunctionDetailList
                data={item}
                key={idx}
                id={idx}
                idid={data.function.idid[id[0]]}
                isIdIncluded={data.function.idid[id[0]].includes(idx)}
              />
            ))}
          </FunctionDetail>
        </FunctionContainer>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  ${tw`max-w-[1152px] mx-auto flex font-intro`}
`;

const ImageContainer = styled.div`
  ${tw`w-[45%] mr-[4%] ml-[1%] h-[90vh] flex justify-center items-center`}
`;

const ImageBox = styled.img`
  ${tw`mb-24 border-2 border-black`}
`;

const ContentContainer = styled.div`
  ${tw`w-[50%] h-[90vh] flex flex-col justify-center px-12`}
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
  ${tw`mb-4`}
`;
const DurationHead = styled.div`
  ${tw`text-lg font-bold`}
`;

const DurationBox = styled.div`
  ${tw`ml-4`}
`;

const PersonSection = styled.div`
  ${tw`mb-4`}
`;

const PersonHead = styled.div`
  ${tw`text-lg font-bold`}
`;

const PersonBox = styled.div`
  ${tw`ml-4`}
`;

const ContributionSection = styled.div`
  ${tw`mb-4`}
`;

const ContributionHead = styled.div`
  ${tw`text-lg font-bold`}
`;

const ContributionBox = styled.div`
  ${tw`ml-4`}
`;

const SkillSection = styled.div`
  ${tw`mb-4`}
`;

const SkillHead = styled.div`
  ${tw`text-lg font-bold`}
`;

const SkillBox = styled.div`
  ${tw`flex flex-wrap`}
`;

const ItemWrap = styled.div`
  ${tw`flex flex-col items-center `}
`;

const SkillImg = styled.img`
  ${tw`w-8 h-8 mx-2`}
`;

const SkillName = styled.div`
  ${tw`mx-2 max-w-[5.5rem] text-center text-sm`}
`;

const FunctionContainer = styled.div`
  ${tw`flex`}
`;

const FunctionSection = styled.div`
  ${tw`min-w-[25%]`}
`;

const FunctionHead = styled.div`
  ${tw`text-lg font-bold`}
`;

const FunctionDetail = styled.div`
  ${tw`min-w-[75%] ml-[5%] min-h-[20rem]`}
`;

const FunctionBox = styled.div`
  ${tw`ml-4 border border-my-blue py-1 text-center`}
  ${(props) =>
    props.select === props.id ? tw`text-white bg-my-blue` : tw`text-my-blue`}
  cursor: pointer;
`;
