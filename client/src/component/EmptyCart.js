import React from 'react';
import { Link } from 'react-router-dom';

export default function EmptyCart(){

    return(
        <div style={styles.cartDisplay}>
            <svg focusable="false" width="81" height="70" viewBox="0 0 81 70">
                <g transform="translate(0 2)" strokeWidth="4" stroke="#1e2d7d" fill="none" fill-Rule="evenodd">
                    <circle strokeLinecap="square" cx="34" cy="60" r="6"></circle>
                    <circle strokeLinecap="square" cx="67" cy="60" r="6"></circle>
                    <path d="M22.9360352 15h54.8070373l-4.3391876 30H30.3387146L19.6676025 0H.99560547"></path>
                </g>
            </svg>
            <div style={styles.cartName}>Your Cart is empty</div>
            <Link to='/Shop/AV Receivers'><button style={styles.cartButton}>Shop Our Products</button></Link>
        </div>
    )
}

const styles={
    cartDisplay:{
        display : 'flex',
        margin : 'auto',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center'
    },
    cartName:{
        paddingTop:'35px',
        fontFamily: "'Roboto', sans-serif",
        fontSize: '17px',
        letterSpacing: '1px',
        lineHeight: '170%',
        wordSpacing: '1.3px',
        fontWeight: 'bold',
        color : '#1e2d7d'
    },
    cartButton:{
        borderRadius:'4px',
        marginTop:'35px',
        marginBottom:'45px',
        border:'none',
        width:'250px',
        height:'45px',
        backgroundColor:'#00badb',
        color:'white',
        fontFamily: "'Roboto', sans-serif",
        fontSize: '17px',
        letterSpacing: '1px',
        lineHeight: '170%',
        wordSpacing: '1.3px',
        fontWeight: 'bold',
    }
}