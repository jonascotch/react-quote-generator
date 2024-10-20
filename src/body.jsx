import {useState} from "react"
import QuoteContent from "./quote-content"
import CategoryBox from "./category-box"
import ButtonBox from "./button-box"

export default function Body() {

    let [quote, setQuote] = useState({content:"This is a quote generator, press the button and get a famous quote. Mouse over the author to know more", })
    let [theme, setTheme] = useState("")
    let [author, setAuthor] = useState({})

    async function getNewQuote() {

        setAuthor({})

        let quoteURL = "http://api.quotable.io/quotes/random"

        if (theme != "") {
            quoteURL += `?tags=${theme}`
            setTheme("")
        }
        
        try {
            const quoteResponse = await fetch(quoteURL)

            const quoteData = await quoteResponse.json()
    
            if (quoteData.statusCode == 404) {
                setQuote({
                    content:"Sorry! No quote was found about your theme. Try another one!",
                    author:""
                })
            } else {
                setQuote(quoteData[0])      
            }
            
    
            let authorURL = `http://api.quotable.io/authors?slug=${quoteData[0].authorSlug}`
    
            let authorResponse = await fetch(authorURL)
    
            let authorData = await authorResponse.json()
    
            setAuthor(authorData.results[0])

        } catch(error) {
            console.log(error.message)
        }

    }

    function updateTheme(text) {
        setTheme(text)
    }

    return (
        <div className='wrapper'>
            <div className='title-bar'>
                <a href="./"><h1>Quote Generator</h1></a>
            </div>
            <div className='quote-box'>
                <QuoteContent quote={quote} author={author}/>
                <div className="command-box">
                    <CategoryBox updateTheme={updateTheme} theme={theme}/>     
                    <ButtonBox getNewQuote={getNewQuote} text={quote.content} author={quote.author}/>
                </div>
            </div>            
            <footer>
                <p>Made by <a href="https://jonascotch.github.io" >jonascotch</a> &copy; 2023</p>
                <p>With many thanks to <a href="https://github.com/lukePeavey/quotable">lukePeavey</a></p>
            </footer>
        </div>
    )
  
}