import React, {useState} from 'react'



export default function TextForm(props) {
    const ConvertToUpperCase = () => {
        // console.log("uppercase clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To Upper Case", "success")
       
    }
    const ConvertToLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To Lower Case", "success")
       
    }
    

    const addspacing = () => {
        let newText = text.split("").join(" ");
        setText(newText)
        props.showAlert("Space Added", "success")
       
   }
    const removespacing = () => {
        let newText = text.split(" ").join("");
        setText(newText)
        props.showAlert("Space Removed", "success")
   }
    const clearall = () => {
        // let newText = text.replace(text, ""); or
        let newText= ("")
        setText(newText)
        props.showAlert("Text Cleared", "success")
       
   }

    
    const handleOnChange = (e) => {
        // console.log("onchange");
        setText(e.target.value);
    }


    const [text, setText] = useState('');
    return (
        <>


            <div className="container">
            <h1>{ props.heading}</h1>
            <div className="mb-3">
            
                <textarea className="form-control border-3 border-dark" value={text} onChange={handleOnChange}  id="myBox" placeholder='Please Enter Your Text' rows="10"></textarea>
            </div>
            <button className="btn btn-primary my-3" onClick={ConvertToUpperCase}>Convert to UpperCase</button>
            <button className="btn btn-primary my-3 mx-3" onClick={ConvertToLowerCase}>Convert to LowerCase</button>
            <button className="btn btn-primary my-3" onClick={addspacing}>Add Spacing</button>
            <button className="btn btn-primary my-3 mx-3" onClick={removespacing}>Remove Spacing</button>
            <button className="btn btn-primary my-3 "  onClick={clearall}>Clear text</button>
                </div>

            <div className="container my-3">
                <h1>Your Text Summery</h1>
                <p><b>{text.split(" ").length}</b> Words and <b>{text.length}</b> Characters</p>
                <p>You can read this text in <b>{0.008 * text.split(" ").length} </b>minutes</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
               
            </>
    )
}
