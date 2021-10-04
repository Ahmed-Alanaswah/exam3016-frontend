import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import FruitCards from "./FruitCards";
import { Row } from "react-bootstrap";
class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dataFruitApi: [],
			showDataFruits: false,
		};
	}

	componentDidMount = async () => {
		const request = await axios.get(`http://localhost:8001/fruit`);
		this.setState({
			dataFruitApi: request.data,
			showDataFruits: true,
		});
	};

	addToFavourite = async (obj) => {
		axios.post(`http://localhost:8001/fruit/favourite`, obj);
		console.log(obj);
	};
	render() {
		return (
			<Row>
				{this.state.showDataFruits && (
					<FruitCards
						dataFruitApi={this.state.dataFruitApi}
						addToFavourite={this.addToFavourite}
					/>
				)}
			</Row>
		);
	}
}

export default Home;
