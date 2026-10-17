// ALL visible copy for the site. Text is verbatim from the client's brief (section 5) and the revision
// document ("Website bổ sung và chỉnh sửa") — do not reword.
// Alt text and aria labels are not visible copy; they only describe the media for screen readers.
// Media `ratio` values are the real width / height of each file (galleries show images uncropped).
import { CONTACT_EMAIL, LINKS } from '../config/media'
import type { DocKey, ImageKey } from '../lib/media'
import type { IconName, ImageItem, LinkButton, MediaItem, Stat } from '../types'

/* ---------- Site chrome (the only text not taken from the brief) ---------- */

export const site = {
  brand: 'Gia Khang',
  resume: 'Resume',
  footer: '© 2026 Gia Khang',
  backToTop: 'Back to top',
}

export const ui = {
  imageSoon: 'Image coming soon',
  videoSoon: 'Video coming soon',
  viewPdf: 'Open PDF',
}

export const nav = [
  { id: 'home', num: '01', label: 'Home' },
  { id: 'about', num: '02', label: 'About Me' },
  { id: 'projects', num: '03', label: 'Projects' },
  { id: 'achievements', num: '04', label: 'Achievements' },
  { id: 'leadership', num: '05', label: 'Leadership & Impact' },
  { id: 'beyond', num: '06', label: 'Beyond Engineering' },
]

/* ---------- 5.1 HOME ---------- */

export const home = {
  eyebrow: 'Engineering Student | Robotics Enthusiast | Young Innovator',
  tagline: 'Designing Ideas. Building Solutions. Inspiring Change.',
  heading: 'Turning Curiosity into Creation',
  paragraphs: [
    'I have always been fascinated by how individual components work together to create something functional. From mechanical systems and robotics to programming and automation, engineering has become my way of exploring ideas, solving problems, and bringing concepts into the real world.',
    'For me, engineering is more than understanding how technology works. It is about asking how something can be designed better, made more efficient, or used to solve a meaningful problem.',
    'My journey has taken me from experimenting with electronic systems and building prototypes to collaborating on an award-winning mechanical engineering project at the Silicon Valley International Invention Festival.',
    'Along the way, I have discovered that the most rewarding part of engineering is not simply completing a product, but learning through every challenge, redesign, and experiment.',
  ],
  buttons: [
    { label: 'Explore My Projects', href: '#projects' },
    { label: 'Discover My Journey', href: '#about' },
  ] satisfies LinkButton[],
  image: { name: 'home-hero', alt: 'Portrait of Gia Khang' } as { name: ImageKey; alt: string },
}

// Highlights strip: reuses the achievements text exactly.
export const highlights: { year: string; text: string; icon: IconName }[] = [
  { year: '2026', text: 'Gold Award — Silicon Valley International Invention Festival (SVIIF)', icon: 'medal' },
  { year: '2026', text: 'Champion — Massachusetts VEX V5 Robotics High School State Championship', icon: 'trophy' },
  { year: '2026', text: 'Participant — 2026 VEX Robotics World Championship', icon: 'globe' },
  { year: '2019', text: 'ABRSM Grade 4 Piano', icon: 'music' },
]

/* ---------- 5.2 ABOUT ---------- */

