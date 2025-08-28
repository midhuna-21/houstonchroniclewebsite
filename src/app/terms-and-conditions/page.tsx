import type { Metadata } from "next";
import Head from 'next/head';
import { FileText, Share2, Ban, Scale, AlertTriangle, MessageCircle, Users } from 'lucide-react';
import SecondHeader from "@/components/SecondHeader";

export async function generateMetadata(): Promise<Metadata> {

    const siteUrl = "https://www.tangentweekly.com";
    const categoryUrl = `${siteUrl}/terms-and-conditions`;

    return {
        title: "Tangent Weekly – Terms & Conditions",
        description: "Read Tangent Weekly’s terms and conditions to understand our user agreement and policies for accessing news and analysis responsibly.",
        alternates: { canonical: categoryUrl },
        openGraph: {
            title: "Tangent Weekly – Terms & Conditions",
            description: "Read Tangent Weekly’s terms and conditions to understand our user agreement and policies for accessing news and analysis responsibly.",
            url: "https://www.tangentweekly.com/terms-and-conditions",
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
            title: "Tangent Weekly – Terms & Conditions",
            description: "Read Tangent Weekly’s terms and conditions to understand our user agreement and policies for accessing news and analysis responsibly.",
            images: "https://www.tangentweekly.com/images/tangent-logo.webp",
            site: '@TangentWeekly',
        },
    };
}

export default function TermsAndConditions() {
    return (
        <>
            <SecondHeader />


            <main style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
                <section className="py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">

                                {/* Heading */}
                                <h1 className="text-center fw-bold mb-4" style={{ fontFamily: 'Georgia, serif', color: '#0d1a26' }}>
                                    Our Agreement With You
                                </h1>

                                <hr className="mb-4" />

                                {/* Intro */}
                                <p className="fs-6 text-secondary mb-4">
                                    Let’s be honest: most "Terms and Conditions" pages are unreadable. They’re walls of text written by lawyers, for lawyers.
                                </p>
                                <p className="fs-6 text-secondary mb-4">
                                    That’s not our style.
                                </p>
                                <p className="fs-6 text-secondary mb-4">
                                    We’re the team from Tangent Weekly. We started this place because we were tired of the noise and the nonsense. That commitment to clarity has to include the "fine print," too. So this is our agreement with you, written in plain English.
                                </p>

                                {/* On Using Our Work */}
                                <div className="bg-white p-4 border rounded shadow-sm mb-5">
                                    <h2 className="fw-bold d-flex align-items-center mb-2" style={{ color: '#0d1a26' }}>
                                        <Share2 size={20} className="me-2 text-primary" /> On Using Our Work
                                    </h2>
                                    <p className="text-secondary fs-6 mb-3">
                                        We pour everything we have into our reporting. We’re proud of it, and we want you to share it.
                                    </p>
                                    <p className="text-secondary fs-6 mb-3">
                                        Please, post our articles on your social media. Email them to a friend. Talk about them. If you want to quote a section on your own site or in a newsletter, go for it. All we ask is that you give clear credit to <strong>Tangent Weekly</strong> and link back to the original story. That's the fair way to do it, and it helps other people find us.
                                    </p>
                                    <p className="text-secondary fs-6 mb-0">
                                        The one hard line we draw is this: please do not copy and paste an entire article and republish it. Our work is how we sustain this project. When it's reposted in full, it hurts our ability to keep going. If you have a special request, just ask us at <a href="mailto:hello@tangentweekly.com" className="fw-semibold text-decoration-underline text-dark">hello@tangentweekly.com</a>.
                                    </p>
                                </div>

                                {/* Journalists, Not Advisors */}
                                <div className="bg-white p-4 border rounded shadow-sm mb-5">
                                    <h2 className="fw-bold d-flex align-items-center mb-2" style={{ color: '#0d1a26' }}>
                                        <Scale size={20} className="me-2 text-success" /> We’re Journalists, Not Your Financial Advisor (or Lawyer)
                                    </h2>
                                    <p className="text-secondary fs-6 mb-3">
                                        We are obsessive about getting our facts right and helping you understand the world. But our reporting is not a substitute for professional advice. We can tell you the story behind a new economic policy, but we can't tell you how you should invest your money. We can investigate the justice system, but we can't give you legal counsel.
                                    </p>
                                    <p className="text-secondary fs-6 mb-0">
                                        Our job is to inform. Your big life decisions should be made with the help of a qualified professional who knows your specific situation.
                                    </p>
                                </div>

                                {/* Mistakes */}
                                <div className="bg-white p-4 border rounded shadow-sm mb-5">
                                    <h2 className="fw-bold d-flex align-items-center mb-2" style={{ color: '#0d1a26' }}>
                                        <AlertTriangle size={20} className="me-2 text-warning" /> On Mistakes
                                    </h2>
                                    <p className="text-secondary fs-6 mb-0">
                                        We are human. We will make them.
                                    </p>
                                    <p className="text-secondary fs-6 mb-0">
                                        When we do, we will own it. Our promise to you is that we will correct our errors as quickly and clearly as possible. We won’t hide them at the bottom of the page. Trust requires transparency, especially when we get something wrong.
                                    </p>
                                </div>

                                {/* Comment Section */}
                                <div className="bg-white p-4 border rounded shadow-sm mb-5">
                                    <h2 className="fw-bold d-flex align-items-center mb-2" style={{ color: '#0d1a26' }}>
                                        <MessageCircle size={20} className="me-2 text-info" /> If We Have a Comment Section
                                    </h2>
                                    <p className="text-secondary fs-6 mb-3">
                                        The rule will be simple: respect each other. We’re here to discuss ideas, not attack people. We will have zero tolerance for hate, spam, or abuse. This is a place for curiosity, and we will protect that.
                                    </p>
                                </div>

                                {/* Closing */}
                                <p className="fs-6 text-secondary mb-4">
                                    That’s it. That's the agreement. It’s a foundation of mutual respect. You respect the work we do, and we respect you as our reader.
                                </p>
                                <p className="fs-6 text-secondary mb-5">
                                    Thanks for being here.
                                </p>
                                <p className="fs-6 text-secondary mb-5"><strong>The Team at Tangent Weekly</strong></p>

                                {/* Last Updated */}
                                {/* <p className="fs-6 text-secondary"><em>Last Updated: [Date you publish the page]</em></p> */}

                            </div>
                        </div>
                    </div>
                </section>
                <div style={{ marginBottom: '3rem' }} />

            </main>
        </>
    );
}
