export default function Gallery(){
  const imgs = new Array(6).fill(0).map((_,i)=>`/assets/job-${i+1}.jpg`);
  return (
    <section className="mt-8">
      <h4 className="font-semibold mb-3">Recent jobs</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {imgs.map((s,i)=>(
          <div key={i} className="aspect-video bg-gray-100 rounded overflow-hidden">
            <img src={s} alt={`job ${i+1}`} className="w-full h-full object-cover"/>
          </div>
        ))}
      </div>
    </section>
  );
}
