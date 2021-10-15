import React, { Component } from "react";

class ButtonClass extends Component {

    render(){
        function action() {
            console.log("Klik");
        }
        return(
            <div>
                <button onClick={action}>Klik</button>
            </div>
        )
    }
}

export default ButtonClass;