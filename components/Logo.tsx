import React from "react";

const Logo = () => {
    return (
        <div className="flex items-center justify-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 250 60" // Increased width for more space
                className="h-10 md:h-14 w-auto"
            >
                {/* Spectra Text */}
                <text
                    x="10"
                    y="35"
                    className="text-lg md:text-2xl font-bold fill-current text-gradient"
                    style={{
                        fill: "url(#grad1)",
                        fontFamily: "Arial, sans-serif",
                        letterSpacing: 1.5,
                    }}
                >
                    Postive
                </text>

                {/* Store Text */}
                <text
                    x="110"
                    y="36"
                    className="text-lg md:text-2xl font-bold fill-current text-gradient"
                    style={{
                        fill: "url(#grad2)",
                        fontFamily: "Arial, sans-serif",
                        letterSpacing: 1.5,
                    }}
                >
                    Gems
                </text>

                {/* Shopping Cart Icon */}
                <circle cx="200" cy="30" r="10" fill="#86d7ff" />
                <path
                    d="M195 20 L205 30 L215 20"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                />
                <path
                    d="M205 35 Q200 45 210 45"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                />

                {/* Gradient Definition */}
                <defs>
                    <linearGradient
                        id="grad1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                    >
                        <stop
                            offset="0%"
                            style={{ stopColor: "#86d7ff", stopOpacity: 1 }}
                        />
                        <stop
                            offset="100%"
                            style={{ stopColor: "#00b5e2", stopOpacity: 1 }}
                        />
                    </linearGradient>

                    <linearGradient
                        id="grad2"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                    >
                        <stop
                            offset="0%"
                            style={{ stopColor: "#ff5e57", stopOpacity: 1 }}
                        />
                        <stop
                            offset="100%"
                            style={{ stopColor: "#ffbb00", stopOpacity: 1 }}
                        />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default Logo;
