// ALL visible copy for the site. Text is verbatim from the client's brief (section 5) and the revision
// documents ("Website bổ sung và chỉnh sửa", and tab 3 of the requirements doc) — do not reword.
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
  { year: '2026', text: 'Tournament Champion — iSTEAM VEX V5 Open Tournament', icon: 'trophy' },
  { year: '2026', text: 'Qualifier — VEX Robotics World Championship, High School Division', icon: 'globe' },
  { year: '2019', text: 'ABRSM Grade 4 Piano', icon: 'music' },
]

/* ---------- 5.2 ABOUT ---------- */

export const about = {
  label: 'About Me',
  heading: "Hi, I'm Gia Khang.",
  // Revision 3: paragraph 1, shown before the school text.
  childhood: {
    paragraph:
      'Ever since I was a child, I have been fascinated by robots and the idea of building something that could move, respond, and perform tasks on its own. What began as a simple curiosity about how machines work gradually grew into a passion for designing, building, and understanding the technology behind them.',
    gallery: {
      items: [
        { kind: 'image', name: 'about-childhood-1', alt: 'Young Gia Khang with a robot model he built', ratio: 0.75 },
        { kind: 'image', name: 'about-childhood-2', alt: 'Young Gia Khang holding a small LEGO model', ratio: 0.75 },
        { kind: 'image', name: 'about-childhood-3', alt: 'Gia Khang at a school science station', ratio: 1.333 },
        { kind: 'image', name: 'about-childhood-4', alt: 'Gia Khang working on a hands-on science activity with classmates', ratio: 1.333 },
      ],
    } satisfies Gallery,
  },
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
  dates?: string
  /** Line under the title, e.g. "Exploring Physics Through Mechanical Design". */
  tagline?: string
  role?: string
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
            { kind: 'image', name: 'sviif-award-2', alt: 'The team at the Silicon Valley International Invention Festival', ratio: 1.333 },          ],
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
    {
      id: 'trebuchet',
      num: '03',
      label: 'Featured Project 03',
      title: 'Trebuchet Engineering Project',
      tagline: 'Exploring Physics Through Mechanical Design',
      role: 'Researcher & Builder',
      gallery: {
        rows: [2, 3],
        items: [
          { kind: 'image', name: 'trebuchet-4', alt: 'Steel-frame trebuchet with its throwing arm and counterweight', ratio: 1.335 },
          { kind: 'image', name: 'trebuchet-5', alt: 'Side view of the steel-frame trebuchet', ratio: 1.335 },
          { kind: 'image', name: 'trebuchet-2', alt: 'Close-up of the adjustable throwing arm', ratio: 1.335 },
          { kind: 'image', name: 'trebuchet-3', alt: 'Close-up of the throwing arm pivot on the steel frame', ratio: 1.335 },
          { kind: 'image', name: 'trebuchet-1', alt: 'ISHCMC Science Fair 2025 certificate of participation', ratio: 1.376 },
        ],
      },
      subheading: 'Project Overview',
      paragraphs: [
        'How does changing the design of a mechanical system affect its performance?',
        'I explored this question by designing and constructing a steel-frame trebuchet with an adjustable throwing arm. The project allowed me to investigate projectile motion through hands-on engineering, experimentation, and performance testing.',
      ],
      highlightsHeading: 'My Work Highlights',
      highlights: [
        'Designed and constructed a steel-frame trebuchet with an adjustable throwing arm.',
        'Conducted experimental trials and measured launch distances to examine how adjustments affected projectile range.',
        'Presented the prototype and experimental findings at the ISHCMC Science Fair 2025.',
      ],
      lessonsHeading: 'What I Learned',
      lessons: [
        'This project strengthened my understanding of how mechanical design decisions influence real-world performance. It also taught me the importance of testing ideas, collecting measurements, and using experimental results to evaluate a design.',
      ],
      links: [],
    },
  ],
}

/* ---------- Activity panels (Leadership, Beyond Engineering) ---------- */

