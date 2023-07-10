import homeImg from "../assets/images/home-bg.jpg";
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Link } from "react-router-dom";
import { useGetBlogPostsQuery } from "../slices/blogSlice";

function Home() {

    const { data, isLoading, error } = useGetBlogPostsQuery();

    console.log(data);

    return (
        <>
            <div
                className="masthead"
                style={{ backgroundImage: `url(${homeImg})` }}
            >
                <div className="overlay"></div>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="page-heading">
                                <h1>Clean Blog</h1>
                                <span className="subheading">
                                    A Blog Theme by Start Bootstrap
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-4">
                <div className="container">
                    <div className="row">

                        {isLoading && <Loader />}                        
                        {data && data.map((post) => (
                          
                          <div className="col-md-12" key={post._id}>
                            
                            <div className="post-preview">
                                <Link to={`/blog/${post._id}`}>
                                  <h2 className="post-title">
                                      {post.slug}
                                  </h2>
                                </Link>

                                <p className="post-subtitle">
                                    {post.content.substring(0, 200)}
                                </p>

                                <p className="post-meta">
                                    Posted by&nbsp;
                                    <Link to={`/users/${post.user.name}`}>{post.user.name}</Link> &nbsp;on {new Date(post.createdAt).toLocaleDateString()}
                                </p>
                            </div>

                            <hr className="my-4" />
                          </div>
                        ))}
                    
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
