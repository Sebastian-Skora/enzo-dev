import React, { useEffect } from 'react'
import Footer from './Footer/Footer'
import Header from './header/Header'
import PhoneCall from '../PhoneCall';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const isBrowser = () => typeof window !== "undefined"


const Layout = ({ children, disableContact }) => {
    useEffect(() => {

        if (isBrowser()) {

            window.addEventListener("scroll", () => {
                let nav = document.querySelector("header");
                nav.classList.toggle("section_size", window.scrollY > 0);
                let logo = document.querySelector("small");
                logo.classList.toggle("section_size", window.scrollY > 0);
            }, { passive: true })

        }

    }, [])
    return (
        <>

            <Header />

            { children}
            <Footer />
            <MessengerCustomerChat
                pageId="104782821734352"
                appId="589168405818513"
                htmlRef={isBrowser() && window.location.pathname}
                language="pl_PL"

            />
            {!disableContact && <PhoneCall />}
        </>
    )
}


export default Layout