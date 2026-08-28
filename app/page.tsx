import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, GraduationCap, Handshake, UsersRound } from "lucide-react";
import { SiteFooter, SiteHeader } from "./site-shell";

const services = [
  { icon: GraduationCap, title: "Professional Training", text: "Practical, industry-relevant programmes that strengthen technical, leadership and workplace capability." },
  { icon: UsersRound, title: "Human Capacity Development", text: "Structured learning experiences that help people and teams perform with clarity, confidence and impact." },
  { icon: BriefcaseBusiness, title: "Hiring Solutions", text: "Thoughtful talent sourcing and selection support that connects organisations with people who fit the role." },
  { icon: Handshake, title: "Consultancy", text: "Clear, context-aware advice that turns organisational challenges into practical plans and measurable progress." },
];

export default function Home() {
  return <><SiteHeader/><main>
    <section className="hero"><div className="heroGlow"/><div className="shell heroGrid"><div className="heroCopy"><p className="eyebrow">People. Skills. Performance.</p><h1>Building talent that moves organisations forward.</h1><p className="heroLead">EXY Global equips professionals, strengthens teams and helps organisations find the right people to achieve more.</p><div className="buttonRow"><Link className="button coral" href="/services">Explore our services <ArrowRight size={18}/></Link><Link className="button ghost" href="/contact">Talk to our team</Link></div></div><div className="heroVisual"><img src="/exy-global-hero.png" alt="African professionals collaborating in a modern training session"/><div className="floatCard"><span>What we develop</span><strong>Capability that delivers.</strong></div></div></div></section>
    <section className="reasonBand"><div className="shell reasonGrid"><div><p className="eyebrow coralText">Why EXY Global exists</p><h2>To unlock human potential and help organisations perform at their best.</h2></div><p>We bring learning, talent and business insight together—creating practical solutions for the realities of today’s Nigerian workplace.</p></div></section>
    <section className="section shell"><div className="sectionHead"><div><p className="eyebrow coralText">What we do</p><h2>Solutions built around people</h2></div><Link className="textLink" href="/services">View all services <ArrowRight size={17}/></Link></div><div className="serviceGrid">{services.map(({icon: Icon, title, text}, i) => <article className="serviceCard" key={title}><span className="serviceNum">0{i+1}</span><Icon size={27}/><h3>{title}</h3><p>{text}</p><Link href="/services">Learn more <ArrowRight size={15}/></Link></article>)}</div></section>
    <section className="impactSection"><div className="shell impactGrid"><div><p className="eyebrow">Our approach</p><h2>We listen.<br/>We design.<br/><em>We deliver.</em></h2></div><div className="impactSteps"><div><span>01</span><h3>Understand the need</h3><p>We begin with your goals, people and operating context.</p></div><div><span>02</span><h3>Build the right solution</h3><p>We shape training, hiring or advisory support around the real challenge.</p></div><div><span>03</span><h3>Create lasting value</h3><p>We focus on useful outcomes—not activity for activity’s sake.</p></div></div></div></section>
    <section className="cta shell"><div><p className="eyebrow">Ready to grow?</p><h2>Let’s build your next capability advantage.</h2></div><Link className="button white" href="/contact">Start a conversation <ArrowRight size={18}/></Link></section>
  </main><SiteFooter/></>;
}