export const about = {
  label: 'About Me',
  heading: "Hi, I'm Gia Khang.",
  intro:
    'I am a high school student at The Cambridge School of Weston in Massachusetts, with a growing passion for mechanical engineering, robotics, and intelligent systems.',
  school: {
    photo: { name: 'about-school', alt: 'The Cambridge School of Weston campus' } as { name: ImageKey; alt: string },
    logo: { name: 'about-portrait', alt: 'The Cambridge School of Weston logo' } as { name: ImageKey; alt: string },
  },
  body: [
    'My academic journey began at International School Ho Chi Minh City, where I developed an interest in science, technology, and hands-on experimentation. Moving to the United States introduced me to a new learning environment and encouraged me to become more independent, curious, and open to different perspectives.',
    'I enjoy exploring the intersection of mechanical design, electronics, and programming. Whether I am working with an ESP32 microcontroller, studying robotic transmission systems, or learning about industrial automation, I am motivated by the challenge of transforming technical knowledge into functional solutions.',
  ],
  closing:
    'Beyond engineering, I enjoy playing the piano, reading, and participating in student-led communities. These experiences remind me that creativity, communication, and collaboration are just as important as technical knowledge.',
  philosophy: {
    heading: 'My Engineering Philosophy',
    quote: 'Curiosity drives discovery. Design turns ideas into reality. Collaboration makes innovation possible.',
    text: 'I believe that a successful engineering solution begins with understanding a problem, continues through experimentation and improvement, and becomes meaningful when it can benefit others.',
  },
}

/* ---------- 5.3 PROJECTS ---------- */

export type Gallery = {
  items: MediaItem[]
  /** Items per row on wide screens, e.g. [2, 3]. Every row fills the width at one shared height. */
  rows?: number[]
}

export type Project = {
  id: string
  num: string
  label: string
  title: string
  dates: string
  award?: { text: string; gallery: Gallery }
  gallery: Gallery
  subheading: string
  paragraphs: string[]
  highlightsHeading: string
  highlights: string[]
  lessonsHeading: string
  lessons: string[]
  links: LinkButton[]
}

export const projects: { label: string; cards: Project[] } = {
  label: 'Projects',
  cards: [
    {
      id: 'cycloidal-drive',
      num: '01',
      label: 'Featured Project 01',
      title: 'Cycloidal Drive for Robotic Arm Applications',
      dates: 'June – August 2026',
      award: {
        text: 'SVIIF 2026 — Gold Award',
        gallery: {
          items: [
            { kind: 'image', name: 'sviif-award-1', alt: 'SVIIF 2026 Gold Award diploma and medal', ratio: 1.29 },
            { kind: 'image', name: 'sviif-award-2', alt: 'The team at the Silicon Valley International Invention Festival', ratio: 1.333 },
            { kind: 'video', name: 'sviif-award-3', alt: 'SVIIF 2026 Gold Award video', ratio: 16 / 9 },
          ],
        },
      },
      gallery: {
        rows: [2, 2],
        items: [
          { kind: 'image', name: 'proj1-product-1', alt: 'Exploded view of the cycloidal drive with labelled parts', ratio: 1.833 },
          { kind: 'image', name: 'proj1-product-3', alt: '3D CAD model of the cycloidal drive', ratio: 0.956 },
          { kind: 'image', name: 'proj1-product-2', alt: 'Cycloidal disk and ring pins', ratio: 1.796 },
          { kind: 'image', name: 'proj1-product-4', alt: 'Fabricated 3D-printed cycloidal drive prototype', ratio: 0.956 },
        ],
      },
      subheading: 'Designing Motion with Precision',
      paragraphs: [
        'Robotic arms require transmission systems that balance compact dimensions, torque capacity, and precise movement. Our team explored how a cycloidal drive could address these engineering requirements.',
        'Working collaboratively, we developed a 3D-printed cycloidal drive prototype intended for robotic arm applications.',
        'The project combined mechanical design calculations, 3D CAD modeling, finite element analysis using ANSYS, and physical fabrication.',
        'Through this process, I gained exposure to the relationship between theoretical calculations, simulation results, and real-world mechanical design.',
      ],
      highlightsHeading: 'Technical Highlights',
      highlights: [
        '15:1 transmission ratio',
        '3D CAD modeling and prototype fabrication',
        'ANSYS finite element analysis',
        'Factor of safety: 2.23',
        '0.52% difference between analytical and simulation results',
      ],
      lessonsHeading: 'What This Project Taught Me',
      lessons: [
        'This experience helped me understand that engineering is an iterative process. Every design decision needs to be evaluated, tested, and refined.',
        'Receiving a Gold Award with my team was an important milestone, but the most valuable lesson was learning how research, design, and collaboration come together to transform a technical concept into a working prototype.',
      ],
      links: [
        { label: 'View Research Poster', href: LINKS.sviifPoster },
        { label: 'Explore Technical Report', href: LINKS.cycloidalReport },
      ],
    },
    {
      id: 'esp32-smart-home',
      num: '02',
      label: 'Featured Project 02',
      title: 'ESP32 Smart Home System',
      dates: 'March – May 2026',
      gallery: {
        rows: [2, 3],
        items: [
          { kind: 'image', name: 'proj2-2', alt: 'ESP32 Smart Home System enclosure, 3D model', ratio: 1.906 },
          { kind: 'image', name: 'proj2-3', alt: 'ESP32 Smart Home System room layout, 3D model', ratio: 1.603 },
          { kind: 'image', name: 'proj2-1', alt: 'ESP32 Smart Home System, top view of the model', ratio: 0.874 },
          { kind: 'image', name: 'proj2-4', alt: 'ESP32 Smart Home System wiring diagram with sensors, relays and servos', ratio: 1.244 },
          { kind: 'image', name: 'proj2-5', alt: 'SmartHome web interface for monitoring and remote control', ratio: 0.655 },
        ],
      },
      subheading: 'Making Everyday Spaces Smarter',
      paragraphs: [
        'What if everyday household systems could automatically respond to changing environmental conditions?',
        'This question inspired my ESP32 Smart Home System project, which combines electronic components, sensors, programming, and wireless communication.',
        'As Project Leader, I led the development of a functional prototype designed to respond to temperature, light, and rain conditions.',
        'I integrated sensors, relays, servo motors, and an ESP32 microcontroller, while developing a Wi-Fi-based web interface for monitoring and remote control.',
      ],
      highlightsHeading: 'Technical Highlights',
      highlights: [
        'ESP32 microcontroller programming',
        'Environmental sensors and automated responses',
        'Relay and servo motor integration',
        'Wi-Fi-based monitoring and remote control',
        'Hardware and software integration',
      ],
      lessonsHeading: 'What This Project Taught Me',
      lessons: [
        'Building this system challenged me to think beyond individual components and understand how hardware and software must communicate to function as one integrated solution.',
        'It strengthened my interest in automation, embedded systems, and the possibilities of engineering in everyday life.',
      ],
      links: [
        { label: 'View Research Report', href: LINKS.esp32Report },
        { label: 'Explore Project Introduction', href: LINKS.esp32Intro },
      ],
    },
  ],
}

