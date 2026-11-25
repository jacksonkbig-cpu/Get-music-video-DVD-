import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  title: "Rewind — Film & Music on Disc",
  description: "Concert films, music documentaries, and the stories behind the songs. Carefully found, ready to play.",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f7f2",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
