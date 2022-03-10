import React from "react"
import { Line } from "react-chartjs-2"
import { Col, Row, Typography } from "antd"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function getTimeString(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
  
    return day + '/' + month + '/' + year;
  }

function LineChart({ coinHistory, currentPrice, coinName }) {

    const coinPrice = []
    const coinTimestamp = []

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
      }
    

      for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString());
      }

      console.log(coinTimestamp)

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: "Price in USD",
                data: coinPrice,
                fill: false,
                backgroundColor: "#AAFF00",
                borderColor: "#AAFF00"
            },
        ],
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],

            x: {
                type: "time",
                time: {
                    unit: "month"
                }
            }
        },
    }

    return (
        <>
            <Row className="chart-header">
                <Typography.Title className="chart-title">{coinName} Price Chart</Typography.Title>
                {/* <Col className="price-container">
                <Typography.Title className="price-change">{coinHistory?.data?.change}%</Typography.Title>
                <Typography.Title className="current-price">Current {coinName} Price: ${currentPrice}</Typography.Title>
            </Col> */}
            </Row>
            <Line data={data} option={options} />
        </>
    )
}

export default LineChart