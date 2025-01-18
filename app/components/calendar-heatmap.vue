<script setup lang="ts">
const props = defineProps({
  targetYear: {
    type: Number,
    required: true,
  },
  activeDates: {
    type: Array as () => string[],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})

const date = new Date()
const thisYear = date.getFullYear()
const thisMonth = date.getMonth()
const today = date.getDate()
const months = getMonths()
const days = getDays()

/**
 * 選択されている年が今年なら今月、去年以降であれば12月を返す
 * @returns {Number} - 年
 */
const targetMonth = computed(() => {
  if (props.targetYear < thisYear) {
    return 11 // 0始まりのため、11が12月となる
  }
  else {
    return thisMonth
  }
})

/**
 * 選択されている年が今年なら今日までの日付情報、去年以降であれば1年分の日付情報を返す
 * @returns {Array} - 日付情報
 */
const pastYearDates = computed(() => {
  // 日付情報を格納する配列
  const dates: string[] = []

  for (let month = 0; month <= targetMonth.value; month++) {
    // 今月の場合は今日、それ以外は該当する月の最終日を取得する
    const lastDayOfMonth
      = props.targetYear === thisYear && month === thisMonth
        ? today // 今日
        : new Date(props.targetYear, month + 1, 0).getDate() // その月の最終日

    for (let date = 1; date <= lastDayOfMonth; date++) {
      const $date = new Date(props.targetYear, month, date)
      const $year = $date.getFullYear() // 年を取得
      const $month = $date.getMonth() + 1 // 月を取得 (0始まりのため、+1する)
      const $day = $date.getDate() // 日を取得
      const formattedDate = `${$year}-${String($month).padStart(2, '0')}-${String($day).padStart(2, '0')}` // Nuxt Contentの日付情報と同じ形式に変換

      dates.push(formattedDate)
    }
  }

  return dates
})

/**
 * カレンダーの日にちがコンテンツの作成日もしくは更新日に該当するかどうか
 * @param {String} date - カレンダーの日付
 * @returns {Boolean} - 該当する場合はtrue、該当しない場合はfalseを返す
 */
const checkActiveDate = (date: string) => {
  return Boolean(props.activeDates.includes(date))
}

// ツールチップの表示状態（true: 表示, false: 非表示）
const isTooltipVisible = ref<boolean>(false)

/**
 * ツールチップの表示状態を切り替える
 * @param {Boolean} status - 表示するか非表示にするか
 */
const toggleTooltipVisibleStatus = (status: boolean) => {
  isTooltipVisible.value = status
}

// tooltipコンポーネントで表示するテキスト
const tooltipText = ref<string>('')

/**
 * ツールチップのテキストを設定
 * @param {String} date - カレンダーの日付
 */
const setTooltipText = (date: string) => {
  tooltipText.value = formatDateString(date)
}

type TargetPosition = {
  top: number
  left: number
}

// tooltipコンポーネントを表示する位置
const targetPosition = ref<TargetPosition>({
  top: 0,
  left: 0,
})

/**
 * ツールチップの表示位置を設定
 * @param {MouseEvent} event - イベント情報
 */
const setTooltipPosition = (event: MouseEvent) => {
  // マウスオーバーしている要素
  const targetElement = event.target as HTMLElement

  // マウスオーバーしている要素があれば実行
  if (targetElement) {
    const thisRect = targetElement.getBoundingClientRect()

    // ツールチップの表示位置（上からの距離）を設定
    const topOffset = thisRect.top + window.scrollY - 24
    targetPosition.value.top = 0 <= topOffset ? topOffset : 0 // 最小値を0に設定する

    // ツールチップの表示位置（左からの距離）を設定
    const leftOffset = thisRect.left - 55
    targetPosition.value.left = 0 <= leftOffset ? leftOffset : 0 // 最小値を0に設定する
  }
  else {
    // ツールチップの表示位置を初期状態に設定
    targetPosition.value.top = 0
    targetPosition.value.left = 0
  }
}
</script>

<template>
  <div
    class="calendar-heatmap"
    tabindex="0"
  >
    <Transition appear>
      <Tooltip
        v-if="isTooltipVisible && 0 < tooltipText.length"
        :text="tooltipText"
        :top="targetPosition.top"
        :left="targetPosition.left"
      />
    </Transition>
    <div class="calendar">
      <ul class="months">
        <li
          v-for="month in months"
          :key="month"
        >
          <p>{{ month }}</p>
        </li>
      </ul>
      <ul class="days">
        <li
          v-for="day in days"
          :key="day"
          :index="day"
        >
          <p>{{ day }}</p>
        </li>
      </ul>
      <ul class="date">
        <li
          v-for="(date, index) in pastYearDates"
          :key="index"
          :class="checkActiveDate(date) && 'active'"
          @mouseover="
            (event) => {
              toggleTooltipVisibleStatus(true);
              setTooltipText(date);
              setTooltipPosition(event);
            }
          "
          @mouseleave="
            (event) => {
              toggleTooltipVisibleStatus(false);
              setTooltipText('');
              setTooltipPosition(event);
            }
          "
        />
      </ul>
    </div>
    <p class="annotation">
      <span>{{ title }}</span>
      {{ $t('annotation') }}
    </p>
  </div>
</template>

<style>
:root {
  --calendar-size: 12px;
  --calendar-gap: 2px;
  --week-width: calc(var(--calendar-size) + var(--calendar-gap));
}

.calendar-heatmap {
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 24px;
}

.calendar {
  display: inline-grid;
  grid-template-areas:
    "months month"
    "days date";
  grid-template-columns: auto 1fr;
  grid-gap: 8px;
}

.months {
  grid-area: month;
  list-style: none;
}

.days {
  grid-area: days;
  list-style: none;
}

.months > li > p,
.days > li > p {
  color: var(--primary-text-color);
  font-size: 12px;
}

.date {
  grid-area: date;
  list-style: none;
}

.date > li {
  border-radius: 3px;
  background-color: #f6f6f6;
  border: 1px solid #ddd;
}

.date > .active {
  background-color: #87ceeb;
  border-color: #1e90ff;
}

.months {
  display: grid;
  grid-template-columns:
    calc(var(--week-width) * 4)
    calc(var(--week-width) * 4)
    calc(var(--week-width) * 4)
    calc(var(--week-width) * 5)
    calc(var(--week-width) * 4)
    calc(var(--week-width) * 4)
    calc(var(--week-width) * 5)
    calc(var(--week-width) * 4)
    calc(var(--week-width) * 4)
    calc(var(--week-width) * 5)
    calc(var(--week-width) * 4)
    calc(var(--week-width) * 5);
}

.days,
.date {
  display: grid;
  grid-gap: var(--calendar-gap);
  grid-template-rows: repeat(7, var(--calendar-size));
}

.date {
  grid-auto-flow: column;
  grid-auto-columns: var(--calendar-size);
}

.days > li:nth-child(even) {
  visibility: hidden;
}

.annotation {
  font-size: 12px;
  color: var(--primary-text-color);
  margin-top: 16px;
  white-space: nowrap;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
