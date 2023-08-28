export default function ExperienceInfo(props) {
	return (
		<div>
			<div className="headings-subtitle">
				<div className="qualification-name">
					<h5>{props.qualification}</h5>
				</div>
				<div className="year">
					<h5>{props.year}</h5>
				</div>
			</div>

			<div className="academic-description">
				{/* <p>{props.institutionName}</p>
				<p>{props.gpa}</p>
				<p>{props.department}</p> */}
				<ul>
					<li>{props.description1}</li>
					<li>{props.description2}</li>
					<li>{props.description3}</li>
					<li>{props.description4}</li>
				</ul>
			</div>
		</div>
	);
}
