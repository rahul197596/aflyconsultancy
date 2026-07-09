export type Service = {
  slug: string;
  title: string;
  description: string;
  points: string[];
  process: string[];
};

export const services: Service[] = [
  {
    slug: "university-selection",
    title: "University Selection",
    description:
      "We assess your academic profile, budget, and career ambitions to build a shortlist of universities and courses that genuinely fit — not just the ones with the biggest brand names.",
    points: [
      "Course and country matching",
      "Comparison of tuition, living costs, and outcomes",
      "Guidance on entry requirements",
    ],
    process: [
      "Profile assessment: academics, budget, and career goals",
      "Shortlist of universities and courses matched to your profile",
      "Side-by-side comparison of costs, rankings, and outcomes",
      "Final selection and application planning",
    ],
  },
  {
    slug: "application-support",
    title: "Application Support",
    description:
      "From SOPs to recommendation letters, we help you put together a complete, compelling application for every university on your list.",
    points: [
      "Statement of Purpose review",
      "Document checklist and verification",
      "Application tracking across universities",
    ],
    process: [
      "Document checklist tailored to each university",
      "Statement of Purpose drafting and review",
      "Recommendation letter guidance",
      "Submission and status tracking across all applications",
    ],
  },
  {
    slug: "visa-guidance",
    title: "Visa Guidance",
    description:
      "Visa refusals are usually avoidable. We prepare your documentation and interview readiness so you apply with confidence.",
    points: [
      "Financial and document preparation",
      "Mock visa interviews",
      "Application form review",
    ],
    process: [
      "Document checklist review (financial, academic, and personal)",
      "Visa application form completion and review",
      "Mock interview practice with feedback",
      "Final submission support",
    ],
  },
  {
    slug: "test-preparation",
    title: "Test Preparation",
    description:
      "Structured coaching and practice material for the English proficiency and standardized tests most universities require.",
    points: [
      "IELTS / PTE / TOEFL coaching",
      "Practice tests with feedback",
      "Flexible batch timings",
    ],
    process: [
      "Diagnostic test to identify your starting band score",
      "Structured coaching across all four modules",
      "Timed practice tests with detailed feedback",
      "Final mock exams before your test date",
    ],
  },
  {
    slug: "scholarship-assistance",
    title: "Scholarship Assistance",
    description:
      "We help identify scholarships, grants, and assistantships you're eligible for, and support you through the application process.",
    points: [
      "Scholarship eligibility screening",
      "Application and essay support",
      "Deadline tracking",
    ],
    process: [
      "Eligibility screening against university and external scholarships",
      "Essay and application support",
      "Deadline tracking across all opportunities",
      "Follow-up on outcomes and next steps",
    ],
  },
  {
    slug: "pre-departure-briefing",
    title: "Pre-Departure Briefing",
    description:
      "Practical guidance for your move — accommodation, travel, banking, and settling in — so you land prepared, not overwhelmed.",
    points: [
      "Accommodation guidance",
      "Travel and forex checklist",
      "Orientation on student life abroad",
    ],
    process: [
      "Accommodation shortlisting and booking guidance",
      "Travel, forex, and packing checklist",
      "Banking and SIM card setup guidance",
      "Orientation session on student life and support services",
    ],
  },
  {
    slug: "post-visa-support",
    title: "Post-Visa Support",
    description:
      "Our support doesn't end when your visa is stamped. We stay with you after you land — through academics, accommodation, and finding work.",
    points: [
      "Academic support and tutor referrals",
      "Accommodation search and lease assistance",
      "Part-time job search while studying",
      "Full-time job search and career guidance after graduation",
      "Settlement guidance and referrals to trusted immigration lawyers",
    ],
    process: [
      "Post-arrival check-in once you've landed",
      "Ongoing academic support and tutor referrals if you're struggling with coursework",
      "Accommodation search, shortlisting, and lease guidance",
      "CV building, interview prep, and part-time job search support during your studies",
      "Full-time job search and career guidance as you approach graduation",
      "Settlement planning and referrals to trusted immigration lawyers for PR and long-term visa pathways",
    ],
  },
];
