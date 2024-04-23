import Pager from "@/components/pager.vue";

export default {
  title: "components/pager",
  component: Pager,
  tags: ["autodocs"],
};

const nextPage = {
  _path: "/",
  title: "次のページのタイトルが入ります",
  description: "次のページの説明が入ります",
};

const prevPage = {
  _path: "/",
  title: "前のページのタイトルが入ります",
  description: "前のページの説明が入ります",
};

export const Default = {
  args: {
    nextPage: nextPage,
    prevPage: prevPage,
  },
};
