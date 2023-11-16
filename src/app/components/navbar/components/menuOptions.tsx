import Logo from "../../../../../public/images/logo.png";
import { navRoutes } from "../../../../../constants/constants";
import Link from "next/link";
export default function MenuOptions() {
  return (
    <div>
      <ul>
        {navRoutes.map((navRoute) => (
          <li key={navRoute.name}>{navRoute.name}</li>
        ))}
      </ul>
    </div>
  );
}
