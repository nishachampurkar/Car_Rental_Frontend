function About(){
    return (
        <>
        <div className="page-heading about-heading header-text" style={{backgroundImage: 'url(images/heading-1-1920x500.jpg)'}}>
        <div className="container">
            <div className="row">
            <div className="col-md-12">
                <div className="text-content">
                <h4>about us</h4>
                <h2>car rental</h2>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="best-features about-features">
        <div className="container">
            <div className="row">
            <div className="col-md-12">
                <div className="section-heading">
                <h2>We are providing car on rents</h2>
                </div>
            </div>
            <div className="col-md-6">
                <div className="right-image">
                <img src="images/about-1-570x350.jpg" alt />
                </div>
            </div>
            <div className="col-md-6">
                <div className="left-content">
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis.</p>
                <ul className="social-icons">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                    <li><a href="#"><i className="fa fa-behance" /></a></li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </div>

        </>
    )
}

export default About;