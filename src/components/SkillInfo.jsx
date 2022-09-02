export default function SkillInfo(props) {
	return (
		<div>
			<div className="headings-subtitle">
				<h5>{props.name}</h5>
			</div>

			<div className="description">
				{props.skill.map((x) => {
					return (
						<div className="items">
							<p>{x}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
