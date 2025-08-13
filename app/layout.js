import Menu from "./_layout/Menu";
import "./globals.css";

export const metadata = {
  title: "Fordy Portfolio",
  description: "This is my Portfolio site",
  openGraph: {
    title: "Fordy Portfolio",
    description: "This is my Portfolio site",
    url: "https://fordy-next.vercel.app/",
    images: [
      {
        url: "https://fordy-next.vercel.app/",
        alt: "Fordy Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fordy Portfolio",
    description: "This is my Portfolio site",
    images: ["https://fordy-next.vercel.app/"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex">
        <Menu />
        <div className="flex-grow lg:ml-[30%] xl:ml-[20%] mt-[50px] lg:mt-0">
          {children}
        </div>
      </body>
    </html>
  );
}
