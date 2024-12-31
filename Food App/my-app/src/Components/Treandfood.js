import React from 'react'

export default function Treandfood() {
  return (
    <div className='container mt-3'>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item trand_fod_img active">
                <img src="https://www.allrecipes.com/thmb/9Q9LUDJXEEJ5o3P9G48iN7bFrRQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-24878-bbq-chicken-pizza-beauty-2x1-bdc59852305a41cf8f98c6c15e8b540c.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item trand_fod_img">
                <img src="https://www.seriouseats.com/thmb/81xZpXMCvD_FOZ1FzOJNp0Sa1Io=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20240701-CaesarPasta2-AmandaSuarez-hero-c4302923bb52429db5f53c350d688b97.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item trand_fod_img">
                <img src="https://www.seriouseats.com/thmb/uSNXjlR9pQU0Nt9HJTzD2ZhZ45Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2015__07__20150728-homemade-whopper-food-lab-35-b3500a5c2f3e4e10aa3169d5f76e1468.jpg" class="d-block w-100" alt="..."/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  )
}
