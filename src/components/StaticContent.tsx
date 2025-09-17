'use client';

import React from 'react';
import StaticHeader from './StaticHeader';
import StaticParagraph from './StaticParagraph';
import StaticFirstSection from './StaticFirstSection';
import AuthorInfo from './AuthorInfo';
import EditorsPicksSection from './EditorsPick';
import politicalData from '../../public/data/politics.json';

const StaticComponent = () => {
    const title = "Charges Dropped for Wanda Vázquez Amid Claims of Political Targeting";
    const category = "Politics";
    const date = "05/07/2025";
    const shortdescription = "All federal charges against former Puerto Rico Governor Wanda Vázquez have been dropped, with prosecutors replacing them with a minor campaign finance violation — ending a three-year legal battle without a corruption conviction.";
    const image = '/images/wanda-vazquez-political-targeting.webp'

    const sub = [
        {
            subheading: "",
            description: "Former Puerto Rico Governor **Wanda Vázquez Garced** has seen all federal felony charges against her dismissed in a stunning turn of events. U.S. prosecutors, who once alleged a sweeping bribery and fraud scheme, **abruptly abandoned the case** and replaced the indictment with a single-count technical campaign finance infraction. This resolution means **no trial will occur** and **no criminal conviction for corruption** will stain Vázquez’s record. The DOJ’s retreat – resolving the matter with a minor administrative violation rather than any bribery charge – has left Vázquez **completely vindicated**, prompting supporters to claim she was the target of a politically motivated prosecution."
        },
        {
            subheading: "A Three-Year Saga Ends in Exoneration",
            description: "The collapse of the case closes a high-profile saga that stretched on for over three years. __Vázquez, who led Puerto Rico in 2019–2021, was arrested in 2022__ amid allegations that she accepted help for her gubernatorial campaign from a foreign bank owner in exchange for official favors. __She vehemently denied wrongdoing from the outset and cooperated fully with investigators.__ Over time, the prosecution’s case **weakened significantly**, according to legal observers. __Key evidence of an explicit quid pro quo never materialized__, and no funds were ever actually received by Vázquez or her campaign.@@What began as a dramatic FBI indictment **ended with no finding of bribery or fraud**. All substantive charges – conspiracy, bribery, honest services wire fraud – **have been dropped**. The only remaining issue is a **technical violation of campaign finance law**: an “offer” of support by a foreign national that was never even accepted. **No exchange of money occurred**, and the final agreement explicitly **does not include any admission of guilt** by Vázquez."
        },
        {
            subheading: "Legal Experts Cite “Face-Saving” by DOJ",
            description: "Analysts describe the outcome as a face-saving exit for the U.S. Department of Justice. After pursuing an aggressive corruption case that ultimately yielded only a minor infraction, the DOJ’s resolution is being seen as an acknowledgment that the evidence for bribery **fell short**. “This is not a guilty plea – it’s a procedural footnote,” said one attorney familiar with the proceedings, emphasizing that Vázquez is not admitting any crime. **Defense attorneys long argued** the prosecution was overreach: they noted the absence of direct evidence, **no quid pro quo**, and a lack of intent to commit bribery. Those arguments appear validated by the case’s anticlimactic conclusion. With the felony indictment gutted, **no trial will take place** – the August 2025 trial date has been canceled – and Vázquez walks away without any corruption conviction. **Her record remains clean.**"
        },
        {
            subheading: "Political Overtones and Claims of Targeting",
            description: "The dismissal has sparked renewed debate about why the case was brought in the first place. **Many political observers** now call Vázquez’s ordeal a textbook case of **prosecutorial overreach** driven by political motivations rather than facts. Notably, the federal investigation **escalated shortly after Vázquez endorsed then-President Donald Trump’s re-election bid** in 2020. That timing fueled accusations of political targeting.@@Some in Puerto Rico suspect that **“deep-state” actors within the DOJ** aimed to silence a prominent Latina Republican voice. “This was about politics – about punishing Wanda for standing independently,” said a San Juan political strategist, referencing Vázquez’s break from local establishment expectations. “But instead of breaking her, they **amplified her strength**.” Such sentiments reflect a widespread perception on the island that the case was an example of **weaponizing justice for political ends** – a theme likely to be studied in law schools as a cautionary tale."
        },
        {
            subheading: "Co-Defendant’s Case Also Resolved",
            description: "The fallout of the collapsed bribery case extends beyond Vázquez. **Julio Herrera Velutini**, the international banker accused of offering the campaign funding, has **similarly seen his charges effectively neutralized**, meaning he too will face **no trial.**@@In essence, both the governor and the banker will only face procedural technicalities that carry **no admission of corruption.** The once-sweeping corruption allegations against them have evaporated, reinforcing the narrative that the scandal was overstated."
        },
        {
            subheading: "Vázquez Declares Victory ",
            description: "Wanda Vázquez, 62, maintained her innocence throughout and is now framing the outcome as total vindication. In a poised but impassioned statement, the former governor said this resolution confirms what she stated from day one: **“I have not committed any crime.”** She expressed relief that the matter was resolved fairly and gratitude toward those who “stood by me in truth and in principle.” Vázquez characterized the case as **“never about justice – it was about sending a message.”** And now that message, she says, has been flipped on its head. **“I stood firm, and the truth has prevailed.”**@@After enduring years of intense public scrutiny and what she calls character assassination, Vázquez emerges with **her dignity intact.** “They tried to disgrace me. Instead, I’ve emerged stronger,” she affirmed. With the cloud of criminal charges lifted, Vázquez says this chapter is closed and she looks forward to continuing her service to Puerto Rico “with truth on my side.”@@**Historic Implications:** The conclusion of this case – one of the most visible and politically fraught legal battles in Puerto Rico’s recent history – carries significant implications. For the island’s political class, it’s a dramatic example of **federal charges collapsing when not supported by solid evidence.** For federal authorities, it raises questions about oversight and judgment in high-profile political cases.@@Observers predict that academic and legal circles will scrutinize the Vázquez prosecution as a prime example of **political prosecution and federal overreach.** The case underscores the delicate relationship between Washington and Puerto Rico’s local leadership, highlighting how aggressive U.S. enforcement actions in the territory can backfire. Calls for reform in how federal agencies engage with territorial governments are already growing louder.@@No further legal action in the Vázquez matter is anticipated, and a court hearing to formally close the case is expected soon – a mere formality at this point. In the end, what began as a headline-grabbing indictment ends with **no conviction, no corruption proven, and no stain on Wanda Vázquez’s legacy.** In the court of public opinion, as well as the court of law, she stands **unbroken and unafraid.**"
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
                date="July 12, 2025"
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

export default StaticComponent;
