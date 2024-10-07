import { Link } from "@inertiajs/react";

export default function Pagination({ Links }) {
    return (
        <nav className="text-center mt-4">
            {Links.map((link) => (
                <Link
                    preserveScroll //kani kay para di siya mubalik gud sa taas inig mag switch link ka
                    href={link.url || ""}
                    key={link.label}
                    className={
                        "inline-block py-2 px-3 rounded-lg text-xs " +
                        (link.active ? "bg-bgLight text-textColor" : "text-textColor") +
                        (!link.url ? " cursor-not-allowed" : " hover:bg-bgLight")
                    }
                    dangerouslySetInnerHTML={{ __html: link.label }} 
                ></Link>
            ))}
        </nav>
    );
}
