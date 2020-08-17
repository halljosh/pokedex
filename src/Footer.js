import React from 'react';

class Footer extends React.Component {
    state = { input: Math.floor(Math.random() * (807 - 1) + 1) };

    getRandomMon = () => {
        const mon = Math.floor(Math.random() * (807 - 1) + 1);
        this.setState({ input: mon });
        this.onFormSubmit()
    };

    onFormSubmit = () => {
        this.props.onFormSubmit(this.state.input);
    };

    render() {
        return (
            <div className = "appfooter">
            <h4><u>TIPS</u></h4>
            <ul>
                <li><p>Can't find the 'mon you're looking for? Check your spelling or <a href="#root" onClick = {this.getRandomMon}>click here</a> to generate a random one.</p></li>
                <li><p>Mouse over the Pokémon's image to check out its shiny sprite.</p></li>
                <li><p>You can support the developer of this app <a href="http://halljo.sh/">here</a>, and check out the PokéAPI <a href="https://pokeapi.co/">here.</a></p></li>
                <li><p>Due to API limitations, Gen. 6 shiny sprites and post-Zeraora 'mons are currently unavailable.</p></li>
            </ul>
        </div>
        );
    };
}

export default Footer;