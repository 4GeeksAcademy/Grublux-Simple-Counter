//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
var counter = 0;
// var counter2 = 0;
// var counter3 = 0;
// var counter4 = 0;
// var counter5 = 0;
// var counter6 = 0;

// const newCounter2 = () => {
//     if (counter2 < 9) {
//         counter2++;
//     }
//     else { counter2 = 0 };
//     return counter2;
// }

// const newCounter3 = () => {
//     if (counter3 < 9) {
//         counter3++;
//     }
//     else { counter3 = 0 };

//     return counter3;
// }

// const newCounter4 = () => {
//     if (counter4 < 9) {
//         counter4++;
//     }
//     else { counter4 = 0 };

//     return counter4;
// }

// const newCounter5 = () => {
//     if (counter5 < 9) {
//         counter5++;
//     }
//     else { counter5 = 0 };

//     return counter5;
// }

// const newCounter6 = () => {
//     if (counter6 < 9) {
//         counter6++;
//     }
//     else { counter6 = 0 };

//     return counter6;
// }


const reRender = () => {
    // if (counter < 9) {
    //     counter += 1;
    // }
    // else {counter = 0};
    counter++;
    let numberResult = "00000" + counter;

    let item1 = numberResult.charAt(numberResult.length - 1);
    let item2 = numberResult.charAt(numberResult.length - 2);
    let item3 = numberResult.charAt(numberResult.length - 3);
    let item4 = numberResult.charAt(numberResult.length - 4);
    let item5 = numberResult.charAt(numberResult.length - 5);
    let item6 = numberResult.charAt(numberResult.length - 6);


    ReactDOM.render(<Home item1={item1} item2={item2} item3={item3} item4={item4} item5={item5} item6={item6}
    />, document.querySelector("#app"));
    // ReactDOM.render(<Home seconds={counter} tenSeconds={counter2} oneHundredSeconds={counter3}
    // thousandSeconds={counter4} tenthousandSeconds={counter5} hundredThousandSeconds={counter6}
    // />, document.querySelector("#app"));    
}

setInterval(reRender, 100);
// setInterval(newCounter2, 999);
// setInterval(newCounter3, 9999);
// setInterval(newCounter4, 99999);
// setInterval(newCounter5, 999999);
// setInterval(newCounter6, 9999999);
// ReactDOM.render(<Home />, document.querySelector("#app"));
