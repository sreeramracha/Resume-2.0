import SocialInfo from "./SocialInfo";

export default function Social() {
	return (
		<div className="social-profiles">
			<div className="headings-title">
				<h1>Social Profiles</h1>
			</div>

			<SocialInfo
				name="LinkedIn"
				link="https://www.linkedin.com/in/sreeramracha/"
				icon="fa-brands fa-linkedin fa-2x"
				userlink="https://www.linkedin.com/in/sreeramracha/"
				username="Sreeram Racha"
			/>

			<hr />

			<SocialInfo
				name="Hackerrank"
				link="https://www.hackerrank.com/rachasreeram"
				icon="fa-brands fa-hackerrank fa-2x"
				userlink="https://www.hackerrank.com/rachasreeram"
				username="rachasreeram"
			/>

			<hr />

			<SocialInfo
				name="GitHub"
				link="https://github.com/sreeramracha"
				icon="fa-brands fa-github fa-2x"
				userlink="https://github.com/sreeramracha"
				username="sreeramracha"
			/>

			<hr />

			<SocialInfo
				name="Gmail"
				link="mailto:rachasreeram@gmail.com"
				icon="fa-regular fa-envelope fa-2x"
				userlink="mailto:rachasreeram@gmail.com"
				username="rachasreeram@gmail.com"
			/>

			<hr />

			<SocialInfo
				name="Phone"
				link="tel:+919100960973"
				icon="fa-solid fa-phone fa-2x"
				userlink="tel:+919100960973"
				username="+91 9100960973"
			/>
		</div>
	);
}
