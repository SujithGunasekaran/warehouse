import React from 'react';


export default function OurGarantee()
{
    return(
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div style={styles.heading}>Our guarantees</div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div style={styles.guaranteeDisplay}>
                        <svg focusable="false" style={styles.iconSize} viewBox="0 0 24 23" role="presentation">
                            <g strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="square">
                                <path stroke="#00badb" d="M23 5v13h-4v4l-6-4h-1"></path>
                                <path stroke="#1e2d7d" d="M19 1H1v13h4v5l7-5h7z"></path>
                            </g>
                        </svg>
                        <div style={styles.iconHeading}>24/7 Support</div>
                        <div style={styles.iconPara}>Available when you need us, by chat, mail and phone</div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div style={styles.guaranteeDisplay}>
                        <svg focusable="false" style={styles.iconSize} viewBox="0 0 24 22" role="presentation">
                            <g strokeWidth="1.5" fill="none" fillRule="evenodd">
                                <path stroke="#1e2d7d" d="M5 6.1000004L1 9v12h22V9l-4-2.8999996M1 9l22 12M23 9l-11 6"></path>
                                <path d="M13.8461533 1C13.0769224 1 12.3846149 1.3846154 12 2c-.3846159-.6153846-1.0769234-1-1.8461542-1C8.9230766 1 8 2 8 3.2307687c0 2.1538463 4 5.4615388 4 5.4615388s4-3.3076925 4-5.4615388C16 2 15.0769224 1 13.8461533 1z" stroke="#00badb" strokeLinecap="square"></path>
                            </g>
                        </svg>
                        <div style={styles.iconHeading}>Our clients love us</div>
                        <div style={styles.iconPara}>More than 300K positive reviews on Trustpilot</div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div style={styles.guaranteeDisplay}>
                        <svg focusable="false" style={styles.iconSize} viewBox="0 0 24 22" role="presentation">
                            <g transform="translate(1 1)" strokeWidth="1.5" fill="none" fillRule="evenodd">
                                <path d="M5 10H2M5 15H4" stroke="#00badb" strokeLinecap="square"></path>
                                <path stroke="#1e2d7d" d="M16.829 16H22v-6l-4-2-1-4H9v12h2.171"></path>
                                <path d="M0 5h5" stroke="#00badb" strokeLinecap="square"></path>
                                <path stroke="#1e2d7d" strokeLinecap="square" d="M0 0h9v4"></path>
                                <circle stroke="#1e2d7d" strokeLinecap="square" cx="14" cy="17" r="3"></circle>
                                <path stroke="#1e2d7d" strokeLinecap="square" d="M13 7v2h2"></path>
                            </g>
                        </svg>
                        <div style={styles.iconHeading}>Fast delivery</div>
                        <div style={styles.iconPara}>100% of shipments delivered under 48 hours</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    heading : {
        marginTop:'30px',
        marginBottom:'20px',
        fontFamily : "'Roboto', sans-serif",
        fontSize: '20px',
        letterSpacing: '1px',
        lineHeight: '170%',
        wordSpacing: '1.3px',
        fontWeight: 'bold',
        color: '#1e2d7d',
    },
    guaranteeDisplay : {
        marginTop : '20px',
        padding : '20px 20px',
        border : '1px solid #e1e3e4',
        display : 'flex',
        flexDirection : 'column',
        alignItem : 'center',
        justifyContent : 'center'
    },
    iconSize : {
        margin : 'auto',
        width : '22px',
        height : '22px'
    },
    iconHeading : {
        textAlign : 'center',
        paddingTop : '10px',
        paddingBottom : '10px',
        fontFamily : "'Roboto', sans-serif",
        fontSize: '13px',
        letterSpacing: '1px',
        lineHeight: '170%',
        wordSpacing: '1.3px',
        fontWeight: 'bold',
        color: '#1e2d7d',
    },
    iconPara : {
        textAlign : 'center',
        paddingTop : '0px',
        paddingBottom : '10px',
        fontFamily : "'Roboto', sans-serif",
        fontSize: '14px',
        letterSpacing: '0.5px',
        lineHeight: '170%',
        wordSpacing: '1.3px',
        color: '#677279',
    }
}