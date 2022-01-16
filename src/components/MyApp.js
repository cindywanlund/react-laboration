import React, {Component} from "react";
import {List} from "./List";
import {fetchData} from "../utils/api";

class MyApp extends Component {
    state = {};

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            films: []
        };
    }

    componentDidMount() {
        this.loadFilms();
    }

    setFilms (response) {
        this.setState({
            loading: false,
            films:response
        });
    }

    async loadFilms() {
           const loadedFilms= fetchData();
            fetchData().then(response => this.setFilms(response))
    }

    render() {
        if (this.state.loading) {
            return (<h1>Loading....</h1>);
        } else {
            return (<React.Fragment>
                <List films={this.state.films}/>
            </React.Fragment>);
        }
    }
}

export default MyApp;
