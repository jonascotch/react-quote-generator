export default function categoryBox(props) {
    return (
        <div className="category-box">
            <p>Choose a theme for your quote</p>
            <input 
                name='quote-category'
                value={props.theme}
                type="text" 
                placeholder='Your theme' 
                onChange={(e) => props.updateTheme(e.target.value)}></input>
        </div>
    )
}