import { Meta, StoryObj } from '@storybook/react';
import CardItem, { ICardItem } from './cardIem';
import { mockCardItemProps } from './cardItem.mocks';

const meta: Meta<typeof CardItem> = {
  component: CardItem,
};

export default meta;
type Story = StoryObj<typeof CardItem>;

export const Primary: Story = {
  args: {
    ...mockCardItemProps.base,
  } as ICardItem,
};
