import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
    argentWallet,
    trustWallet,
    ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import {
    base,
    celo,
    optimism,
} from "wagmi/chains";

export const config = getDefaultConfig({
    appName: "POAP me UP",
    projectId: "YOUR_PROJECT_ID", // TODO: Replace with actual Project ID
    wallets: [
        {
            groupName: "Other",
            wallets: [argentWallet, trustWallet, ledgerWallet],
        },
    ],
    chains: [
        base,
        celo,
        optimism,
    ],
    ssr: true,
});
