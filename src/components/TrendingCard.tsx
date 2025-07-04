    import React from 'react';
    import SectionWrapper from './SectionWrapper';

    interface TrendingItem {
    author: string;
    role: string;
    image: string;
    title: string;
    description: string;
    }

    interface TrendingSection {
    section: string;
    items: TrendingItem[];
    }

    interface TrendingCardProps {
    data: TrendingSection;
    }

    const TrendingCard: React.FC<TrendingCardProps> = ({ data }) => {
    return (
        <SectionWrapper title={data.section}>
        {data.items.map((item, idx) => (
            <div key={idx} className="mb-4">
            <div className="d-flex align-items-start mb-2">
                <div className="me-3">
                <p className="mb-0 fw-semibold">{item.author}</p>
                <small style={{ color: '#888' }}>{item.role}</small>
                </div>
                <img
                src={item.image}
                alt={item.author}
                style={{
                    width: '60px',
                    height: '60px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    marginLeft: 'auto',
                }}
                />
            </div>
            <h6 className="fw-bold">{item.title}</h6>
            <p style={{ marginBottom: '0.5rem' }}>{item.description}</p>
            {idx !== data.items.length - 1 && (
                <hr style={{ borderColor: '#666' }} />
            )}
            </div>
        ))}
        </SectionWrapper>
    );
    };

    export default TrendingCard;
