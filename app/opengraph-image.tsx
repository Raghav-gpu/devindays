import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "DevInDays - Fast App Development for Founders";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const logoBuffer = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAFAFA",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 64,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          <img
            src={logoSrc}
            alt="DevInDays logo"
            width={160}
            height={160}
            style={{ marginBottom: 32 }}
          />

          <div
            style={{
              fontSize: 64,
              fontWeight: 300,
              color: "#111827",
              marginBottom: 16,
              maxWidth: 1000,
              lineHeight: 1.2,
            }}
          >
            Build Your MVP in 2–3 Weeks
          </div>

          <div
            style={{
              fontSize: 36,
              fontWeight: 400,
              color: "#111827",
              marginBottom: 28,
              maxWidth: 900,
            }}
          >
            Without Hiring a Tech Team
          </div>

          <div
            style={{
              display: "flex",
              gap: 40,
              fontSize: 28,
              color: "#4B5563",
              fontWeight: 300,
            }}
          >
            <div>Starting at ₹40,000</div>
            <div>•</div>
            <div>Full Code Ownership</div>
            <div>•</div>
            <div>25+ Apps Delivered</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
