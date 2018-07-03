import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css'


class PostDetail extends React.Component {

    render() {
        return (
            <div key={this.props.index}>
                <div className="single">
                    <div className="container">
                        <div className="col-md-8 single-main">
                            <div className="single-grid">
                                <img src={this.props.post.cover_art} alt="" />
                                <p>{this.props.post.body}</p>
                            </div>
                            <ul className="comment-list">
                                <h5 className="post-author_head">Written by <a href="#" title="Posts by admin" rel="author">{this.props.post.author.username}</a></h5>
                                <li><img src="images/avatar.png" className="img-responsive" alt="" />
                                    <div className="desc">
                                        <p>View all posts by: <a href="#" title="Posts by admin" rel="author">{this.props.post.author.username}</a></p>
                                    </div>
                                    <div className="clearfix"></div>
                                </li>
                            </ul>
                            <div className="content-form">
                                <h3>Leave a comment</h3>
                                <form>
                                    <input type="text" placeholder="Name" required />
                                    <input type="text" placeholder="Email" required />
                                    <input type="text" placeholder="Phone" required />
                                    <textarea placeholder="Message"></textarea>
                                    <input type="submit" value="SEND" />
                                </form>
                            </div>
                        </div>

                        <div className="col-md-4 side-content">
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
            </div>
            
        )
    }
}


export default PostDetail