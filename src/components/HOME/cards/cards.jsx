import './cards.css'
import { Link, useNavigate } from 'react-router-dom'
import rom1 from './../../../assets/image/room/room1.jpg'
import rom2 from './../../../assets/image/room/room2.jpg'
import rom3 from './../../../assets/image/room/room3.jpg'
import rom4 from './../../../assets/image/room/room4.jpg'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Card () {
  // const nav = useNavigate();
  // const dispatch = useDispatch();
  // function go() {
  //     dispatch(addToFav(data));
  //     nav()
  // }
  const [data, setData] = useState([])
  const nav = useNavigate()
  var itemData
  useEffect(() => {
    const getAllPlaces = async (queryObj = {}) => {
      try {
        const excludedFields = ['page', 'sort', 'limit', 'fields']
        excludedFields.forEach(el => delete queryObj[el])

        // Advanced filtering (optional)
        if (Object.keys(queryObj).length > 0) {
          let queryString = JSON.stringify(queryObj)
          queryString = queryString.replace(
            /\b(gt|gte|lt|lte)\b/g,
            match => `$${match}`
          )
          queryObj = JSON.parse(queryString)
        }

        const response = await axios.get(
          'http://localhost:3000/place/getAllPlaces',
          {
            params: queryObj
          }
        )
        itemData = response.data.places
        setData(itemData)
        console.log(itemData)
        return response.data
      } catch (error) {
        console.error('Error fetching places:', error)
        throw error // Re-throw for error handling in the calling component
      }
    }
    getAllPlaces()
  }, [])
  function go (card) {
    console.log(card)
    nav(`/Mydeatails`, { state: card })
  }
  return (
    <>
      {/*
        // nav(`/moviedet/${data.id}`, { state: data });
    } */}
      {/* <!--================ Accomodation Area  =================--> */}
      <section className='accomodation_area section_gap'>
        <div className='container'>
          <div className='section_title text-center'>
            <h2 className='title_color'>Hotel Accomodation</h2>
            <p>
              Your Dream Getaway Starts Here: Plan Your Perfect Trip with an
              Unforgettable Hotel Stay{' '}
            </p>
          </div>
          <div className='row mb_30'>
            {data?.map(card => (
              <div className='col-lg-3 col-sm-6'>
                <div className='accomodation_item text-center'>
                  <div className='hotel_img'>
                    <img src={card.imageCover} alt='' />
                    <button
                      to='Mydeatails'
                      className='btn theme_btn button_hover'
                      onClick={() => {
                        go(card)
                      }}
                    >
                      explore
                    </button>
                  </div>
                  <a href='#'>
                    <h4 className='sec_h4'>{card.place_name}</h4>
                  </a>
                  <h5>
                    ${card.price}<small>/night</small>
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!--================ Accomodation Area  =================--> */}
    </>
  )
}

export default Card
/////////////////////////////////////////
// function Card({ data }) {

//     return (
//         <div className="card" style={{ width: "18rem" }}>

//             <div className="card-body">
//                 <h5 className="card-title">{data.name}</h5>
//                 <p className="card-text">
//                     Some quick example text to build on the card title and make up the bulk of
//                     the card's content.
//                 </p>
//                 <a href="#" className="btn btn-primary" style={{ backgroundColor: data.color }}>
//                     {data.age}
//                 </a>
//             </div>
//         </div>
//     )
// }

// // export default Card
