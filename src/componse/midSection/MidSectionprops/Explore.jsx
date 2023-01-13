import React from "react";
import ViewAllPara from "../data/ViewAllPara";


function ExploreCard(props) {
    return (
        <div data-aos= "fade-up" data-aos-duration="1000" id={props.id} class="card exploree" style={{ width: "17.9rem" }}>

            <img id="card-collection-background" src={props.background} class="card-img-top" alt="..." />

            <div data-aos="zoom-in-up" data-aos-duration="1000" id="card-body" class="card-body">
                <h5 id="cardTitle">{props.title}</h5>
                <p id="cardOwnerd">{props.owner} <span className="ownerName">{props.theOwner}</span></p>
                <p id="cardPara1">{props.para1} <span className="ownerType">{props.type1}</span></p>
                <a id="explore-Btn" href="#" class="btn btn-primary"> <i class="explore-bag fal fa-briefcase" style={{ fontSize: "15px" }}></i> Place a Bid</a>
            </div>
        </div>
    )
}


function Explore() {


    function clicked(clickedd) {
        var btn = document.getElementById("loadMore-Btn");
        var btn1 = document.getElementById("loadMore-Btn1");
        var Showcards1 = document.querySelector(".cards1");


        if (clickedd) {
            Showcards1.style.display = "inline-flex"
            btn.style.display = "none"
            btn1.style.display = "inline-block"
        }
    }

    function clicked1(clickedd) {
        var btn1 = document.getElementById("loadMore-Btn1");
        // var btn2 = document.getElementById("loadMore-Btn2");
        var ShowCards2 = document.querySelector(".cards2");


        if (clickedd) {
            ShowCards2.style.display = "inline-flex"
            btn1.style.display = "none"
            // btn2.style.display = "inline-block"
        }
    }


    function clicked2(clickedd) {
        var btn = document.getElementById("loadMore-Btn");
        // var btn2 = document.getElementById("loadMore-Btn2");
        var Showcards1 = document.querySelector(".cards1");
        var ShowCards2 = document.querySelector(".cards2");

        if (clickedd) {
            Showcards1.style.display = "none"
            ShowCards2.style.display = "none"
            btn.style.display = "inline-block"
            // btn2.style.display = "none"
        }
    }


    return (
        <div data-aos= "fade-up" data-aos-duration="1000" className="explore">

            <h6 className="titles"><span className="logoColor">EXCLUSIVE ASSETS</span> <span><i className="wordIco far fa-horizontal-rule" ></i> </span></h6>
            <h1 className="h-Mid">Explore</h1>

            <div id="view-all">
                <ViewAllPara View="View All" />
            </div>
            <div className="moreCards">

                <div className="cardsHolder">
                    <div className="cards">
                        <ExploreCard
                            id="Card-Explore-default"
                            background="https://netstrom-angular.theme-land.com/assets/img/auction_1.jpg"
                            title="Walking On Air"
                            owner="Owned by"
                            theOwner="Richard"
                            para1="1.5 ETH"
                            type1="1 of 1"
                        />

                        <ExploreCard
                            id="Card-Explore-default"
                            background="https://netstrom-angular.theme-land.com/assets/img/auction_2.jpg"
                            title="Domain Names"
                            owner="Owned by"
                            theOwner="John Deo"
                            para1="2.7 ETH"
                            type1="1 of 1"
                        />

                        <ExploreCard
                            id="Card-Explore-default"
                            background="https://netstrom-angular.theme-land.com/assets/img/auction_3.jpg"
                            title="Trading Cards"
                            owner="Owned by"
                            theOwner="Arham"
                            para1="2.3 ETH"
                            type1="1 of 1"
                        />

                        <ExploreCard
                            id="Card-Explore-default"
                            background="https://netstrom-angular.theme-land.com/assets/img/auction_4.jpg"
                            title="Industrial Revolution"
                            owner="Owned by"
                            theOwner="Yasmin"
                            para1="1.8 ETH"
                            type1="1 of 1"
                        />

                    </div>

                    <div className="cards1 w3-container w3-animate-bottom">
                        <ExploreCard
                            id="Card-ExploreSection1"
                            background="https://netstrom-angular.theme-land.com/assets/img/auction_5.jpg"
                            title="Utility"
                            owner="Owned by"
                            theOwner="Junaid"
                            para1="1.7 ETH"
                            type1="1 of 1"
                        />

                        <ExploreCard
                            id="Card-ExploreSection1"
                            background="https://netstrom-angular.theme-land.com/assets/img/auction_6.jpg"
                            title="Sports"
                            owner="Owned by"
                            theOwner="ArtNox"
                            para1="1.7 ETH"
                            type1="1 of 1"
                        />

                        <ExploreCard
                            id="Card-ExploreSection1"
                            background="https://netstrom-angular.theme-land.com/assets/img/auction_7.jpg"
                            title="Cartoon Heroes"
                            owner="Owned by"
                            theOwner="Junaid"
                            para1="3.2 ETH"
                            type1="1 of 1"
                        />

                        <ExploreCard
                            id="Card-ExploreSection1"
                            background="https://netstrom-angular.theme-land.com/assets/img/auction_8.jpg"
                            title="Gaming Chair"
                            owner="Owned by"
                            theOwner="Johnson"
                            para1="0.69 ETH"
                            type1="1 of 1"
                        />
                    </div>

                    <div className="cards2 w3-container w3-animate-bottom">
                        <ExploreCard
                            id="Card-ExploreSection2"
                            background="https://netstrom-angular.theme-land.com/assets/img/auction_9.jpg"
                            title="Utility"
                            owner="Owned by"
                            theOwner="Junaid"
                            para1="1.7 ETH"
                            type1="1 of 1"
                        />

                        <ExploreCard
                            id="Card-ExploreSection2"
                            background="https://netstrom-angular.theme-land.com/assets/img/auction_10.jpg"
                            title="Domain Names"
                            owner="Owned by"
                            theOwner="ArtNox"
                            para1="2.7 ETH"
                            type1="1 of 1"
                        />

                        <ExploreCard
                            id="Card-ExploreSection2"
                            background="https://netstrom-angular.theme-land.com/assets/img/auction_3.jpg"
                            title="Trading Cards"
                            owner="Owned by"
                            theOwner="Arham"
                            para1="2.3 ETH"
                            type1="1 of 1"
                        />

                        <ExploreCard
                            id="Card-ExploreSection2"
                            background="https://netstrom-angular.theme-land.com/assets/img/auction_4.jpg"
                            title="Industrial Revolution"
                            owner="Owned by"
                            theOwner="Yasmin"
                            para1="1.8 ETH"
                            type1="1 of 1"
                        />
                    </div>
                </div>
            </div>
            <a onClick={clicked} id="loadMore-Btn" class="btn btn-primary" >Load More</a>
            <a onClick={clicked1} id="loadMore-Btn1" class="btn btn-primary" >Load More</a>
            {/* <a onClick={clicked2} id="loadMore-Btn2" class="btn btn-primary" >Show Less</a> */}

        </div>
    )
}


export default Explore;