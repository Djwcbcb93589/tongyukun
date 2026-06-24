import { navItems, profile } from '../data/siteContent.js';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <video className="hero-video" autoPlay muted loop playsInline aria-hidden="true">
        <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
      </video>
      <div className="motion-bg" aria-hidden="true">
        <div className="grid-plane" />
        <div className="light light-a" />
        <div className="light light-b" />
        <div className="scanline" />
      </div>

      <nav className="nav wrap">
        <a className="brand" href="#top">{profile.brand}</a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item} href={`#${item}`}>{item}</a>
          ))}
        </div>
        <a className="nav-cta" href="#联系">联系我</a>
      </nav>

      <div className="hero-content wrap">
        <div className="hero-text">
          <p className="eyebrow">{profile.role}</p>
          <h1>{profile.heroTitle}</h1>
          <p className="hero-copy">{profile.heroIntro}</p>
          <div className="hero-actions">
            <a className="primary" href="#项目">查看项目</a>
            <a className="secondary" href="#经历">了解经历</a>
          </div>
        </div>
        <a className="hero-photo" href={profile.photo} target="_blank" rel="noreferrer" aria-label="打开个人照片大图">
          <img src={profile.photo} alt={`${profile.name}个人照片`} />
        </a>
      </div>

      <div className="hero-footer wrap">
        <span>Portfolio Website / 2026</span>
        <span>{profile.footerNote}</span>
      </div>
    </section>
  );
}
