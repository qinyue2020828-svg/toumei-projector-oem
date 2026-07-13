"use client";

import { FormEvent, useState } from "react";

const ASSET_BASE = "https://cdn.jsdelivr.net/gh/qinyue2020828-svg/toumei-projector-oem@main/public";

const products = [
  { name: "C Series", tag: "Pocket Outdoor", image: "products/c-series-v2.jpg", models: "C900 · C1000 · C2000", specs: "200 ANSI · 8000mAh · DLP-LINK 3D", detail: "One-hand portable projectors with Type-C power, 1.07:1 short throw and up to 190 minutes of battery life." },
  { name: "M Series", tag: "Outdoor 1080P", image: "products/m-series-v2.jpg", models: "M1 · M2", specs: "1080P · 300 ANSI · 15000mAh", detail: "Cup-sized DLP projectors with LiDAR autofocus, real-time keystone correction and an ultra-quiet 28dB cooling system." },
  { name: "S Series", tag: "Gimbal & Education", image: "products/s-series-v2.jpg", models: "S7 · S8 · S11 · S13", specs: "Up to 1000 ANSI · 20800mAh", detail: "Flexible gimbal projectors for home cinema, camping and smart education, available with triple-laser illumination." },
  { name: "X Series", tag: "Flagship Brightness", image: "products/x-series-v2.jpg", models: "X5 · X6", specs: "1080P · 1600 ANSI · HDR10", detail: "High-brightness DLP systems for meeting rooms and home theaters, with fast laser focus and wide-gamut imaging." },
  { name: "Q Series", tag: "LCD Home Theater", image: "products/q-series-v2.jpg", models: "Q3 · Q7", specs: "1080P · Up to 800 ANSI · Autofocus", detail: "Sealed optical engines, coated glass lenses and cinema-grade sound for dependable long-session viewing." },
  { name: "UST Series", tag: "Ultra Short Throw", image: "products/ust-series-v2.jpg", models: "S1 · S2", specs: "0.18:1 throw · 1000 ANSI · 110% BT.2020", detail: "True 1080P ultra-short-throw projectors, including a triple-laser model that creates 100 inches from just 23cm." },
];

const proof = [
  ["2013", "Founded in Shenzhen"], ["100+", "Intellectual properties"], ["20K+", "Monthly production capacity"], ["30+", "Export markets"],
];

