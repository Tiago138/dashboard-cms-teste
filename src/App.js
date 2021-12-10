import Header from "./components/Header";
import Menu from "./components/Menu";
import Graphs from "./components/Graphs";
import PedidosRealizados from "./components/PedidosRealizados";

function App() {
  return (
    <div className="content--grid">
      <div className="content">
        <Header />
        <Graphs />
        <PedidosRealizados />
      </div>
      <Menu />
    </div>
  );
}

export default App;
