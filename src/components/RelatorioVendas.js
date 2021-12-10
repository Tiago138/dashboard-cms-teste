import Chart from "react-google-charts";

function RelatorioVendas() {
  return (
    <div className="graph--relatorio-vendas">
      <Chart
        width={1090}
        height={"370px"}
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Year", "Vendas de 2020", "Vendas de 2021"],
          ["2020-08", 100, 200],
          ["2020-09", 117, 160],
          ["2020-10", 260, 112],
          ["2020-11", 123, 110],
          ["2020-12", 203, 230],
          ["2020-12", 93, 120],
          ["2021-01", 203, 50],
          ["2021-02", 223, 60],
          ["2021-03", 103, 130],
          ["2021-04", 83, 270],
          ["2021-05", 183, 190],
          ["2021-06", 95, 80],
          ["2021-07", 173, 190],
        ]}
        options={{
          title: "Relatório de Vendas",
          hAxis: { title: "", titleTextStyle: { color: "#333" } },
          vAxis: { minValue: 0 },
          // For the legend to fit, we make the chart area smaller
          chartArea: { width: "50%", height: "70%" },
          // lineWidth: 25
        }}
      />
    </div>
  );
}

export default RelatorioVendas;
