import React, {Component} from 'react'
import './footer.css'

class Footer extends Component {
  render(){
    return (
      <React.Fragment>
        <footer className="footer">
        <div className="container">
          <span className="text-muted">This is the Footer component</span>
        </div>
          
        </footer>
      </React.Fragment>
    )
  }
}

export default Footer