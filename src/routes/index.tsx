import { Box } from 'styled-system/jsx'
import { Hero } from '~/components/Hero'
import { CaseStudies } from '~/components/CaseStudies'
import { WhyChooseUs } from '~/components/WhyChooseUs'
import { Workflow } from '~/components/Workflow'
import { Testimonials } from '~/components/Testimonials'
import { FAQ } from '~/components/FAQ'

export default function Home() {
  return (
    <Box minH="100vh" bg="white">
      <Hero />
      <CaseStudies />
      <WhyChooseUs />
      <Workflow />
      <Testimonials />
      <FAQ />
    </Box>
  )
}


// https://consult.crowdytheme-demo.com/business-coach/
// https://reactheme.com/entro/construction/

/* 
faq
contact
blog
*/