import { skillGroups, strengths } from '../data/siteContent.js';

export default function Strengths() {
  return (
    <section className="section strengths" id="优势">
      <div className="wrap">
        <p className="section-kicker">CAPABILITY</p>
        <h2>个人优势</h2>
        <div className="strength-grid">
          {strengths.map((item) => (
            <article className="strength-card" key={item.title}>
              <span />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>

        <div className="skill-board">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div>
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
