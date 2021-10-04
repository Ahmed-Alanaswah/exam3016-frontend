import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Row } from "react-bootstrap";
import FavFruitCards from "./FavFruitCards";
import Form from "./Form";
class FavFruit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			favouriteFruitData: [],
			showFavFruitData: false,
			slug: "",
			name: "",
			image: "",
			price: "",
			showForm: false,
		};
	}

	componentDidMount = async () => {
		const request = await axios.get(`http://localhost:8001/fruit/favourite`);
		this.setState({
			favouriteFruitData: request.data,
			showFavFruitData: true,
		});
	};

	deleteoFavourite = async (slug) => {
		const request = await axios.delete(
			`http://localhost:8001/fruit/favourite/${slug}`
		);
		this.setState({
			favouriteFruitData: request.data,
			showFavFruitData: true,
		});
	};

	showFormUpdate = async (slug, name, image, price) => {
		this.setState({
			showForm: true,
			name: name,
			image: image,
			price: price,
			slug: slug,
		});
	};

	updateData = async (e) => {
		e.preventDefault();
		const update = {
			name: this.state.name,
			image: this.state.image,
			price: this.state.price,
		};

		const request = await axios.put(
			`http://localhost:8001/fruit/favourite/${this.state.slug}`,
			update
		);
		this.setState({
			favouriteFruitData: request.data,
			showFavFruitData: true,
		});
	};
	updateName = (e) => {
		this.setState({
			name: e.target.value,
		});
	};
	updateImage = (e) => {
		this.setState({
			image: e.target.value,
		});
	};
	updatePrice = (e) => {
		this.setState({
			price: e.target.value,
		});
	};

	handleClose = () => {
		this.setState({
			showForm: false,
		});
	};
	render() {
		return (
			<Row>
				{this.state.showForm && (
					<Form
						showForm={this.state.showForm}
						handleClose={this.handleClose}
						name={this.state.name}
						image={this.state.image}
						price={this.state.price}
						updateData={this.updateData}
						updateName={this.updateName}
						updateImage={this.updateImage}
						updatePrice={this.updatePrice}
					/>
				)}
				{this.state.showFavFruitData && (
					<FavFruitCards
						favouriteFruitData={this.state.favouriteFruitData}
						deleteoFavourite={this.deleteoFavourite}
						showFormUpdate={this.showFormUpdate}
					/>
				)}
			</Row>
		);
	}
}

export default FavFruit;
