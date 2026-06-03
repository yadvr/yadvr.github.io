export const SITE = {
  website: "https://yadv.in",
  author: "Rohit Yadav",
  profile: "https://rohit.yadav.cloud/",
  desc: "Writing, explorations and learnings on software craftsmanship and leadership, by a lifelong open-source builder and breaker of large-scale cloud platforms.",
  title: "Rohit Yadav",
  ogImage: "hero.png",
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/yadvr/yadvr.github.io/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Kolkata",
} as const;
