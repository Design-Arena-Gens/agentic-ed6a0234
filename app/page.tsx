function GameBoySvg() {
  return (
    <svg
      viewBox="0 0 300 520"
      role="img"
      aria-labelledby="gameboyTitle gameboyDesc"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="gameboyTitle">Classic Game Boy</title>
      <desc id="gameboyDesc">
        Stylized illustration of the original DMG-01 Nintendo Game Boy handheld console.
      </desc>
      <defs>
        <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f1f0ec" />
          <stop offset="40%" stopColor="#dad7d2" />
          <stop offset="100%" stopColor="#b9b6af" />
        </linearGradient>
        <radialGradient id="screenGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#b5d77f" />
          <stop offset="100%" stopColor="#7a914d" />
        </radialGradient>
        <linearGradient id="dpadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#363644" />
          <stop offset="100%" stopColor="#21212b" />
        </linearGradient>
        <linearGradient id="buttonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8d355f" />
          <stop offset="100%" stopColor="#621741" />
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="12" stdDeviation="12" floodOpacity="0.25" />
        </filter>
        <linearGradient id="speakerSlot" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#54545f" />
          <stop offset="60%" stopColor="#2c2c33" />
          <stop offset="100%" stopColor="#1b1b24" />
        </linearGradient>
      </defs>
      <g filter="url(#softShadow)">
        <rect
          x="24"
          y="16"
          width="252"
          height="488"
          rx="32"
          fill="url(#bodyGradient)"
          stroke="#a5a29a"
          strokeWidth="4"
        />
        <rect
          x="48"
          y="52"
          width="204"
          height="212"
          rx="16"
          fill="#2f2f39"
          stroke="#1a1a1f"
          strokeWidth="4"
        />
        <rect
          x="66"
          y="72"
          width="168"
          height="168"
          rx="12"
          fill="url(#screenGlow)"
          stroke="#202225"
          strokeWidth="3"
        />
        <path
          d="M92 270h116"
          stroke="#ba3163"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M70 310l-18 20"
          stroke="#ba3163"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <g transform="translate(70 310)">
          <path
            d="M32 0h-32v32h-32v32h32v32h32v-32h32v-32h-32z"
            fill="url(#dpadGradient)"
            stroke="#101019"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <circle cx="-16" cy="48" r="6" fill="#1a1a24" />
          <circle cx="16" cy="48" r="6" fill="#1a1a24" />
          <circle cx="0" cy="32" r="8" fill="#111119" />
        </g>
        <g transform="translate(200 320)">
          <g transform="rotate(-18)">
            <ellipse
              cx="0"
              cy="0"
              rx="26"
              ry="26"
              fill="url(#buttonGradient)"
              stroke="#370c26"
              strokeWidth="4"
            />
            <ellipse
              cx="70"
              cy="0"
              rx="26"
              ry="26"
              fill="url(#buttonGradient)"
              stroke="#370c26"
              strokeWidth="4"
            />
            <circle cx="-6" cy="-6" r="8" fill="#de75a0" opacity="0.3" />
            <circle cx="64" cy="-6" r="8" fill="#de75a0" opacity="0.3" />
          </g>
        </g>
        <g transform="translate(86 420)">
          <rect
            x="0"
            y="0"
            width="128"
            height="8"
            rx="3"
            fill="url(#speakerSlot)"
          />
          <rect
            x="0"
            y="16"
            width="128"
            height="8"
            rx="3"
            fill="url(#speakerSlot)"
          />
          <rect
            x="0"
            y="32"
            width="128"
            height="8"
            rx="3"
            fill="url(#speakerSlot)"
          />
        </g>
        <path
          d="M72 250h-8a8 8 0 0 1-8-8v-18"
          stroke="#747474"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="80" cy="240" r="5" fill="#df4f4f" />
        <rect
          x="120"
          y="468"
          width="60"
          height="16"
          rx="6"
          fill="#8b8b8b"
          stroke="#616161"
          strokeWidth="3"
        />
        <rect
          x="172"
          y="244"
          width="40"
          height="10"
          rx="4"
          fill="#3c3c45"
        />
        <text
          x="78"
          y="278"
          fontFamily="Orbitron, 'Square 721', 'Gill Sans MT', sans-serif"
          fontSize="12"
          letterSpacing="4"
          fill="#2c265f"
        >
          GAME BOY
        </text>
        <text
          x="112"
          y="296"
          fontFamily="Verdana, sans-serif"
          fontSize="8"
          letterSpacing="2"
          fill="#2c265f"
        >
          NINTENDO
        </text>
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <h1>Classic Game Boy SVG</h1>
      <p>
        Download or embed this faithful recreation of the DMG-01 Game Boy as a
        scalable vector graphic, perfect for nostalgic web projects.
      </p>
      <div className="svg-wrapper">
        <GameBoySvg />
      </div>
    </main>
  );
}
