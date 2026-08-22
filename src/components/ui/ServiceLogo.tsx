function fallbackLogos(service: any) {
  const techs = (service?.technologis_ref ?? []).filter((tech: any) => tech?.logo);
  const title = String(service?.Title || '').toLowerCase();

  if (title.includes('crm')) {
    return techs.slice(0, 3);
  }

  if (title.includes('backend')) {
    const node = techs.find((tech: any) => /node/i.test(tech?.name));
    return node ? [node] : techs.slice(0, 1);
  }

  return techs.slice(0, 1);
}

export function ServiceLogo({ service }: { service: any }) {
  const logos = fallbackLogos(service);

  if (service?.image) {
    return (
      <img
        src={service.image}
        alt={service?.Title}
        className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
      />
    );
  }

  if (logos.length) {
    return (
      <div className="flex items-center">
        {logos.map((tech: any, index: number) => (
          <img
            key={tech?._id || tech?.name || index}
            src={tech.logo}
            alt={tech.name}
            title={tech.name}
            className="h-10 w-10 rounded-xl border border-border bg-bg-main object-contain p-1 shadow-sm first:ml-0 -ml-2"
            style={{ zIndex: logos.length - index }}
          />
        ))}
      </div>
    );
  }

  return (
    <span className="px-1 text-sm font-bold tracking-tight text-primary">
      {service?.Title}
    </span>
  );
}
