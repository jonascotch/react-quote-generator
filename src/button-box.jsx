/* eslint-disable react/prop-types */
import XLogo from "./assets/x-icon.svg"

export default function ButtonBox(props) {

    const hrefString = `https://twitter.com/intent/tweet?text=${props.text} - ${props.author}`

    const {getNewQuote} = props
    return (
        <div className="btn-box">
            <button className="new-quote-btn" onClick={getNewQuote}>Get New Quote</button>
            <a className="twitter-share-button" href={hrefString} target="blank">
                <img className="xlogo" src={XLogo}></img>   This Quote
            </a>
        </div>
    )
}