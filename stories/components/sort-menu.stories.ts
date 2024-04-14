import SortMenu from "@/components/sort-menu.vue";

export default {
  title: "components/sort-menu",
  component: SortMenu,
  tags: ["autodocs"],
};

export const Desc = {
  args: {
    desc: true,
  },
};

export const Asc = {
  args: {
    desc: false,
  },
};
