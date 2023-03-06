import React from 'react'

function ShowResult(Props) {
    return (
        <>
            <img class="card-img-top" src={Props.img} alt="Card image cap"/>
                <div class="card-body shadow">
                    <h5 class="card-title">{"probably" + " " +Props.title}</h5>
                    <p class="card-text">{Props.message}.</p>
                    <a href={Props.link} class="btn btn-primary">Follow Link</a>
                </div>
                </>
        
    ) 
}

export default ShowResult