import { socials } from "@/data/socials"
import { Link } from "@nextui-org/link"

export const Socials = ({classNameLayout = "", classNameIcon = "size-6 text-default-500"} : {classNameLayout?: string, classNameIcon?: string}) => {
    return (
        <div className={classNameLayout}>
            {socials.map(({ label, href, icon }, index) => {
                return (
                    <Link isExternal aria-label={label} href={href} key={index}>
                        {icon({ className: classNameIcon })}
                    </Link>
                )
            })}
        </div>
    )
}