import Logo from "@/assets/images/dark-logo.png";

import type { FC } from "react";

export const Navigation: FC = () => (
    <div className="bg-primary-blue pb-32">
        <nav className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="h-24 flex items-center">
                <div>
                    <img className="h-16 w-auto" src={Logo} alt="Logo for What Are We Watching" />
                </div>
            </div>
        </nav>
    </div>
);
