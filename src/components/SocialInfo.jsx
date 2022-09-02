export default function SocialInfo(props) {
	return (
		<div>
			<div className="headings-subtitle">
				<h5>{props.name}</h5>
			</div>

			<div className="social-profile-description">
				<a href={props.link}>
					<i className={props.icon}></i>
				</a>

				<a href={props.userlink}>
					<p>{props.username}</p>
				</a>
			</div>
		</div>
	);
}
