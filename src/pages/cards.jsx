import "./cards.css";
export const Cards = () => {
    return (
        <body>
  <main id="playing-cards">
    <div className="card">
        <div className="left">
          <div className="card__rank">A</div>
          <div className="card__suit">♠</div>
        </div>  
        <div className="middle">
          <div className="card__suit">♠</div>      
        </div>    
        <div className="right">
          <div className="card__rank">A</div>
          <div className="card__suit">♠</div>      
        </div>    
    </div>  
    <div className="card">
        <div className="left">
          <div className="card__rank">3</div>
          <div className="card__suit">♣</div>
        </div>  
        <div className="middle">
          <div className="card__suit">♣</div>
          <div className="card__suit">♣</div>
          <div className="card__suit flipped">♣</div>     
        </div>    
        <div className="right">
          <div className="card__rank">3</div>
          <div className="card__suit">♣</div>      
        </div>    
    </div>  
     <div className="card red">
        <div className="left">
          <div className="card__rank">2</div>
          <div className="card__suit">♦</div>
        </div>  
        <div className="middle">
          <div className="card__suit">♦</div>      
          <div className="card__suit">♦</div>
        </div>    
        <div className="right">
          <div className="card__rank">2</div>
          <div className="card__suit">♦</div>      
        </div>    
    </div>  

    <div className="card red">
        <div className="left">
          <div className="card__rank">5</div>
          <div className="card__suit">♥</div>
        </div>  
        <div className="middle">
          <div className="card__suit">♥♥</div>      
          <div className="card__suit">♥</div>
          <div className="card__suit flipped">♥♥</div>
        </div>    
        <div className="right">
          <div className="card__rank">5</div>
          <div className="card__suit">♥</div>      
        </div>    
    </div>  

  </main>  

</body>
        
    )
}