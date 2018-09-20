import React from 'react'

const Header = props => (
  <div className="jumbotron">
    <h1 className="display-3">{props.title}</h1>
    <p className="lead">{props.briefSummary}</p>
    {/*<hr className="my-4" />
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p className="lead">
      <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>*/}
  </div>
)

export default Header