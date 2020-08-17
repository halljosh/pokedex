import React from 'react';

class SpriteBox extends React.Component {

    render() {
        return (
            <div className = "whole">
                <div className = "spritebox">
                    {(this.props.id < 649) || (this.props.id > 722) ? <img alt = {this.props.shiny ? "shiny pokemon sprite" : ''} className  = "shinysprite" src = {this.props.shiny} /> : <p></p>}
                    <img alt = {this.props.sprite ? "pokemon sprite" : ''} className = {(this.props.id < 649) || (this.props.id > 722) ? "sprite" : "gensix"} src = {this.props.sprite} />
                </div> 
                {this.props.sprite ? <figcaption className = "webcaption"> <a href={"https://bulbapedia.bulbagarden.net/wiki/" + this.props.name}> learn more </a>about this Pokémon </figcaption> : <figcaption></figcaption>}
            </div>
        );
    };
}


export default SpriteBox;