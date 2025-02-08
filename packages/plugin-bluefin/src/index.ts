import { Plugin } from '@elizaos/core'
import { closePosition } from './actions/closePositionAciton.js'
import { collectFee } from './actions/collectFeeAction.js'
import { collectFeeAndRewards } from './actions/collectFeeAndRewardsAction.js'
import { collectRewards } from './actions/collectRewardsAction.js'
import { openPosition } from './actions/openPosition.js'
import { removeLiquidity } from './actions/removeLiquidityAction.js'

export const bluefinPlugin: Plugin = {
  name: 'bluefin',
  description: 'Plugin for interacting with Bluefin DEX on SUI Network',
  actions: [
    closePosition,
    collectFee,
    collectFeeAndRewards,
    collectRewards,
    openPosition,
    removeLiquidity
  ]
}

export default bluefinPlugin 