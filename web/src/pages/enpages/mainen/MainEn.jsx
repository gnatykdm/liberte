import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../shared/ui/header/Header";
import { Link } from "react-router-dom";
import flag from '../../../shared/assets/icons/united-kingdom.png';
import OrderCall from "../../../shared/ui/ordercall/OrderCall";
import Services from "../../../widgets/services/Services";
import Footer from "../../../shared/ui/footer/Footer";
import main_photo from '../../../shared/assets/images/DeWatermark.ai_1727849070458-removebg-preview.png';
import './MainEn.css';

const MainEn = () => {
    return (
        <div className="main-page-desc">
    <Helmet>
        <title>Libert - Home</title>
    </Helmet>

    <Header image={flag}
            head={"Home"}
            services={"Services"} 
            service_drop={"Oversized Transportation"}
            about={"About Us"}
            contacts={"Contacts"}
            call={"Request a Call"}
            order={"Order"}
            social_networks={"Libert on Social Media"}/>

    <div className="main-content">
        <div className="text-content-main">
            <div className="company-main-name-desc">
                logistic <br/>
                <div className="highlites">solutions</div> for <br/>
                your business
            </div>
            <div className="text-container-main">
                <p>
                    We are LIBERT Group, offering transportation services for<br/>
                    oversized cargo and document support. We transport<br/>
                    everything from combines to large infrastructure projects.
                </p>
            </div>
            <button className="btn-main-desc">
                <Link to="/contact" style={{ textDecoration: 'none', color: '#ffffff' }}>
                    start cooperation
                </Link>
            </button>
        </div>
        <img src={main_photo} alt="photo" className="main-photo-desc" />
    </div>

    <center>
        <Services more={"Learn More"}/>

        <OrderCall
            part1={"We guarantee delivery to your location so you"}
            part2={"can focus on important tasks"}
            order_call={"Request a Call"}
            order={"Order"}
            name_type={"Your Name"}
            tel_type={"Your Phone"}/>

        <Footer
            service_drop={"Oversized Transportation"}
            head={"Main Menu"}
            head2={"Our Contacts"}
            services={"Services"}
            contacts={"Contacts"}/>
    </center>
    </div>
    );
}
export default MainEn;