import Title from "./Title";
import Academic from "./Academic";
import Skill from "./Skill";
import Project from "./Project";
import Social from "./Social";
import Link from "./Link";
import Theme from "./Theme";

export default function App() {
	return (
		<div>
			<Title />
			<div className="academic-skills-section">
				<Academic />
				<Skill />
			</div>
			<div class="projects-social-section">
				<Project />
				<Social />
			</div>
			<Theme />

			<Link />
		</div>
	);
}
