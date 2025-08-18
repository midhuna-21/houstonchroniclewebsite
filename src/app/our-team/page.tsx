import SecondHeader from "@/components/SecondHeader";
import type { Metadata } from "next";
import Head from 'next/head';

export async function generateMetadata(): Promise<Metadata> {

    const siteUrl = "https://www.tangentweekly.com";
    const categoryUrl = `${siteUrl}/our-team`;

    return {
        title: "Tangent Weekly – Our Team",
        description: "Meet the Tangent Weekly team of journalists and editors delivering trusted reporting and analysis across politics, business, tech, health, and science.",
        alternates: { canonical: categoryUrl },
        openGraph: {
            title: "Tangent Weekly – Our Team",
            description: "Meet the Tangent Weekly team of journalists and editors delivering trusted reporting and analysis across politics, business, tech, health, and science.",
            url: "https://www.tangentweekly.com/our-team",
            siteName: "Tangent Weekly",
            images: [
                {
                    url: "https://www.tangentweekly.com/images/tangent-logo.webp",
                    width: 1200,
                    height: 630,
                    alt: "Tangent Weekly Logo",
                },
            ],
            type: "website",
        },
        twitter: {
            card: 'summary_large_image',
            title: "Tangent Weekly – Our Team",
            description: "Meet the Tangent Weekly team of journalists and editors delivering trusted reporting and analysis across politics, business, tech, health, and science.",
            images: "https://www.tangentweekly.com/images/tangent-logo.webp",
            site: '@TangentWeekly',
            creator: 'Stephen M. Knowles',
        },
    };
}

export default function OurTeam() {
    return (
        <>
            <SecondHeader />


            <main style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
                <section className="py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                {/* Page Title */}
                                <h1 className="text-center fw-bold mb-4" style={{ fontFamily: 'Georgia, serif', color: '#0d1a26' }}>
                                    Our Team
                                </h1>

                                <hr className="mb-4" />

                                {/* Intro */}
                                <p className="fs-6 text-secondary mb-5 text-center">
                                    We're a small, independent team. We believe you should know who's writing the news you read, so we want to introduce ourselves.
                                </p>

                                {/* Founder */}
                                <div className="mb-5 pb-4 border-bottom">
                                    <h2 className="fw-bold mb-2" style={{ color: '#0d1a26' }}>
                                        Founder & Editor-in-Chief
                                    </h2>
                                    <p className="fw-semibold mb-1">Stephen M. Knowles</p>
                                    <p className="fs-6 text-secondary mb-2">
                                        Stephen started Tangent Weekly because he was fed up with the noise. After years working in media, he saw a need for a place that wasn't chasing clicks or pushing a secret agenda.
                                        His mission is simple: to build a news source where honest, clear reporting always comes first.
                                    </p>
                                    <p className="fs-6">
                                        <a href="https://x.com/Stephenmknowles" target="_blank" className="text-decoration-underline text-dark fw-semibold">Stephen M. Knowles</a>
                                    </p>
                                </div>

                                {/* Journalist: Benedict */}
                                <div className="mb-5 pb-4 border-bottom">
                                    <p className="fw-semibold mb-1">Benedict Johnson</p>
                                    <p className="fs-6 text-secondary mb-2">
                                        You'll usually find Benedict digging into the fine print of state-level politics. He believes the most important stories aren't always the loudest ones.
                                        His job is to connect the dots between a decision made in a statehouse and its real-world impact on our communities.
                                    </p>
                                    <p className="fs-6">
                                        <a href="https://x.com/benedictjo63174" target="_blank" className="text-decoration-underline text-dark fw-semibold">Benedict Johnson</a>
                                    </p>
                                </div>

                                {/* Journalist: Daniel */}
                                <div className="mb-5 pb-4 border-bottom">
                                    <p className="fw-semibold mb-1">Daniel C. Smith</p>
                                    <p className="fs-6 text-secondary mb-2">
                                        When the economy feels confusing, Daniel is the person we turn to for clarity. He cuts through the jargon to explain what's really happening with business and finance.
                                        He’s focused on the human side of the economy—how big trends affect jobs, families, and small businesses.
                                    </p>
                                    <p className="fs-6">
                                        <a href="https://x.com/Da_niel_Smith" target="_blank" className="text-decoration-underline text-dark fw-semibold">Daniel C. Smith</a>
                                    </p>
                                </div>

                                {/* Journalist: Thomas */}
                                <div className="mb-5 pb-4 border-bottom">
                                    <p className="fw-semibold mb-1">Thomas A. Brennan</p>
                                    <p className="fs-6 text-secondary mb-2">
                                        Thomas tells the stories that others often miss. As our lead investigative journalist, he spends his time digging deep into issues of justice and accountability.
                                        He believes in journalism that gives a voice to the voiceless and holds power to account.
                                    </p>
                                    <p className="fs-6">
                                        <a href="https://x.com/Thomas_abrennan" target="_blank" className="text-decoration-underline text-dark fw-semibold">Thomas A. Brennan</a>
                                    </p>
                                </div>

                                {/* Journalist: Allen */}
                                <div className="mb-5 pb-4 border-bottom">
                                    <p className="fw-semibold mb-1">Allen J. Lewis</p>
                                    <p className="fs-6 text-secondary mb-2">
                                        Allen is our tech reality check. He looks past the industry buzzwords to ask a simple question:
                                        How will this new technology—from AI to policy changes—actually affect our privacy, our jobs, and our future?
                                    </p>
                                    <p className="fs-6">
                                        <a href="https://x.com/All_en_Lewis" target="_blank" className="text-decoration-underline text-dark fw-semibold">Allen J. Lewis</a>
                                    </p>
                                </div>

                                {/* Editorial Desk */}
                                <div className="mb-5">
                                    <p className="fw-bold mb-2" style={{ color: '#0d1a26' }}>
                                        Our Editorial Desk
                                    </p>
                                    <p className="fw-semibold mb-1">By Tangent Weekly Staff</p>
                                    <p className="fs-6 text-secondary mb-2">
                                        Sometimes, a story is a team effort. You’ll see the "Tangent Weekly Staff" byline on two types of articles:
                                    </p>
                                    <ul className="fs-6 text-secondary mb-2">
                                        <li><strong>Group Editorials:</strong> Written by several of our editors together, like site announcements or major explanatory guides.</li>
                                        <li><strong>News Briefs:</strong> Short, factual updates based on trusted sources like AP or official press releases. Verified but not authored by one journalist.</li>
                                    </ul>
                                </div>

                                {/* Contact CTA */}
                                <p className="fs-6 text-secondary mt-4">
                                    Have a story tip for the team? We'd love to hear from you.{" "}
                                    <a href="/contact" className="text-decoration-underline text-dark fw-semibold">
                                        Get in touch with us here
                                    </a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <div style={{ marginBottom: '3rem' }} />

            </main>
        </>
    );
}
