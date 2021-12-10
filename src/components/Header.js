import { BiStoreAlt, BiReceipt } from "react-icons/bi";
import { RiBankFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { GoBell } from "react-icons/go";

function Header() {
  return (
    <header className="header--container">
      <div className="header--line1">
        <input type="text" placeholder="Pesquisar" />

        <div className="user--ingo">
          <div className="mesages">
            <GoBell />
          </div>
          <div className="user--picture">
            <img
              src={
                require("../images/55939621_292158575010407_548621813672837120_n.jpg")
                  .default
              }
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="header--card--container">
        <div className="header--card card1">
          <BiStoreAlt />
          <div className="header--card--info">
            <p>Unidades Registradas</p>
            <span>1</span>
          </div>
        </div>
        <div className="header--card card2">
          <IoIosPeople />
          <div className="header--card--info">
            <p>Novos Clientes</p>
            <span>104</span>
          </div>
        </div>
        <div className="header--card card3">
          <BiReceipt />
          <div className="header--card--info">
            <p>Vendas Realizadas</p>
            <span>7270</span>
          </div>
        </div>
        <div className="header--card card4">
          <RiBankFill />
          <div className="header--card--info">
            <p>Lucro Liquido (Geral)</p>
            <span>R$ 427.300,50</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
