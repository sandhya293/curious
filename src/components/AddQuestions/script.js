import './AddQuestion.css'

let popup = document.getElementById("popup");

export function openpopup(){
    popup.classList.add("openPopup");
    console.log("clicked..")
}

export function closepopup(){
    popup.classList.remove("openPopup");
}

export function popup1(){
    return(
        <div className="popup">
            <h2>hello</h2>
            <p>bhjb uhh uhhi iuhuh iuhiuhih ihih djeed</p>
            <button onClick={closepopup}>OK</button>
        </div>   
    );
}
