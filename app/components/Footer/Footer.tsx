import type { FC } from "react";

export const Footer: FC = () => (
    <footer>
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="py-8 text-sm sm:text-left border-t border-primary-blue text-gray-500 flex flex-col lg:flex-row justify-between">
                <span className="text-center lg:text-left">
                    &#169; {new Date().getFullYear()} theonlydevsever
                </span>
                <div className="flex flex-col mt-2 lg:mt-0">
                    <div className="mb-1 text-center lg:text-right">
                        This product uses the TMDB API but is not endorsed or certified by TMDB.
                    </div>
                    <a
                        className="h-4 inline-block self-center lg:self-end lg:mt-0 mt-1"
                        href="https://www.themoviedb.org/"
                        target="_blank"
                    >
                        <img
                            className="h-4"
                            src="/assets/svg/tmdb-logo.svg"
                            alt="Logo for The Movie Database"
                        />
                    </a>
                </div>
            </div>
        </div>
    </footer>
);
