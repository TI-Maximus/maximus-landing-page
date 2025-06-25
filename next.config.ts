import type { NextConfig } from 'next';
// import { Headers } from 'next/dist/server/config-shared';

const nextConfig: NextConfig = {
  async headers() {
    const csp = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googletagmanager.com *.google-analytics.com *.gstatic.com;
      style-src 'self' 'unsafe-inline' fonts.googleapis.com;
      img-src 'self' data: *.google-analytics.com *.googletagmanager.com;
      font-src 'self' fonts.gstatic.com;
      connect-src 'self' *.google-analytics.com *.analytics.google.com *.googletagmanager.com;
      frame-src *.googletagmanager.com;
      base-uri 'self';
      form-action 'self';
      object-src 'none';
      upgrade-insecure-requests;
    `.replace(/\s{2,}/g, ' ').trim();

    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: csp,
          }
        ]
      }
    ];
  }
};

export default nextConfig;
