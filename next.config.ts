import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    const csp = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googletagmanager.com *.google-analytics.com *.gstatic.com *.facebook.net *.doubleclick.net;
      style-src 'self' 'unsafe-inline' fonts.googleapis.com;
      img-src 'self' data: *.google-analytics.com *.googletagmanager.com *.doubleclick.net;
      font-src 'self' fonts.gstatic.com;
      connect-src 'self' *.google-analytics.com *.analytics.google.com *.googletagmanager.com *.doubleclick.net;
      frame-src *.googletagmanager.com *.doubleclick.net;
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
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()',
          }
        ]
      }
    ];
  }
};

export default nextConfig;
