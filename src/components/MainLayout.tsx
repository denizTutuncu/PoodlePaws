import { FC, ReactNode } from "react"
import Head from "next/head"
import styles from "../styles/custom.module.css"
import { Box, Center, Spacer, Stack } from "@chakra-ui/react"
import { AppBar } from "./AppBar"
import { useWallet } from "@solana/wallet-adapter-react"

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const { connected } = useWallet()

  return (
    <div className={styles.container}>
      <Head>
        <title>Poodle Paws</title>
        <meta name="The NFT Collection for Lira DAO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        w="full"
        h="calc(100vh)"
        bgImage={connected ? "" : "url(/avatar5.png)"}
        backgroundPosition="center"
      >
        <Stack w="full" h="calc(100vh)" justify="center">
          <Spacer />

          <Center>{children}</Center>

          <Spacer />

          <Center>
            <Box marginBottom={4} color="white">
              <a
                href="https://twitter.com/LiraDAO"
                target="_blank"
                rel="noopener noreferrer"
              >
                build on Solana
              </a>
            </Box>
          </Center>
        </Stack>
      </Box>
    </div>
  )
}

export default MainLayout