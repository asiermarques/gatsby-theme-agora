import React from "react";
import { Link } from "../domain/Link";

export default ({ items }: { items: Link[] }) => (
  <ul className="nav flex-column">
    {items &&
      items.map((item, index) => (
        <li key={index} className="nav-item">
          <a href={`${item.link}`} className="nav-link" title={item.name}>
            {item.name}
          </a>
        </li>
      ))}
  </ul>
);
