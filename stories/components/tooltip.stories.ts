import Tooltip from "@/components/tooltip.vue";

export default {
  title: "components/tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  decorators: [
    () => ({
      template: '<div style="position: relative;"><story /></div>',
    }),
  ],
};

export const Default = {
  args: {
    isVisible: true,
    date: "2024-1-1",
    top: 0,
    left: 0,
  },
};
