import { graphicWorks, projects } from '../data/siteContent.js';

export default function Projects() {
  return (
    <section className="section projects" id="项目">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="section-kicker">SELECTED WORKS</p>
            <h2>精选项目</h2>
          </div>
          <p>基于实习与专业训练整理的作品方向，后续可继续替换为真实视频截图、海报图和项目详情页。</p>
        </div>

        <div className="project-grid featured-project-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${project.accent}`} key={project.title}>
              <div className="project-media-grid">
                {project.works.map((work) => (
                  <a href={work.image} target="_blank" rel="noreferrer" key={work.title}>
                    <img src={work.image} alt={work.title} />
                  </a>
                ))}
              </div>
              <div className="project-info">
                <div>
                  <span>0{index + 1}</span>
                  <span>{project.type}</span>
                  <span>{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="gallery-head">
          <p className="section-kicker">GRAPHIC WORKS</p>
          <h3>平面作品</h3>
        </div>
        <div className="artwork-grid">
          {graphicWorks.map((work) => (
            <article className="artwork-card" key={work.title}>
              <a href={work.image} target="_blank" rel="noreferrer">
                <img src={work.image} alt={work.title} />
              </a>
              <div>
                <span>{work.category}</span>
                <h4>{work.title}</h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
