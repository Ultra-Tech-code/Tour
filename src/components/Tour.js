const Tour = ({contents, settour, tour, refreshPage}) => {
  return (
    <>
      {contents.map((content) =>{
        const {id, image, name, price, info} = content;
        const deleteTour = (id) =>{
              settour(tour.filter((tour) => tour.id !== id))
        } 
        return(
          <section key={id}>
            <main>
              <h5 className="title underline">Our Tour</h5>
              <div className="single-tour">
              <img src={image} alt="tour_img" />
              <div className="tour-info">
                <h4>{name}</h4>
                <p className="tour-price">{price}</p>
              </div>
              <footer> {info} 
              <button className="delete-btn" onClick={() => deleteTour(id)}> Not interested</button> 
              </footer>        
              </div>  
            </main> 
          </section>
        )
      })
      }       
    </>
  ) 
}

export default Tour
