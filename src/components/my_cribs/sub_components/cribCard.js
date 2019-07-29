import React from 'react';

export default function cribCard({ crib }) {
  const renderPics = () => {
    return crib.pictures.map(p => {
      return (
        <div className="crib-pic" key={p}>
          <img src={p} alt=""/>
        </div>
      )
    });
  }
  return (
    <div className="crib-card-container">
      <section className="crib-pictures">
        {renderPics()}
      </section>
      <div className="crib-info">
        <div>{crib.name}</div>
        <div className="info-divider">|</div>
        <div>{Number(crib.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' }).split('.')[0]}</div>
      </div>
    </div>
  );
}
