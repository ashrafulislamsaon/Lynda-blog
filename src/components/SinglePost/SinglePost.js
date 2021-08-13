import './SinglePost.css';
import { Link } from 'react-router-dom';


const SinglePost = ({ post }) => {
    const PF = "http://localhost:5000/images/";

    return (
        <div className="singlePost">
            {post.photo && <img src={PF + post.photo} alt="" className="postImg" />}
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Sports</span>
                    <span className="postCat">Music</span>
                </div>
                <Link to={`/posts/${post._id}`} className="noStyling">
                    <h3 className="postTitle">{post.title}</h3>
                </Link>
                <p className="postDesc">{post.desc}</p>
                <div className="authorInfo">
                    <span className="postAuthor">{post.username}</span>
                    <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
            </div>

        </div>

    );
};

export default SinglePost;