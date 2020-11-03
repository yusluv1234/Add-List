import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addPost } from '../store/actions/postAction';
import { v4 as uuidv4 } from 'uuid';

class AddPost extends Component {
    state = {
        post: {
            id: '',
            title: '',
            content: ''
        },
    };

handleChangle = (e) => {
    this.setState({
        post: {
            ...this.state.post,
            [e.target.name]: e.target.value,
        },
    });
};

handleSubmit = (e) => {
    e.preventDefault();
    this.props.createPost(this.state.post);
    this.setState({
        post: {
            id: uuidv4(),
            title: '',
            content: ''
        },
    });
}

    render() {
        return (
            <div className='container' style={{ margin: '4rem auto' }}>
                <h5 className='blue-text center-align'>CandBlog</h5>
                <form onSubmit={this.handleSubmit}>
                <div className='input-field'>
                    <label htmlFor='post_title'>Title</label>
                    <textarea onChange={this.handleChange} value={this.state.post.title} name='title' className='materialize-textarea'></textarea>
                    </div>
                    <div className='input-field'>
                    <label htmlFor='post_content'>Content</label>
                    <textarea onChange={this.handleChange} value={this.state.post.content} name='content' className='materialize-textarea'></textarea>
                    </div>
                    <div className='input-field'>
                    <button className='btn blue'>
                        Submit 
                        <i className='material-icons right'>send</i>
                    </button>
                    </div>
                </form>
            </div>
        );
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => {
            dispatch(addPost(post))
        }
    }
}

export default connect(null, MapDispatchToProps)(AddPost)
