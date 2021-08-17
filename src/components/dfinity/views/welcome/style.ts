import {
  chainIdeColorType,
  getChainIdeThemeColor
} from '@modules/common/theme/chainIdeTheme';
import { IStackStyles } from 'office-ui-fabric-react';

const FONT_LEVEL_ONE = getChainIdeThemeColor(chainIdeColorType.FONT_LEVEL_ONE);
const FONT_LEVEL_TWO = getChainIdeThemeColor(
  chainIdeColorType.FONT_LEVEL_THREE
);
const SUB_BACKGROUND_COLOR = getChainIdeThemeColor(
  chainIdeColorType.INPUT_BACKGROUND
);
const BACKGROUND_COLOR = getChainIdeThemeColor(chainIdeColorType.BORDER);
const ALL_BACKGROUND = getChainIdeThemeColor(chainIdeColorType.ALL_BACKGROUND);

export const divideStyle: Object = {
  backgroundColor: SUB_BACKGROUND_COLOR
};

export const firstFontStyle: Object = {
  color: FONT_LEVEL_ONE
};

export const secondFontStyle: Object = {
  color: FONT_LEVEL_TWO
};

export const backStyle: Object = {
  backgroundColor: ALL_BACKGROUND
};

export const stackStyles: IStackStyles = {
  root: {
    selectors: {
      '.resource, .project': {
        backgroundColor: BACKGROUND_COLOR
      },
      '.resource:hover, .project:hover': {
        backgroundColor: SUB_BACKGROUND_COLOR
      },
      '.template': {
        backgroundColor: BACKGROUND_COLOR,
        borderLeft: `4px solid ${BACKGROUND_COLOR}`
      },
      '.template:hover': {
        backgroundColor: SUB_BACKGROUND_COLOR,
        borderLeft: `4px solid ${getChainIdeThemeColor(
          chainIdeColorType.PRIMARY
        )}`
      }
    }
  }
};
