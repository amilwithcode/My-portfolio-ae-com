import type { MetadataRoute } from 'next'

// type Robots = {
//     rules:
//     | {
//         userAgent?: string | string[]
//         allow?: string | string[]
//         disallow?: string | string[]
//         crawlDelay?: number
//     }
//     | Array<{
//         userAgent: string | string[]
//         allow?: string | string[]
//         disallow?: string | string[]
//         crawlDelay?: number
//     }>
//     sitemap?: string | string[]
//     host?: string
// }

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: 'Googlebot',
                allow: ['/'],
                disallow: '/private/',
            },
            {
                userAgent: ['Applebot', 'Bingbot'],
                disallow: ['/'],
            },
        ],
        sitemap: '',
    }
}