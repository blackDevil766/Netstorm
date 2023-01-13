import React from "react";

function EndPage() {
    return (
        <div  id="EndPage">

            <div data-aos= "fade-up" data-aos-duration="1000" className="footerItems">

                <div className="item1">
                    <img id="nav-logo" className="logoEndPage navbar-brand" src="https://netstrom-angular.theme-land.com/assets/img/logo.png" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae.</p>
                    <div className="iconsEndPage">

                        <div className="Icons">
                            <i class="ico fab fa-facebook-f" />
                        </div>

                        <div className="Icons">
                            <i class="ico fab fa-twitter" ></i>
                        </div>

                        <div className="Icons">
                            <i class="ico fab fa-google-plus-g"></i>
                        </div>

                        <div className="Icons">
                            <i class="ico fab fa-vine"></i>
                        </div>
                    </div>
                </div>

                <div className="item2">
                    <h1 className="footerHeaderText">Useful Links</h1>
                    <p className="footerPara">All NFTs</p>
                    <p className="footerPara">How It Works</p>
                    <p className="footerPara">Create</p>
                    <p className="footerPara">Explore</p>
                    <p className="footerPara">Privacy & Terms</p>
                </div>

                <div className="item3">
                    <h1 className="footerHeaderText">Community</h1>
                    <p className="footerPara">Help Center</p>
                    <p className="footerPara">Partners</p>
                    <p className="footerPara">Suggestions</p>
                    <p className="footerPara">Blog</p>
                    <p className="footerPara">Newsletter</p>
                </div>

                <div className="item4">
                    <h3 className="footerHeaderText">Subscribe Us</h3>

                    <div className="mailInserter">
                        <input className="footerInput" placeholder="info@yourmail.com" />
                        <button className="footerBtn"><i className="fal fa-paper-plane" style={{ fontSize: "18px" }}></i></button>
                    </div>
                </div>

            </div>

            <div className="footer">
                <p className="footerText1">©2021 NetStorm, All Rights Reserved.</p>
                <p className="footerText2">Made with <span><i class="fas fa-heart" style={{ fontSize: "18px;" }}></i></span> By Themeland</p>
            </div>

        </div>
    )
}

export default EndPage;