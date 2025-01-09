import CreateNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = CreateNextIntlPlugin()

/**  @type{import'next'.NextConfig }*/   
const nextConfig ={}

export default withNextIntl(nextConfig);