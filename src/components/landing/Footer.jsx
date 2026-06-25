import {
    Mail,
    Shield,
} from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-bg-primary border-t border-accent-secondary mt-32">

            <div className="max-w-7xl mx-auto px-8 py-16">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

                    {/* Logo */}

                    <div>

                        <div className="flex items-center gap-3">

                            <div className="w-12 h-12 rounded-xl bg-bg-elevated flex items-center justify-center">

                                <Shield className="text-accent-primary" />

                            </div>

                            <div>

                                <h2 className="text-text-primary text-xl font-bold">

                                    NOC Copilot

                                </h2>

                                <p className="text-text-secondary text-sm">

                                    AI Network Operations

                                </p>

                            </div>

                        </div>

                        <p className="text-text-secondary mt-6 leading-7">

                            Air-Gapped AI Copilot for secure MPLS and SD-WAN
                            network operations with predictive analytics.

                        </p>

                    </div>



                    <div>

                        <h3 className="text-text-primary font-semibold mb-5">

                            Product

                        </h3>

                        <ul className="space-y-3 text-text-secondary">

                            <li>Dashboard</li>

                            <li>Predictions</li>

                            <li>Topology</li>

                            <li>AI Copilot</li>

                        </ul>

                    </div>



                    <div>

                        <h3 className="text-text-primary font-semibold mb-5">

                            Resources

                        </h3>

                        <ul className="space-y-3 text-text-secondary">

                            <li>Documentation</li>

                            <li>API Reference</li>

                            <li>User Guide</li>

                            <li>FAQs</li>

                        </ul>

                    </div>



                    <div>

                        <h3 className="text-text-primary font-semibold mb-5">

                            Company

                        </h3>

                        <ul className="space-y-3 text-text-secondary">

                            <li>About</li>

                            <li>Team</li>

                            <li>GitHub</li>

                            <li>Contact</li>

                        </ul>

                    </div>



                    <div>

                        <h3 className="text-text-primary font-semibold mb-5">

                            Connect

                        </h3>

                        <div className="flex gap-4">

                            <div className="p-3 rounded-xl bg-bg-surface hover:bg-bg-elevated transition">

                                <Github className="text-text-primary" size={20} />

                            </div>

                            <div className="p-3 rounded-xl bg-bg-surface hover:bg-bg-elevated transition">

                                <Linkedin className="text-text-primary" size={20} />

                            </div>

                            <div className="p-3 rounded-xl bg-bg-surface hover:bg-bg-elevated transition">

                                <Mail className="text-text-primary" size={20} />

                            </div>

                        </div>

                    </div>

                </div>



                <div className="border-t border-accent-secondary mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

                    <p className="text-text-secondary text-sm">

                        © 2026 NOC Copilot. Built for Bharatiya Antariksh Hackathon.

                    </p>

                    <p className="text-text-secondary text-sm mt-4 md:mt-0">

                        Made with React • FastAPI • Ollama • LangChain

                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;