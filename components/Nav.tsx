import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Nav() {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);

  // 切换页面后自动收起移动端菜单
  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="site-header">
      <div className="container nav">
        <Link className="brand" href="/">You Meina</Link>

        {/* 桌面端导航（About → Case Studies → Blog） */}
        <nav className="nav-links" aria-label="Primary">
          <NavLink href="/about"        active={isActive("/about")}>About</NavLink>
          <NavLink href="/case-studies" active={isActive("/case-studies")}>Case Studies</NavLink>
          <NavLink href="/blog"         active={isActive("/blog")}>Blog</NavLink>
        
        </nav>

        {/* 移动端汉堡按钮 */}
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* 移动端抽屉导航 */}
      <nav className="nav-drawer" aria-label="Mobile" hidden={!open}>
        <Link className={isActive("/about") ? "active" : ""}        href="/about"        aria-current={isActive("/about") ? "page" : undefined}>About</Link>
        <Link className={isActive("/case-studies") ? "active" : ""} href="/case-studies" aria-current={isActive("/case-studies") ? "page" : undefined}>Case Studies</Link>
        <Link className={isActive("/blog") ? "active" : ""}         href="/blog"         aria-current={isActive("/blog") ? "page" : undefined}>Blog</Link>
        
      </nav>
    </header>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      className={active ? "active" : ""}
      href={href}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
