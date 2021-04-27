import React from 'react';
import OfferElements from './OfferElements/OfferElements';
import * as styles from './WhatsOffer.module.scss';
import { connect } from 'react-redux';
const WhatsOffer = ({ modeRedux }) => {
    return (
        <section className={`${styles.whatsOffer_section} ${modeRedux && styles.dark_mode}`}>
            <div className={`${styles.offerTitle} ${modeRedux && styles.dark_mode}`}>
                <h2>NASZA OFERTA</h2>
                <p className={`${styles.description} ${modeRedux && styles.dark_mode}`}>
                    Możliwości związane z kodem są nieograniczone i można realizować wszelkiego rodzaju projekty, ale oto niektóre z naszych podstawowych usług
                </p>
            </div>
            <OfferElements modeRedux={modeRedux} />
        </section>
    )
}

const mapStateToProps = state => {
    return {
        modeRedux: state.toggleMode,
    };
};


export default connect(mapStateToProps, null)(WhatsOffer);