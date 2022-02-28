import React from "react"
import { Button, Menu, Typography, Avatar } from "antd"
import { Link } from "react-router-dom"
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons"

const NavBar = () => {
    return (
        <div className="container">
            <div className="logoContainer">
                <Avatar />
                <Typography.Title level={2} className="logo">
                    <Link to="/">Cryptotracker</Link>
                </Typography.Title>
                {/* <Button className="menuContainer">

                </Button> */}


            </div>
            <Menu theme="dark">
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