import React from "react";
import ViewAllPara from "../data/ViewAllPara";
import Cards from "../data/Cards";




function LiveAuctionsMID() {
    return (
        <div>
            <div className="startMidSection">
                <h6 data-aos="fade-down"  data-aos-duration="1000" className="AUCTIONS"><span className="logoColor">AUCTIONS</span> <span><i className="wordIco far fa-horizontal-rule" ></i> </span></h6>
                <h1 data-aos="fade-down"  data-aos-duration="1000" className="h-Mid">Live Auctions</h1>

                <div data-aos="fade-down"  data-aos-duration="1000" id="view-all">
                    <ViewAllPara View="View All" />
                </div>
            </div>


            <div  className="cards">

                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">


                    <div data-aos="fade-up"  data-aos-duration="1000" class="carousel-inner">

                        <div class="carousel-item active">
                            <Cards />
                        </div>
                        <div class="carousel-item ">
                            <Cards />
                        </div>

                        <div class="carousel-item">
                            <Cards />
                        </div>

                    </div>

                    <div id="btnsCollection" class="carousel-indicators">
                        <button id="btnss" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button id="btnss" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button id="btnss" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                </div>
            </div>

        </div>
    )
}



export default LiveAuctionsMID;