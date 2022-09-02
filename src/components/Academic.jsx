import AcademicInfo from "./AcademicInfo";

export default function Academic() {
	return (
		<div className="academic">
			<div className="headings-title">
				<h1>Academic Qualifications</h1>
			</div>

			<AcademicInfo
				qualification="Bachelor of Technology (B.Tech)"
				year="(2018-2022)"
				institutionName="Institute of Aeronautical Engineering"
				gpa="CGPA: 8.28/10"
				department="Department: Electronics and Communication Engineering"
			/>

			<hr />

			<AcademicInfo
				qualification="Intermediate"
				year="(2016-2018)"
				institutionName="Sri Chaitanya Junior Kalasala"
				gpa="CGPA: 930/1000"
				department="Department: MPC"
			/>

			<hr />

			<AcademicInfo
				qualification="School"
				year="(2015-2016)"
				institutionName="Suryam Model High School"
				gpa="CGPA: 9.8/10"
				department=""
			/>
		</div>
	);
}
