

import { ChakraProvider, useDisclosure, Button } from "@chakra-ui/react";
import theme from "./theme";
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import "@fontsource/inter";

import { approve, transferFrom, getBalance } from "./api/form"
import { useMetamask } from "./components/Metamask";
import { useState, useEffect } from "react";
import { BigNumber } from "ethers";


function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { connect, accounts } = useMetamask();

  const [account, setAccount] = useState('');

  useEffect(() => {
    if (account == undefined) {
      // connect(); 
    }
    console.log("accounts0", accounts[0]);

    setAccount(accounts[0]);
  })

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <ConnectButton handleOpenModal={onOpen} />
        <AccountModal isOpen={isOpen} onClose={onClose} />

        <Button onClick={() => {
          transferFrom(accounts[0]);
        }}></Button>

      </Layout>
    </ChakraProvider>
  );
}

export default App;
