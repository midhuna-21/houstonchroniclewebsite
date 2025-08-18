'use client';

import NavigationSection from '@/components/NavigationSection';
import FirstHomeSection from '@/components/FirstHomeSection';
import SecondHomeSection from '@/components/SecondHomeSection';
import EditorsPicksSection from '@/components/EditorsPick';
import ThirdHomeSection from '@/components/ThirdHomeSection';
import CarouselSection from '@/components/CarouselSection';
import ContentLayout from '@/components/ContentLayout';
import FeatureSection from '@/components/FeatureSection';
import TrendingCard from '@/components/TrendingCard';
import DailyPuzzles from '@/components/DailyPuzzles';
import MostPopularList from '@/components/MostPopularlist';
import EditorialBoard from '@/components/EditorialBoard';
import NewsText from '@/components/NewsText';
import LottoCard from '@/components/LottoCard';
import BusinessData from '../../public/data/business.json';
import EducationData from '../../public/data/education.json';
import HealthData from '../../public/data/health.json';
import ScienceData from '../../public/data/science.json';
import PoliticsData from '../../public/data/politics.json';
import SportsData from '../../public/data/sports.json';
import TechnologyData from '../../public/data/technology.json';
import Script from "next/script";
import SectionWrapper from '@/components/SectionWrapper';
import Header from '@/components/Header';


export default function Home() {
  return (
    <main>
      <Script
        id="structured-data-newsmediaorganization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "NewsMediaOrganization",
              "@id": "https://www.tangentweekly.com/#organization",
              name: "Tangent Weekly",
              url: "https://www.tangentweekly.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.tangentweekly.com/images/tangent-logo.webp",
                width: 1024,
                height: 1024,
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                areaServed: "US",
                availableLanguage: ["English"],
              },

              sameAs: ["https://www.tangentweekly.com"],
            },
            null,
            2
          ),
        }}
      />

      <Script
        id="structured-data-site-navigation"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              name: [
                "Home",
                "Business",
                "Politics",
                "Technology",
                "Science",
                "Sports",
                "Health",
                "Education",
                "Entertainment"
              ],
              url: [
                "https://www.tangentweekly.com",
                "https://www.tangentweekly.com/business/",
                "https://www.tangentweekly.com/technology/",
                "https://www.tangentweekly.com/politics/",
                "https://www.tangentweekly.com/health/",
                "https://www.tangentweekly.com/science/",
                "https://www.tangentweekly.com/sports",

              ],
            },
            null,
            2
          ),
        }}
      />

      <Header />
      <div className="bg-white">
        <NavigationSection />
        <div className="d-flex justify-content-center mt-2">
        </div>

        <div
          className="container px-3 px-lg-5 content"
          style={{
            paddingLeft: 0,
            paddingRight: 0,
            marginTop: '4rem',
          }}
        >

          <div className="mb-5">
            <FirstHomeSection data={[PoliticsData[15], HealthData[12], SportsData[0]]} />
            <hr
              style={{
                border: 'none',
                borderTop: '1px solid #ccc',
                margin: '2rem 0',
              }}
            />
            <FirstHomeSection data={[EducationData[1], BusinessData[9], TechnologyData[0]]} />
          </div>
          <div className="row">
            <div className="col-12 col-lg-9">
              <SecondHomeSection data={[PoliticsData[0], PoliticsData[1], SportsData[7], BusinessData[1], HealthData[1], SportsData[1]]} />

              <div className="mb-5">
                <SectionWrapper title="Editor's Pick">
                  <EditorsPicksSection data={EducationData} />
                </SectionWrapper>
              </div>
              <div className="mb-5">
                <ThirdHomeSection data={[HealthData[2], SportsData[2], ScienceData[6], PoliticsData[3], TechnologyData[3]]} />
              </div>
            </div>

            <div className="col-12 col-lg-3">
              <MostPopularList data={[PoliticsData[4], TechnologyData[4], HealthData[24], SportsData[25], ScienceData[4]]} />
            </div>
          </div>


          <div>
            <CarouselSection data={[ScienceData[2], TechnologyData[9], HealthData[3]]} />
          </div>

          <div className="row">
            <div className="col-12 col-lg-9">
              <ContentLayout
                data={{
                  main: SportsData[3],
                  side: [SportsData[5], SportsData[9]],
                  bottomCards: [SportsData[22], SportsData[8], SportsData[13], SportsData[23]],
                }}
              />
            </div>

            <div className="col-12 col-lg-3">
              <TrendingCard
                data={{
                  section: "",
                  items: [SportsData[11], SportsData[12], SportsData[13], SportsData[14]].map(article => ({
                    image: article.image,
                    title: article.title,
                    description: article.shortdescription,
                    slug: article.slug,
                    date: article.date,
                    category: article.category
                  })),
                }}
              />
            </div>
          </div>


          <div className="row">
            <div className="col-12 col-lg-9">
              <ContentLayout
                data={{
                  main: BusinessData[20],
                  side: [BusinessData[4], BusinessData[24]],
                  bottomCards: [BusinessData[23], BusinessData[14], BusinessData[19], BusinessData[22]],
                }}
              />

              <div className="mt-4">
                <FeatureSection
                  data={{
                    section: 'Science',
                    articles: [ScienceData[8], ScienceData[7], ScienceData[28], ScienceData[9], ScienceData[10]]
                  }}
                />
              </div>
            </div>

            <div className="col-12 col-lg-3">
              <TrendingCard
                data={{
                  section: "",
                  items: [BusinessData[10], BusinessData[11], BusinessData[12], BusinessData[13]].map(article => ({
                    image: article.image,
                    title: article.title,
                    description: article.shortdescription,
                    slug: article.slug,
                    date: article.date,
                    category: article.category
                  })),
                }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-lg-9">
              <ContentLayout
                data={{
                  main: PoliticsData[6],
                  side: [PoliticsData[5], PoliticsData[13]],
                  bottomCards: [PoliticsData[7], PoliticsData[8], PoliticsData[9], PoliticsData[20]],
                }}
              />
            </div>
            <div className="col-12 col-lg-3">
              <EditorialBoard
                sectionTitle={''}
                data={[PoliticsData[11], PoliticsData[12], PoliticsData[25], PoliticsData[14]]}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-lg-9">
              <ContentLayout
                data={{
                  main: HealthData[14],
                  side: [HealthData[5], HealthData[18]],
                  bottomCards: [HealthData[7], HealthData[10], HealthData[27], HealthData[28]],
                }}
              />
              <div className="mt-4">
                <FeatureSection
                  data={{
                    section: 'Technology',
                    articles: [EducationData[8], EducationData[7], EducationData[28], EducationData[9], EducationData[10]]
                  }}
                />
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <NewsText data={HealthData} />
              <LottoCard data={HealthData[25]} />
            </div>
            <div className="col-12 col-lg-3">
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '3rem' }} />
        {/* <style jsx>{`
          .content {
            padding-left: 0;
            padding-right: 0;
            margin-top:2rem;
          }
          @media (min-width: 992px) {
            .content {
              padding-left: 7rem;
              padding-right: 7rem;
            }
          }
        `}</style> */}
      </div>
    </main>


  );
}
