import { ImageResponse } from "next/og";

export const alt = "DevInDays - Fast App Development for Founders";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            marginBottom: 40,
            color: "black",
          }}
        >
          DevInDays
        </div>
        <div
          style={{
            fontSize: 40,
            color: "#4B5563",
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          Build Your MVP in 2–3 Weeks
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#6B7280",
            marginTop: 20,
          }}
        >
          Starting at ₹40,000
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

