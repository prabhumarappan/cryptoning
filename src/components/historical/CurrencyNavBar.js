import React from "react";

export function CurrencyNavBar({ pages, active, changePage }) {
  return (
    <div className="currency__nav__bar">
      <ul className="nav__lists">
        {pages.map((nav, key) => (
          <li
            onClick={() => changePage(nav)}
            key={key}
            className={active.title == nav.title ? "nav__item main_active" : "nav__item"}
          >
            <span>{nav.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
