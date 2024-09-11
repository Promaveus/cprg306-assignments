import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <main>
      <p>This is the main page!</p>
      <Link className = "text-blue-400" href=".\week-2">Lab 2 page</Link>
   </main>
  );
}
