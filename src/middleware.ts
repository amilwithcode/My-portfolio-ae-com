import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n";

export default createMiddleware({
    locales,
    defaultLocale: "az",
    localePrefix: 'always'
})

export const config = {
    matcher: ["/","/(az|tr|en|de)/:path*"],
}