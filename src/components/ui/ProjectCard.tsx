type ProjectCardProps = {
  title: string
  description: string
  status?: string
}

export default function ProjectCard({
  title,
  description,
  status,
}: ProjectCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-black/10 bg-white/65 p-8 transition duration-300 hover:-translate-y-0.5 hover:border-black/20 md:p-10">
      {status ? (
        <p className="mb-8 text-[11px] uppercase tracking-[0.18em] text-black/45">
          {status}
        </p>
      ) : null}

      <h3 className="max-w-3xl text-2xl leading-tight tracking-[-0.03em] text-[#181818] md:text-[2rem]">
        {title}
      </h3>

      <p className="mt-4 max-w-2xl text-base leading-7 text-black/65 md:text-lg md:leading-8">
        {description}
      </p>
    </article>
  )
}
