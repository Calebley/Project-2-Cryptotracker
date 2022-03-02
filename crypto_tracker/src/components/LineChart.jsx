import React from "react"
import { Line } from "react-chartjs-2"
import { Col, Row, Typography} from "antd"

const { Title } = Typography

function LineChart({currentPrice, coinName}) {
    return (
        <>
        <Row className="chart-header">
            <Title className="chart-title">{coinName} Price Chart</Title>
            <Col className="price-container">
                <Title className="current-price">Current {coinName} Price: ${currentPrice}</Title>
            </Col>
        </Row>
        </>
    )
}

export default LineChart