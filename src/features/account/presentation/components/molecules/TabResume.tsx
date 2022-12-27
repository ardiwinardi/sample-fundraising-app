export default function TabResume() {
  return (
    <ul className="flex text-sm font-medium text-center text-gray-500 border border-primary/50 rounded-xl">
      <li className="w-full">
        <a
          href="#"
          className="inline-block p-1 w-full text-primary bg-primary/5 focus:ring-4 focus:ring-blue-300 active focus:outline-none"
          aria-current="page"
        >
          <div className="p-3 bg-primary rounded-xl font-bold shadow text-white">
            History
          </div>
        </a>
      </li>
      <li className="w-full">
        <a
          href="#"
          className="inline-block p-4 w-full text-primary bg-primary/5 focus:ring-4 focus:ring-blue-300 active focus:outline-none"
        >
          Update
        </a>
      </li>

      <li className="w-full">
        <a
          href="#"
          className="inline-block p-4 w-full text-primary bg-primary/5 rounded-r-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none"
        >
          Invoice
        </a>
      </li>
    </ul>
  );
}
