import React, { useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════════════════
 * 3D ROTATING GLOBE — Canvas-based with India prominently displayed
 * Features: auto-rotation, cursor-controlled rotation, drag control,
 * dot-matrix continents, glowing India border, city nodes,
 * orbital rings with satellites, twinkling stars.
 * ═══════════════════════════════════════════════════════════════════ */

// ── Configuration ──
const GLOBE_RADIUS = 210;
const PERSPECTIVE = 800;
const INDIA_MAGNIFY = 2.5;     // India appears 1.5× larger than real
const INDIA_CEN_LON = 79.5;
const INDIA_CEN_LAT = 22.0;
const DEFAULT_ROT_Y = -1.39;   // Face India toward viewer
const DEFAULT_ROT_X = 0.38;    // Tilt to center India vertically

// ── India boundary — 100+ real geographic coordinates ──
const INDIA_RAW = [
  [74.0, 33.0], [74.8, 34.5], [75.5, 35.5], [77.0, 35.0], [78.0, 34.5], [78.5, 34.0],
  [78.8, 32.5], [79.0, 31.0], [79.5, 30.5], [80.0, 30.0],
  [80.5, 29.5], [81.0, 29.0], [82.0, 28.5], [83.5, 28.0], [84.5, 27.5], [86.0, 27.0], [87.0, 27.0],
  [88.0, 27.5], [88.5, 27.0], [88.5, 26.5],
  [89.5, 26.5], [90.5, 26.5], [91.5, 27.0], [92.5, 27.5], [93.5, 28.0], [95.0, 27.5], [96.0, 27.0], [97.0, 27.5],
  [96.5, 26.0], [95.5, 25.5], [94.5, 24.5], [93.5, 24.0], [93.0, 23.0], [93.0, 22.0],
  [92.5, 22.5], [92.0, 23.5], [91.5, 24.5], [90.5, 25.5],
  [89.5, 25.0], [89.0, 24.0], [88.8, 23.0], [88.5, 22.0],
  [87.5, 21.5], [87.0, 21.0], [86.5, 20.5], [86.0, 20.0], [85.5, 19.5], [85.0, 19.0],
  [84.0, 18.0], [83.5, 17.5], [82.5, 16.5], [82.0, 16.0], [81.0, 15.0], [80.5, 14.0],
  [80.3, 13.5], [80.2, 13.0], [80.0, 12.0], [79.8, 11.0], [79.5, 10.0], [79.0, 9.5],
  [78.0, 8.5], [77.5, 8.0],
  [77.0, 8.3], [76.5, 9.0], [76.2, 9.8], [76.0, 10.5], [75.8, 11.0], [75.5, 11.5], [75.2, 12.0], [75.0, 12.5],
  [74.5, 14.0], [74.2, 15.0], [74.0, 15.5], [73.8, 16.5], [73.5, 17.0],
  [73.2, 18.0], [73.0, 18.5], [72.9, 19.0], [72.8, 19.5],
  [72.6, 20.5], [72.5, 21.0], [72.0, 22.0],
  [71.5, 21.5], [71.0, 21.0], [70.5, 20.7], [70.0, 20.8], [69.5, 21.2], [69.0, 21.8], [68.8, 22.5],
  [68.5, 23.0], [68.0, 23.5], [68.5, 24.0], [69.0, 24.0], [70.0, 23.8], [70.5, 23.5],
  [71.0, 24.5], [70.5, 25.0], [70.0, 26.0], [70.0, 27.0],
  [70.5, 28.0], [71.0, 29.0], [72.0, 30.0], [73.0, 30.5], [73.5, 31.5], [74.0, 32.0],
  [74.0, 33.0],
];

// Sri Lanka (real size)
const SRILANKA = [[79.7, 9.8], [80.5, 9.2], [81.0, 8.0], [81.5, 7.0], [81.8, 6.2], [81.0, 6.0], [80.0, 6.5], [79.5, 7.5], [79.5, 8.5], [79.7, 9.8]];

// Scale India for prominence
function scaleCoord(lon, lat) {
  return [INDIA_CEN_LON + (lon - INDIA_CEN_LON) * INDIA_MAGNIFY, INDIA_CEN_LAT + (lat - INDIA_CEN_LAT) * INDIA_MAGNIFY];
}
const INDIA_POLY = INDIA_RAW.map(([lon, lat]) => scaleCoord(lon, lat));

// ── World land polygons (simplified, India removed) ──
const WORLD_LAND = [
  [[-168, 66], [-150, 70], [-100, 75], [-60, 75], [-50, 60], [-60, 50], [-80, 25], [-85, 9], [-99, 16], [-110, 8], [-105, 20], [-120, 35], [-125, 48]],
  [[-73, 78], [-60, 82], [-20, 83], [-10, 75], [-40, 60], [-55, 60]],
  [[-80, 10], [-72, 12], [-50, -5], [-35, -7], [-40, -22], [-60, -35], [-70, -53], [-75, -55], [-72, -40], [-72, -20], [-80, -5]],
  [[-17, 32], [-5, 36], [10, 30], [25, 31], [34, 27], [43, 12], [51, 11], [46, -4], [39, -20], [20, -35], [14, -34], [8, -13], [-14, 12]],
  [[-10, 36], [0, 40], [10, 36], [20, 38], [30, 41], [40, 42], [30, 70], [20, 70], [10, 60], [5, 50], [-10, 40]],
  [[40, 42], [60, 50], [80, 55], [100, 55], [120, 55], [140, 50], [160, 55], [180, 65], [180, 75], [140, 75], [100, 78], [60, 75], [40, 70]],
  [[35, 30], [40, 32], [50, 28], [55, 22], [52, 18], [45, 15], [40, 20], [35, 25]],
  [[95, 20], [109, 20], [109, 10], [105, 5], [98, 10]],
  [[113, -26], [115, -34], [120, -32], [135, -37], [145, -38], [151, -33], [153, -28], [143, -10], [136, -12], [123, -16]],
  [[130, 32], [136, 35], [142, 43], [140, 40], [132, 34]],
  [[-10, 50], [-5, 58], [2, 58], [2, 50]],
  [[43, -12], [47, -15], [50, -25], [44, -25]],
  SRILANKA,
];

// ── Math helpers ──
function ll3d(lon, lat) {
  const rl = (lat * Math.PI) / 180, rn = (lon * Math.PI) / 180;
  return { x: Math.cos(rl) * Math.sin(rn), y: -Math.sin(rl), z: Math.cos(rl) * Math.cos(rn) };
}
function rY(p, a) { const c = Math.cos(a), s = Math.sin(a); return { x: p.x * c - p.z * s, y: p.y, z: p.x * s + p.z * c }; }
function rX(p, a) { const c = Math.cos(a), s = Math.sin(a); return { x: p.x, y: p.y * c - p.z * s, z: p.y * s + p.z * c }; }
function rZ(p, a) { const c = Math.cos(a), s = Math.sin(a); return { x: p.x * c - p.y * s, y: p.x * s + p.y * c, z: p.z }; }

function pip(px, py, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j];
    if (((yi > py) !== (yj > py)) && (px < ((xj - xi) * (py - yi)) / (yj - yi) + xi)) inside = !inside;
  }
  return inside;
}

