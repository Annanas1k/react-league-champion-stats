// src/styles/skeletonStyles.js

export const skeletonStyles = {
  wrapper: {
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#1a1a1a', // Un fundal de bază până pornește animația
    borderRadius: '4px',
    height: '100%'
  },
  
  pulseElement: {
    background: 'linear-gradient(90deg, #1e1e1e 25%, #2a2a2a 50%, #1e1e1e 75%)',
    backgroundSize: '200% 100%',
    // Notă: "animation" funcționează doar dacă @keyframes loading-pulse este definit în App.css
    animation: 'loading-pulse 1.5s infinite', 
  },

  imagePlaceholder: {
    aspectRatio: '1/1',
    width: '100%',
    marginBottom: '10px'
  },

  textPlaceholder: {
    height: '15px',
    width: '70%',
    margin: '0 auto',
    borderRadius: '2px'
  }
};

export const ChampionSkeleton =()=>{

    return (
        <div className="col-6 col-md-4 col-lg-2 md-4">
            <div className="card bg-riot-gray border-0 h-100 skeleton-wrapper">
                <div className="skeleton-image" style={{ aspectRatio: '1/1', backgroundColor: '#333' }}></div>
                <div className="card-body p-2">
                <div className="skeleton-text mx-auto" style={{ height: '15px', width: '70%', backgroundColor: '#333' }}></div>
                </div>
            </div>
        </div>
    )
}