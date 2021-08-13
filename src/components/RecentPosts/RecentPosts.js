import "../SinglePost/SinglePost.css";
import post1 from '../../images/Posts/post10.jpg';
import post2 from '../../images/Posts/post6.jpg';



const RecentPosts = ({ post }) => {
    return (
        <div className="recentPosts">
            <div className="row">
                <div className="col-md-8 recent-large-img">
                    <div className="card">
                        <img className="card-img-top " src={post1} alt="Card image cap" />
                        <div className="card-body">
                            <h2>{post.title}</h2>
                            <p className="card-text">{post.desc}</p>
                        </div>
                        <div className="authorInfo">
                            <span className="authorName">{post.username}</span>
                            <span className="postTime">{new Date(post.createdAt).toDateString()}</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top " src={post1} alt="Card image cap" />
                        <div className="card-body">
                            <h2>{post.title}</h2>
                            <p className="card-text">{post.desc}</p>
                        </div>
                        <div className="authorInfo">
                            <span className="authorName">{post.username}</span>
                            <span className="postTime">{new Date(post.createdAt).toDateString()}</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default RecentPosts;