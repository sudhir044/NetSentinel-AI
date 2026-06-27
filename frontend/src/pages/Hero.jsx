import React from "react";
import globeImg from "../assets/svg/globe.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 pt-8 md:pt-16 pb-24">
            {/* Grid for Left Column (Text) and Right Column (Globe) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                {/* Left Column (Text content) */}
                <div className="lg:col-span-7 flex flex-col items-start space-y-8 z-10">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-secondary/20 bg-accent-primary/5 text-[10px] md:text-xs font-semibold tracking-widest text-accent-primary uppercase shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        Air-Gapped • Secure • Intelligent
                    </div>

                    {/* Main Headings */}
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-text-primary">
                            AI-Powered NOC <br />
                            <span className="text-text-hint font-medium">for </span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 font-extrabold drop-shadow-[0_2px_10px_rgba(34,211,238,0.25)]">
                                Predictive <br className="hidden md:inline" />
                                Network Operations
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="max-w-xl text-sm md:text-base text-text-secondary leading-relaxed">
                            NOC Copilot is an offline AI assistant that predicts network issues,
                            analyzes logs and delivers intelligent insights for MPLS & SD-WAN environments.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 pt-2">
                        <Link
                            to="/dashboard"
                            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-text-primary bg-accent-primary hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-[0_4px_20px_rgba(59,130,246,0.35)] hover:shadow-[0_4px_25px_rgba(34,211,238,0.5)] transform hover:-translate-y-0.5"
                        >
                            Launch Dashboard
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <a
                            href="#features"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-text-hint hover:text-text-primary bg-bg-primary hover:bg-bg-surface border border-accent-secondary hover:border-accent-secondary/50 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                        >
                            Explore Features
                        </a>
                    </div>

                </div>

                {/* Right Column (Rotating Globe) */}
                <div className="lg:col-span-5 w-full flex justify-center items-center relative min-h-[450px] lg:min-h-[600px]">
                    {/* Background glow behind the globe */}
                    <div className="absolute w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
                    <div className="absolute w-[450px] h-[450px] rounded-full bg-indigo-500/5 blur-[150px] pointer-events-none" />

                    <div className="w-full max-w-[650px] relative z-10">
                        <img
                            src={globeImg}
                            alt="Earth Globe"
                            className="w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(34,211,238,0.3)]"
                        />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Hero;