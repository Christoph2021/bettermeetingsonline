import StandardLayout from "@/components/StandardLayout";

const About = () => (
  <StandardLayout>
    <div className="max-w-2xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">About BetterMeetings.Online</h1>
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3 text-foreground">Our Mission</h2>
        <p className="text-muted-foreground leading-relaxed">
          We believe meetings should be productive, focused, and respectful of everyone's time.
          BetterMeetings.Online provides AI-powered tools and a curated knowledge base to help
          professionals prepare, facilitate, and follow up on meetings with confidence.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3 text-foreground">What We Offer</h2>
        <p className="text-muted-foreground leading-relaxed">
          From real-time meeting coaching to structured preparation assistants, our tools are
          designed for individual professionals who want to make every meeting count — without
          the overhead of complex enterprise software.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-3 text-foreground">The Team</h2>
        <p className="text-muted-foreground leading-relaxed">
          We're a small team passionate about better collaboration. We combine expertise in
          facilitation, AI, and product design to build tools that actually help.
        </p>
      </section>
    </div>
  </StandardLayout>
);

export default About;
