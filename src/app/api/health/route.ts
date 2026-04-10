import { NextRequest, NextResponse } from "next/server";

const ALLOWED_URLS = [
  "https://phantom-pipeline.zeabur.app/health",
  "https://phantom-swarm-engine.zeabur.app/health",
  "https://phantom-x402-gate.zeabur.app/health",
  "https://phantom-bags-launch.zeabur.app/health",
  "https://phantom-pump-launch.zeabur.app/health",
];

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url || !ALLOWED_URLS.includes(url)) {
    return NextResponse.json({ status: "error", message: "invalid url" }, { status: 400 });
  }

  try {
    const resp = await fetch(url, { signal: AbortSignal.timeout(5000) });
    const data = await resp.json();
    return NextResponse.json({ status: resp.ok ? "online" : "offline", data });
  } catch {
    return NextResponse.json({ status: "offline" });
  }
}
