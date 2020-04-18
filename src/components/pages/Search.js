import React from "react";
import API from "../../utils/API";

class Search extends React.Component { 
    state = {
        searchBreed: "",
        results: []
    }

    breedSearch = () => {
        API.searchBreed(this.state.searchBreed) 
        .then(res => this.setState({ results: res.data.message }))
    }
    handleChange = event => {
        this.setState({
            searchBreed: event.target.value
        })
    }

    handlebuttonClick = (event) => {
        event.preventDefault()
    }
    
    render() {
    return (
        <div>
            <h2>Searchamundo</h2>
            <input type="text" placeholder="Enter Breed Name" value={this.state.searchBreed} onChange={this.handleChange}/>
            <button onClick={this.breedSearch}>Find my dog!</button>
            <div id="results">
                {this.state.results.map((image, index) => {
                    return <div key={index}><img src={image}></img></div>
                })}
            </div>
        </div>
    );
    }
}

export default Search;