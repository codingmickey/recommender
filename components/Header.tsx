import Link from 'next/link';

export default function Header() {
  // const token = localStorage.getItem('token');
  const user = 'Kartik';
  return (
    <header className="flex justify-between items-center w-full mb-5 border-b py-4 sm:px-4 px-2 border-gray-500 gap-2">
      <Link href="/" className="flex space-x-2">
        {/* <img alt="header text" src="/bed.svg" className="sm:w-10 sm:h-10 w-9 h-9" width={24} height={24} /> */}
        <h1 className="sm:text-3xl text-xl font-bold ml-2 tracking-tight">ZooTools</h1>
      </Link>

      <div className="flex items-center space-x-4">
        <Link href="/" className="border-r border-gray-300 pr-4 flex space-x-2 hover:text-red-400 transition">
          <div>Generate emails</div>
        </Link>
        <Link href="/upload" className="border-r border-gray-300 pr-4 flex space-x-2 hover:text-red-400 transition">
          <div>Upload company data</div>
        </Link>
        <Link className="flex items-center gap-2 hover:text-red-400 transition" href="/">
          <h1 className="font-semibold">{user}</h1>
          <img
            alt="Profile picture"
            src={`https://gravatar.com/avatar/hello?s=400&d=robohash&r=x`}
            className="w-10 rounded-full"
            width={32}
            height={28}
          />
        </Link>
      </div>
    </header>
  );
}
