import React from "react"
import NavProps from "./nav/NavProps"
import Midsection from "./midSection/Midsection";

import AOS from "aos";



var lastScrollY = window.scroll(0, 1);

window.addEventListener("scroll", () => {

    var nav = document.querySelector("#nav-section");

    if (lastScrollY < window.scrollY) {
        console.log("window going down");
        nav.classList.add("native");
    } else {
        console.log("window going up");
        nav.classList.remove("native");
    }

    lastScrollY = window.scrollY;
})



function mouseOver1() {
    const hiddenDiv = document.getElementsByClassName("exploreShowingItem")[0]
    hiddenDiv.style.opacity = "100%"
    hiddenDiv.style.visibility = "visible"
}

function mouseOut1() {
    const hiddenDiv = document.getElementsByClassName("exploreShowingItem")[0]
    hiddenDiv.style.opacity = "0"
    hiddenDiv.style.visibility = "hidden"
}

function itemsmouseOver() {
    const hiddenDiv = document.getElementsByClassName("exploreShowingItem")[0]
    hiddenDiv.style.opacity = "100%"
    hiddenDiv.style.visibility = "visible"
}

function itemsmouseOut() {
    const hiddenDiv = document.getElementsByClassName("exploreShowingItem")[0]
    hiddenDiv.style.opacity = "0"
    hiddenDiv.style.visibility = "hidden"
}


function mouseOver2() {
    const hiddenDiv1 = document.getElementsByClassName("communityShowingItem")[0]
    hiddenDiv1.style.opacity = "100%"
    hiddenDiv1.style.visibility = "visible"
}

function mouseOut2() {
    const hiddenDiv1 = document.getElementsByClassName("communityShowingItem")[0]
    hiddenDiv1.style.opacity = "0"
    hiddenDiv1.style.visibility = "hidden"
}

function itemsmouseOver2() {
    const hiddenDiv1 = document.getElementsByClassName("communityShowingItem")[0]
    hiddenDiv1.style.opacity = "100%"
    hiddenDiv1.style.visibility = "visible"
}

function itemsmouseOut2() {
    const hiddenDiv1 = document.getElementsByClassName("communityShowingItem")[0]
    hiddenDiv1.style.opacity = "0"
    hiddenDiv1.style.visibility = "hidden"
}

function mouseOver3() {
    const hiddenDiv1 = document.getElementsByClassName("pagesShowingItem")[0]
    hiddenDiv1.style.opacity = "100%"
    hiddenDiv1.style.visibility = "visible"
}

function mouseOut3() {
    const hiddenDiv1 = document.getElementsByClassName("pagesShowingItem")[0]
    hiddenDiv1.style.opacity = "0"
    hiddenDiv1.style.visibility = "hidden"
}

function itemsmouseOver3() {
    const hiddenDiv1 = document.getElementsByClassName("pagesShowingItem")[0]
    hiddenDiv1.style.opacity = "100%"
    hiddenDiv1.style.visibility = "visible"

}

function itemsmouseOut3() {
    const hiddenDiv1 = document.getElementsByClassName("pagesShowingItem")[0]
    hiddenDiv1.style.opacity = "0"
    hiddenDiv1.style.visibility = "hidden"
}


