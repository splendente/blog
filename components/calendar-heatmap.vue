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
});

const date = new Date();
const thisYear = date.getFullYear();
const thisMonth = date.getMonth();
const today = date.getDate();

/**
 * 選択されている年が今年なら今月、去年以降であれば12月を返す
 * @returns {Number} - 年
 */
const targetMonth = computed(() => {
  if (props.targetYear < thisYear) {
    return 11; // 0始まりのため、11が12月となる
  } else {
    return thisMonth;
  }
});

/**
 * 選択されている年が今年なら今日までの日付情報、去年以降であれば1年分の日付情報を返す
 * @returns {Array} - 日付情報
 */
const pastYearDates = computed(() => {
  // 日付情報を格納する配列
  const dates: string[] = [];

  for (let month = 0; month <= targetMonth.value; month++) {
    // 今月の場合は今日、それ以外は該当する月の最終日を取得する
    const lastDayOfMonth =
      props.targetYear === thisYear && month === thisMonth
        ? today // 今日
        : new Date(props.targetYear, month + 1, 0).getDate(); // その月の最終日

    for (let date = 1; date <= lastDayOfMonth; date++) {
      const $date = new Date(props.targetYear, month, date);
      const $year = $date.getFullYear(); // 年を取得
      const $month = $date.getMonth() + 1; // 月を取得 (0始まりのため、+1する)
      const $day = $date.getDate(); // 日を取得
      const formattedDate = `${$year}-${$month}-${$day}`; // Nuxt Contentの日付情報と同じ形式に変換

      dates.push(formattedDate);
    }
  }

  return dates;
});

/**
 * カレンダーの日にちがコンテンツの作成日もしくは更新日に該当するかどうか
 * @param {String} date - カレンダーの日付
 * @returns {Boolean} - 該当する場合はtrue、該当しない場合はfalseを返す
 */
const checkActiveDate = (date: string) => {
  return Boolean(props.activeDates.includes(date));
};

// ツールチップの表示状態（true: 表示, false: 非表示）
const isTooltipVisible = ref(false);

/**
 * ツールチップの表示状態を切り替える
 * @param {Boolean} status - 表示するか非表示にするか
 */
const toggleTooltipVisibleStatus = (status: boolean) => {
  isTooltipVisible.value = status;
};

// tooltipコンポーネントで表示するテキスト
const tooltipText = ref("");

/**
 * ツールチップのテキストを設定
 * @param {String} date - カレンダーの日付
 */
const setTooltipText = (date: string) => {
  tooltipText.value = formatDateString(date);
};

// tooltipコンポーネントを表示する位置
const targetPosition = ref({
  top: 0,
  left: 0,
});

/**
 * ツールチップの表示位置を設定
 * @param {MouseEvent} event - イベント情報
 */
const setTooltipPosition = (event: MouseEvent) => {
  // マウスオーバーしている要素
  const targetElement = event.target as HTMLElement;

  // マウスオーバーしている要素があれば実行
  if (targetElement) {
    const thisRect = targetElement.getBoundingClientRect();

    // ツールチップの表示位置（上からの距離）を設定
    const topOffset = thisRect.top + window.scrollY - 24;
    targetPosition.value.top = 0 <= topOffset ? topOffset : 0; // 最小値を0に設定する

    // ツールチップの表示位置（左からの距離）を設定
    const leftOffset = thisRect.left - 55;
    targetPosition.value.left = 0 <= leftOffset ? leftOffset : 0; // 最小値を0に設定する
  } else {
    // ツールチップの表示位置を初期状態に設定
    targetPosition.value.top = 0;
    targetPosition.value.left = 0;
  }
};
</script>

<template>
  <div>
    <Transition appear>
      <Tooltip
        v-if="isTooltipVisible && 0 < tooltipText.length"
        :text="tooltipText"
        :top="targetPosition.top"
        :left="targetPosition.left"
      />
    </Transition>
    <div class="calendar-heatmap">
      <ul>
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
  </div>
</template>

<style scoped>
.calendar-heatmap {
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  margin-inline: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 6px;
}

ul {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(auto-fill, minmax(12px, 1fr));
  grid-template-rows: repeat(7, 1fr);
  gap: 2px;
  list-style: none;
}

ul > li::after {
  content: "";
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background-color: #f6f6f6;
  border: 1px solid #ddd;
}

ul > .active::after {
  background-color: #87ceeb;
  border-color: #1e90ff;
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
