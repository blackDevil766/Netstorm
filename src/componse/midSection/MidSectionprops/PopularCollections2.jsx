import React, { useState } from "react";
import ViewAllPara from "../data/ViewAllPara";




function PopularCards(props) {
    return (
        <div data-aos="zoom-in-down" data-aos-duration="1000" onMouseOver={props.over} onMouseOut={props.out} id="card-collection" class="cardss card" style={{ width: "17.6rem" }}>
            <img data-aos="zoom-in-up" data-aos-duration="1000" id="card-collection-background" src={props.background} alt="..." />
            <div id="card-body" class="card-body">

                <img data-aos="zoom-in-down" data-aos-duration="1000" className="characterCardImg" id={props.id} src={props.characterImg} alt="..." />
                <h3 data-aos="zoom-in-up" data-aos-duration="1000" className="cardText" id={props.cardTextId}>{props.title}</h3>

                <p id="cardPara">{props.type}</p>
            </div>
        </div>
    )
}


function Popular() {

    // card number 1

    function MouseOver1() {
        var cardImg = document.getElementById("card-collection-img1")
        var cardText = document.querySelector("#cardText1")
        cardImg.classList.add("img1")
        cardText.style.color = "#4528dc"
    }


    function MouseOut1() {
        var cardImg = document.querySelector("#card-collection-img1")
        var cardText = document.querySelector("#cardText1")
        cardImg.classList.remove("img1")
        cardText.style.color = "#fff"
    }





    // card number 2

    function MouseOver2() {
        var cardImg = document.getElementById("card-collection-img2")
        var cardText = document.querySelector("#cardText2")
        cardImg.classList.add("img1")
        cardText.style.color = "#4528dc"
    }


    function MouseOut2() {
        var cardImg = document.querySelector("#card-collection-img2")
        var cardText = document.querySelector("#cardText2")
        cardImg.classList.remove("img1")
        cardText.style.color = "#fff"
    }






    // card number 3

    function MouseOver3() {
        var cardImg = document.getElementById("card-collection-img3")
        var cardText = document.querySelector("#cardText3")
        cardImg.classList.add("img1")
        cardText.style.color = "#4528dc"
    }


    function MouseOut3() {
        var cardImg = document.querySelector("#card-collection-img3")
        var cardText = document.querySelector("#cardText3")
        cardImg.classList.remove("img1")
        cardText.style.color = "#fff"
    }





    // card number 4

    function MouseOver4() {
        var cardImg = document.getElementById("card-collection-img4")
        var cardText = document.querySelector("#cardText4")
        cardImg.classList.add("img1")
        cardText.style.color = "#4528dc"
    }


    function MouseOut4() {
        var cardImg = document.querySelector("#card-collection-img4")
        var cardText = document.querySelector("#cardText4")
        cardImg.classList.remove("img1")
        cardText.style.color = "#fff"
    }






    // card number 5

    function MouseOver5() {
        var cardImg = document.getElementById("card-collection-img5")
        var cardText = document.querySelector("#cardText5")
        cardImg.classList.add("img1")
        cardText.style.color = "#4528dc"
    }


    function MouseOut5() {
        var cardImg = document.querySelector("#card-collection-img5")
        var cardText = document.querySelector("#cardText5")
        cardImg.classList.remove("img1")
        cardText.style.color = "#fff"
    }





    // card number 6

    function MouseOver6() {
        var cardImg = document.getElementById("card-collection-img6")
        var cardText = document.querySelector("#cardText6")
        cardImg.classList.add("img1")
        cardText.style.color = "#4528dc"
    }


    function MouseOut6() {
        var cardImg = document.querySelector("#card-collection-img6")
        var cardText = document.querySelector("#cardText6")
        cardImg.classList.remove("img1")
        cardText.style.color = "#fff"
    }




    // card number 7

    function MouseOver7() {
        var cardImg = document.getElementById("card-collection-img7")
        var cardText = document.querySelector("#cardText7")
        cardImg.classList.add("img1")
        cardText.style.color = "#4528dc"
    }


    function MouseOut7() {
        var cardImg = document.querySelector("#card-collection-img7")
        var cardText = document.querySelector("#cardText7")
        cardImg.classList.remove("img1")
        cardText.style.color = "#fff"
    }






    // card number 8

    function MouseOver8() {
        var cardImg = document.getElementById("card-collection-img8")
        var cardText = document.querySelector("#cardText8")
        cardImg.classList.add("img1")
        cardText.style.color = "#4528dc"
    }


    function MouseOut8() {
        var cardImg = document.querySelector("#card-collection-img8")
        var cardText = document.querySelector("#cardText8")
        cardImg.classList.remove("img1")
        cardText.style.color = "#fff"
    }





    return (
        <div className="Popular-Collections">

            <h6 className="titles"><span className="logoColor">MOST POPULAR</span> <span><i className="wordIco far fa-horizontal-rule" ></i> </span></h6>
            <h1 className="h-Mid">Popular Collections</h1>

            <div className="leftt" id="ExploreViews">
                <ViewAllPara View="ExplorMore" />
            </div>


            <div className="popularCardsContiner">

                <PopularCards
                    id="card-collection-img1"
                    cardTextId="cardText1"
                    over={MouseOver1}
                    out={MouseOut1}
                    background="https://netstrom-angular.theme-land.com/assets/img/author_1.jpg"
                    characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_1.jpg"
                    title="Virtual Worlds"
                    type="ERC-729"
                />

                <PopularCards
                    id="card-collection-img2"
                    cardTextId="cardText2"
                    over={MouseOver2}
                    out={MouseOut2}
                    background="https://netstrom-angular.theme-land.com/assets/img/author_2.jpg"
                    characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_2.jpg"
                    title="Digital Arts"
                    type="ERC-522"
                />

                <PopularCards
                    id="card-collection-img3"
                    cardTextId="cardText3"
                    over={MouseOver3}
                    out={MouseOut3}
                    background="https://netstrom-angular.theme-land.com/assets/img/author_3.jpg"
                    characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_3.jpg"
                    title="Sports"
                    type="ERC-495"
                />

                <PopularCards
                    id="card-collection-img4"
                    cardTextId="cardText4"
                    over={MouseOver4}
                    out={MouseOut4}
                    background="https://netstrom-angular.theme-land.com/assets/img/author_4.jpg"
                    characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_4.jpg"
                    title="Digital Arts"
                    type="ERC-522"
                />

                <PopularCards
                    id="card-collection-img5"
                    cardTextId="cardText5"
                    over={MouseOver5}
                    out={MouseOut5}
                    background="https://netstrom-angular.theme-land.com/assets/img/author_5.jpg"
                    characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_5.jpg"
                    title="Trading Cards"
                    type="ERC-397"
                />

                <PopularCards
                    id="card-collection-img6"
                    cardTextId="cardText6"
                    over={MouseOver6}
                    out={MouseOut6}
                    background="https://netstrom-angular.theme-land.com/assets/img/author_6.jpg"
                    characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_6.jpg"
                    title="Walking On Air"
                    type="ERC-403"
                />

                <PopularCards
                    id="card-collection-img7"
                    cardTextId="cardText7"
                    over={MouseOver7}
                    out={MouseOut7}
                    background="https://netstrom-angular.theme-land.com/assets/img/author_7.jpg"
                    characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_7.jpg"
                    title="Domain Names"
                    type="ERC-687"
                />

                <PopularCards
                    id="card-collection-img8"
                    cardTextId="cardText8"
                    over={MouseOver8}
                    out={MouseOut8}
                    background="https://netstrom-angular.theme-land.com/assets/img/author_8.jpg"
                    characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_8.jpg"
                    title="Collectibles"
                    type="ERC-972"
                />



            </div>


        </div>
    )
}


export default Popular;






// function MouseOut1(chackHovers) {

//     var cardImg = document.querySelector("#card-collection-img")
//     var cardText = document.querySelector("#cardText")
//     if (chackHovers) {
//         cardImg.classList.remove("img1")
//         cardText.style.color = "#fff"
//     }
// }


// function MouseOver1(chackHover) {
//     var cardImg = document.querySelector("#card-collection-img")
//     var cardText = document.querySelector("#cardText")
//     const cardd = document.getElementById("card-collection")

//     var whatGotHoverd = chackHover;
//     if (whatGotHoverd) {
//         cardImg.classList.add("img1")
//         cardText.style.color = "red"
//     }
// }