import React, { Component } from "react";
import { Image, Modal, Button } from "react-bootstrap";
export class Form extends Component {
	render() {
		return (
			<div>
				<Modal show={this.props.showForm} onHide={this.props.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>{this.props.name}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Image src={this.props.image} thumbnail />
						<br />
						{this.props.price}
						<br />
						<form onSubmit={this.props.updateData}>
							<input
								type="text"
								onChange={this.props.updateName}
								value={this.props.name}
							/>
							<br />
							<input
								type="text"
								onChange={this.props.updateImage}
								value={this.props.image}
							/>
							<br />
							<input
								type="text"
								onChange={this.props.updatePrice}
								value={this.props.price}
							/>

							<input type="submit" value="update data" />
						</form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.props.handleClose}>
							Close
						</Button>
						<Button variant="primary" onClick={this.props.handleClose}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default Form;
