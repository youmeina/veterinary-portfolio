// data/blogPosts.ts
export type BlogPostBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  date: string;        // YYYY-MM-DD
  tags: string[];
  summary: string;
  body: BlogPostBlock[];
};

export const blogPosts: BlogPost[] = [
  // ==== Existing sample posts (keep) ====
  {
    slug: "reflex-scores-after-ip-anesthesia",
    title: "Reflex Scores After IP Anesthesia",
    date: "2025-09-01",
    tags: ["lab", "anesthesia", "records"],
    summary:
      "Recorded righting and pedal withdrawal reflex after IP pentobarbital. Timing helped quantify onset and recovery.",
    body: [
      { type: "heading", text: "Setup" },
      {
        type: "paragraph",
        text: "Pentobarbital sodium via IP injection; stopwatch ready at dose delivery; quiet box for observation."
      },
      { type: "heading", text: "Endpoints" },
      {
        type: "list",
        items: [
          "Loss/return of righting reflex (LORR).",
          "Loss/return of pedal withdrawal reflex (PWR).",
          "Ambient temp and body weight noted on sheet."
        ]
      },
      { type: "heading", text: "Notes" },
      {
        type: "paragraph",
        text: "LORR occurred within the expected window; PWR followed shortly. Clear dose–response; plan to add RR logging next session."
      }
    ]
  },
  {
    slug: "day-1-dr-positioning-notes",
    title: "Day 1 — DR Positioning Notes",
    date: "2025-08-31",
    tags: ["DR", "positioning", "learning"],
    summary:
      "First day with DR. Focus on low-stress positioning, exposure checklist, and quick image quality notes.",
    body: [
      { type: "heading", text: "Positioning" },
      {
        type: "paragraph",
        text: "Kept handling calm; used sandbags and foam wedges. Checked symmetry before exposure."
      },
      { type: "heading", text: "Checklist" },
      {
        type: "list",
        items: [
          "Patient ID visible.",
          "Collimation tight to anatomy of interest.",
          "Remove collars/metal artefacts."
        ]
      },
      { type: "heading", text: "Takeaways" },
      {
        type: "paragraph",
        text: "Most repeats were due to rotation. Adding a ‘last look’ step cut repeats notably."
      }
    ]
  },

  // ==== New posts derived from internship content ====
  {
    slug: "vet-internships-101-rotating-vs-specialty",
    title: "Veterinary Internships 101 — Rotating vs. Specialty",
    date: "2025-09-01",
    tags: ["internships", "career", "rotating", "specialty"],
    summary:
      "What internship types exist after graduation? Quick guide to rotating vs. specialty—and why a rotating year can make you a faster, more confident doctor.",
    body: [
      {
        type: "paragraph",
        text: "Vet school builds the foundation, but your first year out is where theory becomes clinical judgment. Many new vets consider an internship to bridge the gap."
      },
      { type: "heading", text: "Rotating Internships" },
      {
        type: "paragraph",
        text: "A rotating internship places you across core services—internal medicine, emergency & critical care, and surgery—with elective time in other specialties. You’ll usually hold primary case responsibility in the ER while actively managing cases on specialty services."
      },
      {
        type: "paragraph",
        text: "Even if you don’t plan to specialize, this year accelerates case exposure, decision-making, and communication with specialists."
      },
      { type: "heading", text: "Specialty Internships" },
      {
        type: "paragraph",
        text: "Focused on one discipline—e.g., cardiology, neurology, internal medicine, or surgery. Rotating experience is typically a prerequisite and often required to be competitive for residency."
      },
      { type: "heading", text: "Why Start with Rotating?" },
      {
        type: "list",
        items: [
          "Build broad clinical judgment quickly.",
          "Explore multiple fields before committing.",
          "Strengthens residency applications and specialist communication."
        ]
      }
    ]
  },
  {
    slug: "er-training-and-mentorship-what-good-looks-like",
    title: "ER Training & Mentorship — What Good Looks Like",
    date: "2025-08-30",
    tags: ["ER", "mentorship", "training", "education"],
    summary:
      "Not all ER ‘mentorship’ is structured. Here’s what a real program includes—pre-clinical wet labs, POCUS, case-based learning, then graduated independence with 1:1 support.",
    body: [
      {
        type: "paragraph",
        text: "Emergency medicine isn’t a formal standalone specialty internship, so many hospitals run structured ER training programs for new graduates."
      },
      { type: "heading", text: "Core Components of a Strong Program" },
      {
        type: "list",
        items: [
          "Pre-clinical phase: wet labs for procedures and surgical basics.",
          "Point-of-care ultrasound (POCUS) training.",
          "Practical, case-based classroom sessions tied to ER flow.",
          "On-floor mentorship with gradually increasing independence."
        ]
      },
      {
        type: "paragraph",
        text: "Being assigned a mentor on day one isn’t the same as a curriculum. When you evaluate programs, ask how skills are sequenced, how feedback is delivered, and what milestones unlock independence."
      }
    ]
  },
  {
    slug: "why-do-a-vet-internship-benefits-and-networking",
    title: "Why Do a Vet Internship? Benefits & Networking",
    date: "2025-08-29",
    tags: ["internships", "skills", "networking", "growth"],
    summary:
      "Internships deepen hands-on skills, expand your network, and harden your clinical decision-making under pressure.",
    body: [
      { type: "heading", text: "Hands-On Skill Building" },
      {
        type: "paragraph",
        text: "Direct case work grows confidence—triage, diagnostics, procedures, surgery participation, and treatment planning. You learn teamwork, prioritization, and decision-making when stakes are high."
      },
      { type: "heading", text: "Professional Network" },
      {
        type: "paragraph",
        text: "Working with specialists and peers opens doors to mentorship, letters, collaboration, and jobs. The relationships you form during internship often follow you through your career."
      }
    ]
  },
  {
    slug: "how-to-find-and-apply-for-vet-internships",
    title: "How to Find & Apply for Vet Internships",
    date: "2025-08-28",
    tags: ["VIRMP", "applications", "externships", "career"],
    summary:
      "Use VIRMP to search nationally, leverage externships for fit, and submit a tight application—transcripts, a clean CV, and a focused letter of intent.",
    body: [
      { type: "heading", text: "Where to Search" },
      {
        type: "list",
        items: [
          "VIRMP (AAVC): search by specialty and internship type, then apply through the match.",
          "Externships: visit target hospitals during electives to build rapport and preview culture."
        ]
      },
      { type: "heading", text: "Application Prep" },
      {
        type: "list",
        items: [
          "Transcripts: request early to avoid deadlines crunch.",
          "CV: highlight rotations, procedures, projects, and any externship exposure.",
          "Letter of intent: show your goals, skills, and why this program; be specific about how you’ll use the training."
        ]
      },
      {
        type: "paragraph",
        text: "If your school has a career center, use it—fresh eyes improve clarity and impact."
      }
    ]
  },
  {
    slug: "what-a-good-internship-feels-like-day-to-day",
    title: "What a Good Internship Feels Like, Day to Day",
    date: "2025-08-27",
    tags: ["mentorship", "hands-on", "communication", "reading"],
    summary:
      "Expect active mentorship, primary ER responsibility, assigned reading, and deliberate client-communication coaching.",
    body: [
      { type: "heading", text: "Mentors & Supervision" },
      {
        type: "paragraph",
        text: "You’ll work with one or more mentors who model decision-making, then step back as you demonstrate competence. Ask questions early and often."
      },
      { type: "heading", text: "Hands-On Progression" },
      {
        type: "paragraph",
        text: "New grads often hold primary ER cases; procedures and OR time scale with readiness. Clear milestones prevent ‘sink-or-swim’ learning."
      },
      { type: "heading", text: "Reading & Resources" },
      {
        type: "paragraph",
        text: "Expect assigned chapters or papers—no formal quiz, but the reading makes you safer and faster on the floor."
      },
      { type: "heading", text: "Client Communication" },
      {
        type: "paragraph",
        text: "Clinical care is only half the job. You’ll practice clear updates, empathy, and expectation-setting—skills that compound over your career."
      },
      {
        type: "paragraph",
        text: "Internships are demanding, but the skill growth, confidence, and community are worth it."
      }
    ]
  },

  // ==== SROI / Access-to-care posts ====
  {
    slug: "access-to-vet-care-sroi-aspca-mission",
    title: "Access to Vet Care = Better Lives — $4.64 Social Return per $1",
    date: "2025-08-26",
    tags: ["research", "welfare", "economics", "access-to-care", "ASPCA"],
    summary:
      "Study from Mission Animal Hospital & ASPCA: every $1 donated returned $4.64 in total social value—better quality of life, avoided health costs and debt, and fewer pet relinquishments.",
    body: [
      { type: "heading", text: "Background" },
      {
        type: "paragraph",
        text: "Mission Animal Hospital (Twin Cities) serves low-income families with subsidized care. Nearly all clients consider pets part of the family, so care access directly affects household wellbeing."
      },
      { type: "heading", text: "Key Findings" },
      {
        type: "list",
        items: [
          "Total social return: $4.64 for every $1 contributed to care for companion animals in need.",
          "2020 contributions analyzed: $731,500 → enabled $1,168,480 in subsidized veterinary care (families ≤80% area median income).",
          "Owner quality-of-life related savings: $1,467,050 (support, connectedness, daily functioning).",
          "Reduced loneliness/social isolation: $233,130.",
          "Avoided stress/anxiety from veterinary debt: $187,490.",
          "Human health cost savings (e.g., lower hypertension risk when owners keep pets): $166,160.",
          "Avoided sheltering/re-homing costs: $76,880."
        ]
      },
      { type: "heading", text: "Why It Matters" },
      {
        type: "paragraph",
        text: "Reducing barriers to care protects both animal welfare and family stability: fewer surrenders, less financial distress, and better human health markers."
      },
      { type: "heading", text: "My Take" },
      {
        type: "paragraph",
        text: "As a student, I see accessible care as a public-health multiplier. Framing help in terms of family wellbeing makes conversations with clients, hospitals, and donors clearer and more compassionate."
      }
    ]
  },
  {
    slug: "using-the-sroi-study-in-practice",
    title: "Turning the SROI Study into Practice — Talking Points & Actions",
    date: "2025-08-25",
    tags: ["communication", "access-to-care", "shelter-medicine", "fundraising", "welfare"],
    summary:
      "Actionable ways to use the findings: clinic workflows, donor messages, and student learning—plus what to ask about program quality and methods.",
    body: [
      { type: "heading", text: "For Clinics" },
      {
        type: "list",
        items: [
          "Triage & finance together: screen for assistance early to prevent delayed care and crisis visits.",
          "Create an ‘access pathway’: transparent estimates, phased plans, third-party pay, charity cases with clear criteria.",
          "Track outcomes: rechecks kept, surrender diversion, client-reported wellbeing—so you can show impact locally."
        ]
      },
      { type: "heading", text: "For Shelters & Nonprofits" },
      {
        type: "list",
        items: [
          "Use the $4.64 SROI as a donor talking point, paired with your own local metrics.",
          "Explain household benefits (less debt, less isolation) alongside animal outcomes (kept with family).",
          "Offer externships/rotations so trainees see access-to-care models first-hand."
        ]
      },
      { type: "heading", text: "For Students & New Grads" },
      {
        type: "list",
        items: [
          "Practice clear cost-of-care conversations and surrender-prevention options.",
          "Document not just medical outcomes but owner-wellbeing signals (stress, connectedness).",
          "Shadow access-to-care clinics to learn efficient, humane workflows."
        ]
      },
      { type: "heading", text: "Method Notes & Caveats" },
      {
        type: "paragraph",
        text: "Study by Ecotone Analytics combined high-quality external literature with Mission Animal Hospital’s internal data to estimate total social value. As with any SROI model, results depend on assumptions—use it as a guide, and pair with your own program data."
      },
      { type: "heading", text: "One-Line Message" },
      {
        type: "paragraph",
        text: "Lowering barriers to veterinary care helps pets stay with their families and measurably improves human wellbeing—good medicine, good economics."
      }
    ]
  }
];
