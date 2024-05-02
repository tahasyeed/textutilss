import React from 'react'
import { Link } from 'react-router-dom'

export default function Address() {
  return (
    <div>
      <nav id="navbar-example2" className="navbar navbar-light bg-light">
  <Link className="navbar-brand" to="#">Navbar</Link>
  <ul className="nav nav-pills">
    <li className="nav-item">
      <Link className="nav-link" to="#fat">@fat</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="#mdo">@mdo</Link>
    </li>
    <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</Link>
      <div className="dropdown-menu">
        <Link className="dropdown-item" to="#one">one</Link>
        <Link className="dropdown-item" to="#two">two</Link>
        <div role="separator" className="dropdown-divider"></div>
        <Link className="dropdown-item" to="#three">three</Link>
      </div>
    </li>
  </ul>
</nav>
<div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
  <h4 id="fat">@fat</h4>
  <p>...</p>
  <h4 id="mdo">@mdo</h4>
  <p>...</p>
  <h4 id="one">one</h4>
  <p>...</p>
  <h4 id="two">two</h4>
  <p>...</p>
  <h4 id="three">three</h4>
  <p>...</p>
</div>
    </div>
  )
}
