import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../components/css/ChapterCss/ChaptersDropItems.css"

function ChaptersDropItems() {
  return (
    <div className="chapters-dropdown">
      <div className="chapters-dropdown-content">
        <NavLink to="/Chapters/Camanava">National Capital Region (NCR)</NavLink>
        <NavLink to="/Chapters/Visayas">Visayas Region</NavLink>
        <NavLink to="/Chapters/Mindanao">Mindanao Region</NavLink>
      </div>
    </div>
  );
}

export default ChaptersDropItems;
