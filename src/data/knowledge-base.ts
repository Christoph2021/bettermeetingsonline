export interface Tip {
  id: string;
  title: string;
  summary: string;
  body: string;
  category: string;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
}

export const categories: Category[] = [
  { id: "facilitation", label: "Facilitation", icon: "Users" },
  { id: "preparation", label: "Preparation", icon: "ClipboardList" },
];

export const tips: Tip[] = [
  {
    id: "wp-800",
    category: "facilitation",
    title: "Build-In Pauses for Better Decisions",
    summary:
      "Create intentional pauses before big discussions. They amplify quieter voices, improve clarity, and lead to better decisions.",
    body: "Before starting a large discussion or making a major decision, build in one to two minutes of intentional silence. This gives quieter contributors time to form their thoughts and prevents fast talkers from dominating the conversation.\n\nIn many meetings, the people who speak first end up shaping the entire discussion — not because their ideas are better, but because they think or talk faster. Quieter voices often need a moment to process information before contributing, and without a structured pause, their insights can get lost.\n\nIntroducing a simple one-minute pause levels the playing field. It allows everyone to gather their thoughts, jot down ideas, or clarify their stance. This reduces groupthink and strengthens psychological safety, leading to more thoughtful, higher-quality discussions and decisions.\n\nTry adding a verbal cue like: \"Let's take 60 seconds to reflect individually before we discuss.\" You'll notice richer contributions, more balanced participation, and fewer decisions driven by whoever speaks first or loudest.",
  },
  {
    id: "wp-798",
    category: "facilitation",
    title: "Make attendees referees — they raise the yellow card, not you",
    summary:
      "Let anyone raise a yellow card when discussion drifts or confusion hits. It keeps meetings focused, fair, and refreshingly honest.",
    body: "Give every participant a virtual \"yellow card\". They can raise it whenever the discussion drifts off-topic or becomes confusing. It's a quick, visual cue that keeps meetings constructive and balanced without anyone needing to interrupt.\n\nMeetings often lose momentum not because people disagree, but because no one feels empowered to signal when the discussion has veered off course. The \"yellow card\" technique borrows from sports — instead of a referee raising it, anyone can do so when things stray off-topic or become unclear. It's a polite, universal signal that says \"Pause, we're drifting.\"\n\nThis small gesture changes meeting dynamics significantly. Instead of relying on the facilitator to police every tangent, accountability becomes shared. It's especially powerful in online meetings where participants can use emojis, reaction icons, or change their background image to \"flash\" their yellow card.\n\nTry it in your next meeting and tell participants: \"If we get off track or you're lost, raise your yellow card.\" You'll be surprised how much faster your meetings stay focused.",
  },
  {
    id: "wp-803",
    category: "facilitation",
    title: "What to do with great ideas that don't fit? Park them!",
    summary:
      "Use a \"parking lot\" to capture off-topic ideas so your meeting stays focused while valuable thoughts aren't lost and people feel heard.",
    body: "Create a visible \"parking lot\" space during your meeting — in a shared document, whiteboard, or chat section — to store off-topic but valuable ideas. When something important comes up that doesn't fit the moment, park it. Review the list at the end to decide next steps.\n\nMeetings often drift because interesting ideas or tangents arise at the wrong moment, and once the group follows them, it's hard to steer back. The \"parking lot\" technique solves this by acknowledging the idea without letting it derail the agenda.\n\nA parking lot is simply a holding space for questions, concerns or ideas that matter but aren't relevant right now. It is accessible to all participants so everyone can add to it. This avoids interruptions and boosts psychological safety because people feel heard — their input isn't ignored, just deferred.\n\nFor online meetings, the parking lot can be a simple section on a shared document, a column on a digital whiteboard, or a running list in chat. At the end, revisit each item to consciously close the loop. When the parking lot is consistently reviewed, it becomes a powerful tool for focus, trust, and follow-through.",
  },
  {
    id: "wp-755",
    category: "facilitation",
    title: "You see faces but nobody is home",
    summary:
      "Start every virtual meeting with a \"micro-moment of presence.\" It breaks the \"silent join\" habit and sets the tone for attention and connection.",
    body: "Ask everyone to react in chat, raise a hand, or share a one-word check-in at the start. It sounds tiny — but it breaks the \"silent join\" habit and sets the tone for attention and connection.\n\nWe've all seen it: cameras glowing, faces expressionless, no sound except the facilitator's voice bouncing in an empty digital room. The illusion of participation is strong. Technically everyone's present, but emotionally they are elsewhere. Real presence online is not about keeping your camera on; it's about being responsive.\n\nThe first 90 seconds of a meeting create its emotional temperature. If you open with silence, that silence tends to stick. But if you ask for a quick gesture — a thumbs-up reaction, a one-word mood check in chat, or even a quick poll — you're sending a signal: \"This space is alive.\" Those micro-interactions aren't just icebreakers; they're attention anchors.\n\nAs a facilitator, model it yourself. Look at the camera occasionally, use names (\"That's a great point, Priya\"), and comment on the chat so it feels part of the conversation. Presence is contagious — people mirror your energy.",
  },
  {
    id: "wp-759",
    category: "facilitation",
    title: "Icebreakers That Don't Make You Cringe",
    summary:
      "Skip \"fun facts\" and try contextual icebreakers — short prompts that relate to your meeting's topic or current mood.",
    body: "Try contextual openers instead of random icebreakers. For example: \"What's one thing that would make today's session a win for you?\" It's relevant, quick, and builds connection without the awkwardness.\n\nLet's face it: most icebreakers belong in the museum of corporate awkwardness. \"Share your favorite pizza topping\" might have worked in 2019, but today's professionals want relevance, not randomness. The best icebreakers don't distract from the meeting — they serve it.\n\nContextual openers connect people to purpose. Ask participants to share something that links directly to the session like: \"What's one challenge you're hoping we solve today?\" or \"If today's topic were a movie title, what would it be?\" The responses are often witty, sometimes insightful, and always more engaging than guessing someone's dream vacation.\n\nFor online meetings, keep it tight: one prompt, 30 seconds per person, or use chat to keep the flow fast.\n\nWell-crafted openers not only humanize your call but also prime participants for meaningful dialogue. They turn a group of individuals into a conversation-ready team.\n\nBonus tip: answer your own question first — it lowers the social barrier and gives people a model to follow.",
  },
  {
    id: "wp-158",
    category: "facilitation",
    title: "Easily awaken Collaboration and Participation with a Virtual Whiteboard",
    summary:
      "Use a virtual whiteboard to visualize important parts of the conversation and allow attendees to participate asynchronously.",
    body: "Vision is the primary sense for most people. Utilizing a virtual whiteboard to visually represent thoughts, decisions, information, and their connections is a powerful tool that enhances meetings in numerous ways.\n\n1. Keeps everyone on track: It's easy to lose focus during meetings, especially virtual ones. A whiteboard helps distracted participants re-engage and catch up quickly. When used as a key facilitation tool, the whiteboard can also visually track meeting progress by outlining the agenda steps.\n\n2. Sparks thoughts through visualization: A conversation typically unfolds in a linear fashion. A whiteboard transforms this linear exchange into a two-dimensional space. Instead of thinking in terms of now and before, participants see information as points on the board, making it easier to draw connections.\n\n3. Allows for deeper engagement: Most meeting attendees are just listening. A virtual whiteboard adds a third way of engagement: doing. With their hands, through their devices, attendees create, edit, delete, move, connect, draw on the whiteboard for everyone else to see and react to.\n\n4. Provides additional communication paths: Incorporating the whiteboard alongside voice, video, and chat gives participants multiple ways to contribute, addressing different comfort levels and communication styles.",
  },
  {
    id: "wp-170",
    category: "facilitation",
    title: "Better participation through multiple communication channels",
    summary:
      "Encourage participants to use voice, video, chat and whiteboard to engage. More attendees with their thoughts and ideas will become part of the conversation.",
    body: "Good meetings live from engaged attendees. Encouraging the use of multiple communication channels during a meeting addresses two key challenges of meeting engagement.\n\nFirst, not everyone is equally comfortable speaking in a group or equally fast at typing in chat or equally versed with using a virtual whiteboard. Incorporating different communication channels in your facilitation can help more attendees feel comfortable to contribute.\n\nSecond, attendees are often more focused on what they are going to say and finding the right time to say it than they are focused on keeping up with the conversation. Multiple communication channels provide multiple ways to share thoughts and information. Adding a card to a whiteboard or editing a shared meeting document are just two ways for attendees to get their thoughts out of their head and get back to following along with the conversation.\n\nAs long as everyone has access to all communication channels that are used and can keep track of the activities, using multiple channels can increase meeting participation.",
  },
  {
    id: "wp-757",
    category: "preparation",
    title: "Let people know when to discuss and when to decide",
    summary:
      "Mark agenda items as either D (Decision) or C (Conversation). It tells people what kind of thinking you expect.",
    body: "If your meeting's success depends on making a decision, mark agenda items as either D (Decision) or C (Conversation). It takes 30 seconds to do, but it tells people why they're there and what kind of thinking you expect — saving you from the endless swirl of \"we'll circle back.\"\n\nMeetings don't waste time — we do, by showing up to unclear conversations without a finish line. The calendar invite is not the agenda, and the agenda is not the goal. When people join without knowing what kind of work they're there to do, they default to talking instead of deciding.\n\nAdding a simple D/C label to each agenda item fixes that. D means we're choosing something — expect a clear outcome. C means we're exploring — expect ideas, not closure. That tiny label changes tone, preparation, and pacing. It also gives you permission to say, \"We're drifting into a conversation, but this was a decision item — let's refocus.\"\n\nFacilitators who use this method report sharper meetings and happier participants. People prepare differently when they know what kind of thinking is expected. And when you end, everyone knows which items produced action.\n\nTry pairing this method with writing your agenda items as questions — it sparks pre-meeting thinking and saves you precious minutes.",
  },
  {
    id: "wp-699",
    category: "preparation",
    title: "Agenda items as questions trigger deeper thinking in attendees",
    summary:
      "Frame your agenda items as questions. Attendees begin considering answers immediately, leading to faster and deeper engagement.",
    body: "Most meeting agendas are just lists of topics — updates, discussions, or decisions to be made. But a simple shift can transform how engaged your attendees are: write your agenda items as questions.\n\nWhen agenda points are framed as questions, they immediately spark curiosity and signal what's expected from participants. Instead of \"Budget Update,\" try \"What adjustments do we need to make to stay within budget this quarter?\" That phrasing not only tells people why the topic matters, but also primes them to think about possible answers before the meeting begins.\n\nQuestions also help clarify the purpose of each item. The question makes it explicit whether the goal is to make a decision, share information or explore ideas. This will save time, avoid meandering conversations, and ensure the right voices are heard.\n\nAs a bonus, you will more easily know who to invite to the meeting: the people who can answer the questions.",
  },
];
