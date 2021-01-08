import React, { Component } from 'react';
import { Segment, Input } from 'semantic-ui-react';

class SearchBar extends Component{

    handleSearch = e => {
        const search = e.target.value

        if(e.keyCode === 13){
            console.log(search)
        }
        
    }

    render(){
        return (
            <div className='search-bar'>
            <Segment stacked>
                <Input icon='search' onKeyDown={(e) => this.handleSearch(e)} size='large' placeholder='Type here...'/>
            </Segment>
        </div>
        )
    }
}

export default SearchBar