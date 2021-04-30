import { BigNumber } from "@ethersproject/bignumber";
import { ZERO } from "../../../utils/constants";
import { ether } from "../../../utils/common/index";
import { ASSETS } from "../../assetInfo"
import { exchanges, StrategyInfo } from "../../types";

export const strategyInfo: StrategyInfo = {
  YFI: {
    address: ASSETS.YFI.address,
    input: BigNumber.from(36096),
    // maxTradeSize: ether(13.2),
    maxTradeSize: ether(1),
    exchange: exchanges.SUSHISWAP,
    coolOffPeriod: BigNumber.from(600),
    currentUnit: ZERO,
  },
  COMP: {
    address: ASSETS.COMP.address,
    input: BigNumber.from(5048104),
    // maxTradeSize: ether(192),
    maxTradeSize: ether(0.03),
    exchange: exchanges.SUSHISWAP,
    coolOffPeriod: BigNumber.from(600),
    currentUnit: ZERO,
  },
  SNX: {
    address: ASSETS.SNX.address,
    input: BigNumber.from(151684080),
    // maxTradeSize: ether(10250),
    maxTradeSize: ether(1),
    exchange: exchanges.SUSHISWAP,
    coolOffPeriod: BigNumber.from(600),
    currentUnit: ZERO,
  },
  MKR: {
    address: ASSETS.MKR.address,
    input: BigNumber.from(901683),
    // maxTradeSize: ether(40),
    maxTradeSize: ether(1),
    exchange: exchanges.UNISWAP,
    coolOffPeriod: BigNumber.from(600),
    currentUnit: ZERO,
  },
  REN: {
    address: ASSETS.REN.address,
    input: BigNumber.from(881153018),
    // maxTradeSize: ether(55000),
    maxTradeSize: ether(1),
    exchange: exchanges.SUSHISWAP,
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  KNC: {
    address: ASSETS.KNC.address,
    input: BigNumber.from(204614446),
    // maxTradeSize: ether(2100),
    maxTradeSize: ether(12),
    exchange: exchanges.UNISWAP,
    coolOffPeriod: BigNumber.from(600),
    currentUnit: ZERO,
  },
  LRC: {
    address: ASSETS.LRC.address,
    input: BigNumber.from(1245991468),
    // maxTradeSize: ether(14000),
    maxTradeSize: ether(20),
    exchange: exchanges.UNISWAP,
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  BAL: {
    address: ASSETS.BAL.address,
    input: BigNumber.from(10799858),
    // maxTradeSize: ether(9900),
    maxTradeSize: ether(1),
    exchange: exchanges.BALANCER,
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  UNI: {
    address: ASSETS.UNI.address,
    input: BigNumber.from(519857388),
    // maxTradeSize: ether(17000),
    maxTradeSize: ether(1),
    exchange: exchanges.UNISWAP,
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  AAVE: {
    address: ASSETS.AAVE.address,
    input: BigNumber.from(12492713),
    // maxTradeSize: ether(1200),
    maxTradeSize: ether(1),
    exchange: exchanges.SUSHISWAP,
    coolOffPeriod: BigNumber.from(600),
    currentUnit: ZERO,
  },
  MTA: {
    address: ASSETS.MTA.address,
    input: BigNumber.from(24894863),
    // maxTradeSize: ether(5000),
    maxTradeSize: ether(10),
    exchange: exchanges.UNISWAP,
    coolOffPeriod: BigNumber.from(600),
    currentUnit: ZERO,
  },
  SUSHI: {
    address: ASSETS.SUSHI.address,
    input: BigNumber.from(148978846),
    // maxTradeSize: ether(72000),
    maxTradeSize: ether(2),
    exchange: exchanges.SUSHISWAP,
    coolOffPeriod: BigNumber.from(600),
    currentUnit: ZERO,
  },
  CREAM: {
    address: ASSETS.CREAM.address,
    input: BigNumber.from(685568),
    // maxTradeSize: ether(135),
    maxTradeSize: ether(1),
    exchange: exchanges.SUSHISWAP,
    coolOffPeriod: BigNumber.from(600),
    currentUnit: ZERO,
  },
  FARM: {
    address: ASSETS.FARM.address,
    input: BigNumber.from(528505),
    // maxTradeSize: ether(125),
    maxTradeSize: ether(1),
    exchange: exchanges.UNISWAP,
    coolOffPeriod: BigNumber.from(600),
    currentUnit: ZERO,
  }
};