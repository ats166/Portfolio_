import React from "react";
import tw, { styled } from "twin.macro";

import WillumpTV from "../../assets/WillumpTV.jpg";
import Returnz from "../../assets/returnz.gif";
import Zzalu from "../../assets/zzalu.gif";
import Buddiary from "../../assets/Buddiary.gif";
import { useNavigate } from "react-router-dom";

export default function ProjectItem(props) {
  const navigate = useNavigate();
  const project = props.data;
  const id = project.id - 1;
  const img = [WillumpTV, Zzalu, Returnz, Buddiary];

  const handleGoDetail = () => {
    navigate(`/project/${id}`);
  };

  return (
    <CardContainer onClick={handleGoDetail}>
      {id === 1 ? (
        <img
          src={img[id]}
          alt="사진"
          className="w-[50%] mx-auto border border-black h-[30vh]"
        />
      ) : (
        <img
          src={img[id]}
          alt="사진"
          className="w-full border border-black h-[30vh]"
        />
      )}
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
`;
