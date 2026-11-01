export const BUCKET = "main-ada2c.firebasestorage.app";
export const BASE_PATH = "GiaKhang/"; // case-sensitive; keep the trailing slash

// Values are file names inside BASE_PATH. A value starting with "/" is served from this site's own
// public/ folder instead of Firebase (used for the certificate image extracted from the PDF).
export const IMAGES = {
  "home-hero": "home-hero.png",
  "about-school": "about-school.jpeg",
  "about-portrait": "about-portrait.jpeg",
  "proj1-product-1": "proj1-product-1.png",
  "proj1-product-2": "proj1-product-2.png",
  "proj1-product-3": "proj1-product-3.png",
  "proj1-product-4": "proj1-product-4.png",
  "sviif-award-1": "sviif-award-1.jpg",
  "sviif-award-2": "sviif-award-2.jpg",
  "proj2-1": "proj2-1.jpg",
  "proj2-2": "proj2-2.jpg",
  "proj2-3": "proj2-3.jpg",
  "proj2-4": "proj2-4.jpg",
  "proj2-5": "proj2-5.png",
  "vex-champion": "vex-champion.jpg",
  "abrsm-certificate": "abrsm-certificate.jpg",
  "yes-main": "yes-main.png",
  "charity-1": "charity-1.jpg",
  "charity-2": "charity-2.jpg",
  "charity-3": "charity-3.jpg",
  "charity-4": "charity-4.jpg",
  "training-photo": "training-photo.jpg",
  "training-certificate": "/media/training-certificate.webp",
  "weread-club": "weread-club.png",
  "piano": "piano.jpg",

  // Revision 3 media, served from public/media/ (web-sized copies of the originals in src/assets/).
  "about-childhood-1": "/media/about-childhood-1.webp",
  "about-childhood-2": "/media/about-childhood-2.webp",
  "about-childhood-3": "/media/about-childhood-3.webp",
  "about-childhood-4": "/media/about-childhood-4.webp",
  "trebuchet-1": "/media/trebuchet-1.webp",
  "trebuchet-2": "/media/trebuchet-2.webp",
  "trebuchet-3": "/media/trebuchet-3.webp",
  "trebuchet-4": "/media/trebuchet-4.webp",
  "trebuchet-5": "/media/trebuchet-5.webp",
  "istem-champion-1": "/media/istem-champion-1.webp",
  "istem-champion-2": "/media/istem-champion-2.webp",
  "vex-worlds-1": "/media/vex-worlds-1.webp",
  "vex-worlds-2": "/media/vex-worlds-2.webp",
  "vex-worlds-3": "/media/vex-worlds-3.webp",
  "vex-worlds-4": "/media/vex-worlds-4.webp",
  "vex-state-3": "/media/vex-state-3.webp",
  "vex-state-4": "/media/vex-state-4.webp",
  "vex-state-5": "/media/vex-state-5.webp",
  "rhino-balanced-learner-2024-25": "/media/rhino-balanced-learner-2024-25.webp",
  "rhino-global-citizen-2023-24": "/media/rhino-global-citizen-2023-24.webp",
  "rhino-team-player-2023-24": "/media/rhino-team-player-2023-24.webp",
  "rhino-team-player-2019-20": "/media/rhino-team-player-2019-20.webp",
  "sat-tutoring-1": "/media/sat-tutoring-1.webp",
  "sat-tutoring-2": "/media/sat-tutoring-2.webp",
  "weread-photo": "/media/extra-image-1.webp",
  "galileo-1": "/media/galileo-1.webp",
  "galileo-2": "/media/galileo-2.webp",
  "galileo-3": "/media/galileo-3.webp",
  "writing-1": "/media/writing-1.webp",
  "writing-2": "/media/writing-2.webp",
  "writing-3": "/media/writing-3.webp",
  "writing-4": "/media/writing-4.webp",
  "writing-5": "/media/writing-5.webp",
  "writing-6": "/media/writing-6.webp",
  "writing-7": "/media/writing-7.webp",
  "writing-8": "/media/writing-8.webp",
  "writing-9": "/media/writing-9.webp",
  "swim-1": "/media/swim-1.webp",
  "swim-2": "/media/swim-2.webp",
  "swim-3": "/media/swim-3.webp",
  "swim-4": "/media/swim-4.webp",
  "swim-6": "/media/swim-6.webp",
  "swim-7": "/media/swim-7.webp",
  "swim-8": "/media/swim-8.webp",
  "basketball-1": "/media/basketball-1.webp"
} as const;

// All videos were removed from the site (too large). Galleries still support { kind: 'video' } items
// if one is added back here.
export const VIDEOS = {} as const;

export const DOCS = {
  "training-certificate": "training-certificate.pdf"
} as const;

// Media NOT uploaded yet. Keys listed here are never requested and their slot is left out of the page
// (the piano card shows a keyboard graphic instead). After uploading a file, delete its key from the list.
export const PENDING_IMAGES: string[] = ["training-photo", "piano"];
export const PENDING_VIDEOS: string[] = [];
export const PENDING_DOCS: string[] = [];

// If a configured image fails (wrong extension), try the same base name with these extensions before giving up.
export const FALLBACK_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".PNG"];

export const LINKS = {
  resume: "https://docs.google.com/document/d/1IMeKDGFXkH2GUz8AjsomILiy3yud-0LwFdrctuVej2k/edit?tab=t.0",
  sviifPoster: "https://drive.google.com/file/d/1uOTR8kAjf5ubeaTWtuJ9Gj6ofe65G6LH/view?usp=sharing",
  cycloidalReport: "https://drive.google.com/file/d/1g6yb9W8opMugpvzXC9c9a7tt2zg6t87Q/view?usp=sharing",
  esp32Report: "https://docs.google.com/document/d/1ty1GtNdOlbxV6zpmMP_lbBLLH1MXkmnI/edit?usp=sharing&ouid=111259990397367642739&rtpof=true&sd=true",
  esp32Intro: "https://drive.google.com/file/d/1w7eXaWg-nnLAZ3Nd4YSziNWcYAkIhToY/view?usp=sharing",
  vexWorldsReel1: "https://www.facebook.com/reel/822652264183837",
  vexWorldsReel2: "https://www.facebook.com/reel/922802633938432"
};
export const CONTACT_EMAIL = ""; // empty = hide the email line (the client document only has the placeholder "[Student Email]")
