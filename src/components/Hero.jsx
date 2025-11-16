import React, {useState} from "react";
export default function Hero(){
  const [phone,setPhone]=useState("");
  const submit = async(e)=>{
    e.preventDefault();
    // POST to CRM webhook -- replace URL
    fetch("CRM_WEBHOOK_URL",{
      method:"POST", headers:{"Content-Type":"application/json"},
      body: JSON.stringify({phone,service:"Emergency",timestamp:Date.now()})
    });
    // local confirmation
    alert("Request received — our dispatcher will call you now.");
    setPhone("");
  };

  return (
    <section className="bg-gradient-to-r from-white to-gray-50 py-8">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold">Emergency Plumbers — VLV ASSOCIATES</h1>
        <p className="mt-2">Fast local response for repairs, installations & renovations. Transparent pricing — same-day slots available.</p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="tel:+91XXXXXXXXXX" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md">Call Now — 24/7</a>

          <form onSubmit={submit} className="flex gap-2">
            <input aria-label="phone" required value={phone} onChange={e=>setPhone(e.target.value)}
              className="px-3 py-2 border rounded-md" placeholder="Your phone number" />
            <button className="px-4 py-2 bg-green-600 text-white rounded-md">Request Service</button>
          </form>
        </div>

        <div className="mt-4 flex justify-center gap-4 items-center text-sm">
          <div>⭐ 4.9 (1,200+ reviews)</div>
          <div className="px-2 py-1 bg-gray-100 rounded">Licensed & Insured</div>
          <div className="px-2 py-1 bg-gray-100 rounded">Same-day service</div>
        </div>

      </div>
    </section>
  );
}
