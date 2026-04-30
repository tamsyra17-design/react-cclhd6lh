import AdminShell from "@/components/admin/AdminShell";
import { getSiteContent } from "@/lib/watch-site";

export const metadata = {
    title: "Dar Al Waqt Admin",
    description: "Arabic-first watch store admin scaffold",
};

export default function RootAdminLayout({ children }) {
    const content = getSiteContent("ar");

    return (
        <AdminShell navItems={content.adminNav}>{children}</AdminShell>
    );
}
