export default function Logo({ variant = 'full', className }) {
  const mark = (
    <>
      <g transform="translate(130,120) rotate(45)">
        <rect
          x="-46"
          y="-46"
          width="92"
          height="92"
          rx="20"
          fill="#0B1F4B"
          stroke="#3B5BDB"
          strokeWidth="3"
        />
      </g>
      <path
        d="M104 148 L104 94 L130 124 L156 94 L156 148"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );

  if (variant === 'mark') {
    return (
      <svg
        className={className}
        viewBox="55 45 150 150"
        role="img"
        aria-label="Mahadi"
      >
        {mark}
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="55 45 420 150"
      role="img"
      aria-label="Mahadi"
    >
      {mark}
      <text
        x="212"
        y="120"
        dominantBaseline="central"
        fontSize="60"
        fontWeight="600"
        letterSpacing="-1"
        fill="currentColor"
        style={{ fontFamily: 'inherit' }}
      >
        Mahadi
        <tspan fill="#3B5BDB">
          _
          <animate
            attributeName="opacity"
            values="1;1;0;0;1"
            keyTimes="0;0.5;0.5;0.9;1"
            dur="1.2s"
            repeatCount="indefinite"
          />
        </tspan>
      </text>
    </svg>
  );
}
