export default function Services(){
  const items=[
    {title:"Emergency Plumbing", desc:"Burst pipes, leaks — fast response"},
    {title:"Drain Cleaning", desc:"Jetting & camera diagnosis"},
    {title:"Water Heaters", desc:"Repair & tankless installation"},
    {title:"Bathroom Renovation", desc:"Plumbing for interiors"},
    {title:"Exterior Plumbing", desc:"Gutters, downpipes"},
    {title:"Dealers & Supplies", desc:"Wholesale materials & distribution"},
  ];
  return (
    <section className="mt-8 grid sm:grid-cols-3 gap-4">
      {items.map(i=>(
        <article key={i.title} className="p-4 border rounded-lg">
          <h3 className="font-semibold">{i.title}</h3>
          <p className="text-sm mt-1">{i.desc}</p>
          <a className="mt-3 inline-block text-blue-600" href="#">Learn more →</a>
        </article>
      ))}
    </section>
  );
}
