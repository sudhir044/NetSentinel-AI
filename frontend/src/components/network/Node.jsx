function Node({ city }) {
    return (
        <div
            className="absolute flex flex-col items-center"
            style={{
                left: `${city.x}%`,
                top: `${city.y}%`,
                transform: "translate(-50%, -50%)",
            }}
        >
            {/* Node */}
            <div className="w-4 h-4 rounded-full bg-cyan-400 border-2 border-cyan-200 shadow-[0_0_20px_#22d3ee]" />

            {/* Label */}
            <p className="mt-2 text-xs text-text-hint whitespace-nowrap">
                {city.name}
            </p>
        </div>
    );
}

export default Node;