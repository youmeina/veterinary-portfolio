// data/caseStudies.ts
export type CaseStudyBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt: string; note?: string };

export type CaseStudy = {
  slug: string;
  title: string;
  date: string;      // ISO: 2025-08-31
  caption: string;
  tags: string[];
  summary: string;   // list-page teaser
  body: CaseStudyBlock[]; // story with headings, paragraphs, images
};

export const caseStudies: CaseStudy[] = [
  // === Case 1 ===
  {
    slug: "intraperitoneal-injection-site-selection",
    title: "Determining the Site for Intraperitoneal Injection in Laboratory Mice",
    date: "2025-08-31",
    caption: "Determining the site for intraperitoneal injection",
    tags: ["Anesthesia", "Laboratory skills", "Rodent"],
    summary:
      "A narrative walk-through of how I identified a safe intraperitoneal (IP) site, executed the injection, and verified anesthesia depth via righting and pedal withdrawal reflexes after pentobarbital sodium.",
    body: [
      { type: "heading", text: "Context & Goal" },
      {
        type: "paragraph",
        text:
          "On a quiet afternoon in the lab, I set out to map the safest and most repeatable site for intraperitoneal (IP) injection in mice. My goal was twofold: deliver pentobarbital sodium accurately, and document anesthesia depth using behavioral reflexes that are easy to standardize in student practice."
      },

      { type: "heading", text: "Landmarks I Committed to Memory" },
      {
        type: "paragraph",
        text:
          "Before picking up a syringe, I rehearsed the anatomy: the lower right abdominal quadrant, away from the midline (linea alba) and caudal pelvis. Choosing this zone reduces the risk of contacting viscera such as the bladder or intestines. I traced the imaginary triangle between the midline and the right inguinal region—this mental map became my anchor."
      },
      {
        type: "image",
        src: "/cases/ip-injection/landmarks-diagram.jpg",
        alt: "Anatomical landmarks for safe IP injection in mice",
        note: "Lower right quadrant; avoid midline and caudal pelvis."
      },

      { type: "heading", text: "Preparation That Made the Procedure Calm" },
      {
        type: "paragraph",
        text:
          "I prepared adult mice, the pentobarbital sodium solution at the working concentration, and a 1 mL syringe with an appropriate gauge needle. A warming pad, an observation box, a timer, and a standardized anesthesia record sheet were placed within arm’s reach. The checklist helped me stay methodical under time pressure."
      },

      { type: "heading", text: "The Injection: Small Moves, Big Difference" },
      {
        type: "paragraph",
        text:
          "With the mouse in gentle dorsal recumbency and the head slightly lower than the pelvis, I disinfected the skin. Holding the syringe bevel up, I entered the lower right quadrant at roughly 30–45°, paused to aspirate lightly (no blood or viscous content), and then delivered the calculated dose smoothly. I started the timer the moment the plunger reached the hub."
      },
      {
        type: "image",
        src: "/cases/ip-injection/angle-technique.jpg",
        alt: "Needle entry angle and hand positioning",
        note: "Bevel up at ~30–45°; gentle aspiration before injection."
      },

      { type: "heading", text: "How I Checked Anesthesia Depth" },
      {
        type: "paragraph",
        text:
          "I tracked two simple, reliable endpoints: the time to loss of righting reflex (LORR) and the time to loss of pedal withdrawal reflex (PWR) for induction; and their returns for recovery. These measures gave me a clear, low-equipment view of the anesthesia time course."
      },

      { type: "heading", text: "What the Results Showed" },
      {
        type: "paragraph",
        text:
          "Across the injected cohort, LORR appeared within the expected window, with PWR following shortly—enough depth for imaging or brief procedures. Recovery times varied with body weight and baseline activity, which aligned with the recorded dose-per-kg values in my sheets."
      },

      { type: "heading", text: "Quality & Rigor I Built In" },
      {
        type: "paragraph",
        text:
          "To make the work reproducible, I used a standardized recording template, consistent timing, and a stable ambient temperature. Any deviation—like a delayed PWR—was logged with potential causes (handling, stress, marginal dose). These notes will help me improve dosing precision and handling consistency."
      },

      { type: "heading", text: "Ethics & Welfare" },
      {
        type: "paragraph",
        text:
          "Stress minimization guided my handling from start to finish. I followed institutional guidance on dosing and monitoring, observed the animals continuously, and confirmed uneventful recovery with full ambulation. Post-procedure checks found no signs of peritoneal irritation or misinjection."
      },

      { type: "heading", text: "What I Learned & Next Steps" },
      {
        type: "paragraph",
        text:
          "Calm handling and precise landmarking made the biggest difference. LORR and PWR offered a practical framework to quantify anesthesia depth without specialized equipment. Next, I plan to add respiratory rate tracking to complement behavioral endpoints and to compare inter-operator variability with a peer."
      }
    ]
  },

  // === Case 2 ===
  {
    slug: "fancy-rat-post-op-recovery",
    title: "Post-surgical Recovery of a Fancy Rat",
    date: "2025-08-31",
    caption: "Post-surgical recovery of a fancy rat",
    tags: ["Post-op care", "Rodent", "Wound care", "Analgesia", "Behavior"],
    summary:
      "Two-week recovery after subcutaneous mass excision: day-2 reduced activity and wound tenderness resolved to normal activity and social interaction by week two.",
    body: [
      { type: "heading", text: "Context & Goal" },
      {
        type: "paragraph",
        text:
          "After excision of a subcutaneous mass, my goal was to guide a fancy rat through a safe, comfortable, and well-documented post-operative course—balancing pain control, wound protection, hydration, and early return to normal behavior."
      },

      { type: "heading", text: "Immediate Post-Op Plan" },
      {
        type: "paragraph",
        text:
          "I prepared an observation schedule and administered oral medication via a soft feeding tube as instructed, with careful restraint to reduce stress. Supportive care included a warm, clean enclosure, easily reachable water/food, and paper-based nesting material to discourage chewing at the incision."
      },

      { type: "heading", text: "Day 2: Early Checkpoint" },
      {
        type: "paragraph",
        text:
          "On day 2, the rat showed reduced activity and wound tenderness. I verified appetite with preferred foods, checked hydration and fecal output, and inspected the incision for swelling, discharge, or self-trauma. Activity and grooming were present but subdued—appropriate for the stage."
      },
      {
        type: "image",
        src: "/cases/fancy-rat/postop-day2.jpg",
        alt: "Day-2 post-op status of the fancy rat",
        note: "Reduced activity; guarding around the incision."
      },

      { type: "heading", text: "Monitoring & Data I Tracked" },
      {
        type: "paragraph",
        text:
          "I logged daily: activity score, posture/grooming, interaction tendency, food/water intake, body weight, fecal output, and a wound checklist (edges apposed, swelling, discharge, odor). Notes captured any medication refusals, stress signals, or environmental adjustments."
      },

      { type: "heading", text: "Week 2: Outcome" },
      {
        type: "paragraph",
        text:
          "By two weeks, the rat regained normal activity and engaged in social interaction. The incision was dry and closed, without dehiscence or infection. Behavior and weight returned to baseline, supporting a successful recovery trajectory."
      },
      {
        type: "image",
        src: "/cases/fancy-rat/postop-week2.jpg",
        alt: "Week-2 interaction: fancy rat engages socially",
        note: "Normal activity and social behaviors resumed."
      },

      { type: "heading", text: "Quality & Welfare" },
      {
        type: "paragraph",
        text:
          "To keep the process humane and reproducible, I used a fixed observation template, minimized handling time, and documented deviations (e.g., brief inappetence) with possible triggers. Housing and enrichment were adjusted to balance comfort with incision protection."
      },

      { type: "heading", text: "What I Learned" },
      {
        type: "paragraph",
        text:
          "Consistent record-keeping made trends visible—especially the gradual rebound in activity and interaction. Gentle tube-assisted oral dosing improved adherence while limiting stress. I plan to add a simple pain/comfort composite score in future cases to better quantify progress."
      }
    ]
  },
  // === Case 3 ===
{
  slug: "cat-dermatologic-case-management",
  title: "Dermatologic Case Management in a Shelter Cat",
  date: "2025-08-31",
  caption: "Dermatologic case management in cats",
  tags: ["Dermatology", "Shelter medicine", "Welfare", "Appetite test", "Low-stress handling"],
  summary:
    "Topical therapy plus daily welfare scoring in a shelter cat: appetite checks and stress-relief handling coincided with calmer behavior and improved comfort over the course of treatment.",
  body: [
    { type: "heading", text: "Context & Goal" },
    {
      type: "paragraph",
      text:
        "I managed a shelter cat presenting with dermatologic lesions and intermittent pruritus. Beyond topical therapy, I focused on daily welfare scoring to ensure the patient’s comfort and behavioral recovery in a shelter environment."
    },

    { type: "heading", text: "Initial Assessment" },
    {
      type: "paragraph",
      text:
        "On intake, I recorded lesion distribution, coat condition, pruritus level, and any signs of secondary infection. Baseline appetite, hydration, body weight, and a simple stress/comfort score were established to guide day-to-day decisions."
    },

    { type: "heading", text: "Topical Therapy & Skin Care" },
    {
      type: "paragraph",
      text:
        "Following the plan, I applied the prescribed topical medication and maintained a clean, low-irritant environment. I used gentle restraint and positive reinforcement to keep handling calm and predictable."
    },
    {
      type: "image",
      src: "/cases/cat-derm/after-topical.jpg",
      alt: "Shelter cat after topical medication",
      note: "Lesions cleaned and medicated; minimal restraint to reduce stress."
    },

    { type: "heading", text: "Daily Appetite Test" },
    {
      type: "paragraph",
      text:
        "Appetite was checked at the same times each day using preferred foods placed at a consistent location. I noted interest, latency to eat, and consumption percentage, alongside water intake and body weight trends."
    },
    {
      type: "image",
      src: "/cases/cat-derm/appetite-test.jpg",
      alt: "Appetite test setup for the cat",
      note: "Preferred foods offered to gauge interest and intake."
    },

    { type: "heading", text: "Stress-Relief Handling" },
    {
      type: "paragraph",
      text:
        "To improve welfare, I used low-stress handling: slow approach, towel support when needed, scent enrichment, and short sessions with breaks. I recorded relaxation cues (soft body, normal grooming) and avoidance cues to tailor the plan."
    },
    {
      type: "image",
      src: "/cases/cat-derm/stress-relief.jpg",
      alt: "Calming interaction to relieve the cat’s stress",
      note: "Low-stress handling and brief positive interactions."
    },

    { type: "heading", text: "Monitoring & Welfare Scores" },
    {
      type: "paragraph",
      text:
        "Each day I logged appetite, grooming, interaction tendency, posture, and a simple comfort/stress score. Notes included any pruritus episodes, sleep quality, and response to topical applications."
    },

    { type: "heading", text: "Outcome" },
    {
      type: "paragraph",
      text:
        "Over the course of treatment, the cat’s behavior became calmer, with improved comfort scores and stable intake. Skin appearance improved and pruritus decreased, supporting a positive response to therapy and handling adjustments."
    },

    { type: "heading", text: "What I Learned" },
    {
      type: "paragraph",
      text:
        "Pairing topical care with structured welfare tracking made small improvements visible and actionable. Consistent appetite tests and low-stress handling helped the cat regain comfort while keeping data comparable day to day."
    }
  ]
},

// === Case 4 ===
{
  slug: "canine-foreign-body-surgery-perioperative-monitoring",
  title: "Perioperative Monitoring of a Canine Patient (Foreign-Body Surgery)",
  date: "2025-08-31",
  caption: "Perioperative monitoring of a canine patient",
  tags: ["Clinical skills", "Canine", "Anesthesia", "Intubation", "Monitoring", "Recovery"],
  summary:
    "Assisted anesthesia for a canine foreign-body surgery: pre-op injection, intubation, and continuous monitoring through recovery with reflex checks to maintain stable vitals.",
  body: [
    { type: "heading", text: "Context & Goal" },
    {
      type: "paragraph",
      text:
        "I assisted anesthesia during a canine foreign-body surgery. My goal was to prepare a smooth induction, maintain stable intraoperative parameters, and support a safe recovery—documenting reflexes, vital signs, and handling notes throughout."
    },

    { type: "heading", text: "Pre-Op: Injection & Setup" },
    {
      type: "paragraph",
      text:
        "Before induction I verified fasting status, baseline vitals, and equipment readiness (oxygen, suction, airway kit, monitoring leads, warming). I administered the pre-op injection as instructed and prepared IV access, analgesia, and monitoring interfaces while minimizing stress during restraint."
    },
    {
      type: "image",
      src: "/cases/canine-surgery/preop-injection.jpg",
      alt: "Pre-operative anesthetic injection for the canine patient",
      note: "Calm restraint; verification of dose and route before administration."
    },

    { type: "heading", text: "Airway Management: Intubation" },
    {
      type: "paragraph",
      text:
        "Following induction, I performed endotracheal intubation, confirmed placement by capnography, chest excursions, and auscultation, then secured the tube and inflated the cuff appropriately. I documented jaw tone and palpebral reflex changes as indicators of depth."
    },
    {
      type: "image",
      src: "/cases/canine-surgery/intubation.jpg",
      alt: "Endotracheal intubation during induction",
      note: "Confirmation with ETCO₂ and bilateral chest movement."
    },

    { type: "heading", text: "Intraoperative Monitoring" },
    {
      type: "paragraph",
      text:
        "Throughout surgery I tracked HR/RR, SpO₂, ETCO₂, non-invasive blood pressure, and temperature, recording values at regular intervals. I adjusted patient positioning, warming, and oxygen delivery as needed, and noted reflex checks (palpebral, eye position) to ensure an appropriate plane of anesthesia."
    },

    { type: "heading", text: "Post-Op & Recovery" },
    {
      type: "paragraph",
      text:
        "As surgery concluded and the foreign body was removed, I reduced anesthetic depth and continued monitoring until swallow reflex returned. Extubation was performed when appropriate, followed by oxygen support as needed, warmth, and quiet handling. Pain and comfort were reassessed prior to returning the patient to the ward."
    },
    {
      type: "image",
      src: "/cases/canine-surgery/postop-care.jpg",
      alt: "Late-stage monitoring near the end of foreign-body surgery",
      note: "Stable vitals maintained through to safe extubation and recovery."
    },

    { type: "heading", text: "Quality & Welfare" },
    {
      type: "paragraph",
      text:
        "I used a simple checklist for equipment and monitoring intervals, documented deviations, and prioritized low-stress handling. Warming and padding reduced hypothermia risk; careful communication with the surgeon ensured synchronized timing for analgesia and recovery steps."
    },

    { type: "heading", text: "What I Learned" },
    {
      type: "paragraph",
      text:
        "Consistent reflex checks alongside capnography and pulse oximetry made depth assessment more reliable. The pre-op checklist reduced delays, and structured notes improved hand-offs during the critical transition from anesthesia to recovery."
    }
  ]
},

// === Case 5 ===
{
  slug: "wild-dove-rescue-and-release",
  title: "Rescue and Rehabilitation of a Wild Dove",
  date: "2025-08-31",
  caption: "Rescue and rehabilitation of a wild dove",
  tags: ["Wildlife rescue", "Avian", "Rehabilitation", "Fieldwork", "Welfare", "Release"],
  summary:
    "I independently managed the rescue of an injured wild dove. With wound care, stress reduction, and daily welfare logs, the bird regained feeding and mobility and was released by day 17.",
  body: [
    { type: "heading", text: "Context & Intake" },
    {
      type: "paragraph",
      text:
        "I found an injured wild dove with reduced flight ability and mild wing droop. My objective was to stabilize the bird, reduce stress, and create a short, well-documented rehabilitation plan leading to release."
    },

    { type: "heading", text: "First Aid & Stress Reduction" },
    {
      type: "paragraph",
      text:
        "I provided basic wound cleaning and kept handling brief with towel support. Housing was quiet, dim, and draft-free, with perches at accessible heights. Water and easily digestible feed were placed within easy reach to minimize energy expenditure."
    },
    {
      type: "image",
      src: "/cases/dove-rescue/intake-injury.jpg",
      alt: "Initial rescue: injured wild dove",
      note: "Minimal handling; wing supported and wound cleaned."
    },

    { type: "heading", text: "Housing for Calm Recovery" },
    {
      type: "paragraph",
      text:
        "To lower stress, I avoided frequent disturbances and used paper-based bedding. I monitored posture, balance on perch, and grooming. Over the first days, the bird spent prolonged time quietly perching with gradual improvement in stability."
    },
    {
      type: "image",
      src: "/cases/dove-rescue/mid-rehab-perch.jpg",
      alt: "Mid-rehabilitation: quiet perching",
      note: "Calm behavior with improved balance on perch."
    },

    { type: "heading", text: "Feeding & Mobility Training" },
    {
      type: "paragraph",
      text:
        "I evaluated appetite daily—latency to feed, intake percentage, and preferred items—and encouraged gentle mobility in a safe enclosure. Short, supervised sessions supported progressive wing use and coordinated movement without overexertion."
    },
    {
      type: "image",
      src: "/cases/dove-rescue/pre-release-forage.jpg",
      alt: "Pre-release: foraging and activity",
      note: "Active feeding and short flights within the enclosure."
    },

    { type: "heading", text: "Monitoring & Welfare Logs" },
    {
      type: "paragraph",
      text:
        "I tracked appetite, weight trend, posture, perch stability, grooming, and stress cues (startle, panting). Notes included rest quality and response to enclosure adjustments, enabling consistent, comparable day-to-day evaluation."
    },

    { type: "heading", text: "Outcome: Day 17 Release" },
    {
      type: "paragraph",
      text:
        "By day 17, the dove showed normal feeding, stronger flight attempts, and calm behavior. After ensuring weather and time-of-day were suitable, I released the bird back to its natural environment and observed competent short flights on departure."
    },

    { type: "heading", text: "What I Learned" },
    {
      type: "paragraph",
      text:
        "Quiet housing and low-stress handling were decisive. Pairing simple welfare metrics with appetite and activity trends made progress visible and guided incremental challenges up to release."
    }
  ]
}



];
