import Link from "next/link";

export default function Header(){
    return (
        <header className="flex flex-row gap-[3rem] bg-slate-600 text-white">
        <h1>Header</h1>
        <Link href="/">Home</Link>
        <Link href="/Sobre">Sobre</Link>
        </header>
    );
}