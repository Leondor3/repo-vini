import react, { useState,  useEffect } from "react";
import { List } from "@phosphor-icons/react";

export default function Header() {
    const [isBurguer, setIsBurger] = useState(false);
    const [sticky, setSticky] = useState(false);
    const handleStickyNavbar = () => {
        if (window.scrollY >= 80) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleStickyNavbar);
    });

    return (
        <header
            className={`header left-0 top-0 z-40 flex w-full items-center bg-transparent ${sticky
                ? "shadow-sticky !fixed !z-[9999] !bg-white !bg-opacity-10 backdrop-blur-sm"
                : "absolute"
                }`}
        >
            <div className="container">
                <div className="flex h-20 items-center justify-between gap-8">
                    <span className="font-bold text-gray-50">
                        Vinicius Ferreira
                    </span>
                    <button
                        className="absolute right-4 top-3 max-lg:top-6 max-sm:top-6 md:hidden"
                        onClick={() => setIsBurger(!isBurguer)}
                    >
                        <List size={32} color="#1178FF" />
                    </button>
                    {isBurguer && (
                        <nav
                            className={`absolute right-0 top-12 z-20 flex h-max w-full flex-col items-end justify-start max-sm:top-16 ${theme == false ? "bg-bg-dark-secundary" : "bg-zinc-200"
                                }`}
                        >
                            {[
                                ["Principal", "#home"],
                                ["Sobre", "#about"],
                                ["Técnologias", "#technology"],
                                ["Experiências", "#experiences"],
                                ["Trabalhos", "#works"],
                                ["Contato", "#contact"],
                            ].map(([title, url]) => (
                                <a
                                    key={title}
                                    href={url}
                                    className={`w-full rounded-none px-3 py-4 text-end 
                                        } font-medium hover:bg-blue-600`}
                                >
                                    {title}
                                </a>
                            ))}
                        </nav>
                    )}
                    <nav className="flex space-x-4 max-[768px]:hidden sm:justify-center">
                        {[
                            ["Sobre", "#about"],
                            ["Trabalhos", "#works"],
                            ["Contato", "#contact"],
                        ].map(([title, url]) => (
                            <a
                                key={url}
                                href={url}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.querySelector(url);
                                    element!.scrollIntoView({ behavior: "smooth" });
                                }}
                                className={`px-3 py-2 transition hover:text-blue-400"
                                    }`}
                            >
                                {title}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}