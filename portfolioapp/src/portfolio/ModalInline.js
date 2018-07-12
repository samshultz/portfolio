import React from 'react';


const ModalInline = (props) => {
	
	return (
		<div className="modal fade" id="myModal3" tabIndex={-1} role="dialog">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal">×</button>
						<img src={props.project.img} alt=" " className="img-responsive" />
						<h5>{props.project.title}</h5>
						<p>{props.project.description}</p>
						<div className="botton">
							<a href={props.project.github_link} target="_blank">Github Link</a>
						</div>
						<div className="botton">
							<a href={props.project.live_project_url} target="_blank">Live project link</a>
						</div>
					</div>

				</div>
			</div>
		</div>


	);
}

export default ModalInline;