function NavBar() {
    AOS.init();

    return (

        <div className="section1">
            
            <nav id="nav-section" className="navbar navbar-expand-lg navbar-light ">


                <div id="collopas" className="collapse navbar-collapse">
                    <div id="Navcontiner" className="container-fluid">
                        <img data-aos="flip-left" data-aos-duration="1000" id="nav-logo" className="navbar navbar-brand" src="https://netstrom-angular.theme-land.com/assets/img/logo.png" alt="" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                        <ul id="nav-items" className="navbar-nav">

                            <NavProps daley="250" class="nav-link" text="Home" />

                            <div className="exploreItemInNavs">
                                <NavProps daley="500" over={mouseOver1} out={mouseOut1} class="nav-link exploreItemInNav" text="Explore" ico={<i className="arrowIcon1  far fa-chevron-down"></i>} />


                                <div className="exploreShowingItem">
                                    <ul className="itemss" onMouseOver={itemsmouseOver} onMouseOut={itemsmouseOut}>
                                        <li className="navHoverdItem">Explore Style 1</li>
                                        <li className="navHoverdItem">Explore Style 2</li>
                                        <li className="navHoverdItem">Explore Style 3</li>
                                        <li className="navHoverdItem">Explore Style 4</li>
                                        <li className="navHoverdItem">Live Auctions</li>
                                        <li className="navHoverdItem">Item Details</li>
                                    </ul>
                                </div>
                            </div>

                            <NavProps daley="750" class="nav-link" text="Activity" />

                            <div className="communityItemInNavs">
                                <NavProps daley="1000" over={mouseOver2} out={mouseOut2} class="nav-link communityItemInNav" text="Community" ico={<i className="arrowIcon2  far fa-chevron-down"></i>} />

                                <div className="communityShowingItem">
                                    <ul className="itemss" onMouseOver={itemsmouseOver2} onMouseOut={itemsmouseOut2}>
                                        <li className="navHoverdItem1">Blog</li>
                                        <li className="navHoverdItem1">Blog Single</li>
                                        <li className="navHoverdItem1">Help Center</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="pagesItemInNavs">
                                <NavProps daley="1250" over={mouseOver3} out={mouseOut3} class="nav-link pagesItemInNav" text="Pages" ico={<i className="arrowIcon3  far fa-chevron-down"></i>} />



                                <div className="pagesShowingItem">
                                    <ul className="itemss" onMouseOver={itemsmouseOver3} onMouseOut={itemsmouseOut3}>
                                        <li className="navHoverdItem2">Authors</li>
                                        <li className="navHoverdItem2">Author</li>
                                        <li className="navHoverdItem2">Wallet Connect</li>
                                        <li className="navHoverdItem2">Create</li>
                                        <li className="navHoverdItem2">Login</li>
                                        <li className="navHoverdItem2">Signup</li>

                                    </ul>
                                </div>
                            </div>


                            <NavProps daley="1500" class="nav-link" text="Contact" />

                            <i data-aos="zoom-out" data-aos-duration="1000" className="searchIco fad fa-search" ></i>


                        </ul>

                        <div data-aos="zoom-out" data-aos-duration="1000" id="nav-section-btn">
                            <input id="nav-btn" type="button" value="Wallet Connect" />
                            <i className="walletIco fal fa-wallet"></i>
                        </div>
                    </div>

                </div>
            </nav>

            <div className="frontPageContianer">



                <h6 className="NETSTORM"><span className="logoColor">NETSTORM</span> <span><i className="wordIco far fa-horizontal-rule" ></i> </span></h6>
                <h1 data-aos="fade-right" data-aos-duration="500" className="header">Discover, collect,</h1>
                <h1 data-aos="fade-right" data-aos-duration="1000" className="header">and sell</h1>
                <h1 data-aos="fade-right" data-aos-duration="1500" className="header">extraordinary NFTs</h1>
                <p data-aos="fade-up" data-aos-duration="1000" className="para" >Explore on the world's best & largest NFT marketplace</p>

                <div id="front-section-btn">
                    <div data-aos="fade-up" data-aos-duration="1000" className="rocket-btn">
                        <div id="startFrontPage-btn1" type="button"> <i id="rocket" className="fal fa-rocket"></i> Explore</div>
                        
                    </div>

                    <div data-aos="fade-up" data-aos-duration="1000" className="note-btn">
                        <div id="startFrontPage-btn2" type="button" > <i id="note" className="fal fa-clipboard"></i> Create</div>
                    </div>

                </div>

            </div>

            <div className="frontBackGround"></div>


            <Midsection />

        </div>

    )
}

export default NavBar;