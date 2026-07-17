import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer mt-5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="
                        footer-wrapper
                        relative
                        py-10
                        after:content-['']
                        after:absolute
                        after:top-0
                        after:left-0
                        after:w-full
                        after:h-[1px]
                        after:bg-black/20
                        before:content-['']
                        before:absolute
                        before:bottom-0
                        before:left-0
                        before:w-full
                        before:h-[1px]
                        before:bg-black/20
                    "
                >
                    <div className="grid grid-cols-12 gap-6">

                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <ul className="footer-col-links space-y-4">
                                <li><b>INFORMATION</b></li>
                                <li><Link to="#">About us</Link></li>
                                <li><Link to="#">Contact Us</Link></li>
                                <li><Link to="#">Career</Link></li>
                                <li><Link to="#">My Account</Link></li>
                                <li><Link to="#">Orders and Returns</Link></li>
                            </ul>
                        </div>

                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <ul className="footer-col-links space-y-4">
                                <li><b>QUICK SHOP</b></li>
                                <li><Link to="#">Fashion</Link></li>
                                <li><Link to="#">Men</Link></li>
                                <li><Link to="#">Furniture</Link></li>
                                <li><Link to="#">Home Decor</Link></li>
                                <li><Link to="#">Shoes</Link></li>
                            </ul>
                        </div>

                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <ul className="footer-col-links space-y-4">
                                <li><b>CUSTOMER SERVICES</b></li>
                                <li><Link to="#">Help & FAQs</Link></li>
                                <li><Link to="#">Returns Policy</Link></li>
                                <li><Link to="#">Terms & Conditions</Link></li>
                                <li><Link to="#">Privacy Policy</Link></li>
                                <li><Link to="#">Support Center</Link></li>
                            </ul>
                        </div>

                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <ul className="footer-col-links space-y-4">
                                <li><b>NEWSLETTER</b></li>
                                <li>
                                    <p>
                                        Enter your email to receive daily news and get
                                        20% off coupon for all items.
                                    </p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-copyright py-6">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <p>© 2026 WAIRZ. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;