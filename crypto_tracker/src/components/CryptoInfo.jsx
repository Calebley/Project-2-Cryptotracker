import React, { useState } from "react";
import HTMLReactParser from "html-react-parser"
import { useParams } from "react-router-dom"
import millify from "millify";
import { Col, Row, Typography, Select } from 'antd';
import { DollarCircleOutlined, TrophyOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from "../services/cryptoApi";
import LineChart from "./LineChart";


const { Title, Text } = Typography
const { Option } = Select

const CryptoInfo = () => {
    const { coinId } = useParams()
    const [timePeriod, setTimePeriod] = useState("7d")
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId)
    const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timePeriod })
    const cryptoInfo = data?.data?.coin;

    if (isFetching) return "Loading..."
    console.log(data)


    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    const stats = [
        { title: 'Price to USD:', value: `$ ${cryptoInfo?.price && millify(cryptoInfo?.price)}`, icon: <DollarCircleOutlined /> },
        { title: 'Rank:', value: cryptoInfo?.rank, icon: <NumberOutlined /> },
        { title: '24h Volume:', value: ` ${cryptoInfo && millify(cryptoInfo["24hVolume"])}`, icon: <ThunderboltOutlined /> },
        { title: 'Market Cap:', value: `$ ${cryptoInfo?.marketCap && millify(cryptoInfo?.marketCap)}`, icon: <DollarCircleOutlined /> },
        { title: 'All-time-high(daily avg.):', value: `$ ${cryptoInfo?.allTimeHigh?.price && millify(cryptoInfo?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
    ];

    return (
        <div>

            <Col className="coin-detail-container">
                <Col className="coin-heading-container">
                    <Title level={2} className="coin-name">
                        {cryptoInfo.name} Details
                    </Title>
                    <p>{cryptoInfo.name} Statistics</p>
                </Col>
                {stats.map(({ icon, title, value }) => (
                    <Col className="coin-stats">
                        <Col className="coin-stats-name">
                            <Text>{icon}</Text>
                            <Text>{title}</Text>
                        </Col>
                        <Text className="stats">{value}</Text>
                    </Col>
                ))}
            </Col>
            <Select defaultValue="7d" className="select-timeperiod" placeholder="Select Timeperiod" onChange={(value) => setTimePeriod(value)}>
                {time.map((date) => <Option key={date}>{date}</Option>)}
            </Select>
            <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoInfo?.price)} coinName={cryptoInfo?.name} />
            <Col className="coin-desc-link">
                <Row className="coin-desc">
                    <Title level={4} className="coin-details-heading">
                        What is {cryptoInfo.name}?
                        {HTMLReactParser(cryptoInfo.description)}
                    </Title>
                </Row>
            </Col>

        </div>
    )
}

export default CryptoInfo