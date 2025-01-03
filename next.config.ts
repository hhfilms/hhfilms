import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hhf-assets.s3.us-east-2.amazonaws.com",
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
              frame-src 'self' https://www.facebook.com/plugins/video.php https://www.instagram.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              font-src 'self' https://fonts.gstatic.com data:;
              img-src 'self' https://scontent-iad3-2.cdninstagram.com https://scontent-iad3-1.cdninstagram.com https://scontent-dfw5-1.cdninstagram.com https://hhf-assets.s3.us-east-2.amazonaws.com https://hhf-assets.s3.amazonaws.com data:;
              media-src 'self' https://hhf-assets.s3.us-east-2.amazonaws.com https://scontent-dfw5-1.cdninstagram.com https://scontent-iad3-2.cdninstagram.com;
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.instagram.com;
              connect-src 'self' https://hhf-assets.s3.us-east-2.amazonaws.com;
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
