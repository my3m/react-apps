import React from 'react'
import axios from '../api/unsplash'
import Searchbar from './Searchbar'
import ImageList from './ImageList'

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            images: []
        };
    }

    onSearchSubmit = async (q) => {
        const response = await axios.get('/search/photos', {
            params: { query: q }
        })
        this.setState({
            images: response.data.results
        });
        console.log(this.state.images);
    }

    render() {
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <Searchbar onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}