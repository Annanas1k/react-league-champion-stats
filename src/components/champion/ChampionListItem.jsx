import React from 'react';
import { useNavigate } from 'react-router';

export const ChampionListItem = React.memo(({ champion, version }) => {
  const navigate = useNavigate();
  const iconUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.id}.png`;

  return (
    <div 
      onClick={() => navigate(`/champions/${champion.id}`)}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        cursor: 'pointer',
        borderBottom: '1px solid #333',
        gap: '15px'
      }}
    >
      <img 
        src={iconUrl} 
        alt={champion.name} 
        style={{ width: '40px', height: '40px', borderRadius: '4px' }} 
      />
      <div>
        <strong style={{ display: 'block' }}>{champion.name}</strong>
        <small style={{ color: '#888' }}>{champion.title}</small>
      </div>
      <div style={{ marginLeft: 'auto', color: '#c4b000' }}>
        {champion.tags.join(', ')}
      </div>
    </div>
  );
});