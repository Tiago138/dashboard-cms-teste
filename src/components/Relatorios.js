import Chart from "react-google-charts";

function Relatorios() {
  return (
    <div className="Relatorios--container">
      <div>
        <Chart
          width={"535px"}
          height={"400px"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["", "Semana"],
            ["1 julho", 41000],
            ["8 julho", 38000],
            ["16 julho", 40000],
            ["24 julho", 49000],
            ["31 julho", 46000],
          ]}
          options={{
            title: "Relatório de Vendas Semanal",
            hAxis: {
              title: "",
            },
            vAxis: {
              title: "",
            },
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </div>
      <div>
        <Chart
          width={"535px"}
          height={"400px"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["x", "Dia"],
            ["25 julho", 41000],
            ["26 julho", 38000],
            ["27 julho", 40000],
            ["28 julho", 39000],
            ["29 julho", 46000],
            ["30 julho", 47000],
            ["31 julho", 46000],
          ]}
          options={{
            title: "Relatório de Vendas Mensal",
            hAxis: {
              title: "",
            },
            vAxis: {
              title: "",
            },
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    </div>
  );
}

export default Relatorios;
