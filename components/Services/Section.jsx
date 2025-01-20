const SectionRenderer = ({data}) => {
  const firstWord = data.split(" ")[0];

  // Define components inline
  const BusinessSection = () => (
    <section className="p-2 md:p-12 md:text-lg font-light text-main-950">
      <p className="mb-4">
        showcase your mission, services, or brand like never before with our range of professional video production services. whether you’re promoting your organization, creating content for marketing
        campaigns, or telling your unique story, we offer customized solutions to fit your vision. from engaging interviews to polished visuals, our team ensures every detail is handled with
        professionalism and creativity, delivering videos that leave a lasting impact. explore the options below to see how we can bring your message to life.
      </p>
      <div className="px-4 flex flex-col space-y-4">
        <div>
          <p>
            <span className="font-bold text-brand">promotional video</span> - short form | long form
          </p>
          <p>highlight your organization’s mission, services, and achievements with a captivating promotional video.</p>
          <p className="text-sm">*aspect ratios can include vertical, horizontal, or both for multiple platforms</p>
        </div>
        <div>
          <p>
            <span className="font-bold text-brand">interview-style videos</span>
          </p>
          <p>capture authentic and personal stories with interviews featuring team members, leaders, or clients.</p>
          <p className="text-sm">*to be filmed on location at a scheduled date</p>
        </div>
        <div>
          <span className="font-bold text-brand">event coverage</span>
          <p>document your events, fundraisers, or campaigns with professional filming and editing.</p>
          <p className="text-sm">*tailored for recap videos, promotions, or internal use</p>
        </div>
        <div>
          <span className="font-bold text-brand">drone footage</span>
          <p>stunning aerial shots that elevate your visuals and provide dynamic perspectives of your organization or event.</p>
          <p className="text-sm">*subject to local laws and regulations</p>
        </div>
        <div>
          <span className="font-bold text-brand">social media content</span>
          <p>engaging short videos designed specifically for platforms like instagram, facebook, and tiktok.</p>
          <p className="text-sm">*customized for platform-specific requirements</p>
        </div>
        <div>
          <span className="font-bold text-brand">full-length documentaries</span>
          <p>tell your story in depth with a professionally crafted documentary highlighting your organization’s journey, impact, and vision.</p>
        </div>
        <div>
          <span className="font-bold text-brand">customized videos</span>
          <p>tailored to your specific goals, blending professionalism, creativity, and advanced technology to deliver results.</p>
        </div>
      </div>
    </section>
  );

  const SpecialSection = () => (
    <section className="p-2 md:p-12 md:text-lg font-light text-main-950">
      <p className="mb-4">
        life’s most meaningful celebrations deserve to be remembered in a way that captures their beauty and significance. whether it’s a wedding, quinceañera, birthday, or any other milestone, we’re
        here to tell your story with care and creativity. using professional equipment and expert editing, we craft films that preserve every laugh, tear, and heartfelt moment, so you can relive them
        for years to come.
      </p>

      <div className="px-4 flex flex-col space-y-4">
        <div>
          <p>
            <span className="font-bold text-brand">wedding films</span>
          </p>
          <p>beautifully crafted films that capture every detail, from the ceremony to the reception.</p>
          <p className="text-sm">*customizable to fit your style and preferences</p>
        </div>
        <div>
          <p>
            <span className="font-bold text-brand">quinceañera videos</span>
          </p>
          <p>stunning coverage of your special day, highlighting traditions, dances, and family moments.</p>
          <p className="text-sm">*includes options for short and full-length edits</p>
        </div>
        <div>
          <span className="font-bold text-brand">birthday celebrations</span>
          <p>vibrant and fun videos capturing the energy and joy of your birthday celebration.</p>
          <p className="text-sm">*ideal for milestone birthdays and family gatherings</p>
        </div>
        <div>
          <span className="font-bold text-brand">anniversary films</span>
          <p>celebrate your love story with a film that highlights your journey and special moments together.</p>
          <p className="text-sm">*perfect for sharing at parties or keeping as a cherished memory</p>
        </div>
        <div>
          <span className="font-bold text-brand">custom event videos</span>
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
