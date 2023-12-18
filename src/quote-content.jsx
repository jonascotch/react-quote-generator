export default function quoteContent(props) {
    return (    
        <div className="quote-content">
            <div className="quote-text">                        
                <p>{props.quote.content}</p>                        
            </div>
            {
                props.quote.author && 
                <div className="quote-author">
                    {`by ${props.quote.author}`}
                    <span className="bio-span">
                        <p>{props.author.bio}<br /><a className="bio-link" href={props.author.link} target="blank">Wikipedia link</a></p>                        
                    </span>
                </div>
            }
        </div>
    )
}