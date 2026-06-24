import {
    Mail,
    Shield,
} from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-[#030712] border-t border-slate-800 mt-32">

            <div className="max-w-7xl mx-auto px-8 py-16">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

                    {/* Logo */}

                    <div>

                        <div className="flex items-center gap-3">

                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">

                                <Shield className="text-cyan-400" />

                            </div>

                            <div>

                                <h2 className="text-white text-xl font-bold">

                                    NOC Copilot

                                </h2>

                                <p className="text-slate-400 text-sm">

                                    AI Network Operations

                                </p>

                            </div>

                        </div>

                        <p className="text-slate-400 mt-6 leading-7">

                            Air-Gapped AI Copilot for secure MPLS and SD-WAN
                            network operations with predictive analytics.

                        </p>

                    </div>



                    <div>

                        <h3 className="text-white font-semibold mb-5">

                            Product

                        </h3>

                        <ul className="space-y-3 text-slate-400">

                            <li>Dashboard</li>

                            <li>Predictions</li>

                            <li>Topology</li>

                            <li>AI Copilot</li>

                        </ul>

                    </div>



                    <div>

                        <h3 className="text-white font-semibold mb-5">

                            Resources

                        </h3>

                        <ul className="space-y-3 text-slate-400">

                            <li>Documentation</li>

                            <li>API Reference</li>

                            <li>User Guide</li>

                            <li>FAQs</li>

                        </ul>

                    </div>



                    <div>

                        <h3 className="text-white font-semibold mb-5">

                            Company

                        </h3>

                        <ul className="space-y-3 text-slate-400">

                            <li>About</li>

                            <li>Team</li>

                            <li>GitHub</li>

                            <li>Contact</li>

                        </ul>

                    </div>



                    <div>

                        <h3 className="text-white font-semibold mb-5">

                            Connect

                        </h3>

                        <div className="flex gap-4">

                            <div className="p-3 rounded-xl bg-slate-900 hover:bg-cyan-500/10 transition">

                                <Github className="text-white" size={20} />

                            </div>

                            <div className="p-3 rounded-xl bg-slate-900 hover:bg-cyan-500/10 transition">

                                <Linkedin className="text-white" size={20} />

                            </div>

                            <div className="p-3 rounded-xl bg-slate-900 hover:bg-cyan-500/10 transition">

                                <Mail className="text-white" size={20} />

                            </div>

                        </div>

                    </div>

                </div>



                <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

                    <p className="text-slate-500 text-sm">

                        © 2026 NOC Copilot. Built for Bharatiya Antariksh Hackathon.

                    </p>

                    <p className="text-slate-500 text-sm mt-4 md:mt-0">

                        Made with React • FastAPI • Ollama • LangChain

                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;