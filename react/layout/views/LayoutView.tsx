import { Outlet, useLocation } from "react-router-dom"
import React from "react"

// Components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import AlertView from "../../core/views/CAlertView"
import Home from "../../../../modules/Home"

interface LayoutViewProps {
    className?: string
}

const LayoutView: React.FC<LayoutViewProps> = ({ className }) => {
    return (
        <>
            <div
                className={`${className} z-0 w-screen h-screen flex flex-col justify-between`}
            >
                <div className="flex flex-col h-fit">
                    <Navbar isHorizontal />
                    <div
                        className={`
                            mx-auto w-full h-full
                       "py-12"
                        `}
                    >
                        {/* <Outlet /> */}
                        <Home />
                    </div>
                    <Footer />
                </div>
            </div>
            <AlertView />
        </>
    )
}

export default LayoutView
