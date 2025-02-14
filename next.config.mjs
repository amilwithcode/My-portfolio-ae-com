import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
    i18n: {
        locales: ['en', 'az', 'tr', 'de'],
        defaultLocale: 'en'
    },
    webpack: (config) => {
        config.resolve.alias = {
            '@': path.resolve(__dirname, 'src')
        };
        return config;
    }
});

/**  @type{import'next'.NextConfig }*/
const nextConfig = {}

export default withNextIntl(nextConfig);