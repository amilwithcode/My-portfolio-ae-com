
interface Robots {
  rules:
  | {
    userAgent?: string | string[];
    allow?: string | string[];
    disallow?: string | string[];
  }
  | Array<{
    userAgent: string | string[];
    allow?: string | string[];
    disallow?: string | string[];
  }>;
  sitemap?: string | string[];
  host?: string;
};

export default function robots(): Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/src/app/[locale]/(root)/*"],
        disallow: [
          "/private/src/assets/*",
          "/private/src/mesagges/*",
          "/private/src/components/*",
          "/private/src/error/*",
          "/private/src/lib/*",
          "/private/src/style/*",
          "/private/src/ui/*",
          "/private/src/i18n",
          "/private/src/middleware",
          "/private/src/navigation",
          "/private//src/public/*",
          "/private/src/robots.txt"
        ],
      },

    ],
    sitemap: "my-portfolio-ae.web.app.xml",
    host:"my-portfolio-ae.web.app"
  };
}
