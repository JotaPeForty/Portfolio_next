/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    appDir:true,
    fontLoaders:[
      {loader: '@next/font/google', }
    ]
  },
  reactStrictMode: true,
}

module.exports = nextConfig
