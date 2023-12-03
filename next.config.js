/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Your existing config options
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },

  // Adding webpack configuration
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Configure file-loader for .pdf files
      config.module.rules.push({
        test: /\.pdf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              publicPath: '/_next/static/files',
              outputPath: 'static/files',
            },
          },
        ],
      });
    }

    return config;
  },
};

module.exports = nextConfig;
