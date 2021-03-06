import * as ITEM_TYPES from '~/structs/item_types';

import RenderArmor from './Render/Armor';
import RenderBox from './Render/Box';
import RenderPotion from './Render/Potion';
import RenderTool from './Render/Tool';
import RenderFace from './Render/Face';

// want help in writing specific components ;)
export default {
  [ITEM_TYPES.FACE]: RenderFace,
  [ITEM_TYPES.UPPER]: RenderArmor,
  [ITEM_TYPES.LOWER]: RenderArmor,
  [ITEM_TYPES.GAUNTLET]: RenderArmor,
  [ITEM_TYPES.SHOE]: RenderArmor,
  [ITEM_TYPES.HELMET]: RenderArmor,
  [ITEM_TYPES.WEAPON]: RenderTool,
  [ITEM_TYPES.SHIELD]: RenderArmor,
  [ITEM_TYPES.CLOAK]: RenderArmor,
  [ITEM_TYPES.RING]: RenderTool,
  [ITEM_TYPES.AMULET]: RenderTool,
  [ITEM_TYPES.BULLET]: RenderTool,
  [ITEM_TYPES.MAKETOOL]: RenderTool,
  [ITEM_TYPES.POTION]: RenderPotion,
  [ITEM_TYPES.BAG]: RenderTool,
  [ITEM_TYPES.BATTERY]: RenderTool,
  [ITEM_TYPES.ORE]: RenderTool,
  [ITEM_TYPES.RESOURCE]: RenderTool,
  [ITEM_TYPES.FORCE]: RenderTool,
  [ITEM_TYPES.UNITKEY]: RenderTool,
  [ITEM_TYPES.BOOTY]: RenderTool,
  [ITEM_TYPES.MAP]: RenderTool,
  [ITEM_TYPES.TOWN]: RenderTool,
  [ITEM_TYPES.DUNGEONKEY]: RenderTool,
  [ITEM_TYPES.ANIMUS]: RenderTool,
  [ITEM_TYPES.TOWER]: RenderTool,
  [ITEM_TYPES.TRAP]: RenderTool,
  [ITEM_TYPES.SIEGEKIT]: RenderTool,
  [ITEM_TYPES.TICKET]: RenderTool,
  [ITEM_TYPES.QUEST]: RenderTool,
  [ITEM_TYPES.RECOVERY]: RenderTool,
  [ITEM_TYPES.BOX]: RenderBox,
  [ITEM_TYPES.FIRECRACKER]: RenderTool,
  [ITEM_TYPES.CASHMINING]: RenderTool,
  [ITEM_TYPES.RADAR]: RenderTool,
  [ITEM_TYPES.PAGER]: RenderTool,
  [ITEM_TYPES.COUPON]: RenderTool,
  [ITEM_TYPES.MAUHEAD]: RenderTool,
  [ITEM_TYPES.MAUUPPER]: RenderTool,
  [ITEM_TYPES.MAULOWER]: RenderTool,
  [ITEM_TYPES.MAUARM]: RenderTool,
  [ITEM_TYPES.MAUSHOULDER]: RenderTool,
  [ITEM_TYPES.MAUBACK]: RenderTool,
  [ITEM_TYPES.MAUBULLET]: RenderTool,
  [ITEM_TYPES.MAKEDATA]: null,
  [ITEM_TYPES.COMBINEDATA]: null,
  [ITEM_TYPES.UNK3]: null,
};
