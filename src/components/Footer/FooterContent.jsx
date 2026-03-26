import React from 'react';
import footLogo from '../../assets/logo-footer.png'

const FooterContent = () => {
    return (
        <footer className="container mx-auto px-6 py-10">

            {/* Logo */}
            <div className="flex justify-center mb-16">
                <img
                    src={footLogo}
                    alt="logo"
                    className="h-36"
                />
            </div>

            <div className="grid md:grid-cols-3 gap-10 text-sm">
                <div>
                    <h3 className="font-semibold mb-3">About Us</h3>
                    <p className="text-gray-400 leading-relaxed">
                        We are a passionate team dedicated to providing the best
                        services to our customers.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li className="hover:text-white cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer">Services</li>
                        <li className="hover:text-white cursor-pointer">About</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Subscribe</h3>
                    <p className="text-gray-400 mb-4">
                        Subscribe to our newsletter for the latest updates.
                    </p>

                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded-l-lg w-full text-black bg-white outline-none"
                        />
                        <button className="px-4 py-2 rounded-r-lg bg-linear-to-r from-pink-400 to-yellow-400 text-black font-semibold cursor-pointer">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>

            <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} | Shishir - All Rights Reserved.
            </div>
        </footer>
    );
};

export default FooterContent;