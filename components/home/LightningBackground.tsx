"use client";

export function LightningBackground() {
  return (
    <>
      <div
        className="fixed inset-0 z-0 animate-lightning-flash pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 20%, var(--lightning-dim) 0%, transparent 60%)",
        }}
      />
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-60"
        style={{
          background: "linear-gradient(180deg, rgba(10,12,22,0.4) 0%, transparent 40%, var(--bg) 100%)",
        }}
      />
    </>
  );
}
