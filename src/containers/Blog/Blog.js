import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import Axios from 'axios';

class Blog extends Component {
    state = {
        // innitially we have the state 'post' as empty.. it is AFTER componentDidMount we make a function and then populate the state below
        posts: [],
        selectedPostID:null
    }
    componentDidMount () {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts= response.data.slice(0,4);
            const updatedPosts = posts.map(post => {
                return{
                    ...post,
                    author:'Adi'
                }
            })
            this.setState({posts: updatedPosts});


            //instead of grabbing all of them
            //this.setState({posts: response.data});
            //console.log(this.state.posts);
        });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostID:id});
        console.log(id)
        

    }
    render () {
        const wtf = this.state.posts.map(post => {
            return <Post key={post.id} title={post.title} author={post.author} clicked={()=>this.postSelectedHandler(post.id)}/>;
            
        });
        //console.log(wtf);
        return (
            <div>
                <section className="Posts">
                    {wtf}
                    
                </section>
                <section>
                    {/* <FullPost id={this.state.selectedPostID} title={} body={}/> */}
                    <FullPost id={this.state.selectedPostID}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;