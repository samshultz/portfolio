import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css'
import PostDetail from './detail';
import ReactDOM from 'react-dom';


class PostItem extends React.Component {
    constructor(props) {
        super(props)
        this.getPostDetail = this.getPostDetail.bind(this)
    }

    
    getPostDetail(event) {
        event.preventDefault()
        
        fetch(`http://127.0.0.1:8000/api/post/${this.props.post.id}/`)
            .then(results => results.json())
            .then(results => ReactDOM.render(<PostDetail post={results} />, document.getElementById('root')))
            
    }

    render() {
        return (
            <div key={this.props.index}>
                    <div className="content-grid-info">
                        <img src={this.props.post.cover_art} alt="" className="img-responsive"/>
                        <div className="post-info">
                            <h4><a href={"http://127.0.0.1:8000/api/post/" + this.props.post.id} id={this.props.post.id} onClick={(this.getPostDetail)}>{this.props.post.title}</a> {new Date(this.props.post.publish).toUTCString()}</h4>
                            <p>{this.props.post.body.slice(0, 200)}</p>
                            <a href={"http://127.0.0.1:8000/api/post/" + this.props.post.id} onClick={(this.getPostDetail)}><span></span>READ MORE</a>
                        </div>
                    </div>

            </div>
        )
    }
}


export default PostItem