/* ---------- 5.4 ACHIEVEMENTS ---------- */

export type Achievement = {
  id: string
  year: string
  title: string
  detail: string
  org?: string
  icon: IconName
  gallery?: Gallery
  links?: LinkButton[]
}

export const achievements = {
  label: 'ROBOTICS & ACHIEVEMENTS | Learning Through Competition',
  heading: 'Building Under Pressure. Growing Through Teamwork.',
  paragraphs: [
    'Robotics competitions have given me opportunities to apply engineering principles in environments where creativity, precision, and teamwork matter.',
    'Every competition presents a different challenge, encouraging me to approach problems systematically, adapt to constraints, and learn from both successful and unsuccessful attempts.',
  ],
  subheading: 'Selected Achievements',
  items: [
    {
      id: 'sviif',
      year: '2026',
      title: 'Gold Award',
      detail: 'Silicon Valley International Invention Festival (SVIIF)',
      icon: 'medal',
      gallery: {
        items: [{ kind: 'image', name: 'sviif-award-1', alt: 'Gold Award, Silicon Valley International Invention Festival (SVIIF)', ratio: 1.29 }],
      },
    },
    {
      id: 'vex-state',
      year: '2026',
      title: 'Champion',
      detail: 'Massachusetts VEX V5 Robotics High School State Championship',
      icon: 'trophy',
      gallery: {
        items: [
          { kind: 'image', name: 'vex-champion', alt: 'Gia Khang at the Massachusetts VEX Robotics State Championship', ratio: 4 / 3 },
          { kind: 'video', name: 'vex-champion', alt: 'Massachusetts VEX V5 Robotics State Championship video', ratio: 9 / 16 },
        ],
      },
    },
    {
      id: 'vex-worlds',
      year: '2026',
      title: 'Participant',
      detail: '2026 VEX Robotics World Championship – VEX V5 Robotics Competition (High School Division)',
      icon: 'globe',
      links: [
        { label: 'Watch Reel 01', href: LINKS.vexWorldsReel1 },
        { label: 'Watch Reel 02', href: LINKS.vexWorldsReel2 },
      ],
    },
    {
      id: 'abrsm',
      year: '2019',
      title: 'ABRSM Grade 4 Piano',
      detail: 'Graded Examination in Music Performance',
      org: 'Associated Board of the Royal Schools of Music (ABRSM)',
      icon: 'music',
      gallery: {
        items: [{ kind: 'image', name: 'abrsm-certificate', alt: 'ABRSM Grade 4 Piano certificate', ratio: 0.75 }],
      },
    },
  ] satisfies Achievement[],
}

