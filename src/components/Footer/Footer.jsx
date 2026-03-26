import FooterContent from "./FooterContent";
import bgShadow from '../../assets/bg-shadow.png'

const Footer = () => {
    return (
        <div className="bg-[#06091A] text-white pt-50 mt-66 relative">
            <div className="container mx-auto p-4 bg-white/15 border-2 border-white rounded-3xl absolute left-1/2 -translate-x-1/2 -top-1/5">
                <div
                    className="rounded-3xl py-10 sm:py-20 px-10 text-center shadow-lg bg-white"
                    style={{ backgroundImage: `url(${bgShadow})` }}
                >
                    <h2 className="text-lg sm:text-2xl font-bold text-gray-800">
                        Subscribe to our Newsletter
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Get the latest updates and news right in your inbox!
                    </p>

                    <div className="mt-6 flex flex-col md:flex-row justify-center gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-3 rounded-lg w-full md:w-80 text-black outline-none border border-gray-300"
                        />
                        <button className="px-6 py-3 rounded-lg bg-linear-to-r from-pink-400 to-yellow-400 text-black font-semibold hover:opacity-90 transition cursor-pointer">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <FooterContent />
        </div>
    );
};

export default Footer;