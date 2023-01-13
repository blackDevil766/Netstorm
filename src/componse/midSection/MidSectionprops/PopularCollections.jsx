import React, { useState } from "react";
import ViewAllPara from "../data/ViewAllPara";




function PopularCards(props) {

    const [item, useItem] = useState();

    console.log(useItem);

    function MouseOut1(chackHovers) {
        var cardImg = document.querySelector("#card-collection-img")
        var cardText = document.querySelector("#cardText")


        // console.log(chackHovers);
        // useItem().map((holder) =>{
        //     console.log(holder);
        // })
    }


    function MouseOver1() {
        var cardImg = document.querySelector("#card-collection-img")
        var cardText = document.querySelector("#cardText")

        useItem((holder) => {
            if (holder) {
                cardImg.classList.add("img1")
                cardText.style.color = "red"
            }
        })
    }

    return (
        <div className={item} id="popularContiner">
            <div  onMouseOver={MouseOver1} onMouseOut={MouseOut1} id="card-collection" class="cardss card" style={{ width: "16.4rem" }}>
                <img  id="card-collection-background" src={props.background} alt="..." />
                <div id="card-body" class="card-body">

                    <img id="card-collection-img" src={props.characterImg} alt="..." />
                    <h3 id="cardText">{props.title}</h3>

                    <p id="cardPara">{props.type}</p>
                </div>
            </div>
        </div>
    )
}


function Popular1() {
    return (
        <div className="Popular-Collections">

            <h6 className="titles"><span className="logoColor">MOST POPULAR</span> <span><i className="wordIco far fa-horizontal-rule" ></i> </span></h6>
            <h1 className="h-Mid">Popular Collections</h1>

            <div id="view-all">
                <ViewAllPara View="Explor More" />
            </div>



            <PopularCards
                // imgClass="img1"
                background="https://netstrom-angular.theme-land.com/assets/img/author_1.jpg"
                characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_1.jpg"
                title="Virtual Worlds"
                type="ERC-729"
            />

            <PopularCards
                // imgClass="img2"
                background="https://netstrom-angular.theme-land.com/assets/img/author_2.jpg"
                characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_2.jpg"
                title="Digital Arts"
                type="ERC-522"
            />

            <PopularCards
                // imgClass="img3"
                background="https://netstrom-angular.theme-land.com/assets/img/author_3.jpg"
                characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_3.jpg"
                title="Sports"
                type="ERC-495"
            />

            <PopularCards
                // imgClass="img4"
                background="https://netstrom-angular.theme-land.com/assets/img/author_4.jpg"
                characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_4.jpg"
                title="Digital Arts"
                type="ERC-522"
            />

            <PopularCards
                // imgClass="img5"
                background="https://netstrom-angular.theme-land.com/assets/img/author_5.jpg"
                characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_5.jpg"
                title="Trading Cards"
                type="ERC-397"
            />

            <PopularCards
                // imgClass="img6"
                background="https://netstrom-angular.theme-land.com/assets/img/author_6.jpg"
                characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_6.jpg"
                title="Walking On Air"
                type="ERC-403"
            />

            <PopularCards
                // imgClass="img7"
                background="https://netstrom-angular.theme-land.com/assets/img/author_7.jpg"
                characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_7.jpg"
                title="Domain Names"
                type="ERC-687"
            />

            <PopularCards
                // imgClass="img8"
                background="https://netstrom-angular.theme-land.com/assets/img/author_8.jpg"
                characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_8.jpg"
                title="Collectibles"
                type="ERC-972"
            />


        </div>
    )
}


export default Popular1;






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