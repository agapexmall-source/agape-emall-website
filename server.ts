import express, { Request, Response } from 'express';
import path from 'path';
import { companyConfig } from './src/config/company';
import { validateContactForm } from './src/lib/validation/contact';

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // API Endpoint for Contact Form Submission
  app.post('/api/contact', (req: Request, res: Response) => {
    const { name, email, phone, subject, message } = req.body;

    const validation = validateContactForm({ name, email, message });
    if (!validation.isValid) {
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validation.errors,
      });
      return;
    }

    // Log contact form submission server-side
    console.log(`[CONTACT FORM INQUIRY] From: ${name} <${email}> (${phone || 'No phone'}) | Subject: ${subject}`);
    console.log(`[MESSAGE CONTENT]: ${message}`);

    res.status(200).json({
      success: true,
      message: 'Thank you for contacting Agape Mall. Your message has been received.',
    });
  });

  // Dynamic Robots.txt Route
  app.get('/robots.txt', (_req: Request, res: Response) => {
    res.type('text/plain');
    res.send(`User-agent: *
Allow: /
Sitemap: ${companyConfig.officialWebsite}/sitemap.xml
`);
  });

  // Dynamic Sitemap.xml Route
  app.get('/sitemap.xml', (_req: Request, res: Response) => {
    res.type('application/xml');
    const baseUrl = companyConfig.officialWebsite;
    const pages = [
      '',
      '/about',
      '/buyers',
      '/sellers',
      '/download',
      '/support',
      '/faq',
      '/safety',
      '/privacy',
      '/terms',
      '/account-deletion',
      '/contact',
    ];

    const xmlUrls = pages
      .map(
        (page) => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`
      )
      .join('\n');

    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`);
  });

  // Production Static Serving or Vite Dev Setup
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));

    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Agape Mall server running on port ${PORT}`);
  });
}

startServer();
