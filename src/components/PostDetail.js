import React, { Component } from 'react'

class PostDetail extends Component {
    render() {
        return (
            <div className='col s12 m6'>
               <div className='card'>
                   <div className='card-content'>
                    <span className='card-title'>Post One</span>
                    <p>Lorem ipsum dolor, sit amet consecteur adipisicing elit. fugiat corrupti ab itaque.</p>
                   </div>
                   <div className='card-action'>
                        <button className='btn red'>Delete</button>
                   </div>
               </div>
            </div>
        )
    }
}

export default PostDetail
