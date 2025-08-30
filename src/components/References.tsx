"use client";

import ArticleWrapper from "./ArticleWrapper";

const references = [
    {
        title:
            'Associated Press. “Former Puerto Rico Gov. Wanda Vázquez pleads guilty to campaign finance violation.',
        date: "Aug. 27, 2025",
        url: "https://apnews.com/article/puerto-rico-governor-wanda-vazquez-corruption-588ffd964bb4076a5b45219375d3fef5",
        highlight: "Puerto Rico Gov. Wanda Vázquez",
    },
    {
        title:
            'Puerto Rico Government Archives, Governor’s Office Speeches, 2019–2021.',
        date: "",
        url: "#",
        highlight: "Puerto Rico Wanda Vázquez",
    },
    {
        title:
            'Federal Court Documents, United States v. Wanda Vázquez Garced, 2022–2025',
        date: "",
        url: "https://ntc-prod-public-pdfs.s3.us-east-2.amazonaws.com/wUcS-Pbo-EUCdf9cJHGfeejIir0.pdf",
        highlight: "de Wanda Vázquez",
    },
    {
        title:
            'Business Council of Puerto Rico, Economic Reports, 2020–2021.',
        date: "",
        url: "",
        highlight: "Puerto Rico Gov. Wanda Vázquez",
    },

];

export default function References() {
    return (
        <ArticleWrapper>
            <div className="w-full flex justify-center items-center py-12 bg-gray-50 mt-6 mb-5">
                <div className="max-w-3xl w-full px-6">
                    {/* Heading */}
                    <div
                        style={{
                            textAlign: "center",
                            padding: "1.5rem 1rem 1rem 0rem",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "1.6rem",
                                fontWeight: 700,
                                color: "#111827",
                                margin: 0,
                            }}
                        >
                            References
                        </h2>
                        <div
                            style={{
                                width: "60px",
                                height: "3px",
                                background: "linear-gradient(90deg, #1e40af 0%, #3b82f6 100%)",
                                margin: "0.5rem auto 0 auto",
                                borderRadius: "2px",
                            }}
                        />
                    </div>


                    {/* References list */}
                    <ul className="list-disc list-inside space-y-4  text-sm leading-relaxed">
                        {references.map((ref, index) => {
                            // Extract quoted text (anything between quotes "")
                            const quoteMatch = ref.title.match(/"(.*?)"/);
                            const quoteText = quoteMatch ? quoteMatch[0] : "";
                            const beforeQuote = quoteMatch
                                ? ref.title.split(quoteMatch[0])[0]
                                : ref.title;
                            const afterQuote = quoteMatch
                                ? ref.title.split(quoteMatch[0])[1]
                                : "";

                            return (
                                <li
                                    key={index}
                                    style={{
                                        marginBottom: "10px",
                                        fontSize: "17px",
                                    }}
                                >
                                    <a
                                        href={ref.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            fontSize:'15px',
                                            color: "#1f2937",
                                            textDecoration: "none", // no underline
                                        }}
                                    >
                                        {beforeQuote}
                                        {quoteText && (
                                            <span
                                                style={{
                                                    fontWeight: "500", // medium
                                                    color: "#1f2937",  // same as link color
                                                }}
                                            >
                                                {quoteText}
                                            </span>
                                        )}
                                        {afterQuote}
                                    </a>
                                    <span
                                        style={{
                                            fontSize:'13px',
                                            color: "#6b7280", // gray color for date
                                            marginLeft: "5px",
                                        }}
                                    >
                                        {ref.date}
                                    </span>
                                </li>

                            );
                        })}
                    </ul>
                </div>
            </div>
        </ArticleWrapper>
    );
}
