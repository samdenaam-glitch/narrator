export const metadata = {
  title: "VoxForge AI",
  description: "Turn Words Into Revenue-Generating Audiobooks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial", background: "#000", color: "white" }}>
        {children}
      </body>
    </html>
  );
}