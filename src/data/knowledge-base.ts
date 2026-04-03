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
  icon: string; // lucide icon name
}

export const categories: Category[] = [
  { id: "preparation", label: "Preparation", icon: "ClipboardList" },
  { id: "facilitation", label: "Facilitation", icon: "Users" },
  { id: "follow-up", label: "Follow-Up", icon: "CheckCircle" },
  { id: "remote", label: "Remote Meetings", icon: "Monitor" },
  { id: "culture", label: "Meeting Culture", icon: "Heart" },
];

export const tips: Tip[] = [
  {
    id: "prep-1",
    category: "preparation",
    title: "Always define an outcome before scheduling",
    summary: "Every meeting needs a clear, stated outcome — not just a topic.",
    body: "Before sending an invite, write down the specific outcome you want. 'Discuss roadmap' is a topic. 'Decide on Q3 priorities and assign owners' is an outcome. If you can't articulate the outcome, you probably don't need a meeting.",
  },
  {
    id: "prep-2",
    category: "preparation",
    title: "Send the agenda 24 hours in advance",
    summary: "Give participants time to prepare by sharing what you'll cover and what you expect from them.",
    body: "An agenda sent right before the meeting is barely better than no agenda. Sharing it at least 24 hours ahead lets people gather data, form opinions, and arrive ready to contribute instead of reacting on the spot.",
  },
  {
    id: "prep-3",
    category: "preparation",
    title: "Invite only decision-makers and contributors",
    summary: "Fewer people, faster decisions. Inform others asynchronously.",
    body: "Every additional person in a meeting adds communication overhead. Invite only those who need to contribute to the outcome. For everyone else, send a summary afterwards. A 4-person meeting with the right people beats a 12-person meeting every time.",
  },
  {
    id: "fac-1",
    category: "facilitation",
    title: "Start with the end in mind",
    summary: "Open every meeting by stating the desired outcome clearly.",
    body: "In the first 60 seconds, tell the room exactly what you want to leave with: a decision, a plan, alignment on next steps. This anchors the entire conversation and gives everyone permission to redirect tangents back to the goal.",
  },
  {
    id: "fac-2",
    category: "facilitation",
    title: "Use a parking lot for tangents",
    summary: "Capture off-topic ideas without derailing the conversation.",
    body: "Keep a visible list (whiteboard, shared doc) where you write down valuable but off-topic points. Say: 'Great point — let me park that so we stay on track.' This respects the contributor while protecting the meeting's focus. Review the parking lot at the end or assign follow-ups.",
  },
  {
    id: "fac-3",
    category: "facilitation",
    title: "Assign a timekeeper",
    summary: "Dedicate someone to watch the clock so the facilitator can focus on content.",
    body: "When one person facilitates and watches the clock, they inevitably lose track of one. A dedicated timekeeper gives a 2-minute warning for each agenda item, ensuring you cover everything and end on time.",
  },
  {
    id: "fac-4",
    category: "facilitation",
    title: "End 5 minutes early for action items",
    summary: "Reserve the final minutes to confirm who does what by when.",
    body: "Discussions without clear next steps are wasted time. Stop the conversation 5 minutes before the end and go around: 'What did we decide? Who owns what? When is it due?' Write it down in real time so there's no ambiguity.",
  },
  {
    id: "fu-1",
    category: "follow-up",
    title: "Send notes within 2 hours",
    summary: "The faster you share notes, the more accurate and actionable they are.",
    body: "Meeting memory decays fast. Capture decisions, action items, and owners during the meeting, then share a clean summary within 2 hours. This keeps momentum and prevents the 'wait, I thought we decided differently' problem a week later.",
  },
  {
    id: "fu-2",
    category: "follow-up",
    title: "Track action items outside the meeting",
    summary: "Meeting notes are not a task management system. Move action items to where work actually gets tracked.",
    body: "If action items live only in meeting notes, they get buried. Transfer them to your team's task tracker (Jira, Asana, Trello, etc.) with clear owners and due dates. The meeting creates the commitment; the task system ensures follow-through.",
  },
  {
    id: "fu-3",
    category: "follow-up",
    title: "Start the next meeting with a review",
    summary: "Open recurring meetings by checking progress on previous action items.",
    body: "Spending 3 minutes reviewing last meeting's commitments creates accountability. People prepare differently when they know they'll be asked about progress. It also prevents the same topics from cycling through meetings without resolution.",
  },
  {
    id: "rem-1",
    category: "remote",
    title: "Cameras on for discussions, optional for updates",
    summary: "Use video strategically — require it when interaction matters, relax it when people are mostly listening.",
    body: "Camera fatigue is real, but so is disengagement. For brainstorming and decision-making, ask everyone to turn cameras on. For status updates or presentations, let people choose. This balances connection with comfort.",
  },
  {
    id: "rem-2",
    category: "remote",
    title: "Use the chat for parallel input",
    summary: "Let introverts and fast thinkers contribute via chat while discussion continues.",
    body: "In remote meetings, the chat is a superpower. Ask people to type reactions, questions, or votes in the chat while someone is speaking. This captures input from people who wouldn't interrupt, and gives the facilitator a real-time pulse of the room.",
  },
  {
    id: "rem-3",
    category: "remote",
    title: "Record meetings for async participants",
    summary: "Not everyone can attend every meeting. A recording with timestamps lets them catch up efficiently.",
    body: "Record the session and add timestamps or chapters to the key decisions. Async viewers can jump to what matters instead of watching the full recording. Pair this with written notes for maximum accessibility.",
  },
  {
    id: "cul-1",
    category: "culture",
    title: "Make 'no agenda, no meeting' a team norm",
    summary: "Establish a shared expectation: meetings without a clear agenda can be declined guilt-free.",
    body: "When teams adopt this norm, meeting quality jumps almost immediately. It forces organizers to think before booking time, and it empowers everyone to protect their focus. Post it in your team channel, add it to your team charter, and model the behavior yourself.",
  },
  {
    id: "cul-2",
    category: "culture",
    title: "Do a quarterly meeting audit",
    summary: "Review all recurring meetings every quarter. Cancel or shorten what isn't delivering value.",
    body: "Recurring meetings accumulate like subscriptions — easy to start, hard to stop. Once a quarter, list every recurring meeting and ask: Is this still necessary? Can it be shorter? Can it be less frequent? Can it be async? You'll almost always find hours to reclaim.",
  },
  {
    id: "cul-3",
    category: "culture",
    title: "Celebrate meetings that end early",
    summary: "Finishing ahead of schedule should be praised, not seen as a sign the meeting wasn't needed.",
    body: "Many people stretch discussions to fill the time slot because ending early feels wrong. Flip this by explicitly celebrating it: 'We covered everything in 20 minutes — nice work, everyone gets 10 minutes back.' This rewards preparation and focus.",
  },
];
