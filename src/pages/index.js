import * as React from "react"
import Particles from 'react-tsparticles'
import linkedinlogo from '../assets/linkedinlogo.svg'
import githublogo from '../assets/githublogo.svg'

const links = {
  linkedin: "https://linkedin.com/in/peter-marshall-uw",
  github: "https://github.com/peterdmarshall"
};

// markup
const IndexPage = () => {
  const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <main className="w-screen h-screen">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="fixed w-screen h-screen"
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 3,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="min-h-full min-w-full absolute top-0 flex flex-col items-center justify-center">
        <p className="text-3xl md:text-5xl text-white font-bold">Peter Marshall</p>
        <p className="text-lg md:text-2xl text-white mt-2">Software Developer</p>
        <div className="flex flex-row mt-6 md:mt-10">
          <a href={links.linkedin}>
            <img className="w-10 h-10 md:w-12 md:h-12 mx-1" src={linkedinlogo} alt={links.linkedin} />
          </a>
          <a href={links.github}>
            <img className="w-10 h-10 md:w-12 md:h-12 mx-1" src={githublogo} alt={links.github} />
          </a>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
