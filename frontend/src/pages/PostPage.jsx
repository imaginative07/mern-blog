import { useParams} from "react-router-dom";
import homeImg from "../assets/images/home-bg.jpg";
import { useGetBlogDetailsQuery } from '../slices/blogSlice';
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Message from '../components/Message';

function PostPage() {

    const { id } = useParams();

    const { data, isLoading, error } = useGetBlogDetailsQuery(id);

    return (
        <>
        {isLoading ? (<Loader />) : error ? (<Message variant='danger'>{error?.data?.message || error.error}</Message>) : (
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
                                <h1>{data.title}</h1>
                                <span className="meta">
                                Posted by
                                <Link to={`/users/${data.user.name}`}>{data.user.name}</Link>
                                &nbsp;on {new Date(data.createdAt).toLocaleDateString()}&nbsp;| Read Time:&nbsp;{data.readtime} Min
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )}
        </>
    )
}

export default PostPage;