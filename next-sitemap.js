/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_HOST || 'https://mindsanctuary.net',
    generateRobotsTxt: true, // (optional)
    // ...other options
  }