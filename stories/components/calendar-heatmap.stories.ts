import CalendarHeatmap from "@/components/calendar-heatmap.vue";

export default {
  title: "components/calendar-heatmap",
  component: CalendarHeatmap,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    targetYear: 2023,
    activeDates: ["2023-1-1", "2023-7-19", "2023-12-31"],
  },
};
