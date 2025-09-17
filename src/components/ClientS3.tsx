'use client';

import React from 'react';
import StaticHeader from './StaticHeader';
import StaticParagraph from './StaticParagraph';
import StaticFirstSection from './StaticFirstSection';
import AuthorInfo from './AuthorInfo';
import EditorsPicksSection from './EditorsPick';
import politicalData from '../../public/data/politics.json';
import TimelineComponent from './TimelineComponent';
import PullQuotes from './PullQuotes';
import Factbox from './FactBox';
import FAQs from './FAQs';
import KeyTakeaways from './KeyTakeaways';
import References from './References';
import ArticleWrapper from './ArticleWrapper';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BiCalendar } from 'react-icons/bi';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ClientS3 = () => {

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div style={{ padding: '1rem 0', borderBottom: '2px solid #000' }}>
                <div style={{ marginBottom: '1.2rem' }}>
                    <span
                        className="text-uppercase fw-bold"
                        style={{
                            color: '#B50021',
                            fontSize: '13.5px',
                            fontFamily: "'Rubik', Arial, sans-serif",
                            letterSpacing: '0.08em',
                            display: 'inline-block',
                            position: 'relative',
                        }}
                    >
                        Business

                        <motion.div
                            initial={{ width: '20%' }}
                            animate={{ width: ['20%', '100%', '20%'] }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            style={{
                                height: '2px',
                                backgroundColor: '#000',
                                position: 'absolute',
                                bottom: '-4px',
                                left: 0,
                                borderRadius: '1px',
                            }}
                        />
                    </span>
                </div>
                <h1
                    className="fw-bold mb-3 fst-italic"
                    style={{
                        fontSize: 'clamp(28px, 5vw, 42px)',
                        fontFamily: "'Archivo', Arial, sans-serif",
                        fontWeight: 900,
                        color: '#1b1214d7',
                        lineHeight: 1.25,
                        fontStyle: 'italic',
                    }}
                >
                    Banking on Counsel: The Long Road to Bancrédito’s $15 Million Fight
                </h1>

                <div
                    className="d-flex justify-content-between align-items-center flex-nowrap w-100 mt-2"
                    style={{ gap: '1rem', flexWrap: 'nowrap' }}
                >
                    <div
                        className="d-flex align-items-center"
                        style={{
                            fontSize: '10px',
                            fontWeight: 200,
                            fontFamily: "'Rubik', Arial, sans-serif",
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        <BiCalendar size={10} style={{ marginRight: '4px', color: '#000' }} />
                        <span style={{ color: '#000', opacity: 0.6 }}>Published on</span>
                        <span style={{ color: '#555', marginLeft: '4px' }}>17th Sept 2025</span>
                    </div>

                    <div className="d-flex gap-2 flex-shrink-0">
                        <button
                            className="btn btn-outline-dark rounded-circle d-flex justify-content-center align-items-center social-icon-btn"
                            style={{
                                width: '38px',
                                height: '38px',
                                fontSize: '14px',
                                border: '1px solid #ccc',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <a href="https://x.com/TangentWeekly" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page" style={{ color: 'inherit', textDecoration: 'none' }}>
                                <FaXTwitter />
                            </a>
                        </button>
                        <button
                            className="btn btn-outline-dark rounded-circle d-flex justify-content-center align-items-center social-icon-btn"
                            style={{
                                width: '38px',
                                height: '38px',
                                fontSize: '14px',
                                border: '1px solid #ccc',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <a href="https://www.instagram.com/tangentweekly/" target="_blank" aria-label="Visit our Instagram page" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                <FaInstagram />
                            </a>
                        </button>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center mt-3">
                <div className="col-md-10">
                    <Image
                        src="/images/bancredito-15-million-fight.webp"
                        alt="bancredito-15-million-fight-legal-counsel"
                        title="bancredito-15-million-fight-legal-counsel"
                        width={1200}
                        height={800}
                        priority
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>
            </div>

            <ArticleWrapper>
                <div style={{ marginTop: '50px' }}>

                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '12px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px',
                        }}
                    >
                        A Familiar Pattern in Banking History
                    </h2>
                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D',
                        }}
                         className='text-block'
                    >
                        <p>
                            Banks have always lived under the twin shadows of <strong>regulators and lawyers</strong>. Regulators wield
                            the power to fine, sanction, or shut down institutions. Lawyers serve as guides, telling banks what
                            the rules mean and how far they can stretch.
                        </p>
                        <p>
                            When banks collapse, these two forces often collide. Regulators point to compliance failures;
                            banks and their owners sometimes point back at their lawyers, arguing they were led astray. The
                            Bancrédito dispute—where one year counsel praised a program as adequate and later advised
                            admitting it had deteriorated—is only the latest chapter in this recurring drama.
                        </p>
                    </div>
                </div>

                <div style={{ marginTop: '40px' }}>
                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '12px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px',
                        }}
                    >
                        Why Malpractice Suits Against Law Firms Are Rare
                    </h2>
                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D',
                        }}
                    >
                        <p  className='text-block'>
                            It is unusual for banks to sue their lawyers after enforcement actions. Most cases end quietly, with
                            f
                            ines paid and lessons learned. Why?
                        </p>

                        <ol>
                            <li>
                                <strong>Privilege and Secrecy</strong> – Banks rarely want their legal advice exposed in court.
                            </li>
                            <li>
                                <strong>Fear of Retaliation</strong>  – Few institutions want to anger regulators by second-guessing
                                settlements.
                            </li>
                            <li>
                                <strong>Blame-Sharing</strong>  – Often, management decisions and legal advice are intertwined, making
                                it hard to draw a clear line
                            </li>
                        </ol>
                        <p   className='text-block'>
                            Bancrédito’s shareholder, however, chose to break that pattern, filing in Miami-Dade County and
                            accusing three powerful firms of malpractice. That decision alone makes this case remarkable
                        </p>
                    </div>
                </div>

                <div style={{ marginTop: '40px' }}>
                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '12px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px',
                        }}
                    >
                        The Regulatory Backdrop: FinCEN’s Expanding Reach
                    </h2>
                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D',
                        }}
                         className='text-block'
                    >
                        <p>
                            The<strong> Bank Secrecy Act of 1970 </strong> was born in an era of concern about organized crime. Over
                            decades, its enforcement has widened, covering everything from drug cartels to terrorist financing
                            to modern crypto flows.
                        </p>
                        <p>
                            FinCEN, the Treasury bureau in charge, has steadily raised the stakes. Where once penalties were
                            measured in thousands, they are now routinely in the tens of millions. The Bancrédito fine, $15
                            million against a relatively small bank, illustrates the <strong>“scaling up” effect</strong> of modern AML
                            enforcement.
                        </p>
                        <p>
                            But with that power comes scrutiny. If banks can show they acted in <strong>good faith, relying on
                                expert counsel</strong>, then calling their conduct “willful” blurs the line between recklessness and
                            reasonable disagreement
                        </p>
                    </div>
                </div>

                <div style={{ marginTop: '40px' }}>
                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '12px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px',
                        }}
                    >
                        The Receiver’s Dilemma: Efficiency vs. Oversight
                    </h2>
                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D',
                        }}
                    >
                        <p  className='text-block'>
                            Receiverships are designed to protect depositors and wind down troubled institutions. Yet they
                            often operate with little transparency. By signing Bancrédito into the FinCEN consent order
                            without consulting the shareholder, the receiver highlighted a tension:
                        </p>
                        <ul>
                            <li><strong>Efficiency</strong>: Wrap things up quickly, minimize fights</li>
                            <li><strong>Oversight</strong>: Defend the bank’s interests vigorously, even if it means prolonged litigation</li>
                        </ul>
                        <p  className='text-block'>
                            From a governance perspective, Bancrédito’s story exposes how receivers can tilt toward
                            efficiency at the expense of accountability, especially if guided by counsel with potential conflicts.
                        </p>
                    </div>
                </div>

                <div style={{ marginTop: '40px' }}>
                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '12px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px',
                        }}
                    >
                        Why This Case Could Reshape Expectations
                    </h2>
                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D',
                        }}
                    >

                        <ul>
                            <li>
                                <strong>For lawyers</strong>: It challenges the assumption that counsel can pivot positions without
                                consequence. If a jury agrees no reasonable lawyer would advise contradictory
                                admissions, malpractice exposure could rise.     </li>
                            <li>
                                <strong>For banks</strong>: It suggests that owners may be more willing to litigate when receivers or
                                regulators accept settlements that feel unjustified  </li>
                            <li>
                                <strong>For policymakers</strong>: It underscores the need to clarify how attorney-client privilege, advice
                                of-counsel defenses, and receiver duties interact in high-stakes compliance cases.   </li>
                        </ul>
                    </div>
                </div>

                <div style={{ marginTop: '40px' }}>
                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '12px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px',
                        }}
                    >
                        Looking Back to Look Ahead
                    </h2>
                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D',
                        }}
                         className='text-block'
                    >
                        <p>
                            Bancrédito’s legal saga is not an isolated story—it is part of a historical cycle where small
                            institutions become test cases for big regulatory powers, and where legal counsel’s words can
                            determine millions of dollars in outcomes   </p>


                        <p>
                            What makes this one different is not just the size of the fine but the willingness of the shareholder
                            to <strong>call the lawyers into court</strong>. That shift—rare in banking history—could mark a turning point,
                            signaling that banks will no longer quietly absorb penalties when they believe their own advisors
                            helped pave the road to ruin
                        </p>
                    </div>
                </div>
            </ArticleWrapper>

            <div style={{ marginBottom: '30px' }}>

                <AuthorInfo
                    date="Sept 17, 2025"
                    name="Benedict Johnson"
                    role="Founding Editor"
                    twitter="https://x.com/benedictjo63174"
                />
            </div>



            {/* <TimelineComponent />
            <PullQuotes />
            <Factbox />
            <FAQs />
            <KeyTakeaways />
            <References /> */}
            <EditorsPicksSection data={politicalData} />
        </div>
    );
};

export default ClientS3;
