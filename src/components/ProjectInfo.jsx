export default function ProjectInfo(props) {
	return (
		<div>
			<div className="headings-subtitle">
				<h5>{props.name}</h5>
			</div>

			<div className="description project">
				<p>{props.description}</p>

				<div className="explore">
					<a href={props.exploreGame}>
						<div className="items">
							<p>
								<i className={props.gameIcon}></i>Try This
							</p>
						</div>
					</a>

					<a href={props.exploreCode}>
						<div className="items">
							<p>
								<i className={props.codeIcon}></i>
								See code
							</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}
