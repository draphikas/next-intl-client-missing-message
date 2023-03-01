"use client"
import { ConfigProvider } from "antd"
import Link from "next/link"
import { StyleProviderLayout } from "../app/antd"
import { User } from "../icons"
import theme from "../styles/theme"
import LocaleSwitcherClient from "./LocaleSwitcherClient"

export default function Header() {
  return (
    <StyleProviderLayout>
      <ConfigProvider theme={theme}>
        <header style={{ backgroundColor: 'blue' }}>
          <LocaleSwitcherClient />
          <Link href={"/"}>
            <User width={100} height={100} />
          </Link>
        </header>
      </ConfigProvider>
    </StyleProviderLayout>
  )
}
