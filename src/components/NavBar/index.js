import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function NavBar(props) {
  return (
    <div className="navbar pa4 tc f3">
      <a className="navBarButton ph5 b" href="https://projects.invisionapp.com/share/PNPA6EHU9D4?fbclid=IwAR2LiKIro_4C7jhLW7MM2hoj_roBdW94HdmBTLAwA7rO-efhfYFHaPvdqU0#/screens/333186065">
        Home
      </a>
      <a className="navBarButton ph5 b" href="https://projects.invisionapp.com/share/PNPA6EHU9D4?fbclid=IwAR2LiKIro_4C7jhLW7MM2hoj_roBdW94HdmBTLAwA7rO-efhfYFHaPvdqU0#/screens/333186063">
        My Favourites
      </a>
      <a className="navBarButton ph5 b" href="assignedToMePage">
        Assigned to me
      </a>
      <Link className="navBarButton ph5 b" to="/loggedByMe">
        Logged by Me
      </Link>
      <a className="navBarButton ph5 b" href="https://projects.invisionapp.com/share/PNPA6EHU9D4?fbclid=IwAR2LiKIro_4C7jhLW7MM2hoj_roBdW94HdmBTLAwA7rO-efhfYFHaPvdqU0#/screens/333186111">
        Log out
      </a>
    </div>
  );
}
