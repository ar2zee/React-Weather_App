import React from "react";

import Titles from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "874f4bc163c02cadf9890154f8bdc4f8";

class App extends React.Component {
	state = {
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		error: undefined
	}
	getWeather = async (e) => {
		e.preventDefault()
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
		const data = await api_call.json();
		if (city && country) {
		console.log(data);
		this.setState({
			temperature: data.main.temp,
			city: 'Location: ' + data.name,
			country: data.sys.country,
			humidity: data.main.humidity,
			description: data.weather[0].description,
			error: ''
			});
		} else {
			this.setState({
			temperature: undefined,
			city: undefined,
			country: undefined,
			humidity: undefined,
			description: undefined,
			error: 'Please Enter the Value.'
			});
		}
	}
	render() {
		return(
			<div>
				<div className="wrapper">
					<div className="main">
						<div className="container">
							<div className="row">
								<div className="col-xs-5 title-container">
									<Titles />
										
								</div>
								<div className="col-xs-7 form-container">
									<Form getWeather={this.getWeather}/>
									<Weather 
									temperature={this.state.temperature}
									city={this.state.city}
									country={this.state.country}
									humidity={this.state.humidity}
									description={this.state.description}
									error={this.state.error}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};


				

export default App;