export default function Search() {
  return (
    <div className="relative z-10 w-full">
      <input
        type="text"
        placeholder="Search"
        className="w-full p-3 pl-7 text-sm bg-gray-100 rounded-3xl placeholder:text-primary"
      />
      <svg
        className="w-9 h-9 absolute top-1 right-8 rotate-90 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 12H4"
        />
      </svg>
      <svg
        className="w-6 h-6 absolute top-2 right-4 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}
