import Struct from '~/classes/Struct';

export default new Struct().fromSchema1([
  { child: { type: Number, name: 'nIndex', len: 32 } },
  { child: { type: String, name: 'strCode', len: 64 } },
  { child: { type: Boolean, name: 'bExist', len: 32 } },
  { child: { type: String, name: 'strModel', len: 64 } },
  { child: { type: Number, name: 'nIconIDX', len: 32 } },
  { child: { type: String, name: 'strName', len: 64 } },
  { child: { type: Number, name: 'nKindClt', len: 32 } },
  { child: { type: Number, name: 'nFixPart', len: 32 } },
  { child: { type: String, name: 'strCivil', len: 64 } },
  { child: { type: String, name: 'strActTarget', len: 64 } },
  { child: { type: Number, name: 'nPotionCheck', len: 32 } },
  { child: { type: Number, name: 'nUseState', len: 32 } },
  { child: { type: String, name: 'strTargetEff', len: 64 } },
  { child: { type: Number, name: 'fActDelay', len: 32, as: 'float' } },
  { child: { type: Number, name: 'nDelayType', len: 32 } },
  { child: { type: Number, name: 'nUseRange', len: 32 } },
  { child: { type: Number, name: 'nLevelLim', len: 32 } },
  { child: { type: Number, name: 'nUpLevelLim', len: 32 } },
  { child: { type: Number, name: 'nPotionLim', len: 32 } },
  { child: { type: Number, name: 'nMapCode', len: 32 }, repeat: 5 },
  { child: { type: Number, name: 'nMoney', len: 32 } },
  { child: { type: Number, name: 'nStdPrice', len: 32 } },
  { child: { type: Number, name: 'nStdPoint', len: 32 } },
  { child: { type: Number, name: 'nGoldPoint', len: 32 } },
  { child: { type: Number, name: 'nKillPoint', len: 32 } },
  { child: { type: Number, name: 'nProcPoint', len: 32 } },
  { child: { type: Number, name: 'nStoragePrice', len: 32 } },
  { child: { type: Boolean, name: 'bAbr', len: 32 } },
  { child: { type: Number, name: 'fEquipSpeed', len: 32, as: 'float' } },
  { child: { type: String, name: 'strEffCode', len: 64 } },
  { child: { type: Number, name: 'nEffArea', len: 32 } },
  { child: { type: Number, name: 'nEffAreaVal', len: 32 } },
  { child: { type: Boolean, name: 'bSell', len: 32 } },
  { child: { type: Boolean, name: 'bExchange', len: 32 } },
  { child: { type: Boolean, name: 'bGround', len: 32 } },
  { child: { type: Boolean, name: 'bStoragePossible', len: 32 } },
  { child: { type: Boolean, name: 'bUseableNormalAcc', len: 32 } },
  { child: { type: Boolean, name: 'bUpgrade', len: 32 } },
  { child: { type: String, name: 'strTooltipIndex', len: 64 } },
  { child: { type: Boolean, name: 'bIsCash', len: 32 } },
  { child: { type: Number, name: 'nUsePCCash', len: 32 } },
  { child: { type: Boolean, name: 'bIsTime', len: 32 } },
]);