// ── Pre-compute static data ──

// Land dots
const landDots = (() => {
  const dots = [];
  const step = 2.5;
  for (let lat = -80; lat <= 80; lat += step) {
    for (let lon = -180; lon <= 180; lon += step) {
      const isIndia = pip(lon, lat, INDIA_POLY);
      const isLand = isIndia || WORLD_LAND.some(p => pip(lon, lat, p));
      if (isLand) {
        const u = ll3d(lon, lat);
        dots.push({ ux: u.x, uy: u.y, uz: u.z, isIndia });
      }
    }
  }
  return dots;
})();

// India border as 3D unit vectors
const indiaBorder = INDIA_POLY.map(([lon, lat]) => ll3d(lon, lat));

// Sri Lanka border as 3D unit vectors
const slBorder = SRILANKA.map(([lon, lat]) => ll3d(lon, lat));

// Stars
const stars = Array.from({ length: 85 }, () => ({
  x: (Math.random() - 0.5) * 750,
  y: (Math.random() - 0.5) * 650,
  sz: Math.random() * 1.5 + 0.4,
  ph: Math.random() * Math.PI * 2,
  sp: 0.008 + Math.random() * 0.018,
}));

// Cities (scaled to match India magnification)
const cities = [
  { name: "New Delhi", lon: 77.2, lat: 28.6 },
  { name: "Mumbai", lon: 72.9, lat: 19.1 },
  { name: "Bengaluru", lon: 77.6, lat: 13.0 },
  { name: "Chennai", lon: 80.3, lat: 13.1 },
  { name: "Kolkata", lon: 88.4, lat: 22.6 },
  { name: "Hyderabad", lon: 78.5, lat: 17.4 },
  { name: "Ahmedabad", lon: 72.6, lat: 23.0 },
  { name: "Jaipur", lon: 75.8, lat: 26.9 },
].map((c, id) => {
  const [slon, slat] = scaleCoord(c.lon, c.lat);
  const u = ll3d(slon, slat);
  return { ...c, id, ux: u.x, uy: u.y, uz: u.z };
});

