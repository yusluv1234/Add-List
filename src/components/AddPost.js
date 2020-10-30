import React, { Component } from 'react'

class AddPost extends Component {
    render() {
        return (
            <div className='container' style={{ margin: '4rem auto' }}>
                <h5 className='blue-text center-align'>CandBlog</h5>
                <form>
                <div className='input-field'>
                    <label htmlFor='post_title'>Title</label>
                    <textarea name='content' className='materialize-textarea'></textarea>
                    </div>
                    <div className='input-field'>
                    <label htmlFor='post_content'>Content</label>
                    <textarea name='content' className='materialize-textarea'></textarea>
                    </div>
                    <div className='input-field'>
                    <button className='btn blue'>
                        Submit 
                        <i className='material-icons right'>send</i>
                    </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddPost
