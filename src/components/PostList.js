import React, { Component } from 'react'
import PostDetail from './PostDetail'
 
class AddList extends Component {
    render() {
        return (
            <div className='container'>
               <div className='row'>
                    <PostDetail />
               </div>
            </div>
        )
    }
}

export default  AddList;

