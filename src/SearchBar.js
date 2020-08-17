import React from 'react';

class SearchBar extends React.Component {
    state = { input: '' }; //initializes state to an empty string

    onInputChange = event => {
        this.setState({ input: event.target.value.toLowerCase() }); // sets state when user changes input
    };

    onFormSubmit = event => {
      event.preventDefault(); // prevents search term from being "submitted" as a form
      this.props.onFormSubmit(this.state.input); // tells parent component the current search term
  };

    render() {
        return (
            <div className="search">
            	<form onSubmit = {this.onFormSubmit} className = "form">
            	<div className = "field">
            		<label><h3>Find a Pokémon:</h3></label>
            		<input type = "text" value = {this.state.input.toUpperCase()} onChange = {this.onInputChange}/>
            	</div>
            	</form>
            </div>
        );
    };
}

export default SearchBar;