import React, { Component } from 'react';
import './App.css';


class ModalInline extends Component {
	render() {
		return (
			<div className="modal fade" id="myModal1" tabIndex={-1} role="dialog">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal">×</button>
							<img src="{require('./images/w1.jpg')}" alt=" " className="img-responsive" />
							<h5>Font and branding design for Printing company.</h5>
							<p>Ut in ligula sollicitudin, auctor elit vel, mollis tortor. Nullam id magna in eros mollis porttitor vel et eros.Phasellus
          sed iaculis nibh, non suscipit tortor. Aenean ante massa, lobortis et dolor eget, sollicitudin luctus arcu.</p>
						</div>
					</div>
				</div>
			</div>


		);
	}
}

export default ModalInline;
