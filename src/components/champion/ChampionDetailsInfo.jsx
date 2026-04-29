
const StatRow = ({ label, value }) => {
    const segments = Array.from({ length: 10 }, (_, i) => i + 1);

    return (
        <div className="mb-3 w-100">
            <div className="d-flex justify-content-between align-items-center mb-1">
                <span className="text-secondary small fw-bold" style={{ letterSpacing: '1px', fontSize: '0.7rem' }}>
                    {label.toUpperCase()}
                </span>
            </div>
            <div className="d-flex gap-1">
                {segments.map((seg) => (
                    <div
                        key={seg}
                        style={{
                            height: '8px',
                            flex: 1,
                            backgroundColor: seg <= value ? '#c4b000' : 'rgba(255,255,255,0.1)',
                            transform: 'skewX(-20deg)',
                            transition: 'background-color 0.5s ease',
                            border: '1px solid rgba(196, 176, 0, 0.05)'
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export const ChampionDetailsInfo = ({ champion }) => {
    const difficultyLabel = champion.info.difficulty < 4 ? 'LOW' : champion.info.difficulty < 8 ? 'MEDIUM' : 'HIGH';

    return (
        <section className="hero-section" style={{ 
            position: 'relative', 
            height: '100vh', 
            overflow: 'hidden',
            backgroundColor: '#000' 
        }}>
            <div className="hero-bg" style={{
                backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                opacity: 0.6
            }}></div>

            <div className="hero-overlay" style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.8) 70%, #000 100%)'
            }}></div>

            <div className="container h-100 d-flex flex-column justify-content-end pb-5" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row align-items-end">
                    
                    <div className="col-lg-7 mb-5 mb-lg-0">
                        <h2 className="text-riot-gold italic fw-bold mb-0" style={{ letterSpacing: '3px' }}>
                            {champion.title.toUpperCase()}
                        </h2>
                        <h1 className="display-1 fw-black text-white italic mb-4" style={{ lineHeight: '0.8', fontWeight: '900' }}>
                            {champion.name.toUpperCase()}
                        </h1>
                        
                        <p className="lead text-light mb-5" style={{ maxWidth: '600px', fontSize: '1.1rem', opacity: 0.9 }}>
                            {champion.lore}
                        </p>

                        <div className="d-flex gap-3">
                            <div className="p-3 border border-secondary bg-dark-blue text-center" style={{ minWidth: '140px', backgroundColor: 'rgba(10, 20, 40, 0.7)', border: '1px solid #c4b00055' }}>
                                <p className="text-secondary small mb-1">ROLE</p>
                                <h6 className="text-riot-gold fw-bold mb-0">{champion.tags.join("/").toUpperCase()}</h6>
                            </div>

                            <div className="p-3 border border-secondary bg-dark-blue text-center" style={{ minWidth: '140px', backgroundColor: 'rgba(10, 20, 40, 0.7)', border: '1px solid #c4b00055' }}>
                                <p className="text-secondary small mb-1">DIFFICULTY</p>
                                <h6 className="text-riot-gold fw-bold mb-0">{difficultyLabel}</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 offset-lg-1">
                        <div className="p-4" style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '4px', borderLeft: '2px solid #c4b000' }}>
                            <h6 className="text-white mb-4 italic fw-bold" style={{ letterSpacing: '2px' }}>CHAMPION STATS</h6>
                            <StatRow label="Attack" value={champion.info.attack} />
                            <StatRow label="Defense" value={champion.info.defense} />
                            <StatRow label="Magic" value={champion.info.magic} />
                            <StatRow label="Difficulty" value={champion.info.difficulty} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};