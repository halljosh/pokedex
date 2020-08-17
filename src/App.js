import React from 'react';
import SearchBar from './SearchBar';
import pokemon from './pokemonapi';
import InfoBox from './InfoBox';
import SpriteBox from './SpriteBox';
import Footer from './Footer';
import './pokestyle.css';

class App extends React.Component {
    state = { name: '', id: null, height: null, weight: null, type1: '', type2: '', sprite: '' };

    onFormSubmit = async input => {
        if (input) {
            const response = await pokemon.get(`/pokemon/${input}`);
            console.log(response);
            this.setState({ id: response.data.id });
            this.setState({ name: response.data.name });
            this.setState({ height: (response.data.height) * 10 });
            this.setState({ weight: (response.data.weight) / 10 });
            if (response.data.types) {
                if (response.data.types.length < 2) {
                    this.setState({ type1: response.data.types[0].type.name });
                    this.setState({ type2: '' });
                } else {
                    this.setState({ type1: response.data.types[0].type.name });
                    this.setState({ type2: "/ " + response.data.types[1].type.name });
                }
            }
            if (response.data.sprites) {
                this.setState({ sprite: response.data.sprites.front_default });
                this.setState({ shiny: response.data.sprites.front_shiny });
            }
        }
    };

    render() {

        return (
            <div className = {this.state.type1}>
                <div className = "pagecontainer">
                    <div className = "appheader">
                        <img src = "psyduck.png" alt = "psyduck icon" className = "psyduck"/>
                        <h2>Pokédex Mini</h2>
                    </div>
                    <SearchBar onFormSubmit = { this.onFormSubmit } />
                    <div className = "dexcard">
                        <div className = "dexrow">
                            <InfoBox height = {this.state.height} name = {this.state.name} weight = {this.state.weight} type1 = {this.state.type1} type2 = {this.state.type2} />
                            <div className = "vl"></div>
                            <SpriteBox id = {this.state.id} name = {this.state.name}sprite = {this.state.sprite} shiny = {this.state.shiny}/>
                        </div>
                        {this.state.name ? <figcaption className = "mobilecaption"> <a href={"https://bulbapedia.bulbagarden.net/wiki/" + this.props.name}> learn more </a>about this Pokémon </figcaption> : <figcaption></figcaption>}
                    </div>
                    <Footer onFormSubmit = { this.onFormSubmit } />
                </div>
            </div>
        );
    };
}

export default App;