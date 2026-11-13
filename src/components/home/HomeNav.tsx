"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Approach", href: "#approach" },
  { label: "Background", href: "#background" },
  { label: "Field notes", href: "#notes" },
];

export function HomeNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <Link className="wordmark" href="/#top" aria-label="Gagan Deep home">
          Gagan Deep<span>.</span>
        </Link>
        <nav aria-label="Primary navigation">
          <ul className={`site-nav-list${open ? " is-open" : ""}`} id="primary-menu">
            {links.map((link) => (
              <li key={link.label}>
                {pathname !== "/" ? (
                  <Link href={`/${link.href}`} onClick={() => setOpen(false)}>{link.label}</Link>
                ) : link.href.startsWith("/") ? (
                  <Link href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
                ) : (
                  <a href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
                )}
              </li>
            ))}
            <li>
              {pathname !== "/" ? (
                <Link className="site-nav-cta" href="/#contact" onClick={() => setOpen(false)}>Say hello <span aria-hidden="true">↗</span></Link>
              ) : (
                <a className="site-nav-cta" href="#contact" onClick={() => setOpen(false)}>Say hello <span aria-hidden="true">↗</span></a>
              )}
            </li>
          </ul>
        </nav>
        <button
          ref={toggleRef}
          className="mobile-menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-menu"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? "Close" : "Menu"}
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
            {open ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
    </header>
  );
}
