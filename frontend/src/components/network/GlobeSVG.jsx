
function GlobeSVG() {
    return (
        <div className="absolute inset-0 flex items-center justify-center">

            {/* Glow */}

            <div className="absolute w-[500px] h-[500px] rounded-full bg-bg-elevated blur-[120px]" />

            {/* Main Globe */}

            <div className="w-[420px] h-[420px] rounded-full border border-accent-secondary/20 bg-gradient-to-br from-card to-black" />

        </div>
    );
}

export default GlobeSVG;