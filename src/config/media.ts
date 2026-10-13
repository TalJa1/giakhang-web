export const BUCKET = "main-ada2c.firebasestorage.app";
export const BASE_PATH = "GiaKhang/"; // case-sensitive; keep the trailing slash

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
  "vex-champion": "vex-champion.jpg",
  "abrsm-certificate": "abrsm-certificate.jpg",
  "yes-main": "yes-main.png",
  "charity-1": "charity-1.jpg",
  "charity-2": "charity-2.jpg",
  "charity-3": "charity-3.jpg",
  "charity-4": "charity-4.jpg",
  "training-photo": "training-photo.jpg",
  "weread-club": "weread-club.png",
  "piano": "piano.jpg"
} as const;

export const VIDEOS = {
  "about-assembly": "about-assembly.mp4",
  "vex-champion": "vex-champion.mp4",
  "charity-video": "charity-video.mp4",
  "sviif-award-3": "sviif-award-3.mp4"
} as const;

export const DOCS = {
  "training-certificate": "training-certificate.pdf"
} as const;

// Media NOT uploaded yet (or not usable yet). Keys listed here are NOT requested from Firebase; they show
// the placeholder immediately. After uploading a file, delete its key from the list.
// charity-1, charity-3 and charity-4 currently exist only as .HEIC (browsers cannot display HEIC),
// so they stay pending until JPG versions are uploaded under the names above.
export const PENDING_IMAGES: string[] = [
  "proj2-1", "proj2-2", "proj2-3", "piano", "training-photo",
  "charity-1", "charity-3", "charity-4"
];
export const PENDING_VIDEOS: string[] = ["about-assembly"];
export const PENDING_DOCS: string[] = [];

// If a configured image fails (wrong extension), try the same base name with these extensions before giving up.
export const FALLBACK_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".PNG"];

export const LINKS = {
  resume: "https://docs.google.com/document/d/1IMeKDGFXkH2GUz8AjsomILiy3yud-0LwFdrctuVej2k/edit?tab=t.0",
  sviifPoster: "https://drive.google.com/file/d/1uOTR8kAjf5ubeaTWtuJ9Gj6ofe65G6LH/view?usp=sharing",
  cycloidalReport: "https://drive.google.com/file/d/1g6yb9W8opMugpvzXC9c9a7tt2zg6t87Q/view?usp=sharing",
  esp32Report: "https://docs.google.com/document/d/1ty1GtNdOlbxV6zpmMP_lbBLLH1MXkmnI/edit?usp=sharing&ouid=111259990397367642739&rtpof=true&sd=true",
  esp32Intro: "https://drive.google.com/file/d/1w7eXaWg-nnLAZ3Nd4YSziNWcYAkIhToY/view?usp=sharing"
};
export const CONTACT_EMAIL = ""; // empty = hide the email line (the client document only has the placeholder "[Student Email]")
