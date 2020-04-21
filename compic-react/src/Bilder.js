import React from 'react';

const Bilder = ({bilder, deleteBild}) => {

    const bilderListe = bilder.length ? (
        bilder.map(bild => {
            return (<div className="collection item" key={bild.id}>
                    <img src={bild.url} alt={bild.name} style={{ width: '100%', height: 'auto' }} onClick={() => {deleteBild(bild.id)}}/>
                    <span>{bild.name}</span>
                </div>
            )
        })
    ) : (
        <p className="center">Zu dieser Kategorie existieren noch keine Bilder</p>
    )
    return (
        <div className="bilder collection">
            {bilderListe}
        </div>
    )
}

export default Bilder;