function footer()
{
    return(
        <>   
          <section className=" footer" >
                <div className="container">
                    <div className="row footer1 ">
                        <div className="col-md-4">
                            <img className="rounded-circle" src="img/blog1.jpg" />
                            <h5>Alobha</h5>
                            <h4>Contacts</h4>
                            <p>Alobha sector 63 , h-106<br />
                                7065054289<br />
                                employee@gmail.com</p>
                            <ul className="social-links">
                                <li><a href="https://www.facebook.com/"><i styele="height:70px" className="fa fa-facebook-square"></i></a></li>
                                <li><a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com/"><i className="fa fa-linkedin-square"></i> </a></li>
                                <li><a href="https://www.twitter.com/"><i className="fa fa-twitter-square"></i>
                                </a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h1> Quick Links</h1>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact us</li>
                                <li>FAQ</li>
                                <li>Service</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <form>
                                <h1>NewsLetter</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi optio dolores </p>
                                <input type="text" /><br />
                                <button type="button" className="btn btn-warning">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default footer;