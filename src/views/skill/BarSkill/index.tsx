import { BarInfo, BarSkill, BarSkillProgress, BubbleDialogue } from "./styles";

interface BarSkillsProps {
  title: string;
  width: number;
}

export const BarSkills = ({ title, width }: BarSkillsProps) => {
  return (
    <>
      <BarInfo>{title}</BarInfo>
      <BarSkill>
        <BarSkillProgress width={width}>
          <BubbleDialogue>{width}%</BubbleDialogue>
        </BarSkillProgress>
      </BarSkill>
    </>
  );
};
