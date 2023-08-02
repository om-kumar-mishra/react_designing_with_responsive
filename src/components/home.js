import Home1 from "../components/home1"
import Navbar from "../components/navbar"
import Footer from "../components/Footer"



function HOME() {
    return (
        <>
            <Navbar  />

            {/* 
  <!-- About --> */}

            <section className="about text-center">
                <div className="row about1">
                    <h1>About Us</h1>
                    <p className="heading_about">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ex minus optio tenetur vitae eligendi veritatis
                        odit sequi,
                    </p>
                </div>

                <div className="container ">
                    <div className="row  about2">

                        <div className="col-md-6">
                            <img src="img/blog1.jpg" className="img-fluid" />
                        </div>

                        <div className="col-md-6">
                            <h1>Years of experience in business & events conference</h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur assumenda fugit animi possimus quibusdam
                                minima totam dolorem? Quis aliquid alias natus, sed delectus vitae? Aliquam ut dolor quos voluptates
                                molestiae.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum corrupti quaerat itaque nesciunt
                                officia debitis, assumenda quae sed tempore sunt, eos accusamus, asperiores rem possimus deserunt sequi
                                maiores laudantium?
                            </p>

                            <div>
                                <button type="button" className="btn btn-danger">Danger</button>
                            </div>

                        </div>

                    </div>
                </div>


            </section>


            {/* <!-- count --> */}

            <section className="count">
                <div className="row">
                    <div className="col-md-3">
                        <h1>500+</h1>
                        <h4>Total Event</h4>
                    </div>
                    <div className="col-md-3">
                        <h1>350+</h1>
                        <h4>Total clients</h4>
                    </div>
                    <div className="col-md-3">
                        <h1>250+</h1>
                        <h4>Total Artist Approach</h4>
                    </div>
                    <div className="col-md-3">
                        <h1>450+</h1>
                        <h4>Covered City</h4>
                    </div>
                </div>
            </section>


            {/* 
  <!-- Artist --> */}


            <section className="container artist">
                <div className="row artist1">
                    <h1>Artist</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi laborum accusamus sed sit numquam adipisci
                        laudantium itaque</p>
                </div>

                <div className="row  artist2">
                    <div className="col-md-4">
                        <div className="card" style={{width:"18rem",marginBottom:"41px"}} >
                            <img src="img/blog1.jpg" className="img-fluid card-img-top" alt="..." />
                            <div className="card-body">
                                <h5>Card title</h5>
                                <p>developer</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card"  style={{width:"18rem"}}  >
                            <img src="img/expert-team.png" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5>Card title</h5>
                                <p>developer</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{width:"18rem"}} >
                            <img src="img/govrn.png" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5>Card title</h5>
                                <p>developer</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{width:"18rem"}} >
                            <img src="img/choose-1.jpg" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5>Card title</h5>
                                <p>developer</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{width:"18rem"}} >
                            <img src="img/approach-img.jpg" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5>Card title</h5>
                                <p>developer</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{width:"18rem"}} >
                            <img src="img/asset-manag.png" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5>Card title</h5>
                                <p>developer</p>

                            </div>
                        </div>
                    </div>
                </div>

            </section>



            {/* <!-- Our Work Events --> */}

            <section className="Event">
                <div className="row">
                    <h1>Our Work Events</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi laborum accusamus sed sit numquam adipisci
                        laudantium itaque</p>
                    <div>
                        <button type="button" className="btn btn-success">Success</button>
                        <button type="button" className="btn btn-danger">Danger</button>
                        <button type="button" className="btn btn-warning">Warning</button>

                    </div>

                </div>
                <div className="row event2">
                    <div className="col-md-4">
                        <img src="./img/solution-img3.jpg" className="img-fluid"/>
                    </div>
                    <div className="col-md-4">
                        <img src="./img/solution-img6.jpg" className="img-fluid"/>
                    </div>
                    <div className="col-md-4">
                        <img src="./img/solution-img5.jpg" className="img-fluid"/>
                    </div>


                </div>
                <div>
                    <button type="button" className="btn btn-warning">Button</button>
                </div>
            </section>




            {/* <!-- Our worldwide sponsors --> */}

            <section className="OurWorld container">
                <div className="row">
                    <h1>Our WorldWide Sponsors</h1>
                    <p className="mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ex minus optio<br/> tenetur vitae eligendi
                            veritatis odit sequi,
                    </p>
                </div>
                {/* <!-- <div className="py-5  mt-3">
                    <div className="owl-carousel  owl-theme">
                        <div className="item">
                            <div className="card rounded p-2" style="width: 18rem;">

                                <img src="img/asset-manag.png" className="card-img-top" alt="...">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                            of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Add to cart</a>
                                    </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card rounded p-2" style="width: 18rem;">
                                <img src="img/blog1.jpg" className="card-img-top" alt="...">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                            of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Add to cart</a>
                                    </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card rounded p-2" style="width: 18rem;">
                                <img src="img/blog3.jpg" className="card-img-top" alt="...">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                            of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Add to cart</a>
                                    </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card rounded p-2" style="width: 18rem;">
                                <img src="img/choose-1.jpg" className="card-img-top" alt="...">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                            of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Add to cart</a>
                                    </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card rounded p-2" style="width: 18rem;">
                                <img src="img/expert-team.png" className="card-img-top" alt="...">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                            of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Add to cart</a>
                                    </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card rounded p-2" style="width: 18rem;">
                                <img src="img/hospital.png" className="card-img-top" alt="...">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                            of the card's content.</p>
                                        <a href="#" className="btn btn-primary"></a>
                                    </div>
                            </div>
                        </div>

                    </div>
                </div> --> */}

            </section>



            {/* <!-- gallary --> */}
            
            {/* <section className="gallary">
                <div className="row">
                    <h1>Our gallary</h1>
                    <p className="mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ex minus optio tenetur<br/> vitae eligendi
                            veritatis odit sequi,
                    </p>
                </div>
                <div className="gallary2" >

                    <div className="">
                        <img src="img/choose-1.jpg" />
                    </div>
                    <div className="">
                        <img src="img/solution-img2.jpg" />
                    </div>
                    <div className="">
                        <img src="img/approach-img.jpg" />
                    </div>
                    <div className="">
                        <img src="img/solution-img6.jpg" />
                    </div>
                    <div className="">
                        <img src="img/solution-img3.jpg" />
                    </div>
                </div>

            </section> */}


            {/* 
  <!-- what our client say --> */}

            <section className="whatOur">
                <div className="row">
                    <h1>What's Our Client Say</h1>
                    <p className="mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ex minus optio tenetur<br/> vitae eligendi
                            veritatis odit sequi,
                    </p>
                </div>
                <div className="whatOur1">
                    <div className="whatOur2">
                        <h3>Om kumar mishra</h3>
                        <p>developer</p>

                        <p className="mt-1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ex minus optio tenetur<br/> vitae eligendi
                                veritatis odit sequi, Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ex minus optio tenetur
                        </p>
                    </div>
                </div>

            </section>


            {/* <!-- footer --> */}

             <Footer />




        </>
    )
}


export default HOME;
