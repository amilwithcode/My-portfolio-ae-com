import { Pathnames } from "next-intl/routing";

export const locales = ["az", "en", "tr", "de"];

export type Locales = typeof locales;
export const defaultLocale = 'en';

export const pathnames: Pathnames<Locales> = {
  "/": "/",
  "/about": "/about",
  "/projects": "/projects",
  "/contact": "/contact",
  "/login": "/login",
  "/register": "/register"
}

export const localePrefix = 'always'; // 'as-needed' | 'always' | 'never'
export type AppPathnames = keyof typeof pathnames; 