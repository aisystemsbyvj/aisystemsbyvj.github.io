/* ==========================================================================
   ✏️  EDIT YOUR SITE HERE — this is the only file you need to change.
   --------------------------------------------------------------------------
   Rules to keep it working:
   • Keep text inside "double quotes".
   • Keep the comma at the end of each line/item (a missing comma breaks the page).
   • To leave a link as a placeholder, use an empty value: url: ""
     It will show as "Coming soon" and won't be clickable.
   After saving, see README.md → "How changes go live".
   ========================================================================== */

window.SITE = {
  // ---- Header -------------------------------------------------------------
  name: "Vijay Anand (VJ)",
  // Your photo. Add photo.jpg to the repo, then change this to "photo.jpg".
  photo: "photo-placeholder.svg",
  photoAlt: "Photo of Vijay Anand",
  tagline:
    "Learning AI alongside a full-time job — sharing what works in AI, analytics, money and life.",

  // ---- Short bio (3 lines max) ---------------------------------------------
  bio: [
    "7+ years in supply chain and revenue analytics.",
    "Now learning to build AI agents and sharing the lessons in public.",
    "Based in Chennai, India."
  ],

  // ---- Follow buttons ------------------------------------------------------
  // icon must be one of: linkedin, youtube, instagram, github
  links: [
    { label: "LinkedIn",  icon: "linkedin",  url: "https://www.linkedin.com/in/vijay-anand-5a78ba138" },
    { label: "YouTube",   icon: "youtube",   url: "" },   // TODO: paste your YouTube channel URL
    { label: "Instagram", icon: "instagram", url: "" },   // TODO: paste your Instagram profile URL
    { label: "GitHub",    icon: "github",    url: "https://github.com/aisystemsbyvj" }
  ],

  // ---- What I share --------------------------------------------------------
  // icon must be one of: ai, analytics, money, life
  topics: [
    { icon: "ai",        title: "AI",           text: "Tools and agents explained simply." },
    { icon: "analytics", title: "Analytics",    text: "Data skills that matter at work." },
    { icon: "money",     title: "Money",        text: "Personal finance lessons." },
    { icon: "life",      title: "Life lessons", text: "Career and habits." }
  ],

  // ---- What I'm building ---------------------------------------------------
  // Replace a "Coming soon" card when a project is ready.
  // status: short label shown on the card, e.g. "Live", "In progress", "Coming soon"
  // url: link to the project (GitHub repo, demo, video). Leave "" for no link.
  projects: [
    { title: "Project 1", text: "Details coming soon.", status: "Coming soon", url: "" },
    { title: "Project 2", text: "Details coming soon.", status: "Coming soon", url: "" },
    { title: "Project 3", text: "Details coming soon.", status: "Coming soon", url: "" }
  ],

  // ---- Work with me --------------------------------------------------------
  work: {
    text: "Open to freelance work in data analytics and AI automation.",
    email: "",                     // TODO: your collaboration email, e.g. "hello@example.com"
    emailSubject: "Collaboration enquiry",
    buttonLabel: "Email me"
  },

  // ---- Footer --------------------------------------------------------------
  footerNote: "Built with Claude Code"
};
