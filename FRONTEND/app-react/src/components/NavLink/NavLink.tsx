import { NavLink as ItemLink } from "react-router-dom";
import "./NavLinkStyle.css";
interface Props {
  children: string;
  to: string;
}
export const NavLink = ({ to, children, ...props }: Props) => {
  return (
    <li>
      <ItemLink
        {...props}
        className={({ isActive }) => {
          return isActive ? "is-active-item fs-5 p-0" : "dropdown-item fs-5";
        }}
        to={to}
      >
        {children}
      </ItemLink>
    </li>
  );
};
