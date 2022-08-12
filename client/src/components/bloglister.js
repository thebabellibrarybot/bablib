
import { Link } from "react-router-dom";


const BlogLister = (props) => {

    const blogls = props.blogls
    
    if (blogls === undefined) {
        return <>Still loading...</>; 
        }

    return (
        <div>
            {blogls.map(blogls => {
                return(
                    <Link to = {`/babelblogls/${blogls._id}`}>
                    <div className='blogchart' key = {blogls.title}>
                        <h2>{blogls.title}
                            <p>{blogls.date}</p>
                        </h2>
                    </div>
                    </Link>
                    )
            })}
        </div>
    )
}

export default BlogLister;