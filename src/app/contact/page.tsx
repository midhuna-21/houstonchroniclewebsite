import Head from 'next/head';
import { FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

import { FaXTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa6';

export default function ContactUs() {
    return (
        <>
            <Head>
                <title>Contact – Tangent Weekly</title>
                <meta
                    name="description"
                    content="We want to hear from you. Contact Tangent Weekly for news tips, corrections, general feedback, partnerships, and more."
                />
            </Head>

            <main style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
                <section className="py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                {/* Page Title */}
                                <h1 className="text-center fw-bold mb-4" style={{ fontFamily: 'Georgia, serif', color: '#0d1a26' }}>
                                    Contact Us
                                </h1>

                                <hr className="mb-4" />

                                {/* Intro */}
                                <p className="text-secondary fs-6 mb-4">
                                    We believe that journalism should be a conversation, and we want to hear from you.
                                    Whether you have a question, feedback, or a story that needs to be told, our door is always open.
                                </p>

                                <p className="text-secondary fs-6 mb-5">
                                    Here's how to reach the right people on our team.
                                </p>

                                {/* Department Contacts */}
                                <p className="fw-semibold mb-4" style={{ color: '#0d1a26' }}>
                                    Department Contacts
                                </p>

                                <p className="text-secondary fs-6 mb-4">
                                    To make sure your message gets to the right place quickly, please choose from the options below.
                                </p>

                                <div className="d-grid gap-4 mb-5">
                                    {/* News Tips */}
                                    <div className="bg-white border rounded shadow-sm p-4">
                                        <p className="fw-bold mb-2" style={{ color: '#0d1a26' }}>For News Tips & Press Releases</p>
                                        <p className="text-secondary fs-6 mb-3">
                                            Have a confidential tip or a story you think we should be covering? This is the best place to send it.
                                        </p>
                                        <div className="bg-light p-3 rounded text-monospace text-info">
                                            tips@tangentweekly.com
                                        </div>
                                    </div>

                                    {/* Corrections */}
                                    <div className="bg-white border rounded shadow-sm p-4">
                                        <p className="fw-bold mb-2" style={{ color: '#0d1a26' }}>To Report a Correction</p>
                                        <p className="text-secondary fs-6 mb-3">
                                            If you believe one of our articles contains a factual error, please let our editors know. We take accuracy seriously. You can read our full policy{' '}
                                            <a
                                                href="/correction-policy"
                                                className="fw-semibold text-decoration-underline text-dark"
                                                rel="noopener noreferrer"
                                            >
                                                here
                                            </a>.
                                        </p>
                                        <div className="bg-light p-3 rounded text-monospace text-info">
                                            corrections@tangentweekly.com
                                        </div>
                                    </div>

                                    {/* General Feedback */}
                                    <div className="bg-white border rounded shadow-sm p-4">
                                        <p className="fw-bold mb-2" style={{ color: '#0d1a26' }}>For General Questions & Feedback</p>
                                        <p className="text-secondary fs-6 mb-3">
                                            Have a question about the site or want to share your thoughts on our work? We read everything.
                                        </p>
                                        <div className="bg-light p-3 rounded text-monospace text-info">
                                            contact@tangentweekly.com
                                        </div>
                                    </div>

                                    {/* Partnerships */}
                                    <div className="bg-white border rounded shadow-sm p-4">
                                        <p className="fw-bold mb-2" style={{ color: '#0d1a26' }}>For Advertising & Partnerships</p>
                                        <p className="text-secondary fs-6 mb-3">
                                            If you're interested in advertising opportunities or other business partnerships, please contact our business desk.
                                        </p>
                                        <div className="bg-light p-3 rounded text-monospace text-info">
                                            partners@tangentweekly.com
                                        </div>
                                    </div>
                                </div>

                                {/* Office Address */}
                                <div className="border rounded p-4 text-dark position-relative"
                                    style={{
                                        whiteSpace: 'pre-line',
                                        fontFamily: 'monospace',
                                        fontSize: '0.95rem',
                                        lineHeight: '1.8',
                                        backgroundColor: '#f8f9fa'
                                    }}
                                >
                                    <div className="d-flex align-items-center mb-3">
                                        <FaMapMarkerAlt className="me-2 text-primary" />
                                        <span className="fw-semibold" style={{ fontFamily: 'inherit' }}>
                                            Tangent Weekly Media Office
                                        </span>
                                    </div>

                                    Tangent Weekly Media{"\n"}
                                    2915 Patterson Street{"\n"}
                                    Houston, TX 77026{"\n"}
                                    United States
                                </div>



                                {/* Social Links */}
                                <p className="fw-bold mb-3 mt-5" style={{ color: '#0d1a26', fontSize: '1.25rem' }}>
                                    Connect with Us
                                </p>
                                <p className="text-secondary fs-6 mb-4">
                                    You can also find us on social media</p>


                                <ul className="list-inline fs-5">
                                    <li className="list-inline-item me-3">
                                        <a
                                            href="https://x.com/TangentWeekly"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-dark"
                                            aria-label="Follow us on X (Twitter)"
                                        >
                                            <FaXTwitter />
                                        </a>
                                    </li>
                                    {/* <li className="list-inline-item me-3">
                                        <a
                                            href="https://lmarena.ai/c/link-to-your-LinkedIn-profile"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-dark"
                                            aria-label="Follow us on LinkedIn"
                                        >
                                            <FaLinkedin />
                                        </a>
                                    </li> */}
                                    {/* <li className="list-inline-item me-3">
                                        <a
                                            href="#"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-dark"
                                            aria-label="Follow us on Facebook"
                                        >
                                            <FaFacebook />
                                        </a>
                                    </li> */}
                                    <li className="list-inline-item me-3">
                                        <a
                                            href="https://www.instagram.com/tangentweekly/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-dark"
                                            aria-label="Follow us on Facebook"
                                        >
                                            <FaInstagram />
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </section>
        <div style={{ marginBottom: '3rem' }} />

            </main>
        </>
    );
}
