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
          return isActive ? "is-active-item" : "dropdown-item";
        }}
        to={to}
      >
        {children}
      </ItemLink>
    </li>
  );
};
