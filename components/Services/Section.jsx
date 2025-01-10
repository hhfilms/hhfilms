const SectionRenderer = ({data}) => {
  const firstWord = data.split(" ")[0];

  // Define components inline
  const BusinessSection = () => (
    <section className="p-12 text-lg font-light">
      <p className="mb-4">
        showcase your mission, services, or brand like never before with our range of professional video production services. whether you’re promoting your organization, creating content for marketing
        campaigns, or telling your unique story, we offer customized solutions to fit your vision. from engaging interviews to polished visuals, our team ensures every detail is handled with
        professionalism and creativity, delivering videos that leave a lasting impact. explore the options below to see how we can bring your message to life.
      </p>
      <div className="px-4 flex flex-col space-y-4">
        <div>
          <p>
            <span className="font-bold">promotional video</span> - short form | long form
          </p>
          <p>highlight your organization’s mission, services, and achievements with a captivating promotional video.</p>
          <p className="text-sm">*aspect ratios can include vertical, horizontal, or both for multiple platforms</p>
        </div>
        <div>
          <p>
            <span className="font-bold">interview-style videos</span>
          </p>
          <p>capture authentic and personal stories with interviews featuring team members, leaders, or clients.</p>
          <p className="text-sm">*to be filmed on location at a scheduled date</p>
        </div>
        <div>
          <span className="font-bold">event coverage</span>
          <p>document your events, fundraisers, or campaigns with professional filming and editing.</p>
          <p className="text-sm">*tailored for recap videos, promotions, or internal use</p>
        </div>
        <div>
          <span className="font-bold">drone footage</span>
          <p>stunning aerial shots that elevate your visuals and provide dynamic perspectives of your organization or event.</p>
          <p className="text-sm">*subject to local laws and regulations</p>
        </div>
        <div>
          <span className="font-bold">social media content</span>
          <p>engaging short videos designed specifically for platforms like instagram, facebook, and tiktok.</p>
          <p className="text-sm">*customized for platform-specific requirements</p>
        </div>
        <div>
          <span className="font-bold">full-length documentaries</span>
          <p>tell your story in depth with a professionally crafted documentary highlighting your organization’s journey, impact, and vision.</p>
        </div>
        <div>
          <span className="font-bold">customized videos</span>
          <p>tailored to your specific goals, blending professionalism, creativity, and advanced technology to deliver results.</p>
        </div>
      </div>
    </section>
  );

  const SportsSection = () => (
    <section className="p-12 text-lg font-light">
      <p className="mb-4">
        Elevate your sports memories and showcase athletic talent like never before with our range of optional services. Whether you’re highlighting key moments for college recruiters, creating a
        keepsake for proud parents, or capturing the energy of a season, we offer tailored solutions to fit your vision. From expert filming to polished editing, our team ensures every detail is
        handled with professionalism and creativity, delivering videos that are as impactful as the athletes they feature. Explore the options below to see how we can bring your story to life.
      </p>
      <div className="px-4 flex flex-col space-y-4">
        <div>
          <p>
            <span className="font-bold">team highlight</span> - short form | long form
          </p>
          <p>footage of the most exciting and pivotal moments of the game.</p>
          <p className="text-sm">*aspect ratios can include vertical, horizontal or both for social media</p>
        </div>
        <div>
          <p>
            <span className="font-bold">individual highlight</span> - short form | long form
          </p>
          <p>footage of the most exciting and pivotal moments of the game highlighting a single player.</p>
          <p className="text-sm">*aspect ratios can include vertical, horizontal or both for social media</p>
        </div>

        <div>
          <span className="font-bold">athlete interview</span>
          <p>personal interview with the athlete to capture their personal story.</p>
          <p className="text-sm">*to be filmed at a location on a date that is not a game day</p>
        </div>
        <div>
          <span className="font-bold">player introductions</span>
          <p>film where athletes can introduce themselves & give their position and personal message.</p>
          <p className="text-sm">*team only. no individuals</p>
        </div>
        <div>
          <span className="font-bold">drone shots</span>
          <p>stunning aerial perspectives ideal for outdoor games or large-scale events.</p>
          <p className="text-sm">*subject to local laws and regulations</p>
        </div>
        <div>
          <span className="font-bold">customized videos</span>
          <p>tailored to your specific goals, blending professionalism, creativity, and advanced technology.</p>
        </div>
        <div>
          <p className="font-bold">full-game filming</p>
          <p>comprehensive coverage of every play, capturing all the action from start to finish.</p>
          <p className="text-sm">*includes 1 camera angle. no music. no voiceover. no customization. only game action</p>
        </div>
      </div>
    </section>
  );

  const SpecialSection = () => (
    <section className="p-12 text-lg font-light">
      <p className="mb-4">
        life’s most meaningful celebrations deserve to be remembered in a way that captures their beauty and significance. whether it’s a wedding, quinceañera, birthday, or any other milestone, we’re
        here to tell your story with care and creativity. using professional equipment and expert editing, we craft films that preserve every laugh, tear, and heartfelt moment, so you can relive them
        for years to come.
      </p>

      <div className="px-4 flex flex-col space-y-4">
        <div>
          <p>
            <span className="font-bold">wedding films</span>
          </p>
          <p>beautifully crafted films that capture every detail, from the ceremony to the reception.</p>
          <p className="text-sm">*customizable to fit your style and preferences</p>
        </div>
        <div>
          <p>
            <span className="font-bold">quinceañera videos</span>
          </p>
          <p>stunning coverage of your special day, highlighting traditions, dances, and family moments.</p>
          <p className="text-sm">*includes options for short and full-length edits</p>
        </div>
        <div>
          <span className="font-bold">birthday celebrations</span>
          <p>vibrant and fun videos capturing the energy and joy of your birthday celebration.</p>
          <p className="text-sm">*ideal for milestone birthdays and family gatherings</p>
        </div>
        <div>
          <span className="font-bold">anniversary films</span>
          <p>celebrate your love story with a film that highlights your journey and special moments together.</p>
          <p className="text-sm">*perfect for sharing at parties or keeping as a cherished memory</p>
        </div>
        <div>
          <span className="font-bold">custom event videos</span>
          <p>tailored to any celebration or special moment, blending creativity and professionalism to tell your story.</p>
        </div>
      </div>
    </section>
  );

  // Inline conditional rendering
  if (firstWord === "business") return <BusinessSection />;
  if (firstWord === "sports") return <SportsSection />;
  if (firstWord === "special") return <SpecialSection />;

  // Default case
  return null;
};

export default SectionRenderer;
