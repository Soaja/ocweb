export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  body: Section[];
};

export type Section = {
  type: "h2" | "h3" | "p" | "ul" | "blockquote";
  content: string | string[];
};

export const ARTICLES: Article[] = [
  {
    slug: "geo-travel-brands",
    title: "GEO: Why Boutique Travel Brands Must Optimise for AI Search Now",
    subtitle: "ChatGPT is already recommending tour operators. Make sure it's recommending you.",
    category: "Strategy",
    date: "May 2025",
    readTime: "7 min",
    excerpt:
      "When a traveller asks ChatGPT for the best cultural tour operator in Turkey, three brands get mentioned. If you're not one of them, you've already lost the booking. Here's what Generative Engine Optimisation means for boutique travel.",
    body: [
      {
        type: "p",
        content:
          "Search has changed. Not gradually — fundamentally. A growing portion of premium travellers now begin their trip planning not with a Google search, but with a conversation. They ask ChatGPT, Claude, or Perplexity a question: 'What's the best small-group tour operator for cultural travel in Turkey?' or 'Which boutique adventure company runs the best Patagonia expeditions?'",
      },
      {
        type: "p",
        content:
          "The AI answers. It names brands. And if your brand isn't named, you don't exist for that traveller — before they even open a browser tab.",
      },
      {
        type: "h2",
        content: "What is GEO?",
      },
      {
        type: "p",
        content:
          "Generative Engine Optimisation (GEO) is the practice of structuring your brand's digital presence so that large language models include you in their responses. It's distinct from traditional SEO, which optimises for search engine rankings. GEO optimises for AI recall — making your brand the answer AI gives.",
      },
      {
        type: "h2",
        content: "Why travel brands are uniquely exposed",
      },
      {
        type: "p",
        content:
          "Boutique travel operators face a specific problem: they're niche, local, and often lack the content volume that AI models use to identify authoritative sources. A brand running extraordinary Sicily tours may have done so for 15 years — but if their digital footprint is thin, AI models simply won't know they exist.",
      },
      {
        type: "ul",
        content: [
          "AI models prioritise brands with deep, expert, well-structured content",
          "Schema markup (TourOperator, LocalBusiness) signals your category to AI training data",
          "Third-party citations from travel media, tourism boards, and directories increase AI recall",
          "Consistent brand mentions across the web teach AI models your brand's category and expertise",
        ],
      },
      {
        type: "h2",
        content: "How to start",
      },
      {
        type: "p",
        content:
          "GEO is not a separate strategy — it's a layer on top of good content and technical SEO. Start with a deep topical content hub that covers your niche authoritatively. Implement structured data. Earn citations from credible travel publications. And build a consistent brand voice that AI models can associate with your category.",
      },
      {
        type: "blockquote",
        content:
          "The brands that invest in GEO today will have a compounding advantage as AI search grows. The brands that wait will spend twice as much to catch up.",
      },
    ],
  },
  {
    slug: "conversion-design-travel",
    title: "Why Your Travel Website Looks Good But Doesn't Convert",
    subtitle: "The gap between beautiful and effective — and how to close it.",
    category: "Design",
    date: "April 2025",
    readTime: "6 min",
    excerpt:
      "Most boutique travel websites are visually stunning. Most also convert at under 2%. The problem isn't the photography — it's the architecture. Here's what conversion design actually means.",
    body: [
      {
        type: "p",
        content:
          "A boutique travel brand's website should be the best salesperson they have — working 24/7, speaking to every prospect at once, never having an off day. For most operators, it's closer to an expensive brochure that happens to have a contact form buried three clicks deep.",
      },
      {
        type: "h2",
        content: "The beautiful-but-broken pattern",
      },
      {
        type: "p",
        content:
          "The pattern is consistent: breathtaking photography, minimal text, an atmospheric design. And a conversion rate under 2%. The site looks like the brand — but it doesn't sell like one.",
      },
      {
        type: "p",
        content:
          "The problem is architectural. Conversion design isn't about adding more buttons or making things more obvious. It's about understanding exactly how a premium traveller moves from 'interested' to 'inquiring' — and engineering every element to support that journey.",
      },
      {
        type: "h2",
        content: "The three conversion killers",
      },
      {
        type: "ul",
        content: [
          "No trust signals at the moment of decision — reviews, credentials, and social proof appear too late in the scroll",
          "Friction in the inquiry form — multi-step forms with too many required fields kill conversions before they happen",
          "Unclear value proposition — visitors don't immediately understand what makes this operator different from the five others they've already seen",
        ],
      },
      {
        type: "h2",
        content: "What conversion design actually looks like",
      },
      {
        type: "p",
        content:
          "It starts with the hero. Not with the best photo — with the clearest answer to the visitor's first question: 'Is this for me?' Every section below the hero has a job: build desire, build trust, or reduce friction. The CTA appears when the visitor is ready — not where the designer thought it looked good.",
      },
      {
        type: "blockquote",
        content:
          "The best travel websites don't look like websites. They feel like the beginning of the experience they're selling.",
      },
    ],
  },
  {
    slug: "boutique-seo-vs-mass-market",
    title: "Why Mass-Market SEO Fails Boutique Travel Brands",
    subtitle: "Volume strategy meets a precision problem.",
    category: "SEO",
    date: "March 2025",
    readTime: "5 min",
    excerpt:
      "Standard SEO agencies optimise for traffic. Boutique travel brands need authority, not traffic. Here's why the standard playbook is the wrong one — and what the right strategy looks like.",
    body: [
      {
        type: "p",
        content:
          "If you've ever worked with a general SEO agency on your travel brand, you've probably been presented with a keyword list dominated by terms like 'Italy tours', 'Sicily vacation packages', or 'cultural travel experiences'. High volume. High competition. Dominated by Viator, GetYourGuide, and TripAdvisor.",
      },
      {
        type: "p",
        content:
          "Ranking for those terms isn't your path to growth. It's a dead end. The OTAs have hundreds of millions in budget to defend those positions. You have a boutique operation and a marketing budget measured in thousands, not millions.",
      },
      {
        type: "h2",
        content: "Authority, not traffic",
      },
      {
        type: "p",
        content:
          "The right strategy for boutique travel brands is authority, not traffic. You don't need 50,000 monthly visitors — you need 500 high-intent, high-quality visitors who are specifically looking for what you offer and can't find it anywhere else.",
      },
      {
        type: "ul",
        content: [
          "Target specific, long-tail, high-intent queries: 'small-group Ottoman history tours Istanbul' not 'Turkey travel'",
          "Build deep topical content that positions you as the expert source, not a listing among thousands",
          "Earn authority through niche travel media, cultural institutions, and specialist directories",
          "Capture the traveller who has already decided on the experience — and needs to decide on the operator",
        ],
      },
      {
        type: "h2",
        content: "The compound effect",
      },
      {
        type: "p",
        content:
          "Authority-based SEO compounds over time in a way that volume-based SEO doesn't. Each expert article, each high-quality backlink, each structured data implementation adds to a growing body of evidence that your brand is the definitive source in your niche. After 12 months, you're not just ranking — you're owning.",
      },
      {
        type: "blockquote",
        content:
          "The boutique travel operator who builds topical authority in their niche will consistently outrank operators with ten times their budget. Specificity beats scale.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find(a => a.slug === slug);
}
