import SkillInfo from "./SkillInfo";

export default function Skill() {
	const bigDataTechnologies = ["Apache Hadoop", "PySpark"];
	const programmingLanguages = ["Python", "Scala", "Java", "C#"];
	const computerScienceConcepts = [
		"Data Structures",
		"Algorithms",
		"Object Oriented Design",
	];
	const webTechnologies = [
		"HTML",
		"CSS",
		"Bootstrap",
		"JavaScript",
		"jQuery",
		"Node.js",
		"Express.js",
		"React.js",
	];
	const database = ["MySQL", "MongoDB", "Mongoose"];
	const speakingLanguages = ["English", "Telugu", "Hindi"];

	return (
		<div className="skills">
			<div className="headings-title">
				<h1>Skills</h1>
			</div>

			<SkillInfo
				name="BigData Technologies"
				skill={bigDataTechnologies}
			/>

			<hr />

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
