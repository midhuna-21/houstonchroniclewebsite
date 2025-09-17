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

const ClientS4 = () => {

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
                    Abandonment, Conflicted Loyalties, and Lost
                    Opportunities: How Trusted Counsel Became
                    Bancrédito’s Undoing
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
                        src="/images/bancredito-counsel-undoing.webp"
                        alt="bancredito-trusted-counsel-undoing"
                        title="bancredito-trusted-counsel-undoing"
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
                        A Bank Surrounded, Yet Still Standing
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
                            By mid‑2021 Bancrédito International Bank & Trust Corporation looked as if it had weathered the worst of
                            six straight years of regulatory harassment. An independent BSA/AML technical audit by PAAST, P.L. had
                            just stamped the bank’s compliance programme <strong>“Satisfactory,”</strong> the highest rating available — no material
                            violations, only minor housekeeping fixes. Bancrédito’s management sent the report to Puerto Rico’s new
                            banking commissioner with a simple request: <i>close the two‑year‑old examination so the institution could get
                                on with its business</i>
                        </p>
                        <p>
                            What followed instead was a slow‑motion implosion. Within twenty‑six months the same institution was in
                            involuntary receivership, saddled with a <strong>US $15 million FinCEN penalty</strong>, and effectively erased from the
                            banking map. The decisive factor was not a sudden discovery of fraud or insolvency. It was the conduct of
                            the very law firms hired to defend the bank: <strong>Holland  &  Knight LLP</strong> and <strong>McConnell  Valdés LLC</strong>.
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
                        The First Breach – Abandoning the Client When the Heat Rose
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
                            FinCEN quietly opened a federal BSA investigation in late 2019. Bancrédito retained Kobre & Kim to open a
                            dialogue in Washington, while H&K and McConnell continued to run point before Puerto Rico’s regulator,
                            OCIF. For eighteen months FinCEN stayed silent; H&K and McConnell treated the federal risk as remote and
                            concentrated on beating back OCIF’s ever‑expanding document demands
                        </p>


                        <p>
                            That tactic blew up in early 2022. After OCIF forced a “voluntary” liquidation plan, the firms allowed OCIF to
                            appoint <strong>Driven Administrative Services</strong>—a former auditor and vendor of the bank—as liquidation
                            administrator <strong>without inserting any guard‑rails</strong> against conflicts. When Driven immediately defaulted on a
                            mandatory depositor payout and OCIF froze the bank’s funds, the firms offered no emergency motion to
                            enforce the plan. Bancrédito’s shareholder, BHC, had to intervene on its own, changing the board by written
                            consent in December 2022—only to be slapped with a regulatory cease‑and‑desist. In that pivotal moment,
                            counsel <strong>left the client to fend for itself</strong>.    </p>
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
                        Switching Sides Without Informed Consent
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
                            OCIF converted the liquidation into a formal receivership on 11 January 2023 and installed Driven as
                            <strong> receiver</strong>. Almost immediately, Bancrédito’s long‑time outside counsel surfaced on the other side of the
                            table:
                        </p>
                        <p>
                            <i>
                                “The Receiver’s current counsel, who represented [Bancrédito] in negotiations of the Consent Order, was the
                                Bank’s former counsel.”

                            </i>
                        </p>
                        <p>
                            Neither H&K nor McConnell sought BHC’s written waiver, even though the Receiver’s interests were now
                            <strong> adverse</strong> to the shareholder’s—especially on the looming question of how large a penalty FinCEN might
                            impose. Puerto Rico’s Canons 18 & 19 and the ABA Model Rules flatly prohibit such a switch without
                            explicit, informed consent. None was given. The duty of loyalty was broken.
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
                        The Fatal Omission – Silencing the Client’s Mitigating Evidence
                    </h2>
                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D',
                        }}
                    >
                        <p className='text-block'>
                            The March 2023 receivership settlement clawed back one protection: Driven <strong>promised</strong> it would
                            “immediately communicate to FinCEN” that it had <strong>no objection</strong> to BHC’s participation in any penalty
                            negotiations. Driven ignored that clause for three months. During that blackout:
                        </p>
                        <ul>
                            <li> FinCEN staff never saw the 2020 and 2021 PAAST/Crowe audit files showing the programme had
                                been rated <i>Satisfactory</i></li>
                            <li>They never saw the <strong>five‑year Look‑Back</strong> (Jan 2016–Dec 2020) confirming no unreported OFAC or
                                CTR violations and finding only potential SAR escalations the bank itself had already flagged</li>
                            <li>
                                They never saw documentary proof that supposedly “suspicious” yacht‑refit transfers were fully
                                documented trust transactions benefitting the bank’s chairman
                            </li>
                        </ul>
                        <p className='text-block'>
                            Instead, the Receiver’s counsel <strong>stipulated to FinCEN’s narrative</strong> that Bancrédito had long been a willful
                            violator, agreeing to an eye‑watering <strong>$15 million</strong> penalty. Only after the Consent Order was signed did
                            BHC’s new lawyers (Winston & Strawn) present the missing evidence, detailing how the admissions were
                            “incomplete and inaccurate”.   </p>
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
                        Causation in Plain Sight
                    </h2>
                    <div
                        style={{

                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D',
                        }}
                    >
                        <p>
                            Had counsel honoured their fiduciary obligations, the FinCEN calculus could have been radically different:
                        </p>


                        {/* table  */}
                        <div className="container-fluid p-3">
                            <div
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: "8px",
                                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                    overflow: "hidden",
                                }}
                            >
                                {/* Responsive table wrapper */}
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped mb-0">
                                        <thead className="table-light">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        backgroundColor: "#f8f9fa",
                                                        minWidth: "150px", // ensure readability on small screens
                                                    }}
                                                >
                                                    Required step
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        minWidth: "250px",
                                                    }}
                                                >
                                                    What competent, conflict-free counsel would have done
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        minWidth: "250px",
                                                    }}
                                                >
                                                    What actually happened
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td
                                                    style={{
                                                        backgroundColor: "#f8f9fa",
                                                        fontWeight: 500,
                                                        verticalAlign: "top",
                                                    }}
                                                >
                                                    Present full audit trail and Look-Back as mitigating evidence
                                                </td>
                                                <td style={{ verticalAlign: "top" }}>
                                                    File comprehensive submission; demand management-level meeting before any penalty proposal
                                                </td>
                                                <td style={{ verticalAlign: "top" }}>
                                                    Receiver's counsel provided partial fact-pattern; FinCEN never met or spoke with shareholder
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style={{
                                                        backgroundColor: "#f8f9fa",
                                                        fontWeight: 500,
                                                        verticalAlign: "top",
                                                    }}
                                                >
                                                    Secure BHC's seat in talks (per settlement)
                                                </td>
                                                <td style={{ verticalAlign: "top" }}>
                                                    Notify FinCEN within days; coordinate joint strategy
                                                </td>
                                                <td style={{ verticalAlign: "top" }}>
                                                    Notification delayed ~90 days, eliminating BHC voice
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style={{
                                                        backgroundColor: "#f8f9fa",
                                                        fontWeight: 500,
                                                        verticalAlign: "top",
                                                    }}
                                                >
                                                    Challenge size &amp; basis of CMP
                                                </td>
                                                <td style={{ verticalAlign: "top" }}>
                                                    Argue ability-to-pay, program improvements, lack of willfulness
                                                </td>
                                                <td style={{ verticalAlign: "top" }}>No challenge; $15m assessment accepted as-is</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* <div className="container-fluid p-4">
                            <div
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: "8px",
                                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                    overflow: "hidden",
                                }}
                            >
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped mb-0">
                                        <thead className="table-light">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        backgroundColor: "#f8f9fa",
                                                        width: "20%",
                                                    }}
                                                >
                                                    Required step
                                                </th>
                                                <th scope="col" style={{ width: "40%" }}>
                                                    What competent, conflict-free counsel would have done
                                                </th>
                                                <th scope="col" style={{ width: "40%" }}>
                                                    What actually happened
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td
                                                    style={{
                                                        backgroundColor: "#f8f9fa",
                                                        fontWeight: 500,
                                                        width: "20%",
                                                    }}
                                                >
                                                    Present full audit trail and Look-Back as mitigating evidence
                                                </td>
                                                <td style={{ width: "40%" }}>
                                                    File comprehensive submission; demand management-level meeting
                                                    before any penalty proposal
                                                </td>
                                                <td style={{ width: "40%" }}>
                                                    Receiver's counsel provided partial fact-pattern; FinCEN never met
                                                    or spoke with shareholder
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style={{
                                                        backgroundColor: "#f8f9fa",
                                                        fontWeight: 500,
                                                        width: "20%",
                                                    }}
                                                >
                                                    Secure BHC's seat in talks (per settlement)
                                                </td>
                                                <td style={{ width: "40%" }}>
                                                    Notify FinCEN within days; coordinate joint strategy
                                                </td>
                                                <td style={{ width: "40%" }}>
                                                    Notification delayed ~90 days, eliminating BHC voice
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style={{
                                                        backgroundColor: "#f8f9fa",
                                                        fontWeight: 500,
                                                        width: "20%",
                                                    }}
                                                >
                                                    Challenge size &amp; basis of CMP
                                                </td>
                                                <td style={{ width: "40%" }}>
                                                    Argue ability-to-pay, program improvements, lack of willfulness
                                                </td>
                                                <td style={{ width: "40%" }}>
                                                    No challenge; $15m assessment accepted as-is
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div> */}

                        <p>
                            FinCEN, deprived of context, imposed a penalty more typical of a major U.S. money‑centre bank than a
                            Puerto Rican IBE already in run‑off. The fine consumed the capital cushion that would have covered all
                            remaining depositor claims, sealing Bancrédito’s fate.
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
                        Legal Fault Lines for the Firms
                    </h2>
                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D',
                        }}
                        className='text-block'
                    >
                        <ul>
                            <li> <strong>Legal Malpractice (Negligence).</strong> Failure to meet the standard of care by (i) ignoring federal
                                exposure, (ii) conceding without presenting mitigation, and (iii) permitting conflicted liquidation
                                architecture</li>
                            <li>
                                <strong>Breach of Fiduciary Duty / Conflict of Interest.</strong> Representing the Receiver against former client
                                without informed consent, violating Canons 18/19 & Model Rule 1.9.
                            </li>
                            <li> <strong>Breach of Contract.</strong> Retainer promises of conflict‑free representation; settlement clause requiring
                                BHC inclusion</li>
                            <li><strong>Aiding & Abetting Receiver’s Breach.</strong> Substantially assisting Driven in sidelining shareholder and
                                mishandling depositor payout.</li>
                            <li>
                                <strong>Fee Disgorgement & Damages.</strong> At minimum return of fees post‑conflict; at maximum recovery of
                                $15 m penalty plus liquidation shortfall and reputational injury.
                            </li>

                        </ul>
                        <p>Statutes of limitation run as early as September 2024, but tolling letters can pause the clock</p>
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
                        A Cautionary Tale in Three Sentences
                    </h2>
                    <div
                        style={{
                            // textAlign: 'justify',
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D',
                        }}
                    >
                        <ul>
                            <li><strong>Bancrédito did not collapse from fraud or insolvency; it was strangled by a conflict‑ridden
                                process its own lawyers engineered.</strong> </li>
                            <li>
                                <strong>The moment counsel switched allegiance, the bank’s strongest defences—audits, Look‑Back,
                                    and shareholder oversight—were locked out of the room.</strong>
                            </li>
                            <li><strong>What remained was an uncontested narrative that cost $15 million and a century‑old banking
                                franchise, all traceable to abandonment, divided loyalty, and silence when advocacy was
                                most needed.</strong></li>
                        </ul>
                    </div>
                </div>
            </ArticleWrapper>

            <div style={{ marginBottom: '30px', marginTop: '30px' }}>

                <AuthorInfo
                    date="Sept 17, 2025"
                    name="Benedict Johnson"
                    role="Founding Editor"
                    twitter="https://x.com/benedictjo63174"
                />
            </div>
            <EditorsPicksSection data={politicalData} />
        </div>
    );
};

export default ClientS4;
