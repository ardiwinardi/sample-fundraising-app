export default function BackgroundComponent() {
  return (
    <svg
      className="w-60 h-60 absolute -top-36 -rotate-90 left-1/3 z-0"
      width="298px"
      height="370px"
      viewBox="0 0 298 370"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <stop stopColor="rgba(243, 244, 244)" offset="0%"></stop>
          <stop stopColor="rgba(243, 244, 244)" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        d="M145.918 370C229.911 370 298 287.173 298 185S268.967 0 145.918 0C22.869 0 52.589 128 18.884 185c-62.461 105.633 43.041 185 127.034 185z"
        fill="url(#a)"
        fillRule="evenodd"
      ></path>
    </svg>
  );
}
