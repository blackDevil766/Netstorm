import React from "react";
import LiveAuctionsMID from "./MidSectionprops/LiveAuctionsMID";
import TopSaller from "./MidSectionprops/TopSellers";
import Popular from "./MidSectionprops/PopularCollections2";
import Explore from "./MidSectionprops/Explore";
import HowItWork from "./MidSectionprops/HowItWork";
import EndPage from "./MidSectionprops/EndPage";
import AOS from "aos";



function MidSection() {
    AOS.init();
    return (
        <div id="mid-section-contanir">
            <LiveAuctionsMID />
            <TopSaller />
            <Popular />
            <Explore />
            <HowItWork />
            <EndPage />
        </div>
    )
}

export default MidSection;