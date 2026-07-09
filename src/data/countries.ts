export type Country = {
  slug: string;
  flag: string;
  name: string;
  blurb: string;
  highlights: string[];
  popularCourses: string[];
  intakes: string;
  workRights: string;
  costEstimate: string;
  costShort: string;
};

export const countries: Country[] = [
  {
    slug: "united-kingdom",
    flag: "🇬🇧",
    name: "United Kingdom",
    blurb:
      "World-renowned universities, shorter degree durations, and strong post-study work options via the Graduate Route.",
    highlights: [
      "1 or 2-year Master's programs",
      "2-year post-study work visa",
      "Globally recognized degrees",
    ],
    popularCourses: [
      "Business & Management",
      "Computer Science & Data",
      "Engineering",
      "Law",
      "Health & Life Sciences",
    ],
    intakes: "Main intakes in September and January, with some courses offering a May intake.",
    workRights: "Students can work up to 20 hours per week during term time, full-time during breaks, and graduates get a 2-year Graduate Route visa (3 years for PhDs).",
    costEstimate: "Tuition typically ranges from £12,000–£25,000/year; living costs average £1,000–£1,400/month outside London.",
    costShort: "Tuition £12k–£25k / year",
  },
  {
    slug: "united-states",
    flag: "🇺🇸",
    name: "United States",
    blurb:
      "The widest range of courses and research opportunities, with flexible curriculums and strong industry links.",
    highlights: [
      "STEM OPT extension up to 3 years",
      "Extensive scholarship opportunities",
      "Top-ranked research universities",
    ],
    popularCourses: [
      "Computer Science & AI",
      "Engineering",
      "Business (MBA)",
      "Biotechnology",
      "Media & Communication",
    ],
    intakes: "Main intake in Fall (August/September), with Spring (January) intake at many universities.",
    workRights: "On-campus work up to 20 hours/week; Optional Practical Training (OPT) gives 12 months of work authorization, extendable to 3 years for STEM graduates.",
    costEstimate: "Tuition ranges from $20,000–$55,000/year depending on the institution; living costs vary widely by city.",
    costShort: "Tuition $20k–$55k / year",
  },
  {
    slug: "canada",
    flag: "🇨🇦",
    name: "Canada",
    blurb:
      "Affordable, high-quality education with clear pathways to permanent residency for international graduates.",
    highlights: [
      "Post-Graduation Work Permit up to 3 years",
      "Strong PR pathways",
      "Welcoming to international students",
    ],
    popularCourses: [
      "Business & Management",
      "Information Technology",
      "Health Sciences",
      "Engineering",
      "Hospitality Management",
    ],
    intakes: "Main intakes in September, January, and May.",
    workRights: "Students can work up to 20 hours/week during term; the Post-Graduation Work Permit (PGWP) allows working full-time for up to 3 years after graduation.",
    costEstimate: "Tuition typically ranges from CAD 15,000–30,000/year; living costs average CAD 1,200–1,800/month.",
    costShort: "Tuition CAD 15k–30k / year",
  },
  {
    slug: "australia",
    flag: "🇦🇺",
    name: "Australia",
    blurb:
      "High living standards, part-time work rights while studying, and a growing list of in-demand skilled courses.",
    highlights: [
      "Post-study work visa up to 4 years",
      "Part-time work rights during study",
      "Strong vocational & university pathways",
    ],
    popularCourses: [
      "Nursing & Allied Health",
      "Business & Accounting",
      "Engineering",
      "IT & Cybersecurity",
      "Hospitality & Tourism",
    ],
    intakes: "Main intakes in February and July, with some courses offering a November intake.",
    workRights: "Students can work up to 48 hours per fortnight during term; the Temporary Graduate visa (subclass 485) allows 2–4 years of post-study work depending on qualification and location.",
    costEstimate: "Tuition ranges from AUD 20,000–45,000/year; living costs average AUD 1,400–2,000/month.",
    costShort: "Tuition AUD 20k–45k / year",
  },
  {
    slug: "ireland",
    flag: "🇮🇪",
    name: "Ireland",
    blurb:
      "An English-speaking gateway to Europe with a booming tech and pharma sector and generous stay-back options.",
    highlights: [
      "2-year stay-back for Master's graduates",
      "Home to major EU tech hubs",
      "Compact, student-friendly cities",
    ],
    popularCourses: [
      "Computer Science & Data Analytics",
      "Pharmaceutical Sciences",
      "Business & Finance",
      "Engineering",
      "Biotechnology",
    ],
    intakes: "Main intake in September, with a smaller January intake at select institutions.",
    workRights: "Students can work up to 20 hours/week during term; the Third Level Graduate Programme allows a 1–2 year stay-back to seek employment.",
    costEstimate: "Tuition typically ranges from €10,000–20,000/year; living costs average €900–1,300/month.",
    costShort: "Tuition €10k–€20k / year",
  },
  {
    slug: "germany",
    flag: "🇩🇪",
    name: "Germany",
    blurb:
      "Low or no tuition fees at public universities, with a strong focus on engineering, and technology programs.",
    highlights: [
      "Little to no tuition at public universities",
      "18-month post-study job search visa",
      "Strong engineering & tech industry",
    ],
    popularCourses: [
      "Mechanical & Automotive Engineering",
      "Computer Science",
      "Renewable Energy",
      "Business Administration",
      "Data Science",
    ],
    intakes: "Main intakes in September/October (Winter) and March/April (Summer).",
    workRights: "Students can work up to 140 full or 280 half days per year; graduates get an 18-month residence permit to search for a qualified job.",
    costEstimate: "Public universities charge little to no tuition (a small semester fee applies); living costs average €850–1,100/month.",
    costShort: "Little to no tuition",
  },
];
