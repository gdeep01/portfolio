import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Grid background */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0" />

      <div className="relative z-10 text-center">
        <p className="font-mono text-[10px] tracking-[0.4em] text-accent uppercase mb-6 animate-pulse">
          {"// SIGNAL_LOST — CONNECTION_REFUSED"}
        </p>

        <h1 className="text-8xl md:text-[12rem] font-bold tracking-tighter text-white/10 leading-none mb-4">
          404
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-6">
          Target <span className="text-accent italic">Not Found.</span>
        </h2>

        <p className="font-mono text-sm text-white/50 max-w-md mx-auto mb-12 leading-relaxed">
          The resource you requested does not exist on this server. 
          It may have been moved, deleted, or never existed in the first place.
        </p>

        <Link
          href="/"
          className="inline-flex items-center px-8 py-3 border border-accent text-accent font-mono text-xs uppercase tracking-widest hover:bg-accent hover:text-black transition-all"
        >
          ← Return to Base
        </Link>
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-accent/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-accent/20" />
      <div className="absolute bottom-8 left-8">
        <p className="font-mono text-[8px] text-accent/30 tracking-widest uppercase">
          ERR_CODE: 0x194 | STATUS: NOT_FOUND
        </p>
      </div>
    </div>
  );
}
