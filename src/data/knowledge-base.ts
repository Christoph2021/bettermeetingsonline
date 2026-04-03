export interface Tip {
  id: string;
  title: string;
  summary: string;
  body: string;
  categories: string[];
}

export interface Category {
  id: string;
  label: string;
  icon: string; // lucide icon name
}

export const categories: Category[] = [
  { id: "preparation", label: "Preparation", icon: "ClipboardList" },
  { id: "facilitation", label: "Facilitation", icon: "Users" },
  { id: "wrapping-up", label: "Wrapping-Up", icon: "Clock" },
  { id: "follow-up", label: "Follow-Up", icon: "CheckCircle" },
  { id: "culture", label: "Meeting Culture", icon: "Heart" },
];

export const tips: Tip[] = [
  {
    id: "prep-1",
    categories: ["preparation"],
    title: "Always define an outcome before scheduling",
    summary: "Every meeting needs a clear, stated outcome — not just a topic.",
    body: "Before sending an invite, write down the specific outcome you want. \'Discuss roadmap\' is a topic. \'Decide on Q3 priorities and assign owners\' is an outcome. If you can\'t articulate the outcome, you probably don\'t need a meeting.",
  },
  {
    id: "prep-2",
    categories: ["preparation"],
    title: "Send the agenda 24 hours in advance",
    summary: "Give participants time to prepare by sharing what you\'ll cover and what you expect from them.",
    body: "An agenda sent right before the meeting is barely better than no agenda. Sharing it at least 24 hours ahead lets people gather data, form opinions, and arrive ready to contribute instead of reacting on the spot.",
  },
  {
    id: "prep-3",
    categories: ["preparation"],
    title: "Invite only decision-makers and contributors",
    summary: "Fewer people, faster decisions. Inform others asynchronously.",
    body: "Every additional person in a meeting adds communication overhead. Invite only those who need to contribute to the outcome. For everyone else, send a summary afterwards. A 4-person meeting with the right people beats a 12-person meeting every time.",
  },
  {
    id: "fac-1",
    categories: ["facilitation"],
    title: "Start with the end in mind",
    summary: "Open every meeting by stating the desired outcome clearly.",
    body: "In the first 60 seconds, tell the room exactly what you want to leave with: a decision, a plan, alignment on next steps. This anchors the entire conversation and gives everyone permission to redirect tangents back to the goal.",
  },
  {
    id: "fac-2",
    categories: ["facilitation"],
    title: "Use a parking lot for tangents",
    summary: "Capture off-topic ideas without derailing the conversation.",
    body: "Keep a visible list (whiteboard, shared doc) where you write down valuable but off-topic points. Say: \'Great point — let me park that so we stay on track.\' This respects the contributor while protecting the meeting\'s focus. Review the parking lot at the end or assign follow-ups.",
  },
  {
    id: "fac-3",
    categories: ["facilitation"],
    title: "Assign a timekeeper",
    summary: "Dedicate someone to watch the clock so the facilitator can focus on content.",
    body: "When one person facilitates and watches the clock, they inevitably lose track of one. A dedicated timekeeper gives a 2-minute warning for each agenda item, ensuring you cover everything and end on time.",
  },
  {
    id: "wrap-1",
    categories: ["wrapping-up", "facilitation"],
    title: "End 5 minutes early for action items",
    summary: "Reserve the final minutes to confirm who does what by when.",
    body: "Discussions without clear next steps are wasted time. Stop the conversation 5 minutes before the end and go around: \'What did we decide? Who owns what? When is it due?\' Write it down in real time so there\'s no ambiguity.",
  },
  {
    id: "wrap-2",
    categories: ["wrapping-up"],
    title: "Celebrate meetings that end early",
    summary: "Finishing ahead of schedule should be praised, not seen as a sign the meeting wasn\'t needed.",
    body: "Many people stretch discussions to fill the time slot because ending early feels wrong. Flip this by explicitly celebrating it: \'We covered everything in 20 minutes — nice work, everyone gets 10 minutes back.\' This rewards preparation and focus.",
  },
  {
    id: "fu-1",
    categories: ["follow-up"],
    title: "Send notes within 2 hours",
    summary: "The faster you share notes, the more accurate and actionable they are.",
    body: "Meeting memory decays fast. Capture decisions, action items, and owners during the meeting, then share a clean summary within 2 hours. This keeps momentum and prevents the \'wait, I thought we decided differently\' problem a week later.",
  },
  {
    id: "fu-2",
    categories: ["follow-up"],
    title: "Track action items outside the meeting",
    summary: "Meeting notes are not a task management system. Move action items to where work actually gets tracked.",
    body: "If action items live only in meeting notes, they get buried. Transfer them to your team\'s task tracker (Jira, Asana, Trello, etc.) with clear owners and due dates. The meeting creates the commitment; the task system ensures follow-through.",
  },
  {
    id: "fu-3",
    categories: ["follow-up"],
    title: "Start the next meeting with a review",
    summary: "Open recurring meetings by checking progress on previous action items.",
    body: "Spending 3 minutes reviewing last meeting\'s commitments creates accountability. People prepare differently when they know they\'ll be asked about progress. It also prevents the same topics from cycling through meetings without resolution.",
  },
  {
    id: "cul-1",
    categories: ["culture"],
    title: "Make \'no agenda, no meeting\' a team norm",
    summary: "Establish a shared expectation: meetings without a clear agenda can be declined guilt-free.",
    body: "When teams adopt this norm, meeting quality jumps almost immediately. It forces organizers to think before booking time, and it empowers everyone to protect their focus. Post it in your team channel, add it to your team charter, and model the behavior yourself.",
  },
  {
    id: "cul-2",
    categories: ["culture"],
    title: "Do a quarterly meeting audit",
    summary: "Review all recurring meetings every quarter. Cancel or shorten what isn\'t delivering value.",
    body: "Recurring meetings accumulate like subscriptions — easy to start, hard to stop. Once a quarter, list every recurring meeting and ask: Is this still necessary? Can it be shorter? Can it be less frequent? Can it be async? You\'ll almost always find hours to reclaim.",
  },
  {
    id: "new-1",
    categories: ["facilitation"],
    title: `Start with the end and how to get there: Intent, Agenda, Expectations`,
    summary: `Begin every meeting by stating the intent of the meeting, the agenda and what role is expected of the attendees. Confirm alignment on those meeting pillars or make adjustments before continuing.`,
    body: `Starting a meeting with a clear introduction sets the tone for everything that follows. Even if the key information was already shared in the meeting invite, restating it ensures everyone is aligned from the start. The most important step is to clearly state the intent of the meeting-why everyone is there-and confirm agreement from participants. This shared understanding prevents misalignment and creates focus.

Next, walk through the agenda items and explain how one flows into the next, much like a story. This helps participants see the bigger picture and understand the journey the meeting will take. Finally, set expectations for participant behavior: whether you need active participation, deep discussion, decision-making, or simply attentive listening. By being explicit about these expectations, you empower attendees to bring the right energy and mindset.

A thoughtful introduction is more than a formality-it creates clarity, fosters engagement, and lays the foundation for a productive meeting.`,
  },
  {
    id: "new-2",
    categories: ["preparation"],
    title: `Write the intent of the meeting in one sentence`,
    summary: `Think of the intent of your meeting and write it down in one sentence.`,
    body: `You might have heard the sentiment that if you can't summarize something in one sentence, you haven't understood it well enough, yet. Whether this is universally true or not, it does force us to think about what we know and brings out what we don't know.

The one-sentence challenge can be a powerful tool for getting clarity on the intent of a meeting. With a clear intent, creating a good agenda and an engaging invitation as well as facilitating the meeting become easier.`,
  },
  {
    id: "new-3",
    categories: ["wrapping-up"],
    title: `Summarize decisions you made to shift mindsets to successful execution`,
    summary: `Don't end the meeting without stating the decisions that were made. This will change mindsets from discussing to executing.`,
    body: `Ending a meeting by clearly stating the decisions that were made is a powerful practice. It provides closure, ensures alignment, and signals a transition from discussion to action. Without this moment of clarity, participants may leave with different interpretations, leading to confusion or rework later. By summarizing decisions, the meeting facilitator reinforces accountability and makes next steps explicit.

Equally important, this recap helps shift the mindset of attendees. Once decisions are spoken aloud and confirmed, people naturally move from debating ideas to focusing on execution. The energy changes from exploration to commitment. Stating decisions at the end of the meeting anchors the intent, so that when attendees walk out, they are already thinking about how to deliver on what was agreed. It's a small habit that transforms meetings from talk into progress.`,
  },
  {
    id: "new-4",
    categories: ["preparation"],
    title: `Write an agenda that flows like a great book`,
    summary: `When creating an agenda, think of each item as a step in a narrative that will culminate in achieving the intent of the meeting. If you can't describe how one step leads to the next, your attendees might get lost.`,
    body: `Writing a meeting agenda is a lot like writing a book. Both need a clear structure that guides people from beginning to end. Just as a book starts with an introduction to set the stage, a meeting agenda should open with context-why everyone is gathered and what the session is about. This gives participants orientation and purpose, much like a reader finding their footing in a new story.

The middle of the agenda, like the chapters of a book, is where the journey unfolds. Each agenda item represents a step along the path, building momentum and leading naturally toward the outcome. Sequencing matters: just as a book has a logical flow of events, a meeting agenda should move from foundational discussions to deeper decisions.

Finally, every book has a conclusion that ties everything together. In a meeting, that conclusion is the intent-the decision made, the problem solved, or the next step agreed upon. When you design your agenda with this storytelling mindset, you create a meeting that feels purposeful, coherent, and engaging from start to finish.`,
  },
  {
    id: "new-5",
    categories: ["facilitation"],
    title: `Easily awaken Collaboration and Participation with a Virtual Whiteboard`,
    summary: `Use a virtual whiteboard to visualize important parts of the conversation and allow attendees to participate in the conversation asynchronously.`,
    body: `Vision is the primary sense for most people. Utilizing a virtual whiteboard to visually represent thoughts, decisions, information, and their connections is a powerful tool. It enhances meetings in numerous ways.
1. Keeps everyone on track

It's easy to lose focus during meetings, especially virtual ones. A whiteboard helps distracted participants re-engage and catch up quickly. When used as a key facilitation tool, the whiteboard can also visually track meeting progress by outlining the agenda steps.
2. Sparks thoughts through visualization

A conversation typically unfolds in a linear fashion, resulting in the present thought from everything previously discussed. A whiteboard transforms this linear exchange into a two-dimensional space. Instead of thinking in terms of now and before, participants see information as points on the board, making it easier to draw connections. Ideas shared at the start of the meeting can be linked effortlessly with those from the end because, on the whiteboard, they are not separated by 50 minutes but only a few pixels.
3. Allows for deeper engagement

Statistically speaking, most meeting attendees are just listening. The larger the meeting, the larger the portion of attendees who are engaged with only that one sense. By sharing a screen or presentation, attendees are engaged in meetings with two senses: hearing and seeing. Both of them are passive. A virtual whiteboard adds a third way of engagement: doing. With their hands, through their devices, attendees create, edit, delete, move, connect, draw, etc. on the whiteboard for everyone else to see and react to.
4. Provides additional communication paths

For more insights on the advantages of offering multiple communication channels, read this tip: Better participation through multiple communication channels

There are several virtual whiteboards available, but the one I highly recommend is Miro.`,
  },
  {
    id: "new-6",
    categories: ["wrapping-up"],
    title: `ToDos need accountability to become Dones`,
    summary: `Before the meeting ends, ensure that every identified follow-up is owned by a meeting attendee. Plan for the time this takes when preparing the meeting.`,
    body: `If a meeting results in follow-up tasks, it is important to clearly identify who will be accountable (i.e. owns the outcome) for each item before the meeting concludes. Without this clarity, the effectiveness of the meeting outcome is likely reduced. Therefore, plan for dedicated time during the meeting to define the follow-up actions and establish accountability to ensure they are getting done.

Accountability is created through a social contract that depends on the agreement of all parties involved. Therefore, it is often more effective when meeting participants volunteer to take ownership of follow-up tasks rather than having owners assigned to them .

This webinar offers valuable insights into establishing accountability through the lens of neuroscience.`,
  },
  {
    id: "new-7",
    categories: ["preparation"],
    title: `Make your invite answer What and Why`,
    summary: `Put yourself in the shoes of the recipient and check that your invite answers the questions: Why are we having that meeting? and What is expected of me?`,
    body: `We need good information to make good decisions. That applies to recipients of meeting invitations just as well.  Too often, invitations only include the when, where, and duration of the meeting. These details alone are insufficient for making informed decisions. Crucially missing are answers to the what and why: What will be discussed? What is expected of me? What are the desired outcomes? Why am I being invited? Why is this meeting necessary? Without this context, attendees enter meetings unprepared and uncertain, which slows progress and wastes valuable time establishing a shared understanding of the meeting's purpose.

For meetings to be effective, it is essential to include the purpose (the Why), the agenda, and the expectations from attendees (the What) in every invitation.

Here is an example:

Intent: Review the deployment problem last night and identify improvements for future risk mitigation

Agenda:

 timeline of events presented - me
 collecting factors that contributed to the problem - all attendees
 isolating factors we have control over and identifying improvement options - all attendees

Expectation:

 reflect on your role during last nights deployment before the meeting and be able to contribute to the conversations

It is also a good idea to use an invitation template as reminder to include intent and agenda and for consistency.`,
  },
  {
    id: "new-8",
    categories: ["facilitation"],
    title: `Lean Coffee - the easiest way to facilitate meetings with emerging topics`,
    summary: `Use the Lean Coffee facilitation technique for meetings in which the topic is determined by the attendees during the meeting.`,
    body: `The topic of a meeting does not always have to be set in advance. Regular sync-ups or information-sharing meetings often revolve around what attendees want to discuss at the moment. Lean Coffee is a simple facilitation technique that helps prioritizing topics dynamically and manage the discussion democratically.

To run a lean coffee meeting, you only need two things:

1. a place to put topic ideas like a white board or virtual equivalent
2. a stop watch (or a regular watch and someone who pays attention to the time)

The meeting begins with everyone jotting down topics they want to talk about and sharing them with the group. Because attendees are encouraged to quickly capture what's on their minds rather than overthink potential topics.

Next, all participants vote on the topics that interests them most. The card with the most votes becomes the first discussion topic.

Once the first topic is selected, the group discusses it within a strict time limit so that one topic does not consume a disproportionate share of the meeting time. A good time limit seems to be 10 minutes though this can be adjusted based on the situation. When time is up, the facilitator interrupts the conversation. The group can now decide to A) continue for another 10 minutes or B) move on to the next prioritized topic.

This process repeats until either all topics have been discussed or - more likely - the meeting time runs out.

It really is as straightforward as it sounds. Using a whiteboard or digital equivalent to visualize the stages-To Discuss, Discussing, Discussed-can help participants follow along. Topics are written on cards that move through these columns as they progress.

This brief 1- minute video provides a clear illustration of how Lean Coffee works.`,
  },
  {
    id: "new-9",
    categories: ["wrapping-up"],
    title: `Thumbs-Up voting is an easy way to get feedback`,
    summary: `Use the thumbs-up emoji and the numbers 1 to 5 in your chat app to get a quick check on alignment before the meeting ends.`,
    body: `Imagine your meeting is wrapping up, and it seems like a decision to move forward has been made. But how can you be sure that your confidence isn't influenced by one of your cognitive biases? If you're hosting a virtual meeting, try using Thumbs-Up voting. It works with any chat tool and requires only two steps.

1. You write the numbers 5,4,3,2 and 1 in separate messages in the meeting chat and explain what they mean.
    5 = let's move forward, a lot must go wrong for this not to be successful
    4 = let's move forward, even if some things turn out differently than we expect, we can still succeed
    3 = let's move forward, but be aware that to succeed not much can go wrong
    2 = let's not move forward, the chance of success is too slim
    1 = let's not move forward, I don't see it being successful at all
2. You ask all attendees to vote for the number they most agree with with a thumbs-up emoji

Thumbs-Up voting provides two key advantages. First, it clearly shows how confident each participant is about moving forward. Second, as the organizer, you gain valuable insights on whether further discussions with the group or individual members are necessary.`,
  },
  {
    id: "new-10",
    categories: ["preparation"],
    title: `Create a template to make your meeting invites more useful`,
    summary: `Create a template in your calendar app and use it every time you send a meeting invite. The template will remind you of what you need to include to prepare your attendees.`,
    body: `Especially during hectic days, it is tempting to quickly send off a meeting invite with only the meeting title in the subject line. However, your invitees learn little about the meeting, how to prepare, and what to expect. Because of this, you have made their lives a little more difficult. They might still attend, but you will spend the first part of the meeting getting them aligned on why they are there and what their role is.

A meeting invite template benefits the organizer by serving as a checklist. It prompts you to consider what information you need to share, allowing your meeting participants to decide if this is the best use of their time and to understand how to come prepared.

There are several ways to create a meeting template in a calendar application. Some methods depend on the version and what your administrator has allowed to be used, others are just cumbersome. The approach I recommend is to simply create a new signature containing the meeting template information (MS Outlook, Gmail).

A meeting template could look like this.

For more information on what should be in the invitation, have a look at this post: "Make your invite answer What and Why".`,
  },
  {
    id: "new-11",
    categories: ["facilitation"],
    title: `Better participation through multiple communication channels`,
    summary: `Encourage participants to use voice, video, chat and whiteboard to engage in the meeting. More attendees with their thoughts and ideas will become part of the conversation.`,
    body: `Good meetings live from engaged attendees. Encouraging the use of multiple communication channels during a meeting addresses two challenges of meeting engagement.

1. Not everyone is equally comfortable speaking in a group or equally fast at typing in chat or equally versed with using a virtual whiteboard. Incorporating different communication channels in your facilitation can help more attendees feel more comfortable to contribute.
2. Often, attendees are more focused on what they are going to say and finding the right time to say it than they are focused on keeping up with the conversation. Multiple communication channels provide multiple ways to share thoughts and information. Adding a card to a whiteboard for example or editing a shared meeting document are just two ways for attendees to get their thoughts out of their head and getting back to following along with the conversation.

As long as everyone has access to all communication channels that are used and can keep track of the activities, using multiple channels can increase meeting participation.`,
  },
  {
    id: "new-12",
    categories: ["wrapping-up"],
    title: `Use a survey at the end to receive valuable feedback`,
    summary: `At the end of a meeting, ask your attendees about how it went. Use this feedback to improve your preparation and facilitation skills.`,
    body: `No matter how bad we are at running meetings, if we continuously improve we will end up being better than most quickly. Gathering and applying feedback is the most helpful tool for our improvement. Therefore, it's a good practice to conclude group meetings with a brief survey. That encourages attendees to share what worked well and what could be improved..

If you are using a collaboration platform, chances are that survey or polling features like the Polls app for MS Teams are available to you. Of course you can also use specialized web services like SurveyMonkey or Microsoft Forms which are designed for creating and managing feedback.

Below are some ideas for survey questions. Select no more than one or two and invite attendees to respond at the end of your meeting.

1. Was this meeting valuable to you?
2. Was the outcome useful to you?
3. Did you get what you need to take the next step from the meeting?
4. Was the meeting worth your time?
5. Did we spend the right amount of time on XYZ?

If you want more detailed feedback, ask for it - but remember that too many questions can discourage attendees from answering.

For example:

1. Did you have the information needed to prepare for the meeting?
2. Did the agenda help you stay on track?
3. Was the agenda too limiting?
4. How well did the 1-2-4-All technique work for you?`,
  },
  {
    id: "new-13",
    categories: ["preparation"],
    title: `Time spent on preparation is returned double during execution`,
    summary: `Make time to prepare each meeting. It might feel like there is no time to prepare on a busy day but 15 minute preparation for a 45 minute meeting has a higher chance of a productive outcome than 0 minute preparation for a 60 minute meeting.`,
    body: `Effective meetings require thorough preparation. At a minimum, the purpose, agenda, participant list, and expectations for involvement should be clearly defined. Depending on the topic, meeting type, and group size, further preparations-such as tools for facilitating discussion, decision-making processes, and methods to encourage contributions-are essential for success.

The challenge in justifying the time spent on meeting preparation lies in the fact that the negative effects of poorly prepared meetings often aren't immediately apparent. In organizations with mediocre meeting cultures, it's easy to get by without preparation. When a meeting yields no results or the wrong participants attend, we simply schedule a follow-up meeting and repeat the cycle.

Bonus Tip:

Everyone has the same 168 hours each week. How we spend that time-whether on sleep, work, meals, or leisure-depends on our priorities. So, the next time you think, "I don't have time to prepare for this meeting," try reframing it to, "Something else is more important to me right now." This shift in perspective helps you better reflect on your priorities and where preparation truly fits in.`,
  },
  {
    id: "new-14",
    categories: ["facilitation"],
    title: `Set reasonable time boxes on discussions and enforce them`,
    summary: `Don't arbitrarily stop discussions that you feel don't help the meeting progress. Instead, set and communicate time boxes for the discussion and move on with the meeting afterwards.`,
    body: `A conversation can easily consume the whole meeting. That is not always bad but it can lead to missing the stated outcome of the meeting. Setting a time limit for how long a conversation can continue and enforcing that limit is an essential part of meeting facilitation.

Stopping discussions too soon has a negative impact on participation, however, discussions that drift off-topic have the same impact on the group. Finding a balance is important and requires experience. Even if you as the organizer are deeply invested in the topic, try to be as neutral as you can in your role as meeting facilitator. Otherwise, new ideas might not get a chance to emerge.`,
  },
  {
    id: "new-15",
    categories: ["wrapping-up"],
    title: `Summaries are effective reminders when you don't send them immediately`,
    summary: `Summarize the meeting outcomes and send them to the meeting attendees a little while after the meeting has ended. That way the summary will not only serve as record for future reference, but also as a first reminder for attendees to follow through on the decisions made.`,
    body: `Creating a meeting summary is one of the most effective ways to ensure clarity and accountability after a discussion. Documenting key outcomes-such as decisions, follow-ups, tasks, and next steps-provides a reliable reference point and helps surface any misalignments that may only become apparent after participants have had time to reflect.

While many meeting organizers aim to send the summary immediately, waiting to distribute it can actually increase its impact. Drafting the summary right after the meeting ensures accuracy while the details are still fresh. Holding off on sending it, however, gives participants a mental break and then re-engages them at a strategic moment. When the summary arrives later, it pulls attention back to the meeting's goals, reminds attendees of their commitments, and reinforces alignment.

This approach not only prevents the summary from being lost in the immediate post-meeting flurry of emails and tasks, but also strengthens follow-through by making the meeting's outcomes more memorable and actionable.`,
  },
  {
    id: "new-16",
    categories: ["facilitation"],
    title: `The right icebreaker puts attendees at ease and jumpstarts participation`,
    summary: `Start your meeting with a simple, non-threatening question as an icebreaker. The goal is to help attendees feel comfortable, welcomed, and safe. A well-chosen icebreaker can quickly create a positive and relaxed atmosphere, setting the tone for a productive meeting.`,
    body: `Icebreakers in virtual meetings are often underestimated, yet they can make a meaningful difference in how attendees engage. Many people hear the word "icebreaker" and imagine long, awkward activities that feel out of place in a professional setting. In reality, effective icebreakers don't need to be complicated or time-consuming.

Starting a meeting with a simple, non-threatening question-such as "What's one small win from your week?" or "Coffee or tea today?"-can quickly put participants at ease. These brief moments of connection help attendees relax, build psychological safety, and set a tone of openness. In turn, people are more likely to participate actively, share ideas, and collaborate effectively throughout the meeting.

In a virtual environment where informal hallway conversations are missing, icebreakers also replace some of that casual rapport-building. A few minutes spent on a light, inclusive prompt is a small investment that can pay off with stronger engagement, smoother discussions, and more productive outcomes.

Here are few examples:

 What's one small win you've had this week?
 Coffee, tea, or something else-what's your go-to drink today?
 If you could work from anywhere for a week, where would you choose?
 If you had to pick a theme song for your morning, what would it be?
 What's one thing you're looking forward to this month?
 If you could instantly learn one new skill, what would it be?`,
  },
  {
    id: "new-17",
    categories: ["preparation"],
    title: `Plan 10-20% of the meeting time for wrapping up`,
    summary: `When planning your agenda, allocate 10-20% of the meeting time for wrap-up. Use this time to summarize key decisions, assign action items, confirm follow-up meetings, and ensure everyone is clear on next steps.`,
    body: `When creating a meeting agenda, it's easy to focus on filling the time with discussion points and overlook the importance of planning time to wrap up. Yet the final minutes of a meeting are often the most critical. Without a structured close, participants may leave uncertain about what was decided, who owns specific tasks, or what comes next.

Building in dedicated wrap-up time allows the meeting leader to summarize key decisions, confirm assigned action items, and set clear expectations for follow-through. It's also the right moment to agree on timelines or schedule any necessary follow-up meetings. This not only strengthens accountability but also reinforces alignment, ensuring that everyone leaves with the same understanding of outcomes and responsibilities.

A well-planned close transforms a meeting from a conversation into a catalyst for action. By reserving just a few minutes at the end of the agenda, you increase the likelihood that decisions will be implemented, and momentum will carry forward beyond the meeting itself.`,
  },
  {
    id: "new-18",
    categories: ["facilitation"],
    title: `Watch out for experts before you lose the meeting`,
    summary: `When subject matter experts dive too deep into a topic during a meeting, you risk losing the rest of your attendees. Getting them back will be difficult. Use facilitation phrases and time-boxing to keep the meeting on track.`,
    body: `One of the common challenges in facilitating meetings is managing expert discussions. When two or more subject-matter experts dive deep into details, their exchange can be valuable-but often only to them. For the rest of the attendees, attention quickly drops. A prolonged technical back-and-forth risks losing the larger group, and once minds wander, it can be difficult to re-engage participants in the meeting.

This is why facilitation requires active steering. When experts begin discussing details that are not relevant to everyone, acknowledge the value of their input and suggest continuing the conversation offline or in a smaller breakout. Then, bring the focus back to the agenda and the needs of the broader group.

By doing so, you not only keep participants engaged but also show respect for everyone's time and contributions. Striking the right balance-allowing expertise to surface without letting it dominate-ensures that meetings remain inclusive, productive, and aligned with their intended purpose.

Here are some practical facilitator phrases you can use to politely redirect expert discussions without shutting them down:

 "This is a valuable point, but let's capture it and move the detailed discussion to a follow-up between the experts."
 "I want to make sure we stay on track with our agenda and keep everyone engaged. Can we summarize the key takeaway for the group?"
 "It sounds like this topic deserves deeper exploration. How about we schedule a separate session with the right people?"
 "Let's pause here-what's the main decision or action the group needs to take from this?"
 "I appreciate the insights. For now, let's note this as an action item to revisit, so we can keep the broader discussion moving."
 "This level of detail may not be relevant for everyone in the room. Can you give us the high-level summary?"
 "To respect everyone's time, let's wrap this point and circle back offline if needed."`,
  },
  {
    id: "new-19",
    categories: ["facilitation"],
    title: `Think about meeting duration in dollars instead of minutes`,
    summary: `Use a Meeting Cost Clock to visualize that meetings are not free. Seeing the cost grow with each second or minute can create a sense of urgency and discourage distracting conversations.`,
    body: `We all know the saying "Time is Money". When you get several people spending their time in your meeting the money spent on that meeting increases rapidly. Although we rarely consider the financial costs of our meetings, there are clear benefits to doing so:

 Raises awareness of resource use: Makes participants more conscious of the financial impact of meetings.
 Encourages efficiency: Attendees may stick closer to the agenda and avoid unnecessary tangents.
 Strengthens decision-making: Cost framing may push for quicker resolution instead of prolonging discussions.
 Improves accountability: Participants may self-regulate speaking time and relevance if they see the cost ticking up.
 Encourages alternative formats: Teams may shift non-essential discussions to async channels (email, chat, docs).

There are also some risks when meetings become primarily about the money they cost:

 May add stress: Constant awareness of cost could pressure participants, stifling creativity or open discussion.
 Risk of undervaluing collaboration: Not all benefits (trust-building, alignment, morale) have a clear monetary ROI.
 Could discourage participation: Some may speak less, fearing they're "wasting money."
 Focus on efficiency over effectiveness: Speed might be prioritized at the expense of quality decisions.

A Meeting Cost Clock can be a useful tool to visualize the costs of a meeting. You enter the number of attendees and an estimated average hourly rate of the attendees and the clock ticks up the costs until you stop it.`,
  },
  {
    id: "new-20",
    categories: ["facilitation"],
    title: `1,2,4,All - large groups can align quickly with this technique - Better Meetings Online`,
    summary: `Use the 1-2-4-All technique to quickly achieve alignment in large meetings. Based on the divide-and-conquer principle, each participant begins by generating their own idea, solution, or identifying a problem. They then collaborate sequentially: first with one other person, then a group of two, followed by four, and finally with the entire group to reach consensus.`,
    body: `Imagine leading a meeting with 20 participants, each offering multiple ideas about the root cause of a problem-potentially generating 40 different possibilities. The discussion quickly devolves into everyone debating which issue is most important, resulting in a heated exchange but no clear, actionable conclusions. The meeting ends with valuable insights shared but no concrete outcomes.

The "1,2,4, All" facilitation technique breaks the alignment process into progressively larger groups over four rounds. The first round beings with everyone writing down their own ideas, which should take just a minute. In the second round, attendees pair up. They discuss their individual ideas and agree on the top item(s). This round should take about five minutes. In the third round, pairs join with another pair to form groups of four. Within 5-10 minutes, they discuss the aligned item(s). In the final round, each group of four shares their top item(s) with the whole meeting. At this stage, only the ideas that emerged from the small-group discussions are presented and become part of the discussion.

This technique also works well in smaller and medium size meetings by skipping the third round and making it a 1,2, All technique.`,
  },
  {
    id: "new-21",
    categories: ["preparation"],
    title: `Agenda items as questions trigger deeper thinking in attendees`,
    summary: `Frame your agenda items as questions. When attendees see questions, they begin considering answers immediately, leading to faster and deeper engagement compared to simply reading statements.`,
    body: `Most meeting agendas are just lists of topics-updates, discussions, or decisions to be made. But a simple shift can transform how engaged your attendees are: write your agenda items as questions.

When agenda points are framed as questions, they immediately spark curiosity and signal what's expected from participants. Instead of "Budget Update," try "What adjustments do we need to make to stay within budget this quarter?" That phrasing not only tells people why the topic matters, but also primes them to think about possible answers before the meeting begins.

Questions also help clarify the purpose of each item. The question makes it explicit whether the goal is to make a decision, share information or explore ideas. This will save time, avoid meandering conversations, and ensure the right voices are heard.

As a bonus, you will easier know who to invite to the meeting: the people who can answer the questions.

For more information, have a look at this excellent article from the Harvard Business Review.`,
  },
  {
    id: "new-22",
    categories: ["preparation"],
    title: `Go One on One before going Big - Better Meetings Online`,
    summary: `Meet individually with key people or small groups beforehand and bring the insights from these meetings into the larger session. This approach uncovers concerns, preferences, and solutions early, allowing you to integrate them into the facilitation of the main meeting. It also fosters greater ownership among attendees and helps kick-start productive discussions during the big meeting.`,
    body: `Large meetings can be useful for alignment, but they often come with a cost: too many voices in the room and not enough space for meaningful discussions. One way to get the alignment of large meetings and the depth of small ones is to meet with small groups or individuals first and then bring the insights back to the larger meeting.

Small groups create an environment where people feel more comfortable speaking up. With fewer attendees, conversations are more focused, everyone has a chance to contribute, and ideas surface that might otherwise stay unspoken in a big room. This not only encourages participation, but also ensures that a wider variety of perspectives are captured.

These sessions also allow for deeper exploration of complex topics. A small group can dive into the details, test out different angles, and shape recommendations. When the larger group comes together, instead of starting from scratch, they're building on well-thought-out input. That makes the big meeting more efficient.

Another benefit is stronger ownership. When people are involved in shaping the groundwork, they feel more invested in the outcome, leading to smoother decision-making and better follow-through.

In short, small groups set the stage for large group success.`,
  },
  {
    id: "new-23",
    categories: ["facilitation"],
    title: `Don't facilitate if you're too invested in the outcome`,
    summary: `Find someone neutral to facilitate your meeting if you're deeply invested in the outcome. This will mitigate some of your biases impacting the direction of the conversations.`,
    body: `When leading a meeting, it can be difficult to balance managing the discussion and contributing meaningfully to the content. Furthermore, being in charge of process and content leaves the impression of favoritism. This is where a neutral facilitator adds real value. A facilitator is a content-neutral process advocate.

By taking on the role of guiding the process, he or she allows you and the other participants to focus fully on the substance of the conversation without being distracted by logistics or flow. Due to their impartiality they ensure that all viewpoints are heard. This creates a sense of fairness and builds trust, since participants can see that you as the meeting organizer do not dominate the conversation.

Ultimately, using a neutral facilitator can transform meetings into more inclusive, productive, and balanced discussions, ensuring that both the content and the participants receive the attention they deserve. However, it is not always obvious when such a facilitation approach would be necessary. A few indicators are:

 meeting style is collaborative and has the meeting is intended to come to agreements and make decisions
 meeting attendees have expressed different viewpoints on the topic or have clashing personalities
 meeting topic has conflict potential`,
  },
  {
    id: "new-24",
    categories: ["facilitation"],
    title: `The reason meetings are valuable is because people think differently`,
    summary: `Create awareness for and encourage attendees to embrace different mental models. Disagreement in meetings is not a form of conflict. It is a requirement to find the best possible solution.`,
    body: `Rory Sutherland, in his book Alchemy: The Surprising Power of Ideas That Don't Make Sense, offers a thought-provoking line: "The opposite of a good idea can also be a good idea." At first glance, this seems contradictory. But when you think about it, the statement is an invitation to consider different mental models and the value of contrasting perspectives.

In meetings, we often assume there must be one "correct" way forward. We tend to frame discussions as good versus bad, efficient versus inefficient, or practical versus impractical. Yet reality is rarely that binary. Different contexts call for different approaches, and sometimes a solution that seems opposite to conventional wisdom can unlock surprising opportunities.

This is why disagreement shouldn't be avoided but embraced - it's a vital form of productive conflict. When participants bring diverse models of thinking to the table, the clash of ideas forces everyone to question assumptions and test alternatives. It is often in the tension between opposing viewpoints that the most creative solutions emerge.

By embracing this mindset, meetings shift from seeking quick consensus to striving for deeper understanding. The result: better decisions and stronger buy-in.`,
  },
  {
    id: "new-25",
    categories: ["facilitation"],
    title: `Attention Sprints keep brains in the meeting`,
    summary: `Break your meeting into "attention sprints." Every 7-10 minutes, switch gears - change the speaker, invite reactions in chat, or use a quick poll. These micro-resets re-activate attention and make your meeting feel dynamic rather than draining.`,
    body: `Online meetings often ask the impossible: to sit still, stare at a grid of faces, and stay mentally engaged for 60 minutes straight. Neuroscience says our attention span starts dipping after 10 to 25 minutes of passive listening (Forbes and Frontiers in Psychology). In virtual spaces, that dip becomes a cliff. The fix isn't longer slides or louder voices - it's deliberate rhythm.

Think of your meeting as a playlist, not a lecture. Each song (or segment) should have its own tempo: a short presentation, followed by a question to the group, a chat reaction, a poll, etc. These moments act like brain oxygen - they pull attention back to the shared space. You meeting platform likely already has built-in tools to help facilitate this like emoji reactions or annotation boards.

You'll notice how engagement spikes when people sense movement and variety. You'll also feel more alert as a facilitator because you're co-creating the energy instead of performing for a quiet crowd.`,
  },
  {
    id: "new-26",
    categories: ["wrapping-up"],
    title: `The 5-Minute Wrap-Up That Saves Everyone's Sanity`,
    summary: `End every meeting with the "3 Rs": Review decisions, Record owners, Reconfirm next steps. It takes five minutes and prevents hours of follow-up chaos.`,
    body: `Most meetings fade out instead of finishing. Someone glances at the clock, people say polite goodbyes, and everyone leaves wondering who's actually doing what. The result? Pings in messaging apps, email threads, and duplicated effort. A structured wrap-up is your antidote. Think of the "3 Rs": Review, Record and Reconfirm as landing the meeting plane instead of circling the runway.

Start with a quick review: restate decisions in plain language - "We agreed to test option B next week."

Then record owners: say their names out loud and confirm consent ("Jess, you'll lead that pilot - okay with you?").

Finally, reconfirm next steps by repeating deadlines and where notes live.

Doing this on-screen - in chat or shared notes - makes accountability visible and democratic.
This five-minute ritual doesn't just clarify tasks; it builds closure and satisfaction. People leave knowing progress was made, not felling time was spent.`,
  },
  {
    id: "new-27",
    categories: ["facilitation"],
    title: `You see faces but nobody is home - Better Meetings Online`,
    summary: `Start every virtual meeting with a "micro-moment of presence." Ask everyone to react in chat, raise a hand, or share a one-word check-in. It sounds tiny - but it breaks the "silent join" habit and sets the tone for attention and connection.`,
    body: `We've all seen it: cameras glowing, faces expressionless, no sound except the facilitator's voice bouncing in an empty digital room. The illusion of participation is strong. Technically everyone's present, but emotionally they are elsewhere. Real presence online is not about keeping your camera on; it's about being responsive.

The first 90 seconds of a meeting create its emotional temperature. If you open with silence, that silence tends to stick. But if you ask for a quick gesture - a thumbs-up reaction, a one-word mood check in chat, or even a quick poll - you're sending a signal: "This space is alive." Those micro-interactions aren't just icebreakers; they're attention anchors.

As a facilitator, model it yourself. Look at the camera occasionally, use names ("That's a great point, Priya"), and comment on the chat so it feels part of the conversation. Presence is contagious - people mirror your energy.`,
  },
  {
    id: "new-28",
    categories: ["preparation"],
    title: `Let people know when to discuss and when to decide`,
    summary: `If your meeting's success depends on making decision, mark agenda items as either D (Decision) or C (Conversation). It takes 30 seconds to do, but it tells people why they're there and what kind of thinking you expect - saving you from the endless swirl of "we'll circle back."`,
    body: `Let's be honest: meetings don't waste time - we do, by showing up to unclear conversations without a finish line. The calendar invite is not the agenda, and the agenda is not the goal. When people join without knowing what kind of work they're there to do, they default to talking instead of deciding.

For meetings that require decision making, adding a simple D/C label to each agenda item fixes that. D means we're choosing something - expect a clear outcome. C means we're exploring - expect ideas, not closure. That tiny label changes tone, preparation, and pacing. It also gives you permission to say, "We're drifting into a conversation, but this was a decision item - let's refocus."

Facilitators who use this method report sharper meetings and happier participants. People prepare differently when they know what kind of thinking is expected. And when you end, everyone knows which items produced action.

Try pairing this method with writing your agenda items as questions like "Which feature set should we prioritize?" instead of "Feature priorities." It sparks pre-meeting thinking and saves you precious minutes.`,
  },
  {
    id: "new-29",
    categories: ["facilitation"],
    title: `Icebreakers That Don't Make You Cringe`,
    summary: `Skip "fun facts" and try contextual icebreakers - short prompts that relate to your meeting's topic or current mood. For example: "What's one thing that would make today's session a win for you?" It's relevant, quick, and builds connection without the awkwardness.`,
    body: `Let's face it: most icebreakers belong in the museum of corporate awkwardness. "Share your favorite pizza topping" might have worked in 2019, but today's professionals want relevance, not randomness. The best icebreakers don't distract from the meeting - they serve it.

Contextual openers connect people to purpose. Ask participants to share something that links directly to the session like: "What's one challenge you're hoping we solve today?" or "If today's topic were a movie title, what would it be?" The responses are often witty, sometimes insightful, and always more engaging than guessing someone's dream vacation.

For online meetings, keep it tight: one prompt, 30 seconds per person, or use chat to keep the flow fast.

Well-crafted openers not only humanize your call but also prime participants for meaningful dialogue. They turn a group of individuals into a conversation-ready team.

Bonus tip: answer your own question first - it lowers the social barrier and gives people a model to follow.`,
  },
  {
    id: "new-30",
    categories: ["facilitation"],
    title: `Recurring meetings work better with rotating facilitators - Better Meetings Online`,
    summary: `For recurring meetings, rotate the meeting facilitator role - and other key roles - regularly. It builds shared ownership, keeps energy fresh, and helps everyone develop facilitation and collaboration skills, not just the manager or project lead.`,
    body: `In most teams, the same person runs each occurrence of a recurring meeting - often the manager or project lead. Over time, that predictability turns into dependency: one person drives, everyone else rides. Conversation patterns harden, and participation flattens because people unconsciously wait for the facilitator to move things along.

Rotating the facilitator role breaks that pattern. It redistributes ownership and changes how people participate. When everyone takes a turn, facilitation becomes a shared skill - not a special power. Meetings gain variety and balance, and leaders can focus on contributing instead of always steering.

Better yet, rotate all recurring meeting roles: note taker, timekeeper, and decision recorder. According to People First Leadership Academy and the team at Meeteor, doing so increases engagement, accountability, and skill development across the team. It leads to more balanced participation and due to experiencing different perspectives in the meeting, participants communicate with more empathy and awareness.

This rotation practice not only refreshes meeting flow but also reduces "role fatigue", where the same person always shoulders the same duties week after week. Once you've facilitated, you understand how challenging it is to balance airtime, track outcomes, and keep everyone engaged - and that awareness makes you a better participant.

Try it in your next recurring meeting: "Next week, Alex will facilitate - Taylor will timekeep, and Jordan will take notes." You'll notice the energy shift instantly. People stop attending meetings and start co-owning them.`,
  },
  {
    id: "new-31",
    categories: ["preparation"],
    title: `Don't have a meeting until Proven Necessary`,
    summary: `Only schedule a meeting when you know that asynchronous communication - shared docs, written updates, chat threads - is not sufficient.`,
    body: `Most teams meet far more than they need to. The real problem isn't that meetings exist - it's that they've become the default solution to every communication need. Before you add another block to everyone's calendar, pause and ask whether a meeting is truly the best fit.

If your goal is to share information, an email, shared document, or recorded video update is usually better. People can consume the content at their own pace, add comments, and revisit the details later. Atlassian notes that routine status updates and recurring check-ins are prime candidates to go asynchronous, freeing up time for deeper work. (Atlassian: Meetings That Should Always Be Async)

If your goal is to collect feedback or brainstorm, consider an asynchronous discussion thread or a collaborative document where ideas can build over time. These formats reduce meeting fatigue and allow more thoughtful input from quieter contributors.

To decide if a meeting is really needed, ask yourself these questions:

 Is a real-time decision required?
 Is this topic complex or emotionally charged?
 What won't get done because of this meeting?

When you are not sure, go async. The fewer meetings you hold, the more meaningful - and effective - the ones that remain will become.`,
  },
  {
    id: "new-32",
    categories: ["facilitation"],
    title: `Make attendees referees - they raise the yellow card not you - Better Meetings Online`,
    summary: `Give every participant a virtual "yellow card". They can raise it whenever the discussion drifts off-topic or becomes confusing. It's a quick, visual cue that keeps meetings constructive and balanced without anyone needing to interrupt.`,
    body: `Meetings often lose momentum not because people disagree, but because no one feels empowered to signal when the discussion has veered off course. The "yellow card" technique borrows from sports but instead of a referee raising it, anyone can do so (real or virtual) when things stray off-topic or become unclear. It's a polite, universal signal that says "Pause, we're drifting."

This small gesture changes meeting dynamics significantly. Instead of relying on the facilitator to police every tangent, accountability becomes shared. Everyone participates in keeping the conversation useful. It's especially powerful in online meetings where participants can use an emojis, reaction icons, or maybe change their background image to "flash" their yellow card. Over time, it creates a culture of clarity, where anyone can speak up without awkwardness.

Try it in your next meeting and tell participants, "If we get off track or you're lost, raise your yellow card." You'll be surprised how much faster your meetings stay focused.`,
  },
  {
    id: "new-33",
    categories: ["facilitation"],
    title: `Build-In Pauses for Better Decisions - Better Meetings Online`,
    summary: `Before starting a large discussion or making a major decision, build-in one to two minutes of intentional silence. This gives quieter contributors time to form their thoughts and prevents fast talkers from dominating the conversation.`,
    body: `In many meetings, the people who speak first end up shaping the entire discussion. That's not necessarily because their ideas are better, but because they think (or talk) faster. Quieter voices often need a moment to process information before contributing, and without a structured pause, their insights can get lost under the momentum of early speakers.

Introducing a simple one-minute pause before a discussion or decision levels the playing field. It allows everyone to gather their thoughts, jot down ideas, or clarify their stance. This reduces groupthink, and strengthens psychological safety. It leads to more thoughtful, higher-quality discussions and decisions.

A short countdown timer or silent reflection slide is all you need to give participants space to prepare without pressure.

Try adding a verbal cue like: "Let's take 60 seconds to reflect individually before we discuss." You'll notice richer contributions, more balanced participation, and fewer decisions driven by whoever speaks first or loudest.`,
  },
  {
    id: "new-34",
    categories: ["facilitation"],
    title: `What to do with great ideas that don't fit? Park them!`,
    summary: `Create a visible "parking lot" space during your meeting in a shared document, whiteboard, or chat section to store off-topic but valuable ideas. When something important comes up that doesn't fit the moment, park it. Review the list at the end to decide next steps.`,
    body: `Meetings often drift because interesting ideas or tangents arise at the wrong moment and once the group follows them, it's hard to steer back. The "parking lot" technique solves this by acknowledging the idea without letting it derail the agenda. According to SessionLab's facilitation guide, it helps teams stay focused while preserving contributions for later review.

A parking lot is simply a holding space for questions, concerns or ideas that matter but aren't relevant right now. It is accessible to all participants so everyone can add to it. This avoids interruptions and boosts psychological safety because people feel heard. Their input isn't ignored, just deferred.

For online meetings, the parking lot can be a simple section on a shared document, a column on a digital whiteboard, or a running list in chat. At the end, revisit each item to consciously close the loop. When the parking lot is consistently reviewed, it becomes a powerful tool for focus, trust, and follow-through.`,
  },
];