export type Activity = {
  id: string
  title: string
  /** Organisation line under the title. */
  subtitle?: string
  role?: string
  /** Where / when, shown next to the role. */
  meta?: string
  subheading?: string
  paragraphs: string[]
  list?: { heading?: string; items: string[] }
  lessons?: { heading: string; paragraphs: string[] }
  gallery?: Gallery
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
      id: 'isteam',
      year: '2026',
      title: 'Tournament Champion',
      detail: 'iSTEAM VEX V5 Open Tournament',
      icon: 'trophy',
      gallery: {
        rows: [3, 3],
        items: [
          { kind: 'image', name: 'isteam-1', alt: 'Gia Khang holding the Tournament Champion trophy beside the robot', ratio: 0.75 },
          { kind: 'image', name: 'isteam-2', alt: 'The team with their trophies at the iSTEAM VEX V5 Open Tournament', ratio: 1.333 },
          { kind: 'image', name: 'isteam-3', alt: 'VEX Tournament Champion trophy in front of robot 10102A', ratio: 0.75 },
          { kind: 'image', name: 'isteam-4', alt: 'Gia Khang with two teammates at the tournament', ratio: 1.333 },
          { kind: 'image', name: 'isteam-5', alt: 'Gia Khang and a teammate working on the robot', ratio: 0.75 },
          { kind: 'image', name: 'isteam-6', alt: 'Teammates adjusting the robot at their table', ratio: 0.75 },
        ],
      },
      links: [{ label: 'Watch Reel', href: LINKS.isteamReel }],
    },
    {
      id: 'vex-worlds',
      year: '2026',
      title: 'Qualifier',
      detail: 'VEX Robotics World Championship, High School Division',
      icon: 'globe',
      gallery: {
        rows: [2, 2],
        items: [
          { kind: 'image', name: 'vex-worlds-1', alt: 'The team at the VEX Robotics World Championship', ratio: 1.333 },
          { kind: 'image', name: 'vex-worlds-2', alt: 'The team at their pit at the VEX Robotics World Championship', ratio: 1.333 },
          { kind: 'image', name: 'vex-worlds-3', alt: 'Working on the robot in the pit at the World Championship', ratio: 0.75 },
          { kind: 'image', name: 'vex-worlds-4', alt: 'Gia Khang preparing the robot at the World Championship', ratio: 0.75 },
        ],
      },
    },
    {
      id: 'vex-state',
      year: '2026',
      title: 'Qualifier',
      detail: 'Massachusetts VEX V5 Robotics High School State Championship 2026',
      icon: 'flag',
      gallery: {
        rows: [3, 3],
        items: [
          { kind: 'image', name: 'ma-state-1', alt: 'Gia Khang at the Massachusetts VEX Robotics State Championship', ratio: 1.333 },
          { kind: 'image', name: 'ma-state-2', alt: 'Gia Khang and teammates with their robot at the State Championship', ratio: 0.75 },
          { kind: 'image', name: 'ma-state-3', alt: 'Gia Khang beside the robot and the 10102A team sign', ratio: 1.333 },
          { kind: 'image', name: 'ma-state-4', alt: 'The competition floor at the State Championship', ratio: 1.333 },
          { kind: 'image', name: 'ma-state-5', alt: 'Team rankings on the tournament screen', ratio: 1.333 },
          { kind: 'image', name: 'ma-state-6', alt: 'Elimination bracket on the tournament screen', ratio: 1.333 },
        ],
      },
    },
    ...[
      { id: 'rhino-balanced-learner', year: '2024-2025', title: 'Rhino Recognition – The Balanced Learner', image: 'rhino-balanced-learner-2024-25' },
      { id: 'rhino-global-citizen', year: '2023-2024', title: 'Rhino Recognition – The Global Citizen', image: 'rhino-global-citizen-2023-24' },
      { id: 'rhino-team-player-2023', year: '2023-2024', title: 'Rhino Recognition – The Team Player', image: 'rhino-team-player-2023-24' },
      { id: 'rhino-team-player-2019', year: '2019-2020', title: 'Rhino Recognition – The Team Player', image: 'rhino-team-player-2019-20' },
    ].map(
      ({ id, year, title, image }): Achievement => ({
        id,
        year,
        title,
        detail: 'International School Ho Chi Minh City (ISHCMC)',
        icon: 'star',
        gallery: {
          items: [{ kind: 'image', name: image as ImageKey, alt: `${title} certificate, ${year}`, ratio: 1.376 }],
        },
      }),
    ),
    {
      id: 'abrsm',
      year: '2019',
      title: 'ABRSM Grade 4 Piano',
      detail: 'Graded Examination in Music Performance',
      org: 'Associated Board of the Royal Schools of Music (ABRSM)',
      icon: 'music',
      gallery: {
        items: [{ kind: 'image', name: 'abrsm-certificate', alt: 'ABRSM Grade 4 Piano certificate', ratio: 0.727 }],
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
  // Revision 3: moved here from Beyond Engineering, right after YES.
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
      rows: [2, 2],
      items: [
        { kind: 'image', name: 'charity-1', alt: 'Students working on logic exercises in class', ratio: 4 / 3 },
        { kind: 'image', name: 'charity-4', alt: 'Gia Khang teaching at the blackboard', ratio: 3 / 4 },
        { kind: 'image', name: 'charity-2', alt: 'Volunteers and students with their STEM kits', ratio: 4 / 3 },
        { kind: 'image', name: 'charity-3', alt: 'A mentoring session with the class', ratio: 4 / 3 },      ],
    } satisfies Gallery,
  },
  sat: {
    id: 'sat-tutoring',
    title: 'SAT Tutoring',
    subtitle: 'Schoolhouse.world',
    role: 'Volunteer SAT Tutor',
    meta: 'Grades 11–12',
    subheading: 'Making Learning More Accessible',
    paragraphs: [
      'I believe that sharing knowledge is one of the most meaningful ways to support others.',
      'Through Schoolhouse.world, I helped students prepare for the SAT by explaining academic concepts, discussing test-taking strategies, and providing guidance tailored to their learning needs.',
      'Beyond academic preparation, I aimed to help learners build confidence and approach challenging questions with greater independence.',
    ],
    list: {
      heading: 'Key Contributions',
      items: [
        'Supported students in SAT preparation and academic skill development.',
        'Explained challenging concepts and discussed effective test-taking strategies.',
        'Encouraged confidence and independent problem-solving.',
      ],
    },
    gallery: {
      items: [
        { kind: 'image', name: 'sat-tutoring-1', alt: 'Schoolhouse.world, free online tutoring', ratio: 1.905 },
        { kind: 'image', name: 'sat-tutoring-2', alt: 'Schoolhouse certification portfolio with tutoring highlights', ratio: 1.31 },
      ],
    },
  } satisfies Activity,
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
  activities: [
    {
      id: 'galileo',
      title: 'Galileo Theater Production',
      subtitle: 'Engineering Behind the Stage',
      role: 'Sound Technician',
      meta: 'The Cambridge School of Weston | 2025',
      paragraphs: [
        'Technology plays an important role not only in engineering laboratories but also in creative environments.',
        "As a Sound Technician for my school's production of Galileo, I managed live sound cues to support the performance.",
        'I also collaborated on developing subtitles to make the production more accessible to audience members with hearing difficulties.',
      ],
      list: {
        heading: 'Key Contributions',
        items: [
          'Managed live sound cues during the theatrical production.',
          'Supported the technical execution of the performance.',
          'Collaborated on subtitle development to improve audience accessibility.',
        ],
      },
      lessons: {
        heading: 'What I Learned',
        paragraphs: [
          'This experience showed me how technical precision, teamwork, and creativity can come together to create a meaningful experience for an audience.',
        ],
      },
      gallery: {
        items: [
          { kind: 'image', name: 'galileo-1', alt: 'Programme for the Galileo production at the Robin Wood Theater', ratio: 0.75 },
          { kind: 'image', name: 'galileo-2', alt: 'The Galileo stage before the performance', ratio: 1.333 },
          { kind: 'image', name: 'galileo-3', alt: 'Production credits listing the sound team', ratio: 0.75 },
        ],
      },
    },
    {
      id: 'creative-writing',
      title: 'Creative Writing',
      subtitle: 'Exploring Humanity Through Stories',
      role: 'Independent Writer',
      meta: '2024 – 2026',
      paragraphs: [
        'Engineering allows me to understand how things work, while creative writing helps me explore how people think, feel, and experience the world.',
        'Inspired by manga, I began writing a story about a high school student overcoming prejudice and navigating social challenges.',
        'I continued exploring themes of humanity, identity, and personal growth through short stories and novels.',
        'Writing has become another way for me to express ideas, explore different perspectives, and develop my creativity.',
      ],
      list: {
        heading: 'Creative Interests',
        items: ['Manga-inspired storytelling', 'Short stories and novels', 'Themes of identity, humanity, and personal growth'],
      },
      // Order as given by the client.
      gallery: {
        rows: [4, 5],
        items: [
          { kind: 'image', name: 'writing-1', alt: 'Gia Khang beside his manga project poster', ratio: 0.75 },
          { kind: 'image', name: 'writing-2', alt: 'Poster: Manga and their impact', ratio: 0.75 },
          { kind: 'image', name: 'writing-3', alt: 'Exhibition wall with artwork and written statement', ratio: 0.75 },
          { kind: 'image', name: 'writing-4', alt: 'Written artist statement for "The Vietnamese"', ratio: 0.75 },
          { kind: 'image', name: 'writing-5', alt: 'Painting: a figure in a red shirt with a yellow star', ratio: 0.75 },
          { kind: 'image', name: 'writing-6', alt: 'Reference lacquer painting with its label', ratio: 0.75 },
          { kind: 'image', name: 'writing-7', alt: 'Laptop, drawing tablet and printed story draft', ratio: 0.75 },
          { kind: 'image', name: 'writing-8', alt: 'Gia Khang presenting his manga project to a visitor', ratio: 0.75 },
          { kind: 'image', name: 'writing-9', alt: 'Gia Khang on stage at the 2024 Personal Project exhibition', ratio: 1.333 },
        ],
      },
    },
  ] satisfies Activity[],
  piano: {
    title: 'Piano — Finding Discipline Through Music',
    image: { name: 'piano', alt: 'Gia Khang holding his ABRSM Grade 4 Piano Exam Pieces book' } as { name: ImageKey; alt: string },
    paragraphs: [
      'Music has also been an important part of my personal development.',
      'In 2019, I passed the ABRSM Grade 4 Piano examination in Music Performance, earning 15 credits at Level 2.',
      'Learning piano has helped me appreciate patience, concentration, and consistent practice—qualities that I also value in engineering.',
      'For me, music and engineering share something important: both require creativity, structure, attention to detail, and a willingness to improve through practice.',
    ],
  },
  sports: {
    label: 'SPORTS & ATHLETICS | Beyond Engineering: Discipline, Teamwork & Perseverance',
    intro:
      'Beyond engineering and academics, sports have been an important part of my personal development. Through swimming and basketball, I have learned the value of consistent practice, perseverance, and teamwork.',
    items: [
      {
        id: 'swimming',
        title: 'Competitive Swimming',
        subtitle: 'ISHCMC Stingrays Swim Team | International School Ho Chi Minh City',
        role: 'Swimmer',
        meta: '2020 – Present',
        paragraphs: [
          'Swimming has been an important part of my journey, teaching me the value of discipline, perseverance, and continuous improvement.',
          'As a member of the ISHCMC Stingrays Swim Team, I developed my swimming techniques, physical endurance, and competitive skills through training and participation in swimming events.',
        ],
        list: {
          heading: 'Highlights',
          items: [
            'Trained with the ISHCMC Stingrays Swim Team, strengthening swimming techniques, endurance, and competitive skills.',
            'Participated in swimming competitions, including the 2020 Thu Duc District Open Youth Swimming Competition (8th Edition).',
            'Developed discipline, resilience, and time management through swimming alongside academic commitments.',
          ],
        },
        gallery: {
          rows: [4, 3],
          items: [
            { kind: 'image', name: 'swim-1', alt: 'Gia Khang at the 2020 Thu Duc District Open Youth Swimming Competition', ratio: 1.333 },
            { kind: 'image', name: 'swim-2', alt: 'Gia Khang at the competition venue', ratio: 0.75 },
            { kind: 'image', name: 'swim-3', alt: 'Freestyle event heat sheet', ratio: 0.75 },
            { kind: 'image', name: 'swim-4', alt: 'Breaststroke event heat sheet', ratio: 0.75 },            { kind: 'image', name: 'swim-6', alt: 'The ISHCMC Stingrays Swim Team', ratio: 1.333 },
            { kind: 'image', name: 'swim-7', alt: 'Gia Khang with teammates by the pool', ratio: 1.333 },
            { kind: 'image', name: 'swim-8', alt: 'Gia Khang with a teammate at a swim meet', ratio: 0.75 },
          ],
        },
      },
      {
        id: 'basketball',
        title: 'Basketball',
        role: 'Basketball Team Member',
        meta: 'International School Ho Chi Minh City (ISHCMC) | 2022',
        paragraphs: [
          'Basketball has taught me the importance of communication, trust, and working toward a shared goal.',
          'Basketball has been a meaningful part of my school experience, helping me develop not only my physical abilities but also important skills in teamwork, communication, and perseverance. Through regular training sessions, I learned the importance of discipline, coordination, and trusting my teammates while working toward a common goal.',
          'One of my memorable experiences was representing International School Ho Chi Minh City (ISHCMC) at the SSA Basketball 3x3 Elite Tournament 2022. Competing against other teams challenged me to stay focused, make quick decisions under pressure, and adapt to the fast-paced nature of the game.',
          'Beyond competition, basketball taught me that individual effort is only one part of achieving success. Effective communication, mutual support, and the willingness to learn from mistakes are equally important. These lessons have continued to influence how I approach teamwork and challenges, both on the basketball court and in my engineering projects.',
        ],
        list: {
          items: [
            'Participated in basketball training sessions, developing teamwork, communication, and on-court coordination.',
            'Won in 2 tournaments: Gold Medal at the SSA Basketball 3x3 Elite Tournament (2021–2022).',
            "Participated in the team's tournament performance and medal recognition, strengthening teamwork, discipline, and competitive spirit.",
          ],
        },
        gallery: {
          items: [
            { kind: 'image', name: 'basketball-1', alt: 'The team with their medals at the SSA Basketball 3x3 Elite Tournament 2022', ratio: 1.335 },
            { kind: 'image', name: 'basketball-2', alt: 'Players wearing their medals beside the coach', ratio: 1.335 },
            { kind: 'image', name: 'basketball-3', alt: 'Medal ceremony in front of the tournament backdrop', ratio: 1.335 },
            { kind: 'image', name: 'basketball-4', alt: 'A game on the court at the tournament', ratio: 1.335 },
          ],
        },
      },
    ] satisfies Activity[],
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
