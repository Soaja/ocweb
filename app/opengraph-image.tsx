import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "OSTOIA&CO — Premium Digital Agency for Boutique Travel Brands";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A1628",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Radial glow */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 65%)",
          display: "flex",
        }} />

        {/* Top accent line */}
        <div style={{
          position: "absolute",
          top: 0, left: "15%", right: "15%", height: "1px",
          background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)",
          display: "flex",
        }} />

        {/* Bottom accent line */}
        <div style={{
          position: "absolute",
          bottom: 0, left: "15%", right: "15%", height: "1px",
          background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)",
          display: "flex",
        }} />

        {/* Label */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "32px",
        }}>
          <div style={{ width: "32px", height: "1px", background: "rgba(201,168,76,0.4)" }} />
          <span style={{
            fontFamily: "monospace",
            fontSize: "11px",
            letterSpacing: "0.35em",
            color: "rgba(201,168,76,0.6)",
            textTransform: "uppercase",
          }}>
            Milan · Boutique Travel · Digital Agency
          </span>
          <div style={{ width: "32px", height: "1px", background: "rgba(201,168,76,0.4)" }} />
        </div>

        {/* Wordmark */}
        <div style={{
          fontSize: "88px",
          fontWeight: "700",
          color: "#F5F0E8",
          letterSpacing: "-0.025em",
          lineHeight: "1",
          marginBottom: "24px",
          display: "flex",
        }}>
          OSTOIA
          <span style={{ color: "#C9A84C" }}>&amp;</span>
          CO
        </div>

        {/* Tagline */}
        <div style={{
          fontSize: "22px",
          color: "rgba(245,240,232,0.42)",
          letterSpacing: "0.02em",
          lineHeight: "1.5",
          textAlign: "center",
          maxWidth: "680px",
          display: "flex",
        }}>
          Your experiences deserve digital excellence.
        </div>

        {/* Stats row */}
        <div style={{
          display: "flex",
          gap: "64px",
          marginTop: "56px",
          paddingTop: "40px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}>
          {[
            { value: "8.2%", label: "Avg. conversion" },
            { value: "3×",   label: "Direct bookings" },
            { value: "12+",  label: "Travel brands" },
          ].map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
              <span style={{ fontFamily: "monospace", fontSize: "34px", fontWeight: "600", color: "#C9A84C", lineHeight: "1" }}>
                {s.value}
              </span>
              <span style={{ fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.22em", color: "rgba(245,240,232,0.3)", textTransform: "uppercase" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
