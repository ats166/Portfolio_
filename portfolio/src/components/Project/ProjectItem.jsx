import React from "react";
import tw, { styled } from "twin.macro";

import WillumpTV from "./projectassets/WillumpTVThumnail.png";
import Returnz from "./projectassets/ReturnzThumnail.png";
import Zzalu from "./projectassets/ZzaluThumnail.png";
import Buddiary from "./projectassets/BudDiaryThumnail.png";
import { useNavigate } from "react-router-dom";

export default function ProjectItem(props) {
  const navigate = useNavigate();
  const project = props.data;
  const id = project.id - 1;
  const time = project.id / 10;
  const img = [WillumpTV, Zzalu, Returnz, Buddiary];

  const handleGoDetail = () => {
    navigate(`/project/${id}`, { state: { data: project } });
  };

  return (
    <CardContainer onClick={handleGoDetail} time={time}>
      <img
        src={img[id]}
        alt="사진"
        className="w-full border rounded-2xl h-[70%]"
      />

      <div className="mt-4 w-full text-center text-xl font-bold">
        {project.k_name}({project.e_name})
      </div>
      <div className="flex flex-wrap justify-center my-2">
        {project.skills.map((data, idx) => (
          <img
            src={project.link[idx]}
            alt="사진"
            key={idx}
            className="w-6 h-6 mx-2"
          />
        ))}
      </div>
      <div className="w-full text-center mt-2"> {project.overview}</div>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  ${tw`w-[40%] m-12 font-intro`}
  cursor : pointer;

  @media screen and (max-width: 960px) {
    ${tw`w-[100%]`}
  }

  animation-name: upcard;
  animation-delay: ${(props) => props.time}s;
  animation-duration: 0.8s;
  animation-fill-mode: both;
`;
