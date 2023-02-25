import { NavLink as ItemLink } from "react-router-dom";
import "./NavLinkStyle.css";
interface Props {
  children: string;
  to: string;
}
export const NavLink = ({ to, children, ...props }: Props) => {
  return (
    <li className=" w-100 mb-2">
      <ItemLink
        {...props}
        className={({ isActive }) => {
          return isActive
            ? "is-active-item nav-link-item fs-5"
            : "nav-link-item fs-5 ";
        }}
        to={to}
      >
        {children}
      </ItemLink>
    </li>
  );
};