// Connections
const conns = [[0, 1], [1, 2], [2, 3], [0, 4], [5, 2], [0, 5], [6, 1], [3, 4], [0, 7], [7, 6]];

// Orbit rings
const orbits = [
  { tiltX: 0.4, tiltZ: 0.3, rMul: 1.28, spd: 0.005, col: "rgba(6,182,212,0.12)", sat: "#22d3ee" },
  { tiltX: -0.3, tiltZ: -0.6, rMul: 1.38, spd: -0.003, col: "rgba(139,92,246,0.14)", sat: "#a78bfa" },
  { tiltX: 0.15, tiltZ: 0.75, rMul: 1.18, spd: 0.004, col: "rgba(34,211,238,0.08)", sat: "#67e8f9" },
];

/* ═══════════════════════════════════════════════════════════════════
 * COMPONENT
 * ═══════════════════════════════════════════════════════════════════ */
function AnimatedGlobe() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const rotYR = useRef(DEFAULT_ROT_Y);
  const rotXR = useRef(DEFAULT_ROT_X);
  const velY = useRef(0);
  const velX = useRef(0);
  const dragging = useRef(false);
  const prev = useRef({ x: 0, y: 0 });
  const hovering = useRef(false);
  const mouse = useRef({ x: 0, y: 0 });
  const idle = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId, time = 0;

    const resize = () => {
      if (!containerRef.current || !canvasRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
    };
    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      time++;
      const dpr = window.devicePixelRatio || 1;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const W = canvas.width / dpr;
      const H = canvas.height / dpr;
      const cx = W / 2;
      const cy = H / 2;

      // ── Update rotation ──
      if (dragging.current) {
        rotXR.current += velX.current;
        rotYR.current += velY.current;
        velX.current *= 0.92;
        velY.current *= 0.92;
        idle.current = 0;
      } else if (hovering.current) {
        const ox = mouse.current.x - cx;
        const oy = mouse.current.y - cy;
        const tY = DEFAULT_ROT_Y + (ox / cx) * 0.6;
        const tX = DEFAULT_ROT_X + (oy / cy) * 0.4;
        rotYR.current += (tY - rotYR.current) * 0.05;
        rotXR.current += (tX - rotXR.current) * 0.05;
        idle.current = 0;
      } else {
        idle.current++;
        if (idle.current > 80) {
          rotYR.current += 0.0012;
          rotXR.current += (DEFAULT_ROT_X - rotXR.current) * 0.02;
        }
      }
      rotXR.current = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, rotXR.current));

      ctx.clearRect(0, 0, W, H);

      // ── Projection ──
      const proj = (p) => {
        let r = rY(p, rotYR.current);
        r = rX(r, rotXR.current);
        const s = PERSPECTIVE / (PERSPECTIVE + r.z);
        return { x: cx + r.x * s, y: cy + r.y * s, z: r.z, s };
      };

      // ── 1. Stars ──
      for (const st of stars) {
        const op = 0.12 + 0.5 * Math.sin(st.ph + time * st.sp);
        ctx.fillStyle = `rgba(199,210,254,${op})`;
        ctx.beginPath();
        ctx.arc(cx + st.x, cy + st.y, st.sz, 0, Math.PI * 2);
        ctx.fill();
      }

      const backQ = [], frontQ = [];

      // ── 2. Land dots ──
      for (const d of landDots) {
        const p = { x: d.ux * GLOBE_RADIUS, y: d.uy * GLOBE_RADIUS, z: d.uz * GLOBE_RADIUS };
        const pr = proj(p);
        (pr.z < 0 ? backQ : frontQ).push({ t: "d", pr, ii: d.isIndia });
      }

      // ── 3. India border ──
      const projB = indiaBorder.map(b => {
        const p = { x: b.x * (GLOBE_RADIUS + 1), y: b.y * (GLOBE_RADIUS + 1), z: b.z * (GLOBE_RADIUS + 1) };
        return proj(p);
      });

      const drawBorder = (front) => {
        ctx.beginPath();
        for (let i = 0; i < projB.length - 1; i++) {
          const a = projB[i], b = projB[i + 1];
          const avg = (a.z + b.z) / 2;
          if (front === (avg >= 0)) { ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); }
        }
        if (front) {
          ctx.strokeStyle = "rgba(34,211,238,0.9)";
          ctx.lineWidth = 1.8;
          ctx.shadowBlur = 12;
          ctx.shadowColor = "#22d3ee";
        } else {
          ctx.strokeStyle = "rgba(6,182,212,0.1)";
          ctx.lineWidth = 0.5;
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
      };
      backQ.push({ t: "fn", fn: () => drawBorder(false) });
      frontQ.push({ t: "fn", fn: () => drawBorder(true) });

      // Sri Lanka border
      const projSL = slBorder.map(b => {
        const p = { x: b.x * (GLOBE_RADIUS + 1), y: b.y * (GLOBE_RADIUS + 1), z: b.z * (GLOBE_RADIUS + 1) };
        return proj(p);
      });
      const drawSL = (front) => {
        const avg = projSL.reduce((s, p) => s + p.z, 0) / projSL.length;
        if (front !== (avg >= 0)) return;
        ctx.beginPath();
        ctx.moveTo(projSL[0].x, projSL[0].y);
        for (let i = 1; i < projSL.length; i++) ctx.lineTo(projSL[i].x, projSL[i].y);
        ctx.closePath();
        ctx.strokeStyle = front ? "rgba(34,211,238,0.45)" : "rgba(6,182,212,0.06)";
        ctx.lineWidth = front ? 0.8 : 0.3;
        ctx.stroke();
      };
      backQ.push({ t: "fn", fn: () => drawSL(false) });
      frontQ.push({ t: "fn", fn: () => drawSL(true) });

      // ── 4. Cities ──
      const projC = cities.map(c => {
        const p = { x: c.ux * GLOBE_RADIUS, y: c.uy * GLOBE_RADIUS, z: c.uz * GLOBE_RADIUS };
        return { ...c, pr: proj(p) };
      });
      for (const c of projC) {
        (c.pr.z < 0 ? backQ : frontQ).push({ t: "c", c });
      }

      // ── 5. Connections ──
      for (let ci = 0; ci < conns.length; ci++) {
        const [fi, ti] = conns[ci];
        const from = projC[fi], to = projC[ti];
        if (!from || !to) continue;

        const arc = [];
        const N = 20;
        for (let i = 0; i <= N; i++) {
          const t = i / N;
          const ix = from.ux + (to.ux - from.ux) * t;
          const iy = from.uy + (to.uy - from.uy) * t;
          const iz = from.uz + (to.uz - from.uz) * t;
          const len = Math.sqrt(ix * ix + iy * iy + iz * iz);
          const bulge = 1 + 0.08 * Math.sin(t * Math.PI);
          arc.push(proj({ x: (ix / len) * GLOBE_RADIUS * bulge, y: (iy / len) * GLOBE_RADIUS * bulge, z: (iz / len) * GLOBE_RADIUS * bulge }));
        }
        const avg = arc.reduce((s, p) => s + p.z, 0) / arc.length;

        const drawConn = () => {
          ctx.beginPath();
          ctx.moveTo(arc[0].x, arc[0].y);
          for (let i = 1; i < arc.length; i++) ctx.lineTo(arc[i].x, arc[i].y);
          ctx.lineWidth = avg < 0 ? 0.4 : 1;
          ctx.strokeStyle = avg < 0 ? "rgba(6,182,212,0.05)" : "rgba(34,211,238,0.28)";
          ctx.stroke();

          if (avg >= 0) {
            const off = (time * 0.008 + ci * 0.22) % 1;
            const pk = arc[Math.floor(off * N)];
            if (pk) {
              ctx.beginPath();
              ctx.arc(pk.x, pk.y, 2 * pk.s, 0, Math.PI * 2);
              ctx.fillStyle = "#fff";
              ctx.shadowBlur = 6;
              ctx.shadowColor = "#22d3ee";
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          }
        };
        (avg < 0 ? backQ : frontQ).push({ t: "fn", fn: drawConn });
      }

      // ── 6. Orbit rings + satellites ──
      for (const orb of orbits) {
        const ringR = GLOBE_RADIUS * orb.rMul;
        const satA = (time * orb.spd) % (Math.PI * 2);
        const ringPts = [];
        for (let i = 0; i <= 120; i++) {
          const th = (i / 120) * Math.PI * 2;
          let pt = { x: ringR * Math.cos(th), y: 0, z: ringR * Math.sin(th) };
          pt = rZ(pt, orb.tiltZ);
          pt = rX(pt, orb.tiltX);
          ringPts.push(proj(pt));
        }

        const drawOrb = (front) => {
          ctx.beginPath();
          let drawing = false;
          for (const pt of ringPts) {
            if (front === (pt.z >= 0)) {
              if (!drawing) { ctx.moveTo(pt.x, pt.y); drawing = true; }
              else ctx.lineTo(pt.x, pt.y);
            } else { drawing = false; }
          }
          ctx.strokeStyle = orb.col;
          ctx.lineWidth = front ? 1.2 : 0.4;
          ctx.setLineDash([5, 7]);
          ctx.stroke();
          ctx.setLineDash([]);
        };
        backQ.push({ t: "fn", fn: () => drawOrb(false) });
        frontQ.push({ t: "fn", fn: () => drawOrb(true) });

        // Satellite
        let sp = { x: ringR * Math.cos(satA), y: 0, z: ringR * Math.sin(satA) };
        sp = rZ(sp, orb.tiltZ);
        sp = rX(sp, orb.tiltX);
        const spr = proj(sp);

        const drawSat = () => {
          ctx.beginPath();
          ctx.arc(spr.x, spr.y, 4.5 * spr.s, 0, Math.PI * 2);
          ctx.fillStyle = orb.sat;
          ctx.shadowBlur = 14;
          ctx.shadowColor = orb.sat;
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.beginPath();
          ctx.arc(spr.x, spr.y, 1.8 * spr.s, 0, Math.PI * 2);
          ctx.fillStyle = "#fff";
          ctx.fill();
        };
        (spr.z < 0 ? backQ : frontQ).push({ t: "fn", fn: drawSat });
      }

      // ═══ RENDER BACK SIDE ═══
      for (const item of backQ) {
        if (item.t === "d") {
          ctx.fillStyle = item.ii ? "rgba(34,211,238,0.1)" : "rgba(6,182,212,0.05)";
          ctx.beginPath();
          ctx.arc(item.pr.x, item.pr.y, item.ii ? 0.8 : 0.6, 0, Math.PI * 2);
          ctx.fill();
        } else if (item.t === "c") {
          ctx.fillStyle = "rgba(34,211,238,0.08)";
          ctx.beginPath();
          ctx.arc(item.c.pr.x, item.c.pr.y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        } else if (item.fn) item.fn();
      }

      // ═══ GLOBE SPHERE ═══
      const grad = ctx.createRadialGradient(cx - 30, cy - 30, GLOBE_RADIUS * 0.15, cx, cy, GLOBE_RADIUS);
      grad.addColorStop(0, "#0c1a30");
      grad.addColorStop(0.6, "#060f20");
      grad.addColorStop(1, "#071832");

      ctx.beginPath();
      ctx.arc(cx, cy, GLOBE_RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.shadowBlur = 55;
      ctx.shadowColor = "rgba(6,182,212,0.22)";
      ctx.fill();
      ctx.shadowBlur = 0;

      // Edge ring
      ctx.strokeStyle = "rgba(34,211,238,0.16)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Static grid lines (latitude ellipses)
      ctx.strokeStyle = "rgba(6,182,212,0.03)";
      ctx.lineWidth = 0.5;
      for (let i = 1; i < 6; i++) {
        const subR = GLOBE_RADIUS * Math.sin((i / 6) * Math.PI);
        const yOff = GLOBE_RADIUS * Math.cos((i / 6) * Math.PI);
        ctx.beginPath();
        ctx.ellipse(cx, cy + yOff, subR, subR * 0.18, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // ═══ RENDER FRONT SIDE ═══
      for (const item of frontQ) {
        if (item.t === "d") {
          if (item.ii) {
            ctx.fillStyle = "#e0f7fa";
            ctx.shadowBlur = 5;
            ctx.shadowColor = "#22d3ee";
          } else {
            ctx.fillStyle = "rgba(34,211,238,0.4)";
            ctx.shadowBlur = 0;
          }
          ctx.beginPath();
          ctx.arc(item.pr.x, item.pr.y, item.ii ? 1.5 : 1.1, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        } else if (item.t === "c") {
          const { c } = item;
          const { pr } = c;
          const pulse = (5 + 3 * Math.sin(time * 0.07 + c.id)) * pr.s;

          // Pulse ring
          ctx.beginPath();
          ctx.arc(pr.x, pr.y, pulse, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(34,211,238,0.15)";
          ctx.fill();

          // Core
          ctx.beginPath();
          ctx.arc(pr.x, pr.y, 3.5 * pr.s, 0, Math.PI * 2);
          ctx.fillStyle = "#fff";
          ctx.shadowBlur = 10;
          ctx.shadowColor = "#22d3ee";
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.strokeStyle = "#22d3ee";
          ctx.lineWidth = 1.2;
          ctx.stroke();

          // Label
          const fontSize = Math.round(10 * pr.s);
          ctx.font = `600 ${fontSize}px Inter, Outfit, system-ui, sans-serif`;
          ctx.textAlign = "left";
          ctx.textBaseline = "middle";
          const lx = pr.x + 9 * pr.s;
          const ly = pr.y;
          const tw = ctx.measureText(c.name).width;
          ctx.fillStyle = "rgba(2,8,23,0.65)";
          ctx.fillRect(lx - 3, ly - 7, tw + 6, 14);
          ctx.strokeStyle = "rgba(34,211,238,0.1)";
          ctx.lineWidth = 0.5;
          ctx.strokeRect(lx - 3, ly - 7, tw + 6, 14);
          ctx.fillStyle = "rgba(241,245,249,0.9)";
          ctx.fillText(c.name, lx, ly);
        } else if (item.fn) item.fn();
      }

      animId = requestAnimationFrame(render);
    };
    render();

    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  // ── Mouse Handlers ──
  const onDown = (e) => {
    dragging.current = true;
    prev.current = { x: e.clientX, y: e.clientY };
    idle.current = 0;
  };

  const onMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    hovering.current = true;

    if (dragging.current) {
      const dx = e.clientX - prev.current.x;
      const dy = e.clientY - prev.current.y;
      velY.current = dx * 0.005;
      velX.current = dy * 0.005;
      rotYR.current += dx * 0.005;
      rotXR.current += dy * 0.005;
      prev.current = { x: e.clientX, y: e.clientY };
      idle.current = 0;
    }
  };

  const onUp = () => { dragging.current = false; };
  const onLeave = () => { dragging.current = false; hovering.current = false; };

  // Touch support
  const onTouchStart = (e) => {
    const t = e.touches[0];
    dragging.current = true;
    prev.current = { x: t.clientX, y: t.clientY };
    idle.current = 0;
  };
  const onTouchMove = (e) => {
    const t = e.touches[0];
    const rect = canvasRef.current.getBoundingClientRect();
    mouse.current = { x: t.clientX - rect.left, y: t.clientY - rect.top };
    hovering.current = true;
    if (dragging.current) {
      const dx = t.clientX - prev.current.x;
      const dy = t.clientY - prev.current.y;
      velY.current = dx * 0.005;
      velX.current = dy * 0.005;
      rotYR.current += dx * 0.005;
      rotXR.current += dy * 0.005;
      prev.current = { x: t.clientX, y: t.clientY };
      idle.current = 0;
    }
  };
  const onTouchEnd = () => { dragging.current = false; hovering.current = false; };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[620px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      onMouseDown={onDown}
      onMouseMove={onMove}
      onMouseUp={onUp}
      onMouseLeave={onLeave}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  );
}

export default AnimatedGlobe;