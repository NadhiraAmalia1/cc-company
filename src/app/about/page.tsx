import CompanyHistorySection from '@/components/about/CompanyHistorySection'
import TeamIntroSection from '@/components/about/TeamIntroSection'
import CultureSection from '@/components/about/CultureSection'

export const metadata = {
  title: 'About Us | Captiera',
  description: 'Discover the story, team, and values behind Captiera – a visual photo agency.',
}

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      <CompanyHistorySection />
      <TeamIntroSection />
      <CultureSection />
    </main>
  )
}