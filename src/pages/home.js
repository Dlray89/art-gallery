import React from "react";
import { Footer1 } from "../components/footers/footer1";
import { HomeHeader } from "../components/headers/HomeHeader";
import { HomeBody } from "../components/home-compoenets/HomeBody";



export const Home = () => {
    return (
        <div>
            <HomeHeader />
            <HomeBody />
            <Footer1 />
        </div>
    )
}