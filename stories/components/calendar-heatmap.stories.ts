import CalendarHeatmap from "@/components/calendar-heatmap.vue";

export default {
  title: "components/calendar-heatmap",
  component: CalendarHeatmap,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    targetYear: 2023,
    activeDates: ["2023-01-01", "2023-07-19", "2023-12-31"],
  },
};
