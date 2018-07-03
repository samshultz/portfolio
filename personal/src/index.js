import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css'

import Header from './header';
import PostItem from './post';


class Post extends React.Component {
    constructor() {
        super()
        this.state = {
            'posts': []
        }
    }

    componentDidMount() {
        this.getPosts();
    };

    getPosts() {
        fetch('http://127.0.0.1:8000/api/post/')
            .then(results => results.json())
            .then(results => this.setState({ 'posts': results }))
            
    };
    render() {
        return (
            <Header />,
            <div className="content">
            <div className="container">
              <div className="content-grids">
                <div className="col-md-8 content-main">
                  <div className="content-grid"></div>					 
                  {this.state.posts.map((post, index) =>
                <PostItem post={post} index={index} key={index}/>
            )}
                    
                  </div>
                 </div>
                 
                 <div className="col-md-4 content-right">
                  <div className="recent">
                    <h3>RECENT POSTS</h3>
                    <ul>
                    <li><a href="#">Aliquam tincidunt mauris</a></li>
                    <li><a href="#">Vestibulum auctor dapibus  lipsum</a></li>
                    <li><a href="#">Nunc dignissim risus consecu</a></li>
                    <li><a href="#">Cras ornare tristiqu</a></li>
                    </ul>
                  </div>
                  <div className="comments">
                    <h3>RECENT COMMENTS</h3>
                    <ul>
                    <li><a href="#">Amada Doe </a> on <a href="#">Hello World!</a></li>
                    <li><a href="#">Peter Doe </a> on <a href="#"> Photography</a></li>
                    <li><a href="#">Steve Roberts  </a> on <a href="#">HTML5/CSS3</a></li>
                    </ul>
                  </div>
                  <div className="clearfix"></div>
                  <div className="archives">
                    <h3>ARCHIVES</h3>
                    <ul>
                    <li><a href="#">October 2013</a></li>
                    <li><a href="#">September 2013</a></li>
                    <li><a href="#">August 2013</a></li>
                    <li><a href="#">July 2013</a></li>
                    </ul>
                  </div>
                  <div className="categories">
                    <h3>CATEGORIES</h3>
                    <ul>
                    <li><a href="#">Vivamus vestibulum nulla</a></li>
                    <li><a href="#">Integer vitae libero ac risus e</a></li>
                    <li><a href="#">Vestibulum commo</a></li>
                    <li><a href="#">Cras iaculis ultricies</a></li>
                    </ul>
                  </div>
                  <div className="clearfix"></div>
                 </div>
                 <div className="clearfix"></div>
               </div>
             </div>
            
            
            
        )
    }
}

ReactDOM.render(
    <Post />,
    document.getElementById('root')
)