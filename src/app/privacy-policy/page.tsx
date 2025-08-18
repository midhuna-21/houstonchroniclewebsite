import type { Metadata } from "next";
import Head from 'next/head';
import { ShieldCheck, EyeOff, Mail, Lock, ExternalLink, AlertTriangle, HelpCircle } from 'lucide-react';
import SecondHeader from "@/components/SecondHeader";

export async function generateMetadata(): Promise<Metadata> {

    const siteUrl = "https://www.tangentweekly.com";
    const categoryUrl = `${siteUrl}/privacy-policy`;

    return {
        title: "Tangent Weekly – Privacy Policy",
        description: "Learn how Tangent Weekly protects your data, ensures transparency, and safeguards your information while delivering trusted news.",
        alternates: { canonical: categoryUrl },
        openGraph: {
            title: "Tangent Weekly – Privacy Policy",
            description: "Learn how Tangent Weekly protects your data, ensures transparency, and safeguards your information while delivering trusted news.",
            url: "https://www.tangentweekly.com/privacy-policy",
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
            title: "Tangent Weekly – Privacy Policy",
            description: "Learn how Tangent Weekly protects your data, ensures transparency, and safeguards your information while delivering trusted news.",
            images: "https://www.tangentweekly.com/images/tangent-logo.webp",
            site: '@TangentWeekly',
            creator: 'Stephen M. Knowles',
        },
    };
}

export default function PrivacyPolicy() {
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
                                    Our Privacy Promise
                                </h1>

                                <hr className="mb-4" />

                                {/* Intro */}
                                <p className="fs-6 text-secondary mb-4">
                                    Our commitment to clarity doesn’t stop with our articles. We believe you should know exactly what happens with your information when you visit Tangent Weekly. This page is our promise to be transparent with you.
                                </p>
                                <p className="fs-6 text-secondary mb-4">
                                    There’s no jargon here. Just a straightforward conversation about your privacy.
                                </p>

                                {/* Core Principle */}
                                <div className="bg-white p-4 border rounded shadow-sm mb-5">
                                    <p className="fw-bold d-flex align-items-center mb-2" style={{ color: '#0d1a26' }}>
                                        <ShieldCheck size={20} className="me-2 text-success" />
                                        Our Core Principle: Your Privacy is Not a Product.
                                    </p>
                                    <p className="text-secondary fs-6 mb-0">
                                        Let's be crystal clear: <strong>We do not and will not ever sell your data.</strong> Our business is journalism, supported by our readers, not by selling out your privacy.
                                    </p>
                                </div>

                                {/* What information we collect */}
                                <h2 className="fw-semibold mb-3" style={{ color: '#0d1a26' }}>What information do you actually collect?</h2>
                                <div className="d-grid gap-4 mb-5">
                                    {[
                                        {
                                            // icon: <EyeOff size={20} className="me-2 text-primary" />,
                                            title: "To understand what stories you like:",
                                            description: "We use a standard tool (Google Analytics) to see which articles get read the most and how people find our site. This is completely anonymous. We see \"an article was read 1,000 times,\" not \"Jane Smith read this article.\" This helps us figure out what kind of reporting is most valuable to you."
                                        },
                                        {
                                            icon: <Mail size={20} className="me-2 text-warning" />,
                                            title: "If you sign up for our newsletter:",
                                            description: "We ask for your email address. We use it for one thing: to send you the newsletter you asked for. Every email we send has an \"unsubscribe\" link at the bottom. No hoops to jump through."
                                        },
                                        {
                                            icon: <Lock size={20} className="me-2 text-danger" />,
                                            title: "To make the site work smoothly:",
                                            description: "Like virtually all websites, we use cookies. They’re tiny files that help our site remember your preferences, like making sure we don’t annoy you with the same pop-up over and over. You can always clear these in your browser settings."
                                        }
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-white p-4 border rounded shadow-sm">
                                            <p className="fw-bold d-flex align-items-center mb-2" style={{ color: '#0d1a26' }}>
                                                {item.icon} {item.title}
                                            </p>
                                            <p className="text-secondary fs-6 mb-0">{item.description}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Do you share info */}
                                <p className="fw-semibold mb-3" style={{ color: '#0d1a26' }}>Do you share my information with anyone?</p>
                                <p className="fs-6 text-secondary mb-3">
                                    We don't share your personal information. We do, however, use a few essential, trusted tools to run Tangent Weekly:
                                </p>
                                <ul className="fs-6 text-secondary mb-4">
                                    <li>The company that sends our newsletter (like Mailchimp or Substack).</li>
                                    <li>The analytics tool mentioned above (Google Analytics).</li>
                                    <li>The company that hosts our website.</li>
                                </ul>
                                <p className="fs-6 text-secondary mb-5">
                                    We chose these services because they are reputable and respect privacy. We only give them the bare minimum information they need to do their job for us.
                                </p>

                                {/* Your rights */}
                                <div className="bg-white p-4 border rounded shadow-sm mb-5">
                                    <p className="fw-bold d-flex align-items-center mb-2" style={{ color: '#0d1a26' }}>
                                        <ShieldCheck size={20} className="me-2 text-primary" /> What are my rights?
                                    </p>
                                    <ul className="fs-6 text-secondary mb-0">
                                        <li>You can block cookies and trackers using browser tools.</li>
                                        <li>You can unsubscribe from our emails with a single click.</li>
                                        <li>If you've ever contacted us and want us to delete your email or any other information, just ask. Send a note to <a href="mailto:hello@tangentweekly.com" className="fw-semibold text-decoration-underline text-dark">hello@tangentweekly.com</a>, and we will take care of it.</li>
                                    </ul>
                                </div>

                                {/* Other stuff */}
                                <p className="fw-semibold mb-3" style={{ color: '#0d1a26' }}>The Other Stuff, Explained Simply</p>
                                <ul className="fs-6 text-secondary mb-5">
                                    <li><ExternalLink size={16} className="me-2 text-primary" /> <strong>External Links:</strong> Our articles contain links to other sources and websites. If you click on one, you'll be on their site, and our privacy promise won't apply there.</li>
                                    <li><AlertTriangle size={16} className="me-2 text-warning" /> <strong>Kids:</strong> We don't knowingly collect any data from children under 13.</li>
                                    <li><Lock size={16} className="me-2 text-danger" /> <strong>Security:</strong> We take security seriously, but no website is 100% impenetrable. We do our best to protect the little information we have.</li>
                                </ul>

                                {/* Questions */}
                                <div className="p-4 rounded" style={{ backgroundColor: '#f1f5f9' }}>
                                    <p className="fw-bold d-flex align-items-center mb-2" style={{ color: '#0d1a26' }}>
                                        <HelpCircle size={20} className="me-2 text-info" /> Still Have Questions? Please Ask.
                                    </p>
                                    <p className="fs-6 text-secondary mb-2">
                                        We're journalists. We believe in transparency. If anything here is unclear or if you have any concerns at all, we want to hear from you.
                                    </p>
                                    <p className="fs-6 text-secondary mb-0">
                                        Send us an email at <a href="mailto:hello@tangentweekly.com" className="fw-semibold text-decoration-underline text-dark">hello@tangentweekly.com</a>. We’ll get back to you with a straight answer.
                                    </p>
                                </div>

                                {/* Last Updated */}
                                {/* <p className="fs-6 text-secondary mt-4"><em>Last Updated: [Date you publish the page]</em></p> */}

                            </div>
                        </div>
                    </div>
                </section>
                <div style={{ marginBottom: '3rem' }} />

            </main>
        </>
    );
}
