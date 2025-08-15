import Head from 'next/head';
import { ShieldCheck, BookOpenText, Eye, RefreshCw } from 'lucide-react'; 

export default function EditorialPolicy() {
    return (
        <>
            <Head>
                <title>Editorial Policy – Tangent Weekly</title>
                <meta
                    name="description"
                    content="Our Editorial Promise: Learn how Tangent Weekly earns your trust through transparent, independent journalism and a clear code of conduct."
                />
            </Head>

            <main style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
                <section className="py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                {/* Heading */}
                                <h1 className="text-center fw-bold mb-4" style={{ fontFamily: 'Georgia, serif', color: '#0d1a26' }}>
                                    Our Editorial Promise
                                </h1>

                                <hr className="mb-4" />

                                {/* Intro */}
                                <p className="fs-6 text-secondary mb-4">
                                    Trust is earned. We know that.
                                </p>
                                <p className="fs-6 text-secondary mb-4">
                                    So, we want to be crystal clear about the promise we make to you every time we publish a story. This is our code of conduct.
                                    It’s what guides our work, day in and day out.
                                </p>

                                {/* Bullet Promises */}
                                <p className="fw-semibold mb-4" style={{ color: '#0d1a26' }}>
                                    Here's what you can expect from us:
                                </p>

                                <div className="d-grid gap-4 mb-5">
                                    {[
                                        {
                                            icon: <ShieldCheck size={20} className="me-2 text-primary" />,
                                            title: "Getting It Right.",
                                            description:
                                                "We double-check our work. Facts are checked, and sources are vetted. If we aren't sure about something, we keep digging until we are. We believe it’s more important to be right than to be first."
                                        },
                                        {
                                            icon: <BookOpenText size={20} className="me-2 text-success" />,
                                            title: "No Strings Attached.",
                                            description:
                                                "Our journalism isn't for sale. We don't take money from politicians, corporations, or special interests that could sway our reporting. We answer to our readers, and that’s it."
                                        },
                                        {
                                            icon: <Eye size={20} className="me-2 text-warning" />,
                                            title: "Showing the Whole Picture.",
                                            description:
                                                "Most stories aren't simple. We work hard to show you all sides, provide context, and let you make up your own mind. We’re not here to tell you what to think; we’re here to give you the information to think for yourself."
                                        },
                                        {
                                            icon: <RefreshCw size={20} className="me-2 text-danger" />,
                                            title: "Owning It When We Get It Wrong.",
                                            description:
                                                "Nobody's perfect. If we mess up, we'll tell you. We will fix the error right away, and we'll be upfront about what changed and why. You can see the full details on our "
                                                + "<a href='/correction-policy' class='text-decoration-underline fw-semibold text-dark'>Correction Policy</a>."
                                        }
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-white p-4 border rounded shadow-sm">
                                            <p className="fw-bold d-flex align-items-center mb-2" style={{ color: '#0d1a26' }}>
                                                {item.icon}
                                                <span dangerouslySetInnerHTML={{ __html: item.title }} />
                                            </p>
                                            <p className="text-secondary fs-6 mb-0" dangerouslySetInnerHTML={{ __html: item.description }} />
                                        </div>
                                    ))}
                                </div>

                                {/* Note Block */}
                                <div className="p-4 rounded mb-5" style={{ backgroundColor: '#f1f5f9' }}>
                                    <p className="fw-bold mb-2" style={{ color: '#0d1a26' }}>A Quick Note on Our Work:</p>
                                    <p className="fs-6 text-secondary mb-2">
                                        We'll always tell you where our information comes from. No secrets. And we’ll make it super clear when a piece is a news report (just the facts) versus an opinion piece (a specific viewpoint).
                                    </p>
                                    <p className="fs-6 text-secondary mb-0">
                                        You’ll always know which is which.
                                    </p>
                                </div>

                                {/* Final Section */}
                                <p className="fs-6 text-secondary mb-4">
                                    That's our commitment. It's not complicated. We work for you.
                                </p>

                                <p className="fs-6 text-secondary">
                                    If you ever feel we're not living up to this promise, we want to hear about it. Please{' '}
                                    <a
                                        href="/contact"
                                        className="fw-semibold text-decoration-underline text-dark"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        get in touch
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
