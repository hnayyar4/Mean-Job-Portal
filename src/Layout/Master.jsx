import {Outlet} from "react-router-dom"
import { Footer } from "./Footer";
import Header from "./Header";

export function Master(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}