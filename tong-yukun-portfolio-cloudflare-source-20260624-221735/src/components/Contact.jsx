import { profile } from '../data/siteContent.js';

export default function Contact() {
  return (
    <section className="contact-end" id="联系">
      <div className="wrap contact-inner">
        <p className="section-kicker">CONTACT</p>
        <h2>{profile.contactTitle}</h2>
        <div className="contact-actions">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href="#top">返回顶部</a>
        </div>
      </div>
    </section>
  );
}
