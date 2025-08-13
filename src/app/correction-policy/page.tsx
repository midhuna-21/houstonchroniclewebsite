import Head from 'next/head';

export default function CorrectionPolicy() {
    return (
        <>
            <Head>
                <title>Correction Policy – Tangent Weekly</title>
                <meta
                    name="description"
                    content="Read Tangent Weekly's Correction Policy — our process for fixing mistakes, updating articles, and ensuring transparency in journalism."
                />
            </Head>

            <main style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
                <section className="py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                {/* Heading */}
                                <h1 className="text-center fw-bold mb-4" style={{ fontFamily: 'Georgia, serif', color: '#0d1a26' }}>
                                    Our Correction Policy
                                </h1>

                                <hr className="mb-4" />

                                {/* Intro */}
                                <p className="fs-6 text-secondary mb-4">
                                    We work hard to make sure every story we publish is accurate and fair. But we're human, and sometimes, we get things wrong.
                                </p>

                                <p className="fs-6 text-secondary mb-4">
                                    When that happens, our job is to own it and fix it. Fast.
                                </p>

                                {/* Spotted a Mistake */}
                                <div className="bg-light rounded p-4 mb-5">
                                    <p className="fw-bold mb-3" style={{ color: '#0d1a26' }}>
                                        Spotted a Mistake?
                                    </p>
                                    <p className="fs-6 text-secondary mb-3">
                                        If you see something in one of our articles that doesn’t seem right, please tell us.
                                        The best way to do that is to send a quick email to our editor's desk:
                                    </p>
                                    <p className="fs-6">
                                        <a
                                            href="mailto:corrections@tangentweekly.com"
                                            className="fw-semibold text-decoration-underline text-dark"
                                        >
                                            corrections@tangentweekly.com
                                        </a>
                                    </p>
                                    <p className="fs-6 text-secondary mb-0">
                                        Just include a link to the story and a quick note about the error.
                                        If you happen to have a source for the correct information, that’s always helpful.
                                    </p>
                                </div>

                                {/* What Happens Next */}
                                <div className="p-4 border rounded shadow-sm bg-white mb-4">
                                    <p className="fw-bold mb-3" style={{ color: '#0d1a26' }}>
                                        What Happens Next?
                                    </p>
                                    <p className="fs-6 text-secondary mb-3">
                                        We read every single email that comes in.
                                    </p>
                                    <p className="fs-6 text-secondary mb-3">
                                        We'll investigate the issue right away. If we find that we made a mistake, we will correct the article and
                                        add a clear note at the bottom explaining what was changed and why.
                                        For a really big error, we’ll put a notice at the top of the story.
                                    </p>
                                    <p className="fs-6 text-secondary mb-0">
                                        Simple as that.
                                    </p>
                                </div>

                                {/* Closing Statement */}
                                <p className="fs-6 text-secondary">
                                    We genuinely appreciate our readers who help us stay sharp and accountable.
                                    Thank you for keeping us honest.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
