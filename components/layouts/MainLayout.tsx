import { useRouter } from "next/router";
import Navigation from "../Navigation/Navigation";

export default function MainLayout({children}) {
  const router = useRouter();
  const isHome = router.pathname === "/";
  return (
      <div className="page">
        <div className="max-w-[800px] mx-auto print:hidden px-4">
          {!isHome && (<Navigation/>)}
        </div>
        <div className="max-w-[800px] mx-auto px-4">
          {children}
        </div>
      </div>
  )
}
