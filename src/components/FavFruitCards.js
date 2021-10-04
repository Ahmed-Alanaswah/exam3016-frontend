import React, { Component } from "react";
import { Card, Col, Button } from "react-bootstrap";
export class FavFruitCards extends Component {
	render() {
		return this.props.favouriteFruitData.map((obj) => {
			return (
				<Col>
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src={obj.image} />
						<Card.Body>
							<Card.Title>{obj.name}</Card.Title>
							<Card.Text>{obj.price}</Card.Text>
							<Button
								variant="primary"
								onClick={(e) => {
									this.props.deleteoFavourite(obj.slug);
								}}
							>
								delete
							</Button>

							<Button
								variant="primary"
								onClick={(e) => {
									this.props.showFormUpdate(
										obj.slug,
										obj.name,
										obj.image,
										obj.price
									);
								}}
							>
								upadte
							</Button>
						</Card.Body>
					</Card>
				</Col>
			);
		});
	}
}

export default FavFruitCards;
