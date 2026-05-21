import Link from "next/link";
export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <Link href="/">Return Home</Link>
    </div>
  );
}
