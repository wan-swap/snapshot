import Vue from 'vue';
import { LockPlugin } from '@snapshot-labs/lock/plugins/vue';
import injected from '@snapshot-labs/lock/connectors/injected';
import injectedMetaMask from '@snapshot-labs/lock/connectors/injectedMetaMask';
import injectedWanWallet from '@snapshot-labs/lock/connectors/injectedWanWallet';
import fortmatic from '@snapshot-labs/lock/connectors/fortmatic';
import portis from '@snapshot-labs/lock/connectors/portis';
import walletconnect from '@snapshot-labs/lock/connectors/walletconnect';
import walletlink from '@snapshot-labs/lock/connectors/walletlink';
import config from '@/helpers/config';

const options: any = { connectors: [] };
const connectors = {
  injected,
  injectedMetaMask,
  fortmatic,
  portis,
  walletconnect,
  walletlink,
  injectedWanWallet
};
Object.entries(config.connectors).forEach((connector: any) => {
  options.connectors.push({
    key: connector[0],
    connector: connectors[connector[0]],
    options: connector[1].options
  });
});

Vue.use(LockPlugin, options);
