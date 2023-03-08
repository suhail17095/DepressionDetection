import React from 'react'

function TeamCards(Props) {
  return (
    <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-0 ">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src={Props.image} class="card-img-top" alt="avatar" style={{width:"100%",height:"86%"}}/>
                    <div class="card-body text-center ">
                      <h5 class="card-title mb-0">{Props.name}</h5>
                      {/* <div class="card-text text-black-50">Web Designer</div> */}

                    </div>
                  </div>
                  <div class="flip-card-back">
                    <h1 class="person text- ">{Props.name}</h1>
                    <p class="description text-black-50">{Props.description}</p>
                    <p class="description text-black-50">{Props.mail}</p>
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-linkedin"></a>

                  </div>
                </div>
              </div>
            </div>

          </div>
  )
}

export default TeamCards