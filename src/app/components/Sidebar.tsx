import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import skullIcon from "../../imports/Skull-1.svg?raw";

export const navigationItems = [
  { label: "Dołącz", path: "/dolacz" },
  { label: "O kampanii", path: "/kampania" },
  { label: "Zasady", path: "/zasady" },
  { label: "Regulamin", path: "/regulamin" },
  { label: "Gracze", path: "/gracze" },
  { label: "Raporty", path: "/raporty" },
];

export function Sidebar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const activePath =
    location.pathname === "/" ? "/dolacz" : location.pathname;

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-[#0d0d0e] flex items-center justify-between px-4 h-14 border-b border-white/10">
        <span className="w-6 h-6 inline-block [&>svg]:w-full [&>svg]:h-full" dangerouslySetInnerHTML={{ __html: skullIcon }} />
        <button
          aria-label="Open menu"
          onClick={() => setOpen((o) => !o)}
          className="text-white p-2"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div
          className="lg:hidden fixed inset-0 top-14 z-30 bg-[#0d0d0e]/95 backdrop-blur"
          onClick={() => setOpen(false)}
        >
          <nav className="flex flex-col gap-6 p-8">
            {navigationItems.map((item) => {
              const active = activePath === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`uppercase tracking-[0.1em] text-2xl font-semibold transition-colors ${
                    active ? "text-white" : "text-[#bebdbc] hover:text-white"
                  }`}
                  style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-[160px] bg-[#0d0d0e] flex-col items-center py-10 gap-20 z-30">
        <span className="w-8 h-9 inline-block [&>svg]:w-full [&>svg]:h-full" dangerouslySetInnerHTML={{ __html: skullIcon }} />
        <nav className="flex flex-col gap-10 items-start">
          {navigationItems.map((item) => {
            const active = activePath === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                aria-current={active ? "page" : undefined}
                className={`uppercase tracking-[0.05em] text-[22px] font-semibold transition-all duration-200 relative ${
                  active
                    ? "text-white"
                    : "text-[#bebdbc] hover:text-white hover:translate-x-0.5"
                }`}
                style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
              >
                {item.label}
                {active && (
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-5 bg-white" />
                )}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
