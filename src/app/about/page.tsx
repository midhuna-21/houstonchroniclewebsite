import Head from 'next/head';

export default function About() {
    return (
        <>
            <Head>
                <title>About Us – Tangent Weekly: Independent U.S. News & Journalism</title>
                <meta
                    name="description"
                    content="Discover how Tangent Weekly delivers independent, fact-based journalism focused on U.S. politics, communities, and culture — with no paywalls or clickbait."
                />
            </Head>

            <main style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
                <section className="py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                {/* Heading */}
                                <h1 className="text-center fw-bold mb-4" style={{ fontFamily: 'Georgia, serif', color: '#0d1a26' }}>
                                    About Us
                                </h1>

                                <hr className="mb-4" />

                                {/* Intro Paragraphs */}
                                <p className="fs-6 text-secondary mb-4 fst-italic">
                                    Hi there. We're glad you're here.
                                </p>

                                <p className="fs-6 text-secondary mb-4">
                                    If you've ever felt overwhelmed by the endless scroll of headlines, hot takes, and online arguments, you're in the right place.
                                </p>

                                <p className="fs-6 text-secondary mb-4">
                                    We started Tangent Weekly because we felt it too. We're journalists who grew tired of the noise and believe there has to be a better way to do the news — a way that respects your time, your intelligence, and your need for the straight story.
                                </p>

                                {/* What is Tangent Weekly? */}
                                <div className="bg-light rounded p-4 mb-5">
                                    <p className="fw-bold mb-3" style={{ color: '#0d1a26' }}>
                                        What is Tangent Weekly?
                                    </p>
                                    <p className="fs-6 text-secondary mb-0">
                                        Think of us as an independent workshop, not a giant factory. We're a small team dedicated to one simple idea: <strong>context matters.</strong> We focus on the stories that shape American life, and we take the time to explain not just <em>what</em> happened, but <em>why</em> it's important.
                                    </p>
                                </div>

                                <p className="fs-6 text-secondary mb-4">
                                    We don't have a corporate headquarters or a billionaire owner. That means we're accountable to only one group: <strong>you</strong>.
                                </p>

                                {/* Our Promise */}
                                <p className="fw-bold mb-3" style={{ color: '#0d1a26' }}>
                                    Our Promise to You
                                </p>

                                <div className="p-4 border rounded bg-white mb-4">
                                    <p className="fw-semibold mb-2" style={{ color: '#1c2146' }}>
                                        Honest Reporting, No Hidden Agenda
                                    </p>
                                    <p className="fs-6 text-secondary mb-0">
                                        We follow the facts, wherever they lead. Our only goal is to give you a clear picture of what's happening, so you can make up your own mind.
                                    </p>
                                </div>

                                <div className="p-4 border rounded bg-white mb-4">
                                    <p className="fw-semibold mb-2" style={{ color: '#1c2146' }}>
                                        Journalism, Not Clickbait
                                    </p>
                                    <p className="fs-6 text-secondary mb-0">
                                        You won't find outrage-for-profit here. We write stories that are important, not just stories that are loud.
                                    </p>
                                </div>

                                <div className="p-4 border rounded bg-white mb-5">
                                    <p className="fw-semibold mb-2" style={{ color: '#1c2146' }}>
                                        A Commitment to Getting It Right
                                    </p>
                                    <p className="fs-6 text-secondary mb-0">
                                        We're human. When we make a mistake, we'll own it, fix it, and be transparent about it. That's a promise.
                                    </p>
                                </div>

                                {/* Closing Quote */}
                                <div className="bg-light rounded p-4 mb-4">
                                    <p className="fs-6 mb-0" style={{ color: '#34495e' }}>
                                        We believe that a well-informed public is the most powerful force for good. Thank you for being part of that. Thank you for taking the time to read our work.
                                    </p>
                                </div>

                                <p className="fs-6 text-secondary mb-5 fst-italic text-center">
                                    We're genuinely glad you found us.
                                </p>

                                {/* CTA Links */}
                                <div className="p-4 border rounded shadow-sm bg-white">
                                    <p className="fw-bold mb-3 text-center" style={{ color: '#0d1a26' }}>
                                        Get to Know Us Better
                                    </p>
                                    <p className="fs-6 text-secondary mb-3">
                                        This is our story. The people who write it every day are the heart of what we do — you can{' '}
                                        <a href="/team" className="fw-semibold text-decoration-underline text-dark">
                                            meet our team here
                                        </a>.
                                    </p>
                                    <p className="fs-6 text-secondary mb-3">
                                        We're guided by a clear set of principles, which you can find in our{' '}
                                        <a href="/editorial-policy" className="fw-semibold text-decoration-underline text-dark">
                                            Editorial Policy
                                        </a>.
                                    </p>
                                    <p className="fs-6 text-secondary mb-0">
                                        But this is a two-way street. Your feedback, ideas, and questions make us better. Please don't hesitate to{' '}
                                        <a href="/contact" className="fw-semibold text-decoration-underline text-dark">
                                            get in touch
                                        </a>. We're listening.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
