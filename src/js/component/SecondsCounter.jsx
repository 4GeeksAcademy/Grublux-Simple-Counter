import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const SecondsCounter = (props) => {
	return (
         <>
            <div className="col-1 counterBg text-white text-center">
            <h1><i className="fa-regular fa-clock"></i></h1>
            </div>
            <div className="col-1 counterBg text-white text-center">
            <h1>{props.item6}</h1>
            </div>
            <div className="col-1 counterBg text-white text-center">
            <h1>{props.item5}</h1>
            </div>
            <div className="col-1 counterBg text-white text-center">
            <h1>{props.item4}</h1>
            </div>
            <div className="col-1 counterBg text-white text-center">
            <h1>{props.item3}</h1>
            </div>
            <div className="col-1 counterBg text-white text-center">
            <h1>{props.item2}</h1>
            </div>
            <div className="col-1 counterBg text-white text-center">
            <h1>{props.item1}</h1>
            </div>
        </>
	);
};

export default SecondsCounter;