export default function Home() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <header className="relative z-50 border-b border-white/10 bg-[#071a35]">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Toumei home">
            <img src={`${ASSET_BASE}/toumei-logo.png`} alt="Toumei" width="360" height="150" className="h-11 w-auto rounded-lg bg-white object-contain sm:h-12" />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex" aria-label="Main navigation">
            <a href="#products">Products</a><a href="#oem">OEM / ODM</a><a href="#about">About</a><a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange-400">Request a Quote</a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden bg-[#071a35]" aria-label="Toumei projector OEM and ODM">
        <h1 className="sr-only">Toumei DLP Projector OEM and ODM Manufacturer - Projection Engineered for Your Market</h1>
        <img src={`${ASSET_BASE}/toumei-brand-hero.png`} alt="Toumei - Projection engineered for your market, DLP projector OEM and ODM" width="1200" height="630" fetchPriority="high" className="h-auto w-full" />
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 px-5 md:grid-cols-4 lg:px-8">
          {proof.map(([value,label]) => <div key={label} className="px-4 py-8 text-center"><strong className="block text-3xl font-black text-[#0a2a52]">{value}</strong><span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</span></div>)}
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="eyebrow">Product Portfolio</p><h2 className="section-title">Built for every projection scenario.</h2></div>
          <p className="max-w-xl leading-7 text-slate-600">Portable DLP, high-brightness home theater, smart education and triple-laser UST platforms—ready for regional customization.</p>
        </div>
        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => <article key={p.name} className="product-card group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="relative aspect-[3/2] shrink-0 overflow-hidden bg-[#0b1930]"><img src={`${ASSET_BASE}/${p.image}`} alt={`Toumei ${p.name} projector family`} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.035]" /><span className="absolute left-5 top-5 rounded-full border border-white/10 bg-[#09274b]/90 px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur">{p.tag}</span></div>
            <div className="flex flex-1 flex-col p-6"><div className="flex min-h-8 items-center justify-between gap-4"><h3 className="text-2xl font-black text-[#08264a]">{p.name}</h3><span className="shrink-0 text-sm font-black tabular-nums text-orange-500">0{i+1}</span></div><p className="mt-2 min-h-5 text-sm font-bold text-slate-500">{p.models}</p><p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{p.detail}</p><div className="mt-6 min-h-10 border-t border-slate-100 pt-4 text-xs font-bold uppercase leading-5 tracking-wider text-orange-600">{p.specs}</div></div>
          </article>)}
        </div>
      </section>

      <section id="oem" className="bg-[#071a35] py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
          <div><p className="eyebrow text-orange-400">OEM / ODM Excellence</p><h2 className="section-title text-white">From an idea to a market-ready projector.</h2><p className="mt-6 leading-7 text-slate-300">A vertically integrated team connects optical design, software, hardware, industrial structure, molds and manufacturing—reducing handoffs and accelerating customization.</p><a href="#contact" className="mt-8 inline-flex rounded-full bg-orange-500 px-6 py-3 font-bold transition hover:-translate-y-1 hover:bg-orange-400">Start your OEM project</a></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[['01','Optical & Hardware','Professional optical systems, motherboard hardware design and thermal architecture.'],['02','Software & Interface','AOSP integration, smart calibration, streaming options and regional user experiences.'],['03','Industrial Design','Structural design, tooling and finish customization for a distinctive product identity.'],['04','Quality & Scale','Fine assembly, strict in-process inspection, aging tests and 20K+ monthly capacity.']].map(([n,t,d]) => <div key={n} className="rounded-2xl border border-white/10 bg-white/[.04] p-6 transition hover:-translate-y-1 hover:border-orange-400/40 hover:bg-white/[.07]"><span className="text-sm font-black text-orange-400">{n}</span><h3 className="mt-4 text-xl font-bold">{t}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{d}</p></div>)}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0b1930] shadow-2xl"><img src={`${ASSET_BASE}/products/x-series-v2.jpg`} alt="Toumei projector manufacturing portfolio" width="900" height="600" loading="lazy" className="aspect-[3/2] w-full object-cover object-center" /><div className="absolute bottom-5 right-5 min-w-40 rounded-2xl border border-white/15 bg-orange-500/95 px-6 py-5 text-white shadow-xl backdrop-blur"><strong className="block text-3xl font-black tabular-nums">10M+</strong><span className="mt-1 block text-[11px] font-bold uppercase tracking-wider">R&amp;D investment</span></div></div>
        <div className="lg:py-3"><p className="eyebrow">About Toumei</p><h2 className="section-title">Engineering trust into every image.</h2><p className="mt-6 leading-8 text-slate-600">Shenzhen Toumei Technology Co., Ltd. is one of China’s early high-tech enterprises in DLP smart projection. Since 2013, we have combined production, sales and R&amp;D to deliver intelligent projection and 3D imaging solutions worldwide.</p><p className="mt-4 leading-8 text-slate-600">Our operating quality and environmental management systems follow ISO 9001/14000 standards, with customer satisfaction, continuous innovation and precision manufacturing at the center.</p><div className="mt-8 grid grid-cols-1 gap-3 text-center sm:grid-cols-3">{[['Integrity','Accountable'],['Dedication','Committed'],['Appreciation','Collaborative']].map(([a,b]) => <div key={a} className="flex min-h-20 flex-col items-center justify-center rounded-xl border border-slate-100 bg-slate-50 p-4"><strong className="block text-sm text-[#08264a]">{a}</strong><span className="mt-1 text-xs text-slate-500">{b}</span></div>)}</div></div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="text-center"><p className="eyebrow">Partner Perspective</p><h2 className="section-title">Built around long-term cooperation.</h2><p className="mx-auto mt-4 max-w-2xl text-sm text-slate-500">Representative feedback themes from OEM/ODM cooperation.</p></div><div className="mt-12 grid gap-6 md:grid-cols-3">
          {[['Global Distributor','“The broad platform range—from portable DLP to UST laser—helps us serve multiple market segments with one manufacturing partner.”'],['Consumer Electronics Brand','“Toumei’s integrated engineering and production workflow makes feature and enclosure customization much more efficient.”'],['Regional Retail Partner','“Stable quality control, clear product positioning and responsive technical support give our team confidence at launch.”']].map(([role,quote]) => <figure key={role} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"><div className="text-orange-400">★★★★★</div><blockquote className="mt-5 leading-7 text-slate-700">{quote}</blockquote><figcaption className="mt-6 text-sm font-bold text-[#08264a]">{role}<span className="block text-xs font-normal text-slate-500">OEM / ODM cooperation</span></figcaption></figure>)}
        </div></div>
      </section>

      <footer id="contact" className="bg-[#051327] text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div><p className="eyebrow text-orange-400">Talk to the factory</p><h2 className="section-title text-white">Let’s build your next projector.</h2><p className="mt-5 max-w-lg leading-7 text-slate-300">Share your target market, product category and order requirements. Our team provides quick customization and 24-hour service.</p><div className="mt-8 space-y-4 text-sm text-slate-300"><p><b className="text-white">Phone</b><br />+86 755 2930 5877</p><p><b className="text-white">Address</b><br />5/F, Block A (East Building), Jinke Industrial Park, 310 Wuhe Avenue, Guanhu Street, Longhua District, Shenzhen, China</p><p><b className="text-white">Official website</b><br /><a className="text-orange-400 hover:text-orange-300" href="https://www.toumeipro.com">www.toumeipro.com</a></p></div></div>
          <form onSubmit={submit} className="grid gap-4 rounded-3xl bg-white p-6 text-slate-950 sm:grid-cols-2 sm:p-8">
            <label className="field">Name<input required name="name" autoComplete="name" placeholder="Your name" /></label><label className="field">Business email<input required type="email" name="email" autoComplete="email" placeholder="name@company.com" /></label><label className="field">Company<input required name="company" autoComplete="organization" placeholder="Company name" /></label><label className="field">Market<select name="market" defaultValue=""><option value="" disabled>Select target market</option><option>North America</option><option>Europe</option><option>Asia Pacific</option><option>Middle East & Africa</option><option>Latin America</option></select></label><label className="field sm:col-span-2">Project requirements<textarea required name="message" rows={4} placeholder="Product series, target quantity, customization and certification needs" /></label><button className="rounded-xl bg-orange-500 px-6 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange-400 sm:col-span-2">Submit RFQ</button>{sent && <p role="status" className="text-center text-sm font-semibold text-emerald-700 sm:col-span-2">Thank you. Your RFQ has been prepared for the Toumei team.</p>}
          </form>
        </div>
        <div className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-slate-500 sm:flex-row sm:justify-between lg:px-8"><span>© 2026 Shenzhen Toumei Technology Co., Ltd.</span><span>Truthfulness · Practicality · Quality · Efficiency</span></div></div>
      </footer>
    </main>
  );
}
