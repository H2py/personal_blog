import { getCollection } from 'astro:content';

export async function GET(context) {
  const site = context.site ?? new URL('https://example.com');
  const posts = await getCollection("blog");
  const items = posts
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .map((post) => {
      const postUrl = new URL(`/posts/${post.id}/`, site);
      const pubDate = post.data.pubDate instanceof Date ? post.data.pubDate : new Date(post.data.pubDate);
      return `
      <item>
        <title><![CDATA[${post.data.title}]]></title>
        <link>${postUrl.href}</link>
        <guid>${postUrl.href}</guid>
        <pubDate>${pubDate.toUTCString()}</pubDate>
        <description><![CDATA[${post.data.description}]]></description>
      </item>
    `.trim();
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Astro Learner | Blog</title>
    <link>${site.href}</link>
    <description>My journey learning Astro</description>
    <language>en-us</language>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
