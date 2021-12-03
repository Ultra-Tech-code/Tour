const Tour = ({contents, settour, tour, refreshPage}) => {
  return (
    <>
      <h2 className="title">Our Tours</h2>
      <div className="underline"></div>
      {contents.map((content) =>{
        const {id, image, name, price, info} = content;
        const deleteTour = (id) =>{
              settour(tour.filter((tour) => tour.id !== id))
        } 
        return(
          <section key={id}>
            <main>
              <div className="single-tour">
                <img src={image} alt="tour_img" />
                <div className="tour-info">
                  <h4>{name}</h4>
                  <b>
                    <p className="tour-price">{price}</p>
                  </b>
                </div>
                <footer> {info} 
                  <button className="delete-btn" onClick={() => deleteTour(id)}>Not interested</button> 
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
