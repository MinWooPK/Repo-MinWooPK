import {
  BarActive,
  SkillBox,
  SkillContainer,
  SkillSection,
  SkillTitle,
  Subtitle,
} from "./styles";

import { Mando } from "../../assets/icons/Mando";
import { ArrowDown } from "../../assets/icons/ArrowDown";
import { BarSkills } from "./BarSkill";
import { useState } from "react";

const Skill = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <SkillContainer>
        <Subtitle>My technical level</Subtitle>
        <SkillBox>
          <SkillSection onClick={toggleActive}>
            <SkillTitle>
              Front-End <Mando />
            </SkillTitle>
            <ArrowDown isActive={isActive} />
          </SkillSection>
          {isActive && (
            <BarActive>
              <BarSkills title={"HTML"} width={90} />
              <BarSkills title={"CSS"} width={80} />
              <BarSkills title={"SASS"} width={70} />
              <BarSkills title={"TAILWIND"} width={80} />
              <BarSkills title={"STYLED-COMPONENT"} width={75} />
              <BarSkills title={"LINT"} width={42} />
              <BarSkills title={"JS"} width={80} />
              <BarSkills title={"TSX"} width={70} />
              <BarSkills title={"REACT"} width={75} />
            </BarActive>
          )}
        </SkillBox>
      </SkillContainer>
    </>
  );
};

export { Skill };
