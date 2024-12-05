import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-orange-500 text-white py-4 sticky bottom-0">
            <div className="mx-auto flex items-center justify-between px-36">
                <p className="text-sm">© 2024 ExplorIn. All rights reserved
                </p>
                <div className="flex space-x-4">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        className="text-white hover:text-purple-500"
                    >
                        <FaFacebookF size={20} />
                    </a>
                    <a
                        href="https://youtube.com"
                        target="_blank"
                        className="text-white hover:text-purple-500"
                    >
                        <FaYoutube size={20} />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        className="text-white hover:text-purple-500"
                    >
                        <FaInstagram size={20} />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        className="text-white hover:text-purple-500"
                    >
                        <FaTwitter size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;