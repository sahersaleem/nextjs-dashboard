
import SideNav from "../ui/dashboard/sidenav";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <div>{children}</div>
        <SideNav/>
      </html>
    );
  }
  