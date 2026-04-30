import { Manrope, Noto_Sans_Arabic } from "next/font/google";
import { Toaster } from "react-hot-toast";
import StoreProvider from "@/app/StoreProvider";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const notoSansArabic = Noto_Sans_Arabic({
    subsets: ["arabic"],
    variable: "--font-arabic",
    weight: ["400", "500", "600", "700"],
});

export const metadata = {
    title: "Watch World",
    description: "Premium Arabic-first watch storefront for Watch World with bilingual admin-ready structure",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${manrope.variable} ${notoSansArabic.variable} antialiased`}>
                <StoreProvider>
                    <Toaster />
                    {children}
                </StoreProvider>
            </body>
        </html>
    );
}
