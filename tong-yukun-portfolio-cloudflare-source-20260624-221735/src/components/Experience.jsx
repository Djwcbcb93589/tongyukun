import { education, experiences, profile, selfReview, stats } from '../data/siteContent.js';

export default function Experience() {
  return (
    <section className="section experience" id="经历">
      <div className="wrap two-col">
        <div className="portrait-card">
          <div className="portrait-glow" />
          <div className="portrait">
            <a href={profile.photo} target="_blank" rel="noreferrer">
              <img src={profile.photo} alt={`${profile.name}个人照片`} />
            </a>
          </div>
          <div className="portrait-meta">
            <p>Visual / Video / Brand</p>
            <strong>Fresh Graduate</strong>
          </div>
        </div>

        <div className="about">
          <p className="section-kicker">ABOUT</p>
          <h2>{profile.aboutTitle}</h2>
          <p>{profile.aboutText}</p>

          <div className="contact-strip">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span>{education.school} / {education.degree}</span>
          </div>

          <div className="stats">
            {stats.map((item) => (
              <div className="stat" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="timeline">
            {experiences.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.role}`}>
                <div>
                  <span>{item.date}</span>
                  <strong>{item.role}</strong>
                </div>
                <h3>{item.company}</h3>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {item.works && (
                  <div className="work-links">
                    {item.works.map((work) => (
                      <a href={work.href} target="_blank" rel="noreferrer" key={work.href}>
                        {work.label}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="profile-grid">
            <article className="profile-card">
              <p>EDUCATION</p>
              <h3>{education.school}</h3>
              <span>{education.degree} / {education.major}</span>
            </article>
            <article className="profile-card">
              <p>SELF REVIEW</p>
              <h3>{selfReview.title}</h3>
              <span>{selfReview.text}</span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
