import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { selectCovid } from "../features/covid/covidSlice";
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const ChartSection = () => {
  const covid = useSelector(selectCovid);
  const currentCountry = covid.country;

  //Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Covid Chart",
      },
    },
  };
  return (
    <Section>
      <Wrapper>
        <h3 className='section-title'>Chart</h3>
        {covid.loading && <ClipLoader className='loader' />}
        {/* If current country is set to Global display Line chart */}
        {!covid.loading && currentCountry === "Global" && covid.dailyData && (
          <Line
            options={options}
            data={{
              labels: covid.dailyData.map((day) => {
                return day.reportDate;
              }),
              datasets: [
                {
                  fill: true,
                  label: "Infected",
                  data: covid?.dailyData?.map((day) => {
                    return day.totalConfirmed;
                  }),
                  borderColor: "rgb(53, 162, 235)",
                  backgroundColor: "#d6d6d6",
                },
                {
                  fill: true,
                  label: "Deaths",
                  data: covid?.dailyData?.map((day) => {
                    return day.deaths.total;
                  }),
                  borderColor: "#dab8b7",
                  backgroundColor: "#f4d7d6",
                },
              ],
            }}
          />
        )}

        {/* If current country is not Global display Bar chart */}
        {!covid.loading && currentCountry !== "Global" && covid.covidData && (
          <Bar
            options={options}
            data={{
              labels: ["Infected", "Deaths", "Active"],
              datasets: [
                {
                  fill: true,
                  label: [""],
                  data: [
                    covid.covidData?.confirmed?.value,
                    covid.covidData?.deaths?.value,
                    covid.covidData?.confirmed?.value -
                      covid.covidData?.deaths?.value,
                  ],
                  backgroundColor: ["#b2d7fe", "#f4d7d6", "#f4e0c9"],
                },
              ],
            }}
          />
        )}
      </Wrapper>
    </Section>
  );
};

export default ChartSection;

const Section = styled.section`
  margin-top: 2rem;
  background: white;
  min-height: 60vh;
  color: #1a1b1d;
  .loader {
    margin: 0 auto;
    display: block !important;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 1rem;
  .section-title {
    margin-top: 1rem;
    font-size: 1.5rem;
    position: relative;
  }
  .section-title:after {
    content: "";
    display: block;
    width: 50px;
    height: 3px;
    background: #d7d8de;
    left: 4.25rem;
    top: 47%;
    position: absolute;
  }
`;
