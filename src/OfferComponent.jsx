import React from 'react'

const OfferComponent = (props) => {
    var msg = ''

    if (props.simpleInterest < 1000) {
        msg = 'CIBIL SCORE = 750'
    }
    else if (props.simpleInterest < 1000 && props.simpleInterest <= 2000) {
        msg = 'CIBIL SCORE = 800'
    }
    else {
        msg = 'CIBIL SCORE = 850'
    }

    return (
        <div>
            <div style={{ color: "red", fontSize: 24 }}>
                {msg}
            </div>
        </div>
    )
}

export default OfferComponent
