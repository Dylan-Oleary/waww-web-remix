import { Outlet } from "@remix-run/react";

import { Footer, Navigation } from "@/components";

export default function Index() {
    return (
        <div className="min-h-full flex flex-col bg-white">
            <Navigation />
            <main className="flex-grow">
                <div className="-mt-24 px-6">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
}
