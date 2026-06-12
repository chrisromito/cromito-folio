import {FiExternalLink} from "react-icons/fi"

type Props = {
    company: string;
    link?: string;
};

export default function CompanyLink({
                                        company,
                                        link
                                    }: Props) {
    if (!link) {
        return (
            <h1 className="text-4xl font-bold">
                {company}
            </h1>
        )
    }

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 w-fit"
        >
            <h1 className="text-4xl font-bold">
                {company}
            </h1>

            <FiExternalLink
                size={16}
                className="text-zinc-500 transition-colors group-hover:text-orange-400"
            />
        </a>
    )
}