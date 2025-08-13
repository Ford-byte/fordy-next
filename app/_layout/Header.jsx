import Head from "next/head";

export default function Header() {
  const siteTitle = "Fordy Portfolio";
  const description = "This is my Portfolio site";
  const siteUrl = "https://fordy-next.vercel.app/";
  const imageUrl = "https://fordy-next.vercel.app/";

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content="Fordy Portfolio Preview" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
}
