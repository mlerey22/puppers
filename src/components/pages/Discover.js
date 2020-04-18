import React from "react";
import API from "../../utils/API";

class Discover extends React.Component {

    state = {
        imgURL: "",
        dogFriends: 0
      };
    
      randomPuppy = () => {
        API.randomDog()
        .then(res => this.setState({ imgURL: res.data.message} ))
    }
    
    handleButtonClick = (event) => {
        console.log("clickety clack")
        let id = event.target.id
        let likesMe = Math.floor((Math.random() * 5)) + 1;

        if (id === "helikey" && likesMe === 1) {
            this.setState({ dogFriends: this.state.dogFriends + 1})
        } 
        this.randomPuppy();
    }

    componentDidMount () {
        this.randomPuppy();
    }

    render() {
        return (
            //get API pic
            <div>
               <h2>Discover</h2>
               <div><img src={this.state.imgURL} alt="Dog Picture"/>
               <button id="helikey" onClick={this.handleButtonClick}>Like</button>
               <button id="shenolikey" onClick={this.handleButtonClick}>Don't Like</button>
               </div>
               

               <h3>{this.state.dogFriends} dogs like me.</h3>

            </div>
        );
    };
     
}

export default Discover;