export const ProjectCard = () => {
  return (
    <div className="grid grid-cols-12 gap-2 items-center">
      <div className="col-start-7 col-end-[-1] row-start-1 row-end-[-1] text-right">
        <p className="my-3 text-primary-500 font-mono text-paragraph font-normal relative z-10">
          Featured Project
        </p>
        <h3 className="mb-5">
          <a
            className="transition-colors hover:text-primary-500 hover:transition-colors text-project-title font-semibold relative z-10"
            href="#"
            target="_blank"
          >
            Nome do Projeto
          </a>
        </h3>
        <p className="p-6 bg-neutral-800 rounded relative z-10 hover:shadow-lg transition-shadow hover:transition-shadow text-neutral-400 text-paragraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          eaque blanditiis veniam impedit eveniet molestiae necessitatibus
          dicta, excepturi velit dolorem corrupti perferendis aspernatur
          consequuntur nobis rerum sapiente quidem qui? Nulla?
        </p>
        <ul className="relative z-10 justify-end font-mono flex flex-wrap gap-x-5 gap-y-3 mt-6 mb-3">
          <li>React</li>
          <li>Styled Components</li>
          <li>Express</li>
          <li>Vercel</li>
        </ul>
        <ul className="relative z-10">
          <li>
            <a href="#">Icon Github</a>
          </li>
          <li>
            <a href="#">External Link</a>
          </li>
        </ul>
      </div>
      <a
        href="#"
        className="group col-start-1 col-end-8 row-start-1 row-end-[-1]"
        title="Nome do Projeto"
      >
        <div className="inline-block relative after:h-full after:w-full after:absolute after:top-0 after:bg-primary-500/70 rounded after:rounded group-hover:after:bg-transparent after:transition-all after:duration-300 group-hover:shadow-lg">
          <img
            className="grayscale group-hover:grayscale-0 transition-all duration-300"
            src="https://v4.brittanychiang.com/static/3936989a99991beb6d649d7a7039df60/f47db/demo.avif"
            alt=""
          />
        </div>
      </a>
    </div>
  )
}
