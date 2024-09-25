import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <main>
      <h1 className="text-4xl font-bold text-yellow-400">CPRG 306: Web Development 2-Assignments</h1>
      <ul>
        <li>
          <Link className = "text-blue-400" href=".\week-2">Lab 2 page </Link>
        </li>
        
        <li>
          <Link className = "text-blue-400" href=".\week-3">Lab 3 page</Link>
        </li>

        <li>
          <Link className = "text-blue-400" href=".\week-4">Lab 4 page</Link>
        </li>
      </ul>
   </main>
  );
}
