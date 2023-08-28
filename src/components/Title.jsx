import dp from "../images/Passport_size photo.jpg";

export default function Title() {
	return (
		<div className="title-section">
			<div className="profile-picture">
				<img className="dp" src={dp} alt="profile" />
			</div>
			<div className="profile-description">
				<h1 className="title">Racha Laxmi Sreeram</h1>
				{/* <p className="sub-title">Programmer</p> */}
			</div>
		</div>
	);
}
