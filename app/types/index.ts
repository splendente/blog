export type NavigationMenu = {
  element: 'p' | 'nuxt-link'
  text: string
  to?: string
}

export type TocProps = {
  items: {
    title: string
    searchDepth: number
    links: {
      id: string
      depth: number
      text: string
    }[]
  }
}

export type CalendarHeatmapProps = {
  targetYear: number
  activeDates: string[]
  title: string
}
