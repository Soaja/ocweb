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

  // ── NEW ARTICLES ──────────────────────────────────────────────────────────

  {
    slug: "mobile-bookings-boutique-travel",
    title: "How Boutique Travel Agencies Lose Bookings on Mobile",
    subtitle: "63% of travel research happens on a phone. Most boutique websites weren't built for it.",
    category: "Mobile",
    date: "May 2025",
    readTime: "6 min",
    excerpt:
      "The majority of premium travellers now research and shortlist operators on their phone — then close the tab because the website is impossible to use. Here's the exact pattern, and how to fix it.",
    body: [
      {
        type: "p",
        content:
          "The data is unambiguous: 63% of all travel research now happens on a mobile device. For the 35–55 demographic that boutique operators serve — high-income, time-poor, sophisticated — that number is even higher. They're researching between meetings, on the train, during a lunch break. They have 90 seconds and a 6-inch screen.",
      },
      {
        type: "p",
        content:
          "Most boutique travel websites are designed to be experienced on a 27-inch monitor with a trackpad. On mobile, they're a disaster — and a very expensive one.",
      },
      {
        type: "h2",
        content: "The four mobile failure points",
      },
      {
        type: "ul",
        content: [
          "Hero video that doesn't load on mobile data — the page appears blank for 4+ seconds and the visitor leaves",
          "Text so small it requires pinch-zoom — a friction signal that reads as 'this site doesn't respect you'",
          "Contact forms with 8+ fields on mobile — each field is a reason to abandon before sending",
          "Navigation menus that don't close after clicking — visitors get trapped and bounce",
        ],
      },
      {
        type: "h2",
        content: "The invisible cost",
      },
      {
        type: "p",
        content:
          "The brutality of mobile failure is that it's invisible. Bounce rates look high, but nobody attributes them to mobile UX. You see 'user left after 12 seconds' in your analytics and assume they weren't the right fit. They were exactly the right fit — but your site told them to leave.",
      },
      {
        type: "p",
        content:
          "A boutique operator with an average booking value of €4,200 and 100 monthly mobile visitors at a 1.2% conversion rate is generating €5,040/month from mobile. Fix the mobile experience to industry-standard 3.8% and that becomes €15,960/month — a €10,920 monthly difference from UI improvements alone.",
      },
      {
        type: "h2",
        content: "The mobile-first audit checklist",
      },
      {
        type: "ul",
        content: [
          "Test on real devices at real mobile network speeds (3G throttled in Chrome DevTools)",
          "Ensure hero loads in under 2 seconds — use a static image fallback if video is slow",
          "Minimum 16px body text — no pinch-zoom required anywhere",
          "Contact form: maximum 3 required fields on mobile (name, email, message)",
          "Tap targets minimum 44×44px — thumbs are not precision instruments",
          "Test the full inquiry flow from hero to thank-you on an iPhone SE (the smallest common screen)",
        ],
      },
      {
        type: "blockquote",
        content:
          "Your mobile website isn't a compressed version of your desktop site. It's the first impression for the majority of your prospects. Treat it that way.",
      },
    ],
  },

  {
    slug: "travel-website-conversion-audit",
    title: "The 12-Point Conversion Audit Every Travel Website Needs",
    subtitle: "Run this audit on your site this afternoon. Most boutique operators fail 7 of 12.",
    category: "Conversion",
    date: "April 2025",
    readTime: "8 min",
    excerpt:
      "A structured 12-point framework for identifying exactly where your travel website is leaking bookings. Practical, actionable, and designed specifically for boutique operators — not e-commerce brands.",
    body: [
      {
        type: "p",
        content:
          "Every week, boutique travel operators spend money on Instagram, Google Ads, and PR — driving traffic to a website that converts less than 2% of visitors into leads. The problem isn't the traffic. It's what the traffic lands on.",
      },
      {
        type: "p",
        content:
          "Here is the 12-point audit we run on every boutique travel website we work with. It takes about two hours. The findings are consistently the same — and consistently fixable.",
      },
      {
        type: "h2",
        content: "Trust signals (points 1–4)",
      },
      {
        type: "ul",
        content: [
          "1. Social proof above the fold — do visitors see a review, testimonial, or trust signal before scrolling?",
          "2. Review count and recency — are your Google or Trustpilot reviews visible, recent (within 12 months), and specific?",
          "3. Credentials and accreditations — are your tourism board memberships, industry certifications, or press mentions visible?",
          "4. Founder or team presence — does a real person appear on the homepage? Anonymous brands convert at half the rate of operator-fronted ones.",
        ],
      },
      {
        type: "h2",
        content: "Value clarity (points 5–7)",
      },
      {
        type: "ul",
        content: [
          "5. 5-second test — can a new visitor explain what you do and who it's for within 5 seconds of landing?",
          "6. Differentiation statement — is it immediately clear why you're different from competitors? Not 'unique experiences' — something specific.",
          "7. Price anchoring — do visitors have any sense of investment level before contacting you? Without it, your inquiry form attracts price-shoppers.",
        ],
      },
      {
        type: "h2",
        content: "Friction reduction (points 8–10)",
      },
      {
        type: "ul",
        content: [
          "8. Inquiry form field count — count your required fields. Every field beyond 3 reduces completion rate by approximately 11%.",
          "9. CTA placement and clarity — is there a clear next step visible at every scroll depth, not just at the top and bottom?",
          "10. Page load speed — test on Google PageSpeed Insights. Under 3 seconds is acceptable. Under 1.5 seconds is competitive.",
        ],
      },
      {
        type: "h2",
        content: "Mobile and technical (points 11–12)",
      },
      {
        type: "ul",
        content: [
          "11. Mobile conversion flow — complete the entire inquiry process on your own phone. Note every moment of friction.",
          "12. Structured data implementation — check that Google can read your TourOperator or LocalBusiness schema using Google's Rich Results Test.",
        ],
      },
      {
        type: "h2",
        content: "What to do with the results",
      },
      {
        type: "p",
        content:
          "Score each point pass or fail. If you fail 4 or fewer, you have isolated fixes to make. If you fail 5 or more, the issues are architectural — incremental fixes won't move the needle meaningfully, and a strategic redesign will deliver a better return than a series of patches.",
      },
      {
        type: "blockquote",
        content:
          "The most expensive thing a boutique travel brand can do is spend on marketing without first verifying that the destination converts. Traffic without conversion is just a bill.",
      },
    ],
  },

  {
    slug: "booking-engine-vs-custom-website",
    title: "Booking Engine vs Custom Website: What Actually Performs Better",
    subtitle: "The honest answer depends on what you're optimising for.",
    category: "Strategy",
    date: "March 2025",
    readTime: "7 min",
    excerpt:
      "Rezdy, FareHarbor, Bokun — booking engines promise to handle everything. For boutique operators, they often handle everything badly. Here's how to think about the decision with real numbers.",
    body: [
      {
        type: "p",
        content:
          "The booking engine pitch is compelling: set up your tours, connect a payment processor, and let the software handle the rest. For operators doing high volume with standardised products — day tours, transfers, fixed-itinerary experiences — it often makes sense.",
      },
      {
        type: "p",
        content:
          "For boutique operators selling bespoke, multi-day, high-value experiences, it's usually the wrong tool. Not because the software is bad — because the problem it solves isn't the problem boutique operators actually have.",
      },
      {
        type: "h2",
        content: "What booking engines are built for",
      },
      {
        type: "p",
        content:
          "Booking engines are optimised for transaction volume. They make it fast and easy to browse a catalogue, select a date, enter payment details, and confirm. This is exactly right for: a hop-on-hop-off city tour, a cooking class, a wine tasting with fixed group sizes and fixed pricing.",
      },
      {
        type: "p",
        content:
          "It is exactly wrong for: a 12-day custom safari, a private island hopping itinerary in Greece, a family expedition to Patagonia. These products aren't transactions — they're relationships. They start with a conversation.",
      },
      {
        type: "h2",
        content: "The boutique conversion model",
      },
      {
        type: "p",
        content:
          "Premium boutique bookings almost never happen in a single session. The conversion journey typically looks like this: discovery (website, social, referral) → consideration (reading content, exploring itineraries) → inquiry (contact form or call) → proposal → booking. The 'booking' step happens offline, via email or phone, after trust has been established.",
      },
      {
        type: "p",
        content:
          "A booking engine optimises step 5 of a 5-step process that most boutique operators aren't reaching because they've failed steps 1–4. A custom website optimises the full journey.",
      },
      {
        type: "h2",
        content: "The numbers",
      },
      {
        type: "ul",
        content: [
          "Average booking engine monthly cost: €150–€400 + 1–3% transaction fee",
          "Average boutique inquiry-to-booking conversion rate via booking engine: 4–6%",
          "Average boutique inquiry-to-booking conversion rate via consultant-led process: 35–55%",
          "Average booking value for boutique multi-day: €3,800–€12,000 per group",
          "Commission saved by owning the full conversion process: €114–€360 per booking",
        ],
      },
      {
        type: "h2",
        content: "The right answer",
      },
      {
        type: "p",
        content:
          "Use a booking engine for standardised products you want to sell at volume with minimal involvement. Use a custom, conversion-engineered website for your flagship boutique experiences — and close those bookings through a human conversation. The website's job is to make the visitor want to have that conversation. A booking engine's job is to process a card. They're solving different problems.",
      },
      {
        type: "blockquote",
        content:
          "The most expensive mistake boutique operators make is optimising the checkout when the problem is actually the consideration phase. Fix the trust. Fix the desire. The booking follows.",
      },
    ],
  },

  {
    slug: "cost-of-slow-travel-website",
    title: "The Real Cost of a Slow Travel Website",
    subtitle: "Every 100ms of load time is money leaving your business.",
    category: "Performance",
    date: "February 2025",
    readTime: "5 min",
    excerpt:
      "Google's data is clear: 53% of mobile visitors abandon a site that takes longer than 3 seconds to load. For boutique travel brands with €3,000–€12,000 average booking values, a slow website is one of the most expensive problems you can have.",
    body: [
      {
        type: "p",
        content:
          "Speed is not a technical metric. It's a revenue metric. Every 100 milliseconds of additional load time correlates with a measurable drop in conversion rate. At the booking values boutique travel operators work with, those drops are significant.",
      },
      {
        type: "h2",
        content: "The numbers behind the problem",
      },
      {
        type: "ul",
        content: [
          "53% of mobile visitors abandon a page that takes more than 3 seconds to load (Google, 2024)",
          "A 1-second delay in load time reduces conversions by an average of 7% (Akamai)",
          "Pages loading in under 1 second convert 3× better than pages loading in 5 seconds",
          "Google uses Core Web Vitals as a ranking signal — slow sites rank lower in search results",
        ],
      },
      {
        type: "h2",
        content: "Why travel websites are especially vulnerable",
      },
      {
        type: "p",
        content:
          "Travel websites are image-heavy by nature. Operators want to show the landscape, the accommodation, the experience. This creates a natural tension: the content that sells best (high-quality imagery and video) is also the content that makes pages slow.",
      },
      {
        type: "p",
        content:
          "Unoptimised travel websites typically have: uncompressed hero images above 4MB, video that autoplays without considering mobile data speeds, and third-party scripts (booking widgets, chat tools, analytics) that block page rendering.",
      },
      {
        type: "h2",
        content: "The ROI of speed optimisation",
      },
      {
        type: "p",
        content:
          "Consider a boutique operator with 2,000 monthly visitors, an average booking value of €4,500, and a current conversion rate of 1.4%. That's €126,000 in monthly revenue from the website. Speed optimisation — bringing page load from 5.2 seconds to under 1.5 seconds — typically improves conversion rates to 2.8–3.5%. At 3%, that's €270,000 monthly. The speed investment pays for itself in weeks.",
      },
      {
        type: "h2",
        content: "The quick wins",
      },
      {
        type: "ul",
        content: [
          "Convert all images to WebP format — typically 30–50% smaller than JPEG at equivalent quality",
          "Implement lazy loading for all images below the fold",
          "Replace autoplay video heroes with a static image + play button on mobile",
          "Audit and remove third-party scripts that aren't delivering measurable value",
          "Use a CDN to serve assets from locations geographically close to your visitors",
        ],
      },
      {
        type: "blockquote",
        content:
          "Speed is the invisible conversion lever that most boutique operators never touch. It doesn't show up in design reviews. It shows up in revenue.",
      },
    ],
  },

  {
    slug: "social-proof-boutique-travel",
    title: "Why Social Proof Drives 90% of Boutique Travel Decisions",
    subtitle: "The psychology of trust in high-stakes, high-value purchases.",
    category: "Psychology",
    date: "January 2025",
    readTime: "6 min",
    excerpt:
      "When a traveller is considering spending €8,000 on an experience they can't return, the purchase decision is almost entirely driven by trust signals. Here's how the psychology works — and how to architect it on your website.",
    body: [
      {
        type: "p",
        content:
          "A boutique travel booking is one of the highest-trust purchases a consumer makes. The product is intangible until the moment of experience. The investment is significant — often several thousand euros. The consequences of a bad experience are both financial and emotional. And it can't be returned.",
      },
      {
        type: "p",
        content:
          "In this context, social proof isn't a nice-to-have. It's the primary mechanism by which trust is transferred from existing customers to prospective ones. Understanding how to architect it determines, to a large extent, whether a visitor converts.",
      },
      {
        type: "h2",
        content: "The trust hierarchy",
      },
      {
        type: "p",
        content:
          "Not all social proof is equal. Research on high-value purchase decisions consistently shows a hierarchy of trust signals, from most to least persuasive:",
      },
      {
        type: "ul",
        content: [
          "Video testimonials from identifiable, articulate clients (highest trust) — authentic, specific, with face and name",
          "Detailed written reviews with specific outcomes: 'We came back for the third time because...'",
          "Named testimonials with photograph, location, and context",
          "Press features and media coverage from credible publications",
          "Star ratings and review counts from verified platforms (Google, Trustpilot)",
          "Generic testimonials without name, photo, or specific detail (lowest trust)",
        ],
      },
      {
        type: "h2",
        content: "Where social proof should appear",
      },
      {
        type: "p",
        content:
          "Most boutique travel websites place testimonials in a dedicated section near the footer — after the visitor has already made their decision about whether to inquire. This is architecturally backward.",
      },
      {
        type: "p",
        content:
          "Social proof should appear at every point of uncertainty. In the hero, before the visitor has committed to reading further. Adjacent to the inquiry form, at the moment of maximum hesitation. In the 'What's included' section, where value questions arise. Distributed throughout, not concentrated at the end.",
      },
      {
        type: "h2",
        content: "The specificity principle",
      },
      {
        type: "p",
        content:
          "Generic praise — 'Amazing experience', 'Highly recommend' — contributes almost nothing to conversion. Specific, outcome-focused testimonials do the work. 'The guide's knowledge of Ottoman-era sites completely changed how I see Istanbul. We've already booked the Jordan itinerary for next year.' That sentence answers: is this high quality? Is it worth the price? Would I come back? Yes to all three, in one sentence.",
      },
      {
        type: "blockquote",
        content:
          "One specific, credible testimonial placed at the right moment in the conversion journey is worth more than twenty generic five-star reviews buried on a testimonials page.",
      },
    ],
  },

  {
    slug: "photography-vs-copy-travel",
    title: "Photography vs Copy: What Actually Sells Boutique Travel",
    subtitle: "Beautiful images get the click. Words close the booking.",
    category: "Content",
    date: "December 2024",
    readTime: "5 min",
    excerpt:
      "The boutique travel industry is obsessed with photography. With good reason — imagery creates desire. But desire alone doesn't convert. Here's what the words on your website are actually doing (or failing to do).",
    body: [
      {
        type: "p",
        content:
          "If you ask a boutique travel operator what their most important marketing asset is, almost every one will say photography. They're right — and they're also missing half the picture.",
      },
      {
        type: "p",
        content:
          "Photography gets the click. It creates desire, communicates atmosphere, signals quality. But desire alone doesn't convert. The visitor who falls in love with your hero image still needs to answer the question: 'Is this for me? Can I trust these people? Is it worth the investment?' Photography cannot answer those questions. Copy can.",
      },
      {
        type: "h2",
        content: "What images do",
      },
      {
        type: "ul",
        content: [
          "Create emotional desire and aspiration",
          "Signal quality and positioning — premium photography implies a premium product",
          "Communicate place and experience faster than words can",
          "Reduce the time needed to understand what you offer",
        ],
      },
      {
        type: "h2",
        content: "What copy does",
      },
      {
        type: "ul",
        content: [
          "Answer the visitor's qualifying questions: 'Is this the right fit for me?'",
          "Build specific trust through concrete details, numbers, and outcomes",
          "Differentiate — explain why you, not the competitor with equally beautiful photos",
          "Handle objections before they become reasons not to inquire",
          "Create urgency and a clear path to the next step",
        ],
      },
      {
        type: "h2",
        content: "The copy most boutique websites get wrong",
      },
      {
        type: "p",
        content:
          "The most common copy failure in boutique travel websites is describing the experience rather than articulating the outcome. 'Journey through ancient Moroccan medinas with an expert guide' describes. 'Leave Morocco with a depth of cultural understanding that transforms how you see the world — and an open invitation from a local family to return' articulates an outcome. One of these closes bookings. The other sounds like every other travel website.",
      },
      {
        type: "h2",
        content: "The rule",
      },
      {
        type: "p",
        content:
          "Invest in exceptional photography. It is non-negotiable at the premium end of the market. But don't let it do the conversion work that only copy can do. Every image needs a headline. Every experience needs an outcome statement. Every section needs to move the visitor one step closer to the inquiry button.",
      },
      {
        type: "blockquote",
        content:
          "Beautiful photography earns you the visit. Precise, empathetic copy earns you the booking. You need both, and most boutique operators have only one.",
      },
    ],
  },

  {
    slug: "direct-bookings-vs-otas",
    title: "How to Win Direct Bookings Away From OTAs",
    subtitle: "Viator and GetYourGuide take 20–30%. Here's how to reclaim that margin.",
    category: "Revenue",
    date: "November 2024",
    readTime: "7 min",
    excerpt:
      "Online travel agencies command 20–30% commission on every booking they send you. For boutique operators, that commission is the difference between a sustainable business and a thin-margin one. Here's a systematic approach to shifting bookings direct.",
    body: [
      {
        type: "p",
        content:
          "The OTA relationship is a trap with a delayed mechanism. You list on Viator or GetYourGuide because it drives bookings. The bookings arrive, the commission disappears, and over time you find that you're running a business that works for the platform more than it works for you.",
      },
      {
        type: "p",
        content:
          "Boutique operators at the premium end of the market — €2,000+ experiences — have a specific advantage in the battle for direct bookings. OTAs are optimised for standardised, transactional products. They're poor environments for communicating the depth, personalisation, and quality that justifies premium pricing. Your direct website, done right, can do that job far better.",
      },
      {
        type: "h2",
        content: "Why travellers book through OTAs",
      },
      {
        type: "ul",
        content: [
          "Discovery — they find you on Viator before they find you on Google",
          "Trust — OTAs provide buyer protection that an unfamiliar operator's website doesn't",
          "Convenience — saved payment details, familiar interface, easy comparison",
          "Price perception — they assume OTA price equals the 'real' price",
        ],
      },
      {
        type: "h2",
        content: "The direct booking advantage strategy",
      },
      {
        type: "p",
        content:
          "Each of these OTA advantages can be countered with a direct-channel equivalent. Discovery: invest in SEO and content so travellers find you directly. Trust: build visible, specific social proof, and offer equivalent payment security. Convenience: make your inquiry process as frictionless as a booking button. Price: offer something on direct that OTAs can't — a personalisation conversation, a complimentary add-on, or simply the operator's direct attention.",
      },
      {
        type: "h2",
        content: "The direct booking incentive",
      },
      {
        type: "p",
        content:
          "Premium travellers respond well to exclusive direct benefits — not discounts, which erode brand positioning, but value adds. A pre-departure call with the lead guide. Access to a custom itinerary adjustment. A small, thoughtful gift on arrival. The cost of these is a fraction of the OTA commission you're saving, and they reinforce the premium, personal positioning that justifies your pricing.",
      },
      {
        type: "h2",
        content: "The long-term play",
      },
      {
        type: "p",
        content:
          "OTA visibility is a legitimate acquisition channel — especially early in a brand's digital journey. The error is letting it remain the primary channel. Use OTA exposure to build your email list and social following. Invest those marketing budgets in direct channel development. Over 24–36 months, a boutique operator can shift from 70% OTA to 70% direct — and the margin impact is transformational.",
      },
      {
        type: "blockquote",
        content:
          "Every direct booking is worth 1.3–1.5× an OTA booking on margin alone. Over 100 bookings a year, that's the difference between a good business and an exceptional one.",
      },
    ],
  },

  {
    slug: "premium-travel-brand-positioning",
    title: "How to Position a Boutique Travel Brand at the Premium End",
    subtitle: "Price is a positioning signal. Here's how to make yours say the right thing.",
    category: "Branding",
    date: "October 2024",
    readTime: "6 min",
    excerpt:
      "Most boutique travel operators undercharge relative to the quality they deliver. The problem is rarely the price — it's the positioning. Here's how premium positioning works, and how your website either supports it or undermines it.",
    body: [
      {
        type: "p",
        content:
          "There is a segment of the travel market where price is a reassurance signal, not a barrier. Travellers investing €8,000–€20,000 in an experience are not looking for the lowest price — they're looking for the highest confidence that the experience will be exceptional. A price that seems too low triggers doubt, not delight.",
      },
      {
        type: "p",
        content:
          "Most boutique operators have a positioning problem, not a pricing problem. Their experiences are worth the premium they charge — or more — but their digital presence doesn't communicate that. The website looks expensive enough to attract the right clients, but not specific enough, not confident enough, not authoritative enough to close them.",
      },
      {
        type: "h2",
        content: "The signals that communicate premium",
      },
      {
        type: "ul",
        content: [
          "Visual identity — typography, colour palette, photography quality, and white space all signal price point before a word is read",
          "Specificity of language — 'small-group' is generic; 'maximum 6 guests per departure' is specific and implies exclusivity",
          "Operational detail — the confidence to describe exactly how an experience works signals expertise and removes risk",
          "Named expertise — the guide's background, the chef's training, the naturalist's credentials — transforms a service into an authority",
          "Client selectivity — implying that not every enquiry becomes a booking positions you as a partner, not a vendor",
        ],
      },
      {
        type: "h2",
        content: "What undermines premium positioning",
      },
      {
        type: "ul",
        content: [
          "Competing on price — discounts and early-bird offers signal that your standard price isn't the real price",
          "Generic language — 'unforgettable experiences' and 'luxury travel' appear on every competitor's site",
          "Visual inconsistency — mixing stock photography with operator photography erodes authenticity",
          "Absence of the founder — the most premium travel brands have a visible, credible human at the centre",
        ],
      },
      {
        type: "h2",
        content: "The positioning audit",
      },
      {
        type: "p",
        content:
          "Open your website and ask: if I removed the brand name and logo, could this be any travel company? If yes, your positioning is generic. The goal is a website that could only belong to you — specific in its expertise, distinctive in its voice, and precise about who it's for. Generics attract general enquiries. Specific positioning attracts the clients who are already pre-sold.",
      },
      {
        type: "blockquote",
        content:
          "The boutique travel brand that is specific about who it's for will attract fewer enquiries and close a higher proportion of them. That's not a trade-off — it's the definition of a healthy business.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find(a => a.slug === slug);
}
