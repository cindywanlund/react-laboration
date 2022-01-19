import React, {Component} from "react";
import Film from "./Film";
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

    setFilms(response) {
        console.log(response);
        this.setState({
            loading: false,
            films: response
        });
    }

    async loadFilms() {
        fetchData().then(response => this.setFilms(response))
    }

    render() {
        if (this.state.loading) {
            return (<h1>Loading....</h1>);
        } else {
            return (<React.Fragment>
                <h1>Star Wars films</h1>
                { this.state.films.map((aFilm,index) =>
                    <Film  key={index}
                              onDetail={this.handleDetail}
                              movie={aFilm}>
                    </Film>
                )}

            </React.Fragment>);
        }
    }

}


export default MyApp;
