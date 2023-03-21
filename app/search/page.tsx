import Link from "next/link";
import SearchForm from "./SearchForm";

export default function SearchPage() {
  return (
    <div className="flex flex-col gap-6">
      <Link
        className="mx-auto mt-6 w-fit text-2xl font-semibold transition-colors duration-200 hover:text-slate-800"
        href="/"
      >
        Home
      </Link>
      <SearchForm />
    </div>
  );
}
