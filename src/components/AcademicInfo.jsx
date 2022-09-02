export default function AcademicInfo(props) {
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
				<p>{props.institutionName}</p>
				<p>{props.gpa}</p>
				<p>{props.department}</p>
			</div>
		</div>
	);
}
