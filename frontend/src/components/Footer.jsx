function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="container px-4 px-lg-5 mb-3">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="text-center">Copyright &copy; {currentYear}</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer