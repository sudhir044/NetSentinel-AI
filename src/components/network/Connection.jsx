function Connection({ from, to }) {
    if (!from || !to) return null;
    return (
        <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
        >
            <line
                x1={`${from.x}%`}
                y1={`${from.y}%`}
                x2={`${to.x}%`}
                y2={`${to.y}%`}
                stroke="#22d3ee"
                strokeWidth="2"
                opacity="0.5"
            />
        </svg>
    );
}

export default Connection;