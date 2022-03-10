import React, {useEffect, useState} from "react"
import { Menu, Typography } from "antd"
import { Link } from "react-router-dom"
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined } from "@ant-design/icons"



const NavBar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Typography.Title level={2} className="logo">
                    <Link to="/">Cryptotracker</Link>
                </Typography.Title>


            </div>
            <Menu theme="light">
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default NavBar