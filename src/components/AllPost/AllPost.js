import './AllPost.css';
import SinglePost from '../SinglePost/SinglePost';


const AllPost = ({posts}) => {
    
    return (
        <div className='allPost'>
            
            {posts.map(p=> <SinglePost post={p} key={p._id}/>)}
            
        </div>
          
    );
};

export default AllPost;