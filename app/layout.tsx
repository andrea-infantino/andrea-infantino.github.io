export const metadata = {
  title: 'Andrea Infantino',
  description: 'Andrea Infantinoàs personal website!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
