import React, { Component } from 'react';
import { Segment, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { searchVideo } from '../../store/actions/search-video'

class SearchBar extends Component{

    handleSearch = e => {
        const search = e.target.value

        if(e.keyCode === 13){
            this.props.searchVideo(search)
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

const mapDispatchToProps = (dispatch) => {
    return {
        searchVideo: (name) => dispatch(searchVideo(name))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar)