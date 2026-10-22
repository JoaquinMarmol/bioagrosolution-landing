import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/home/Hero';
import { ValuePillars } from '@/components/home/ValuePillars';
import { ProcessSection } from '@/components/home/ProcessSection';
import { CategoriesSection } from '@/components/home/CategoriesSection';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { WhyBioagrosolutions } from '@/components/home/WhyBioagrosolutions';
import { CropsPlanner } from '@/components/home/CropsPlanner';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <ValuePillars />
      <ProcessSection />
      <CategoriesSection />
      <FeaturedProducts />
      <CropsPlanner />
      <WhyBioagrosolutions />
      <FinalCTA />
    </>
  );
}
