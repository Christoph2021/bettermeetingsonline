import StandardLayout from "@/components/StandardLayout";

const About = () => (
  <StandardLayout>
    <div className="max-w-2xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">About BetterMeetings.Online</h1>
      <section className="mb-10">
        <p className="text-muted-foreground leading-relaxed mb-4">
          Whenever a form of communication becomes easy, we put less effort into it and a good thing turns bad. We've seen this with emails, chats, social media posts and yes, with meetings as well.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          In fact, having a meeting has become so easy that it has become acceptable to just agree on a time and send a weblink. The general bemoaning of too many meetings and useless meetings is the direct result.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          BetterMeetings.Online attempts to fix this by making meeting "difficult" again BUT have AI do all the difficult things that lead to better meetings, meetings that facilitate productive and consequential communication.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-4 text-foreground">About Me</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          With more than 20 years of experience leading teams and organizations, I've learned a simple truth: organizational momentum rises and falls with meeting culture.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          That's why I created BetterMeetings.Online.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          I combine facilitation expertise with AI product design to help teams move beyond the "status update" meeting and toward outcome-driven collaboration. I work with leadership teams, product organizations, engineers, and creative professionals to design meeting cultures that:
        </p>
        <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-6 space-y-1">
          <li>Reduce operational overhead</li>
          <li>Clarify decision-making and ownership</li>
          <li>Improve cross-functional alignment</li>
          <li>Turn discussion into measurable progress</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          If you want to improve the meeting culture in your organization and unlock your team's collective potential, reach out at:{" "}
          <a href="mailto:christoph@bettermeetings.online" className="text-primary hover:underline">
            christoph@bettermeetings.online
          </a>
        </p>
      </section>
    </div>
  </StandardLayout>
);

export default About;
