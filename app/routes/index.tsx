import Logo from "@/assets/images/dark-logo.png";

export default function Index() {
    return (
        <div className="min-h-full flex flex-col bg-primary-blue justify-center items-center">
            <img
                className="max-h-48 w-auto block ,b-8"
                src={Logo}
                alt="Logo for What Are We Watching"
            />
            <a href="/watch" className="text-white">
                Get Watching
            </a>
        </div>
    );
}
