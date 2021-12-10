import { GoPencil, GoFile } from "react-icons/go";

function PedidosRealizados() {
  return (
    <div className="pedidos--container">
      <h3>Ultimos pedidos realizados</h3>
      <table>
        <tr>
          <th className="nome">Nome</th>
          <th>E-mail</th>
          <th>Data</th>
          <th className="space">Harário</th>
          <th className="space">Nº do Pedido</th>
          <th>Método de Pagamento</th>
          <th></th>
        </tr>
        <tr>
          <td className="imagem">
            <img src="http://lorempixel.com.br/30/30" alt="" /> Leticia Exemplo
          </td>
          <td>leticia.exemplo@sipdigital.com</td>
          <td>30/07/2021</td>
          <td>15:49</td>
          <td>12466</td>
          <td>Cartão de Crédito - Visa</td>
          <td className="pencil">
            <GoPencil />
          </td>
          <td className="file">
            <GoFile />
          </td>
        </tr>
        <tr>
          <td className="imagem">
            <img src="http://lorempixel.com.br/30/30" alt="" />
            Ronaldo Exemplo
          </td>
          <td>ronaldo.exemplo@sipdigital.com</td>
          <td>30/07/2021</td>
          <td>14:17</td>
          <td>12465</td>
          <td>Cartão de Crédito - Master Card</td>
          <td className="pencil">
            <GoPencil />
          </td>
          <td className="file">
            <GoFile />
          </td>
        </tr>
        <tr>
          <td className="imagem">
            <img src="http://lorempixel.com.br/30/30" alt="" />
            Julia Exemplo
          </td>
          <td>julia.exemplo@sipdigital.com</td>
          <td>29/07/2021</td>
          <td>22:07</td>
          <td>12464</td>
          <td>Boleto Bancário</td>
          <td className="pencil">
            <GoPencil />
          </td>
          <td className="file">
            <GoFile />
          </td>
        </tr>
        <tr>
          <td className="imagem">
            <img src="http://lorempixel.com.br/30/30" alt="" />
            Roberto Exemplo
          </td>
          <td>roberto.exemplo@sipdigital.com</td>
          <td>29/07/2021</td>
          <td>11:45</td>
          <td>12463</td>
          <td>Cartão de Crédito - Master Card</td>
          <td className="pencil">
            <GoPencil />
          </td>
          <td className="file">
            <GoFile />
          </td>
        </tr>
        <tr>
          <td className="imagem">
            <img src="http://lorempixel.com.br/30/30" alt="" />
            Jenny Exemplo
          </td>
          <td>jenny.exemplo@sipdigital.com</td>
          <td>29/07/2021</td>
          <td>12:22</td>
          <td>12462</td>
          <td>Paypal</td>
          <td className="pencil">
            <GoPencil />
          </td>
          <td className="file">
            <GoFile />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default PedidosRealizados;
