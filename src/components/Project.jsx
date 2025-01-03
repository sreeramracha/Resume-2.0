import ProjectInfo from "./ProjectInfo";

export default function Project() {
	return (
		<div className="projects">
			<div className="headings-title">
				<h1>External Projects</h1>
			</div>

			<ProjectInfo
				name="Chat App"
				description="Developed a user-friendly chat application enabling real-time messaging and seamless communication."
				exploreGame="https://ws-chatapp-clone.netlify.app/"
				exploreCode="https://github.com/sreeramracha/ChatApp-Clone"
				gameIcon="fa-solid fa-comments"
				codeIcon="fa-solid fa-file-signature"
			/>

			<hr />

			<ProjectInfo
				name="Flexi Cart"
				description="Developed a dynamic e-commerce website allowing users to browse and add various items to their cart, displaying selected items and total price. Integrated a robust admin panel for performing CRUD operations to manage inventory efficiently."
				exploreGame="https://tejaswini-sale-corp-bill-generator.netlify.app/"
				exploreCode="https://github.com/sreeramracha/bill-generator"
				gameIcon=""
				codeIcon="fa-solid fa-file-signature"
			/>
			<hr />

			<ProjectInfo
				name="Simon Game"
				description="The game creates a series of tones and lights and requires a
					user to repeat the sequence. If the user succeeds, the
					series becomes progressively longer and more complex. Once
					the user fails , the game is over and their level is
					declared."
				exploreGame="https://sreeramracha.github.io/simon-game/"
				exploreCode="https://github.com/sreeramracha/simon-game"
				gameIcon="fa-solid fa-puzzle-piece"
				codeIcon="fa-solid fa-file-signature"
			/>

			<hr />

			<ProjectInfo
				name="Drum Kit"
				description="This is drumkit webpage where you can play your desired tune
					with keys mentioned using keyboard or mouse."
				exploreGame="https://sreeramracha.github.io/drumkit/"
				exploreCode="https://github.com/sreeramracha/drumkit"
				gameIcon="fa-solid fa-drum"
				codeIcon="fa-solid fa-file-signature"
			/>
		</div>
	);
}
