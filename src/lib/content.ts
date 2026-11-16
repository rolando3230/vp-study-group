// All page copy and links live here so they can be edited in one place.

export const JOIN_URL =
  "https://www.myvedicpsychology.com/resource_redirect/offers/4TmoriEN";

// The dancer video from the Kajabi page. Kajabi's link to it has expired, so
// put the .mp4 file at public/media/dancer.mp4 and set this to "/media/dancer.mp4".
// While it is null, the section shows the dancer photo instead.
export const DANCER_VIDEO_URL: string | null = null;

export const methods = [
  {
    title: "Case studies",
    body: "We examine real relationships and trace each conflict back to the need beneath it.",
    icon: "case",
  },
  {
    title: "Group discussions",
    body: "We listen, ask questions, and find perspectives that are hard to see alone.",
    icon: "group",
  },
  {
    title: "Storytelling",
    body: "We explore how personal stories shape what we feel, notice, and choose.",
    icon: "story",
  },
] as const;

// The six readings of the dancer from the original page.
// `feeling` and `reaction` illustrate how each reading shapes behavior; edit freely.
export const perceptions = [
  {
    label: "A beautiful dancing girl",
    feeling: "Admiration",
    reaction: "You smile, you enjoy her art, and you might tell her so.",
  },
  {
    label: "Someone trying to seduce me",
    feeling: "Suspicion",
    reaction: "You keep your distance and read every gesture as a move.",
  },
  {
    label: "A neglectful mother who works nights instead of being home with her young children",
    feeling: "Judgment",
    reaction: "You feel righteous, and it shows in how coolly you treat her.",
  },
  {
    label: "An ungrateful daughter-in-law who needs a “real job”",
    feeling: "Resentment",
    reaction: "Family dinners get tense, and small comments turn into arguments.",
  },
  {
    label: "Someone trying to flirt with my partner",
    feeling: "Jealousy",
    reaction: "You watch your partner closely, and trust between you starts to thin.",
  },
  {
    label: "The dancer you always wanted to be",
    feeling: "Longing",
    reaction: "Something stirs in you: envy, inspiration, or a dream you set aside.",
  },
] as const;

export const details = [
  { label: "When", value: "Every Saturday", sub: "8:30–9:30 am EST" },
  { label: "Where", value: "Online", sub: "Recordings included" },
  { label: "With", value: "Dr. Joshi", sub: "Vedic Psychologist" },
  { label: "Why", value: "Happier, healthier relationships", sub: "Starting with your own" },
] as const;

export const included = [
  "A live one-hour session every Saturday",
  "Recordings of every session, to watch any time",
  "Real case studies traced to the need beneath each conflict",
  "Group discussion and storytelling with Dr. Joshi",
] as const;

export const navLinks = [
  { href: "#method", label: "How we study" },
  { href: "#see-her", label: "Try the exercise" },
  { href: "#join", label: "Membership" },
] as const;
