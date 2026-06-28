import { readFile } from "node:fs/promises";
import { join } from "node:path";

type OgFont = {
  name: string;
  data: ArrayBuffer;
  weight: 300 | 400;
  style: "normal";
};

let fontCache: OgFont[] | null = null;

async function readFontFile(filename: string): Promise<ArrayBuffer> {
  const fontData = await readFile(join(process.cwd(), "public/fonts", filename));

  return fontData.buffer.slice(
    fontData.byteOffset,
    fontData.byteOffset + fontData.byteLength
  ) as ArrayBuffer;
}

export async function getOgFonts(): Promise<OgFont[]> {
  if (fontCache) {
    return fontCache;
  }

  const [light, regular] = await Promise.all([
    readFontFile("NotoSans-Light.woff"),
    readFontFile("NotoSans-Regular.woff"),
  ]);

  fontCache = [
    { name: "Noto Sans", data: light, weight: 300, style: "normal" },
    { name: "Noto Sans", data: regular, weight: 400, style: "normal" },
  ];

  return fontCache;
}
