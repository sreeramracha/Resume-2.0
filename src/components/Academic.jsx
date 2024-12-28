import AcademicInfo from "./AcademicInfo";
import ExperienceInfo from "./ExperienceInfo";

export default function Academic() {
	return (
		<div className="academic">
			<div className="headings-title">
				<h1>Experience</h1>
			</div>

			<ExperienceInfo
				qualification="Cognizant"
				year="(October 2022-Present)"
				description1="Designing, developing tools and applications for deployment and monitoring."
				description2="Deploying changes in DEV, FIT, PREPROD and PROD servers as per the client requirement."
				description3="Working with SQL Developer to access databse based on the environment."
				description4="Responsible for debugging and solving issues for incidents based on end-user requirements as well as during testing phase."
				// description1="Investigated application issues, identified causes and initiated troubleshooting methods for immediate resolution."
				// description2="Developed a python code for extracting order details from xml files for verification purpose from live locations."
				// description3="Performed data analysis on large datasets using SQL queries and stored procedures."
				// description4="Using software and computer programs to compile and categorize data for daily use."
			/>

			{/* <hr /> */}

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
