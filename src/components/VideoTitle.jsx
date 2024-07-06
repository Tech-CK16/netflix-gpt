const VideoTitle = ({ title, overview }) => {
    return (
        <div className="py-36 px-12 absolute text-white bg-gradient-to-r from-black w-full aspect-video justify-center flex items-start flex-col">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/3">{overview}</p>
            <div className="flex">
                <button className="flex justify-center items-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black bg-white rounded-lg hover:bg-opacity-80 focus:z-10 focus:ring-2 focus:ring-gray-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[25px] h-[25px] mr-2"
                        viewBox="0 0 25 25"
                        fill="none"
                    >
                        <path
                            d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"
                            fill="#1C274C"
                        />
                    </svg>
                    <span>Play</span>
                </button>
                <button className="flex justify-center items-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white bg-gray-500 bg-opacity-20 rounded-lg hover:bg-opacity-30 focus:z-10 focus:ring-2 focus:ring-gray-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[25px] h-[25px] mr-2"
                        viewBox="-0.5 0 25 25"
                        fill="none"
                    >
                        <path
                            d="M12 21.5C17.1086 21.5 21.25 17.3586 21.25 12.25C21.25 7.14137 17.1086 3 12 3C6.89137 3 2.75 7.14137 2.75 12.25C2.75 17.3586 6.89137 21.5 12 21.5Z"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M12.9309 8.15005C12.9256 8.39231 12.825 8.62272 12.6509 8.79123C12.4767 8.95974 12.2431 9.05271 12.0008 9.05002C11.8242 9.04413 11.6533 8.98641 11.5093 8.884C11.3652 8.7816 11.2546 8.63903 11.1911 8.47415C11.1275 8.30927 11.1139 8.12932 11.152 7.95675C11.19 7.78419 11.278 7.6267 11.405 7.50381C11.532 7.38093 11.6923 7.29814 11.866 7.26578C12.0397 7.23341 12.2192 7.25289 12.3819 7.32181C12.5446 7.39072 12.6834 7.506 12.781 7.65329C12.8787 7.80057 12.9308 7.97335 12.9309 8.15005ZM11.2909 16.5301V11.1501C11.2882 11.0556 11.3046 10.9615 11.3392 10.8736C11.3738 10.7857 11.4258 10.7057 11.4922 10.6385C11.5585 10.5712 11.6378 10.518 11.7252 10.4822C11.8126 10.4464 11.9064 10.4286 12.0008 10.43C12.094 10.4299 12.1863 10.4487 12.272 10.4853C12.3577 10.5218 12.4352 10.5753 12.4997 10.6426C12.5642 10.7099 12.6143 10.7895 12.6472 10.8767C12.6801 10.9639 12.6949 11.0569 12.6908 11.1501V16.5301C12.6908 16.622 12.6727 16.713 12.6376 16.7979C12.6024 16.8828 12.5508 16.96 12.4858 17.025C12.4208 17.09 12.3437 17.1415 12.2588 17.1767C12.1738 17.2119 12.0828 17.23 11.9909 17.23C11.899 17.23 11.8079 17.2119 11.723 17.1767C11.6381 17.1415 11.5609 17.09 11.4959 17.025C11.4309 16.96 11.3793 16.8828 11.3442 16.7979C11.309 16.713 11.2909 16.622 11.2909 16.5301Z"
                            fill="#ffffff"
                        />
                    </svg>
                    <span>More Info</span>
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
