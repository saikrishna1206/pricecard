
import {FaCheck,FaTimes} from 'react-icons/fa';



function Price({details}){
    return       <div class="col-lg-4">
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">{details.title}</h5>
        <h6 className="card-price text-center">{details.price}<span class="period">{details.period}</span></h6>
      <hr></hr>
        <ul class="fa-ul">
              
                  { details.feature.map((feat)=>{
                    return <li className={feat.enable ?"" :"text-muted" } >
                   {feat.enable ? <FaCheck className="fas fa-check" /> : <FaTimes className="fas fa-times" />}

                     &ensp; {feat.fa}</li>
                  })}

</ul>
        <div className="d-grid">
          <a href="#" className="btn btn-primary text-uppercase">Button</a>
        </div>
      </div>
    </div>
  </div>
}
export default Price;