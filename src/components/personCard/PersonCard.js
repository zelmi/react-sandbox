import React from "react"
import Star from "./Star"

export default function PersonCard() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false,
        img: "https://cdn-icons-png.flaticon.com/512/146/146031.png"
    })
    // empty star: https://www.kindpng.com/picc/m/131-1313967_star-symbol-text-transparent-background-star-icon-hd.png
    // filled star: https://cdn3.vectorstock.com/i/1000x1000/31/77/star-icon-isolated-on-background-modern-simple-sp-vector-21073177.jpg
    
    function toggleFavorite() {
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }
    
    return (
        <main>
            <article className="card">
                <img src={contact.img} className="card--image" />
                <div className="card--info">
                    <Star
                    isFilled = {contact.isFavorite}
                    handleClick = {toggleFavorite}/>
                    <h2 className="card--name">
                        {`${contact.firstName} ${contact.lastName}`}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}