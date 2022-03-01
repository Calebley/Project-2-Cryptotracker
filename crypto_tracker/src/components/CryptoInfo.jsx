import React, { useState } from "react";
import HTMLReactParser from "html-react-parser"
import { useParams } from "react-router-dom"
import millify from "millify";
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";

const { Title, Text } = Typography


const CryptoInfo = () => {
    const { coinId } = useParams()
    const [timePeriod, setTimePeriod] = useState("7d")
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId)
    const cryptoInfo = data?.data?.coin;

    console.log(data)

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    const stats = [
        { title: 'Price to USD', value: `$ ${cryptoInfo?.price && millify(cryptoInfo?.price)}`, icon: <DollarCircleOutlined /> },
        { title: 'Rank', value: cryptoInfo?.rank, icon: <NumberOutlined /> },
        { title: '24h Volume', value: `$ ${cryptoInfo?.volume && millify(cryptoInfo?.volume)}`, icon: <ThunderboltOutlined /> },
        { title: 'Market Cap', value: `$ ${cryptoInfo?.marketCap && millify(cryptoInfo?.marketCap)}`, icon: <DollarCircleOutlined /> },
        { title: 'All-time-high(daily avg.)', value: `$ ${cryptoInfo?.allTimeHigh?.price && millify(cryptoInfo?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
    ];

    return (
        <Col className="coin-detail-container">
            <Col className="coin-heading-container">
                <Title level={2} className="coin-name">
                    {cryptoInfo.name} Price
                </Title>
                <p>
                    {cryptoInfo.name} live price (USD)
                </p>
                <p>{cryptoInfo.name} Statistics</p>
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
        </Col>
    )
}

export default CryptoInfo