import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Maris Exclusive — Where Exceptional Acquisition Meets Finer Interiors";

export default function OgImage() {
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
          backgroundColor: "#FAF8F4",
          fontFamily: "Georgia, serif",
          padding: "80px",
        }}
      >
        {/* Top rule */}
        <div
          style={{
            width: "48px",
            height: "1px",
            backgroundColor: "#9C8C78",
            marginBottom: "40px",
          }}
        />

        {/* Wordmark */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 400,
            color: "#14110E",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          MARIS EXCLUSIVE
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "20px",
            fontWeight: 400,
            color: "#9C8C78",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          Where Exceptional Acquisition Meets Finer Interiors
        </div>

        {/* Bottom rule */}
        <div
          style={{
            width: "120px",
            height: "1px",
            backgroundColor: "#9C8C78",
          }}
        />

        {/* Locale note */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            fontSize: "13px",
            color: "#6B655C",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Monaco · Greece · Worldwide
        </div>
      </div>
    ),
    size,
  );
}
