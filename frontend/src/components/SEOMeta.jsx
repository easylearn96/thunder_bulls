import { Helmet } from 'react-helmet-async';

export default function SEOMeta({ title, description, image, url, type }) {
  return (
    <Helmet>
      {/* Basic */}
      <title>{title} | Thunder Bulls FC</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Thunder Bulls, football team, soccer, squad, kits, EST 2024" />
      <link rel="canonical" href={url} />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || '/og-image.jpg'} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:site_name" content="Thunder Bulls FC" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || '/og-image.jpg'} />
      <meta name="twitter:site" content="@ThunderBullsFC" />

      {/* Theme color (mobile browser bar color) */}
      <meta name="theme-color" content="#FFC107" />
    </Helmet>
  );
}
