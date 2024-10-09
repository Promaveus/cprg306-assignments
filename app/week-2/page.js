import StudentInfo from "./student-info";
import Link from "next/link";

export default function Page() {
    return (
      <main>
        <p>
          <Link className = "text-blue-400" href="..">Home</Link>
        </p>
        <h1>Shopping List</h1>
        <StudentInfo></StudentInfo>
      </main>
    );
  }