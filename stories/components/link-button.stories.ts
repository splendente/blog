import LinkButton from "@/components/link-button.vue";

interface Args {
  isNuxtLink: boolean;
  to: string;
  href: string;
  target: string;
}

export default {
  title: "components/link-button",
  component: LinkButton,
  tags: ["autodocs"],
  render: (args: Args) => ({
    components: { LinkButton },
    setup() {
      return { ...args };
    },
    template: `
      <link-button :is-nuxt-link="isNuxtLink" :to="to" :href="href" :target="target">
        <img src="/assets/images/github.svg" width="16" height="16" style="display:block;" />
      </link-button>
    `,
  }),
};

export const AnchorLink = {
  args: {
    isNuxtLink: false,
    to: "/",
    href: "/",
    target: "_self",
  },
};

export const NuxtLinkComponent = {
  args: {
    isNuxtLink: true,
    to: "/",
    href: "/",
    target: "_blank",
  },
};
