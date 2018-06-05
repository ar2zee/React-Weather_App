import React from "react";

const Weather = props => (
		<div className="eather__info">
			{
			 props.city && props.country && <p class="weather__key">Location: 
			<span class="weather__value"> { props.city }, { props.country } </span>
			 </p> 
			}
			{ 
				props.temperature && <p class="weather__key">Temperature: 
				<span class="weather__value"> { props.temperature } </span>
				</p> 
			}
			{ 
				props.humidity &&<p class="weather__key">Humidity: 
				<span class="weather__value"> { props.humidity }</span> 
				</p> 
			}
			{ 
				props.description &&<p class="weather__key">Conditions: 
				<span class="weather__value"> { props.description }</span> </p> 
			}
			{ 
				props.error && <p class="weather__error"> { props.error }</p>
			}
		</div>
)

export default Weather;