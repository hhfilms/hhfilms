import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  compiler: {
    emotion: true, // Ensures Emotion styles are optimized
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "/**", // Allow all paths under this domain
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self'; 
              frame-src 'self' https://www.facebook.com/plugins/video.php https://www.instagram.com https://www.youtube.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://use.typekit.net;
              font-src 'self' https://use.typekit.net https://fonts.gstatic.com data:;
              img-src 'self' https://*.cdninstagram.com https://d3fpz3joletla1.cloudfront.net https://hhf-assets.s3.us-east-2.amazonaws.com https://hhf-assets.s3.amazonaws.com data:;
              media-src 'self' https://hhf-assets.s3.us-east-2.amazonaws.com https://d3fpz3joletla1.cloudfront.net https://*.cdninstagram.com;
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.instagram.com;
              connect-src 'self' https://hhf-assets.s3.us-east-2.amazonaws.com https://d3fpz3joletla1.cloudfront.net;
            `
              .replace(/\s{2,}/g, " ")
              .trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
