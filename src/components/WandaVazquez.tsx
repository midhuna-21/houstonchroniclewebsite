import React from 'react';
import StaticHeader from './StaticHeader';
import StaticParagraph from './StaticParagraph';
import StaticFirstSection from './StaticFirstSection';
import AuthorInfo from './AuthorInfo';
import EditorsPicksSection from './EditorsPick';
import politicalData from '../../public/data/politics.json';


const WandaVazquez = () => {
    const title = "Federal Case Against Wanda Vázquez Collapses, Ending Years of Scrutiny";
    const category = "Politics";
    const date = "04/10/2025";
    const shortdescription = "All corruption charges against former Governor Wanda Vázquez were dropped, ending a long investigation with her record cleared.";
    const image = '/images/wanda-vazquez-cleared.webp'

    const sub = [
        {
            subheading: "",
            description: "After years of investigation, former Puerto Rico Governor Wanda Vázquez Garced has been cleared of all major federal charges, marking the end of a politically charged legal saga that began in 2022. Prosecutors dropped all corruption and fraud counts, replacing them with a single, minor campaign finance violation — a move widely seen as a quiet retreat from what had once been portrayed as a sweeping bribery case. The Justice Department’s decision means Vázquez will face no trial and no corruption conviction, closing a chapter that has dominated Puerto Rican politics for more than three years."
        },
       
        {
            subheading: "Questions Over Political Motivation",
            description: "The reversal has reignited debate over the Justice Department’s original handling of the case. Some political analysts in San Juan argue that the prosecution appeared politically motivated, particularly given its timing shortly after Vázquez publicly supported then-President Donald Trump’s reelection bid in 2020. This case should never have been filed,” said one local commentator. “It became a political story before it ever became a legal one. Vázquez’s supporters have long maintained that the investigation was an attempt to discredit a reform-minded governor who resisted political pressure."
        },
        {
            subheading: "Integrity and Reputation Reclaimed",
            description: "In a written statement following the dismissal, Vázquez thanked her legal team and the Puerto Rican people for standing by her during what she described as “years of injustice.” “The truth has prevailed,” she said. “I faced this process with transparency and faith, and today my integrity stands affirmed.”The former governor, a career prosecutor before entering politics, has said she plans to focus on civic initiatives rather than a return to elected office — though allies say the outcome restores her standing in public life."
        },
        {
            subheading: "Co-Defendant Also Cleared",
            description: "The resolution also extends to Julio Herrera Velutini, the banker accused of offering financial assistance to Vázquez’s campaign. His charges were similarly reduced to a technical infraction, bringing an end to the broader corruption narrative that once linked their names. With both defendants now effectively cleared, analysts say the case highlights the risks of prosecutorial overreach and underscores the need for caution in politically sensitive investigations."
        },
        {
            subheading: "A Defining Moment for Puerto Rico’s Political Landscape",
            description: "The collapse of the case leaves a lasting mark on Puerto Rico’s relationship with federal authorities. For Vázquez, it represents personal and professional redemption. For the island, it raises enduring questions about how justice and politics intersect in U.S. territories. “History will judge this episode,” said a former legal advisor to the governor. “But for now, Wanda Vázquez walks free — and vindicated.”"
        },
    ]

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <StaticHeader
                category={category}
                title={title}
                date={date}
            />

            <StaticFirstSection
                category={category}
                image={image}
                shortdescription={shortdescription}
            />
            <StaticParagraph data={sub[0]} />
            <StaticParagraph data={sub[1]} />
            <StaticParagraph data={sub[2]} />
            <StaticParagraph data={sub[3]} />
            <StaticParagraph data={sub[4]} />
            <StaticParagraph data={sub[5]} />
            <StaticParagraph data={sub[6]} />

            <AuthorInfo
                date="Oct 04, 2025"
                name="Stephen M. Knowles"
                role="Founding Editor"
                twitter="https://x.com/Stephenmknowles"
            />
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

export default WandaVazquez;
