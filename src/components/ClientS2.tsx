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

const ClientS2 = () => {

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 mb-5">
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
                    When Lawyers Switch Sides on Their Own Client: The $15 Million Lesson of Bancrédito
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
                        src="/images/bancredito-15-million-lawyers-switch.webp"
                        alt="lawyers-switch-sides-bancredito-15-million-lesson"
                        title="lawyers-switch-sides-bancredito-15-million-lesson"
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
                        A Bank That Played by the Rules—Until It Didn’t
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
                            Bancrédito International Bank & Trust was a small Puerto Rican bank with a special offshore
                            license. Like all banks, it had to follow the <strong>Bank Secrecy Act (BSA)</strong> and <strong>anti-money-laundering
                                (AML)</strong> rules: laws designed to catch shady transactions and make sure suspicious activity reports
                            (SARs) are filed when money looks questionable
                        </p>
                        <p>
                            In 2020, Bancrédito’s lawyers—respected firms from San Juan and Miami—told regulators in
                            writing that the bank’s compliance program was <strong>“adequate” and risk-based</strong>. They even stressed
                            that filing SARs is a matter of <strong>judgment, not guesswork</strong>. In other words: the bank was doing
                            what the law required.
                        </p>
                        <p>
                            Those lawyers helped negotiate a settlement with Puerto Rico’s banking watchdog, which ended
                            with a slap on the wrist: a <strong>$97,000 fine</strong> and a plan for improvements. For a bank, that’s like
                            paying a speeding ticket—not pleasant, but survivable.
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
                        The Plot Twist: Three Years Later
                    </h2>
                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D',
                        }}
                    >
                        <p className='text-block'>
                            Fast forward to September 2023. Bancrédito, now in liquidation and run by a court-appointed
                            receiver, faced FinCEN—the U.S. Treasury’s financial crimes unit. This time, the outcome was
                            brutal: a <strong>$15 million penalty</strong>, one of the largest ever against a Puerto Rican bank of its size.
                        </p>
                        <p>
                            Worse, the bank—on the advice of those same law firms—<strong>admitted</strong> things that directly
                            contradicted what those lawyers had said in 2020:
                        </p>
                        <ul>
                            <li>
                                That its AML program had <strong>“deteriorated over time.”</strong>
                            </li>
                            <li>
                                That it <strong>“willfully” failed</strong> to report suspicious transactions, including more than <strong>$100
                                    million in activity</strong>.
                            </li>
                        </ul>
                        <p className='text-block'>
                            For context: under U.S. law, “willful” doesn’t mean evil intent. It can mean just <strong>reckless disregard</strong>
                            or <strong>turning a blind eye</strong>. But it’s the difference between a $500 fine and a multi-million-dollar one.
                            By admitting willfulness, Bancrédito signed its own financial death warrant.
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
                        How Legal Malpractice Works in Plain English
                    </h2>
                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D',
                        }}
                    >
                        <p >
                            Across the U.S., suing your lawyer for malpractice means proving four things:
                        </p>

                        <ol>
                            <li>
                                <strong>Duty</strong> – The lawyer owed you competent, loyal representation.
                            </li>
                            <li>
                                <strong>Breach</strong> – They fell short (bad advice, ignoring defenses, conflicted interests).
                            </li>
                            <li>
                                <strong> Causation</strong> – Their bad advice <strong>caused</strong> the bad outcome.
                            </li>
                            <li>
                                <strong>Damages</strong> – You lost real money as a result.
                            </li>
                        </ol>
                        <p className='text-block'>
                            Bancrédito’s shareholder argues that no reasonable attorney would have told the bank to accept
                            FinCEN’s terms—especially when their own prior opinions could have been used as a defense. By
                            not raising those defenses, and by steering the bank into admissions they knew were
                            questionable, the firms allegedly committed <strong>legal malpractice.</strong>

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
                        The “Conflict of Interest” Question
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
                            Here’s the awkward part: the best defense the bank had was <strong>“we relied on our lawyers.”</strong> That
                            would have shown good faith, making “willful” hard to prove.
                        </p>
                        <p>
                            But raising that defense would mean admitting the lawyers might have been wrong in 2020.
                            Instead of taking that risk, the lawsuit claims, the lawyers kept quiet—protecting themselves while
                            sacrificing the bank.
                        </p>
                        <p>
                            In legal ethics, that’s a cardinal sin: your duty is to your client, not your own reputation. If true, this
                            would be a textbook example of a <strong>conflict of interest</strong>.
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
                        The Receiver’s Role: Overstepping the Mandate?
                    </h2>
                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D',
                        }}
                    >
                        <p  className='text-block'>
                            When Bancrédito went into receivership, a private company was put in charge. Its job was simple:
                            pay depositors and wind down the bank. Once all debts were cleared, any leftovers—like cash,
                            art collections, or property—should go back to the owner
                        </p>
                        <p>
                            Instead, the receiver:
                        </p>

                        <ul>
                            <li>
                                Signed the $15 million FinCEN deal <strong>without consulting the shareholder</strong>.
                            </li>
                            <li>
                                Allegedly kept or sold more than <strong>$22 million in art</strong>, even after depositors were paid.
                            </li>
                            <li>
                                Refused to sue the law firms, dismissing the idea as “not in the bank’s interest.”
                            </li>
                        </ul>
                        <p  className='text-block'>
                            Critics call this <strong>administrative overreach</strong>—acting beyond what the law allows. Under Puerto
                            Rican and U.S. law, agencies and their appointees can’t invent new rules on the fly or exceed their
                            mandate. If they do, courts can step in.
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
                        Why This Story Matters to Everyday Readers
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
                            Most of us will never run a bank or face FinCEN. But this saga offers universal lessons:
                        </p>


                        <ul>
                            <li>
                                <strong> Consistency matters.</strong> If your lawyer tells regulators “everything’s fine” one year, and then
                                helps you admit “everything fell apart” the next, something is wrong.
                            </li>
                            <li>
                                <strong>Privilege belongs to the client.</strong> Legal advice is a shield for the client, not a safety blanket
                                for the lawyer. You can waive it if it helps your defense.
                            </li>
                            <li>
                                <strong>Guardians aren’t owners.</strong> A receiver, trustee, or manager is supposed to protect, not
                                plunder. When they cross the line, the law has remedies        </li>
                        </ul>
                    </div>
                </div>

                <div style={{ marginTop: '40px', marginBottom: '30px' }}>

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
                        What’s Next
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
                            Bancrédito’s shareholder is suing the firms in Miami-Dade court, seeking <strong>at least $15 million plus
                                costs and interest.</strong> If they win, it could set a national precedent: law firms that give compliance
                            advice can’t later flip their story and escape accountability
                        </p>
                        <p>
                            The stakes go beyond Puerto Rico. In an era of aggressive AML enforcement, banks rely on
                            lawyers to navigate a minefield of complex rules. If those lawyers switch sides—or put their own
                            interests first—the fallout can be catastrophic.
                        </p>
                        <p>
                            And for everyone else? It’s a reminder:  {" "}
                            <strong>
                                your lawyer’s job is to protect you, not themselves.
                                When that balance tips, the consequences can be devastating  </strong>
                        </p>
                    </div>
                </div>

            </ArticleWrapper>

            <div style={{ marginBottom: '30px' }}>


                <AuthorInfo
                    date="Sept 17, 2025"
                    name="Daniel C. Smith"
                    role="Founding Editor"
                    twitter="https://x.com/Da_niel_Smith"
                />
            </div>
           



            {/* <TimelineComponent />
            <PullQuotes />
            <Factbox />
            <FAQs />
            <KeyTakeaways />
            <References /> */}
            <hr
                  style={{
                    border: "none",
                    borderTop: "1px solid #242222ff",
                  margin: "30px 0 40px 0",
                  }} />
            <EditorsPicksSection data={politicalData} />
        </div>
    );
};

export default ClientS2;
