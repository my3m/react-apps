import React from 'react'

export default class Searchbar extends React.Component {
    constructor() {
        super();
        this.state = {
            'query' : ''
        };
    }

    onSubmit = (e) => {
        e.preventDefault();   
        this.props.onSearchSubmit(this.state.query);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="field">
                        <label htmlFor="search-bar">Search</label>
                        <input type="text" placeholder="Search..." name="search-bar" value={this.state.query} onChange={(e)=> {this.setState({'query': e.target.value })}}></input>
                    </div>
                </form>
            </div>
        )
    }
}