import "@/app/globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Sidebar from "./components/sidebar";

export default function UserLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html>
        <body>
          <section className="flex gap-2 h-screen overflow-hidden">
            <aside className="w-64 overflow-y-auto">
                <Sidebar/>
            </aside>
            <main className="flex-1 overflow-y-auto">
                {children}
            </main>
        </section>
        </body>
      </html>
      
    )
  }