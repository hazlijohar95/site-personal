
export interface MediaItem {
  title: string;
  url: string;
  source: string;
  type: 'radio' | 'news' | 'video';
}

export const mediaFeatures: MediaItem[] = [
  {
    title: "Cynco Raising $125k to Take on Xero and QuickBooks",
    url: "https://www.bfm.my/content/podcast/cynco-raising-dollar125k-to-take-on-xero-and-quickbooks",
    source: "BFM 89.9",
    type: "radio"
  },
  {
    title: "Cradle Powers Startup Growth as Five Winners Emerge Victorious from MyStartup Pre-Accelerator",
    url: "https://www.disruptr.com.my/cradle-powers-startup-growth-as-five-winners-emerge-victorious-from-mystartup-pre-accelerator/",
    source: "Disruptr Media",
    type: "news"
  },
  {
    title: "MyStartup Pre-Accelerator Cohort 5 Concludes with Five Winning Startups",
    url: "https://www.businesstoday.com.my/2025/03/04/mystartup-pre-accelerator-cohort-5-concludes-with-five-winning-startups/",
    source: "Business Today",
    type: "news"
  }
];
