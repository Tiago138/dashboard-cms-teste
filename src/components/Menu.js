import { GoGraph, GoOrganization } from "react-icons/go";
import { IoGlasses, IoArrowForwardCircleOutline } from "react-icons/io5";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { AiFillFileAdd } from "react-icons/ai";

function Menu() {
  return (
    <div className="menu--container">
      <h2 className="logo">Logo</h2>

      <div className="menu--item menu--item--selected">
        <GoGraph />
        <p>Dashboard</p>
      </div>

      <div className="menu--item">
        <AiFillFileAdd />
        <p>Pedidos</p>
      </div>

      <div className="menu--item">
        <IoGlasses />
        <p>Produtos</p>
      </div>

      <div className="menu--item">
        <GoOrganization />
        <p>Clientes</p>
      </div>

      <div className="menu--item">
        <RiMoneyDollarCircleFill />
        <p>Financeiro</p>
      </div>

      <div className="menu--logout">
        <IoArrowForwardCircleOutline />
        <p>Sair</p>
      </div>
    </div>
  );
}

export default Menu;
