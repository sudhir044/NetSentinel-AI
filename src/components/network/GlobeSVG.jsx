
function GlobeSVG() {
    return (
        <div className="absolute inset-0 flex items-center justify-center">

            {/* Glow */}

            <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

            {/* Main Globe */}

            <div className="w-[420px] h-[420px] rounded-full border border-cyan-500/20 bg-gradient-to-br from-slate-900 to-black" />

        </div>
    );
}

export default GlobeSVG;