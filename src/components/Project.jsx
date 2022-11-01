import ProjectInfo from "./ProjectInfo";

export default function Project() {
	return (
		<div className="projects">
			<div className="headings-title">
				<h1>Projects</h1>
			</div>

			<ProjectInfo
				name="Chat App"
				description="An app, which is similar to Whatsapp theme allows users to communicate with each other."
				exploreGame="https://chatappwhatsappclone.netlify.app/"
				exploreCode="https://github.com/sreeramracha/Whatsapp-Clone-Frontend"
				gameIcon="fa-solid fa-comments"
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
