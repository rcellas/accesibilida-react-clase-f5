import "./Habilities.css"

function Habilities() {
  const skills = [
    {
      name: "HTML",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      alt: "Logo de HTML5"
    },
    {
      name: "CSS",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      alt: "Logo de CSS3"
    },
    {
      name: "JavaScript",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      alt: "Logo de JavaScript"
    },
    {
      name: "React",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "Logo de React"
    },
    {
      name:"Angular",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      alt: "Logo de Angular"
    },
    {
      name:"Astro",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg",
      alt: "Logo de Astro"
    },
    {
      name:"C#",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      alt: "Logo de C#"
    },
    {
      name: "TypeScript",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      alt: "Logo de TypeScript"
    },
    {
      name:"Java",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      alt: "Logo de Java"
    },
    {
      name: "SQL",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      alt: "Logo de SQL"
    },
    {
      name: "Spring boot",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      alt: "Logo de Spring boot"
    },
    {
      name: ".NET",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
      alt: "Logo de .NET"
    },
    {
      name: "Node.js",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      alt: "Logo de Node.js"
    },
    {
      name: "Git",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      alt: "Logo de Git"
    },
    {
      name: "Responsive Design",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      alt: "Icono de diseño responsive"
    }
  ];

  return (
    <section className="habilities" aria-labelledby="habilities-title">
      <h2 id="habilities-title" className="habilities__title">Habilidades de Programación Web</h2>
      <ul className="habilities__list">
        {skills.map((skill, index) => (
          <li key={index} className="habilities__item">
            <img 
              src={skill.image} 
              alt=""
              className="habilities__icon"
              loading="lazy"
              aria-hidden="true"
            />
            <span className="habilities__name">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Habilities