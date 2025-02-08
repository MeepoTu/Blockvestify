import { Plugin } from '@elizaos/core'
import { adviseVestAction } from './actions/advise_vest.js'

export const adviseVestPlugin: Plugin = {
  name: 'adviseVest',
  description: `designed to help users navigate the world of decentralized finance (DeFi) with confidence. By analyzing your unique investment style—whether you're a risk-taker, a conservative investor, or somewhere in between—this plugin provides personalized recommendations on which DeFi projects to explore on SuiNetwork.`,
  actions: [adviseVestAction]
}

export default adviseVestPlugin
