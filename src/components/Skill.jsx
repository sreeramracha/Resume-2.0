import SkillInfo from "./SkillInfo";
import {
	programmingLanguages,
	computerScienceConcepts,
	webTechnologies,
	database,
	speakingLanguages,
} from "./Items.jsx";

export default function Skill() {
	return (
		<div className="skills">
			<div className="headings-title">
				<h1>Skills</h1>
			</div>

			{/* <SkillInfo
				name="BigData Technologies"
				skill={bigDataTechnologies}
			/>

			<hr /> */}

			<SkillInfo
				name="Programming Languages"
				skill={programmingLanguages}
			/>

			<hr />

			<SkillInfo
				name="Computer Science Concepts"
				skill={computerScienceConcepts}
			/>

			<hr />

			<SkillInfo name="Web Technologies" skill={webTechnologies} />

			<hr />

			<SkillInfo name="Database" skill={database} />

			<hr />

			<SkillInfo name="Speaking Languages" skill={speakingLanguages} />
		</div>
	);
}
