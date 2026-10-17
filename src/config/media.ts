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
  "training-certificate": "/media/training-certificate.jpg",
  "weread-club": "weread-club.png",
  "piano": "piano.jpg"
} as const;

export const VIDEOS = {
  "vex-champion": "vex-champion.mp4",
  "charity-video": "charity-video.mp4",
  "sviif-award-3": "sviif-award-3.mp4"
} as const;

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