/* ---------- 5.5 LEADERSHIP & IMPACT ---------- */

export const leadership = {
  label: 'LEADERSHIP & COMMUNITY | Engineering Beyond the Workshop',
  yes: {
    title: "Young Engineers' Society (YES)",
    image: { name: 'yes-main', alt: "Young Engineers' Society (YES) logo" } as { name: ImageKey; alt: string },
    role: 'Vice President',
    subheading: 'Sharing Knowledge. Creating Opportunities.',
    paragraphs: [
      'Engineering becomes more meaningful when knowledge is shared.',
      "At Young Engineers' Society, I have worked with fellow students to make STEM concepts more accessible through online educational content, technical discussions, and community initiatives.",
      'As Tech Lead, I helped develop more than 100 educational resources covering CAD, 3D printing, robotics, and material mechanics. These resources generated over 500 engagements during the first quarter of 2025.',
      'As Vice President, I have supported a 10-member student engineering team, mentored new members, and contributed to academic programming and community-focused projects.',
      'My experience at YES has taught me that leadership is not only about organizing people, but also about helping others develop the confidence to explore new ideas.',
    ],
    // Figures taken from the paragraphs above.
    stats: [
      { value: 100, suffix: '+', label: 'educational resources' },
      { value: 500, suffix: '+', label: 'engagements' },
      { value: 10, label: 'member student engineering team' },
    ] satisfies Stat[],
  },
  charity: {
    title: 'Math & Logical Thinking Education Project',
    subtitle: 'Ngoai Thuy Charity Class',
    subheading: 'Making STEM Accessible to Young Learners',
    paragraphs: [
      'I believe that engineering begins with curiosity and the ability to think logically.',
      'Through a community education initiative at Ngoại Thủy Charity Class, I helped organize five interactive learning sessions for 25 elementary students from disadvantaged backgrounds.',
      'The lessons introduced logical reasoning, pattern recognition, spatial thinking, and problem-solving through games, puzzles, and hands-on activities.',
      'We also provided 15 STEM building kits and 50 essential supply packages, with a total value of approximately $310 USD, to support hands-on learning and the educational needs of disadvantaged students.',
      'This experience reminded me that introducing a child to a new way of thinking can be just as meaningful as developing a new technical product.',
    ],
    stats: [
      { value: 5, label: 'interactive learning sessions' },
      { value: 25, label: 'elementary students' },
      { value: 15, label: 'STEM building kits' },
      { value: 50, label: 'essential supply packages' },
    ] satisfies Stat[],
    gallery: {
      rows: [3, 2],
      items: [
        { kind: 'image', name: 'charity-1', alt: 'Students working on logic exercises in class', ratio: 4 / 3 },
        { kind: 'image', name: 'charity-4', alt: 'Gia Khang teaching at the blackboard', ratio: 3 / 4 },
        { kind: 'image', name: 'charity-2', alt: 'Volunteers and students with their STEM kits', ratio: 4 / 3 },
        { kind: 'image', name: 'charity-3', alt: 'A mentoring session with the class', ratio: 4 / 3 },
        { kind: 'video', name: 'charity-video', alt: 'Math & Logical Thinking Education Project video', ratio: 16 / 9 },
      ],
    } satisfies Gallery,
  },
  technical: {
    label: 'TECHNICAL EXPLORATION | Learning Beyond the Classroom',
    title: 'Saigon Hi-Tech Park Training Center',
    subtitle: 'Engineering Technology Training',
    dates: 'July – August 2025',
    certificate: {
      doc: 'training-certificate' as DocKey,
      image: { kind: 'image', name: 'training-certificate', alt: 'Certificate of completion, Hi-Tech Youth Program, Saigon Hi-Tech Park Training Center', ratio: 1.434 } satisfies ImageItem,
    },
    photo: { kind: 'image', name: 'training-photo', alt: 'Training at Saigon Hi-Tech Park Training Center', ratio: 4 / 3 } satisfies ImageItem,
    subheading: 'Exploring the Technologies Behind Modern Engineering',
    paragraphs: [
      'My experience at the Saigon Hi-Tech Park Training Center introduced me to several technologies used in modern industrial and engineering environments.',
      'Through technical training, I explored industrial robots and collaborative robots, automation systems, 3D scanning, digital modeling, and additive manufacturing.',
      'I also learned about AI applications in manufacturing, computer vision, semiconductor fundamentals, and PCB assembly.',
      'These experiences broadened my understanding of how mechanical systems, electronics, and software interact in modern engineering',
    ],
    tagsLabel: 'Areas of Exploration',
    tags: [
      'Industrial Robotics & Cobots',
      'Automation',
      '3D Printing',
      'CAD & Digital Prototyping',
      'Computer Vision',
      'Semiconductor Technology',
      'PCB Assembly',
    ],
  },
}

