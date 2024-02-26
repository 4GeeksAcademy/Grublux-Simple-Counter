import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "./SecondsCounter";

//create your first component
const Home = (props) => {

	return (
		<div className="container">
			<div className="row d-flex py-3 px-5 justify-content-between bg-dark">
			<SecondsCounter item1={props.item1} item2={props.item2} item3={props.item3} item4={props.item4}
			item5={props.item5} item6={props.item6}
			// seconds={props.seconds} tenSeconds={props.tenSeconds} oneHundredSeconds={props.oneHundredSeconds}
			// thousandSeconds={props.thousandSeconds} tenthousandSeconds={props.tenthousandSeconds} hundredThousandSeconds={props.hundredThousandSeconds}
			/>
			</div>
		</div>
	);
};

export default Home;
