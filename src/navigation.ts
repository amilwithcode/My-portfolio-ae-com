import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { localePrefix, locales, pathnames } from "./i18n";

export const { Link, getPathname, redirect, usePathname, useRouter } = createLocalizedPathnamesNavigation({
    localePrefix,
    locales,
    pathnames
})