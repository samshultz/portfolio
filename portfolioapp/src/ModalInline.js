import React, { Component } from 'react';
import './App.css';


class ModalInline extends Component {
    render() {
        return (
            <div class="modal fade" id="myModal1" tabindex="-1" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<img src={require('./images/w1.jpg')} alt=" " class="img-responsive" />
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
