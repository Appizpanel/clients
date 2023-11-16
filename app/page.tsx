import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Easily Manage Your Website Assets | Appizpanel",
  description:
    "A panel designed to efficiently manage assets on websites without static admin panels",
  openGraph: {
    title: "Easily Manage Your Website Assets | Appizpanel",
    description:
      "A panel designed to efficiently manage assets on websites without static admin panels",
  },
  twitter: {
    title: "Easily Manage Your Website Assets | Appizpanel",
    description:
      "A panel designed to efficiently manage assets on websites without static admin panels",
  },
};

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center h-screen bg-white text-black">
        <p className="text-center">Merhaba, dünya!</p>
      </div>
    </main>
  );
}
