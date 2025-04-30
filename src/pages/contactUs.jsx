import React from "react";
import { Header } from "../components/header/header";
import { Footer } from "../components/Footer/footer";
import { Contact_breadCrumbs } from "../components/contact/contact_breadCrumb/contact_crumb";
import { ContactForm } from "../components/contact/contactForm/contactForm";
import { Contact_info } from "../components/contact/contactInfo/contact_info";


export const ContactUs = ()=>{
    return(
       <div style={{overflow:'hidden'}}>

           <Header/>
           <Contact_breadCrumbs/>
           <ContactForm/>
           <Contact_info/>
           <Footer/>
       </div>
        
    )
}