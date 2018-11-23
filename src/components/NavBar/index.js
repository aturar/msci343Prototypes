import React from "react"
import { Link } from 'react-router-dom'
import "./styles.css"

export default function NavBar(props) {
  return <div className="navbar pa4 tc f3">
    <Link className="navBarButton ph5" to="/Home">Home</Link>
    <Link className="navBarButton ph5" to="/myFavourites">My Favourits</Link>
    <Link className="navBarButton ph5" to="/assignedToMe">Assigned to me</Link>
    <Link className="navBarButton ph5" to="/loggedByMe">Logged by Me</Link>
    <Link className="navBarButton ph5" to="/loggedByMe">Log out</Link>
  </div>
}