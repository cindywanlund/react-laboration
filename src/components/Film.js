import React, {Component} from "react";
import Modal from "react-modal";
import {fetchCharacters} from "../utils/api";


class Film extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isSetOpen: false,
            characters: []
        };
    }

    toggleModal = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    setCharacters(response) {
        console.log(response);
        this.setState({
            characters: response
        });
    }

    async loadCharacters(characters) {
        fetchCharacters(characters).then(response => this.setCharacters(response))
    }

    componentDidMount() {
        console.log("Characters: " + this.props.movie.characters);
        this.loadCharacters(this.props.movie.characters);
    }

    render() {
        return (

            <React.Fragment>

                <ul>
                    <li key={this.props.movie.title}
                        key={this.props.movie.release_date}>{this.props.movie.title} {this.props.movie.release_date}
                        <button onClick={this.toggleModal}>More details</button>
                        <Modal
                            isOpen={this.state.isOpen}
                            ariaHideApp={false}
                            onRequestClose={this.toggleModal}
                            contentLabel="My dialog">
                            <div>{this.props.movie.title}</div>
                            <div>
                                <ul>
                                    {this.state.characters.map(aCharacter => {
                                        return <li key={aCharacter} íd={aCharacter}>{aCharacter}</li>
                                    })}
                                </ul>
                            </div>
                            <button onClick={this.toggleModal}>Close</button>
                        </Modal>
                    </li>
                </ul>

            </React.Fragment>
        );
    }
}

export default Film;
