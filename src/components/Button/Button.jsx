const Button = ({
    children,
    href,
    download = false,
    primary = true,
}) => {
    return (
        <a
            href={href}
            download={download}
            className={`inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${primary
                    ? "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 text-white"
                    : "border border-slate-600 hover:border-blue-500 hover:bg-slate-900 text-white"
                }`}
        >
            {children}
        </a>
    );
};

export default Button;