/* ---------- 5.6 BEYOND ENGINEERING ---------- */

export const beyond = {
  label: 'BEYOND ENGINEERING | The Other Side of Me',
  weRead: {
    title: 'We Read — Building a Community Through Books',
    image: { name: 'weread-club', alt: 'We Read logo' } as { name: ImageKey; alt: string },
    role: 'Vice President',
    paragraphs: [
      'While engineering challenges me to understand how systems work, reading encourages me to understand how people think.',
      'As Vice President of We Read, I help coordinate a student reading community that brings young readers together to exchange ideas and explore different perspectives.',
      'I have supported more than five book discussions and reading activities, while helping manage a team of over 10 members across content, events, and communications.',
      'This experience has strengthened my communication, leadership, and critical-thinking skills.',
    ],
  },
  piano: {
    title: 'Piano — Finding Discipline Through Music',
    // Shown when uploaded; until then the card shows an animated keyboard.
    image: { name: 'piano', alt: 'Piano' } as { name: ImageKey; alt: string },
    paragraphs: [
      'Music has also been an important part of my personal development.',
      'In 2019, I passed the ABRSM Grade 4 Piano examination in Music Performance, earning 15 credits at Level 2.',
      'Learning piano has helped me appreciate patience, concentration, and consistent practice—qualities that I also value in engineering.',
      'For me, music and engineering share something important: both require creativity, structure, attention to detail, and a willingness to improve through practice.',
    ],
  },
}

/* ---------- 5.7 CONTACT ---------- */

export const contact = {
  label: "CONTACT | Let's Connect",
  paragraph:
    'I am always interested in learning from others, exchanging ideas, and exploring opportunities related to engineering, robotics, and student-led innovation.',
  email: CONTACT_EMAIL,
  location: 'Weston, Massachusetts / Ho Chi Minh City, Vietnam',
  closing: 'Connect with me and explore what we can build together.',
  button: { label: 'Resume', href: LINKS.resume } satisfies LinkButton,
}
