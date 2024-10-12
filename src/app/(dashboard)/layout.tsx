import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-h-screen flex">
      {/* LEFT */}
      <div className="hidden sm:block w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] max-h-screen overflow-auto p-4">
        <Link href="/" className="flex items-end justify-center lg:justify-start gap-2">
          <Image src="/logo.png" alt="logo" width={28} height={28} priority />
          <span className="hidden lg:block font-bold text-blue-900 text-sm">RZ School</span>
        </Link>
        <Menu/>
      </div>
      {/* RIGHT */}
      <div className="w-full md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}