import homeImg from '../assets/images/home-bg.jpg';

function Home() {
  return (
    <>
      <div className="masthead" style={{backgroundImage: `url(${homeImg})`}}>
        <div className="overlay"></div>
        <div className="container position-relative px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                  <div className="page-heading">
                    <h1>Clean Blog</h1>
                    <span className="subheading">A Blog Theme by Start Bootstrap</span>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home;