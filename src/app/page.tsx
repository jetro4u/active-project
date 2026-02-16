// src/app/(public)/page.tsx
import MainNavbar from '@/components/Layouts/Navigations/MainNavbar';
import MainFooter from '@/components/Layouts/Footer/MainFooter';
import Banner from '@/components/Home/Banner';
import Funfacts from '@/components/Home/Funfacts';
import About from '@/components/Home/About';
import AuthorityRanking from '@/components/Home/AuthorityRanking';
import Features from '@/components/Home/Features';
import Services from '@/components/Home/Services';
import WorkingProcess from '@/components/Home/WorkingProcess';
import CaseStudies from '@/components/Home/CaseStudies';
import Team from '@/components/Home/Team';
import PartnerStyle1 from '@/components/Partners/PartnerStyle1';
import Faq from '@/components/Home/Faq';
import HelpDesk from '@/components/Home/HelpDesk';
import Blog from '@/components/Home/Blog';
import SubscribeStyle1 from '@/components/Common/SubscribeStyle1';
import GetStarted from '@/components/Common/GetStarted';
import { getFeaturedTeamMembers } from '@/app/(public)/(pages)/team/api/services/getTeams';

export default async function HomePage() {
  const featuredMembers = await getFeaturedTeamMembers(5);
  return (
    <>
      <MainNavbar enableMegaMenu showSearch />
      
      <main>
        {/* Hero Section - Deep Blue Gradient */}
        <Banner />
        
        {/* Credibility Speed Bump - Gradient */}
        <Funfacts />
        
        {/* Story/Mission - Soft Background */}
        <About />
        
        {/* Authority Proof - Tinted Background */}
        <AuthorityRanking />
        
        {/* Differentiators - White Background */}
        <Features />
        
        {/* Tangible Deliverables - Soft Background */}
        <Services />
        
        {/* Transparency & Process - Soft Background */}
        <WorkingProcess />
        
        {/* Social Proof - Gradient Background */}
        <CaseStudies />
        
        {/* Trust Moat - White Background */}
        <Team featuredMembers={featuredMembers} />
        
        {/* Borrowed Trust - Soft Background */}
        <PartnerStyle1 />
        
        {/* Objection Handling - White Background */}
        <Faq />
        
        {/* Support Safety Net - White Background */}
        <HelpDesk />
        
        {/* Education & Depth - Soft Background */}
        <Blog />
        
        {/* Retain Interest - Soft Background */}
        <SubscribeStyle1 />
        
        {/* Final Conversion Push - Dark Gradient */}
        <GetStarted 
          title="Ready to dominate AI search?"
          description="Join 400+ brands using GEO to turn attention into citations—and citations into growth."
          primaryButtonText="Start Free Trial"
          secondaryButtonText="Schedule Demo"
        />
      </main>
      
      <MainFooter />
    </>
  );
}