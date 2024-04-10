<script setup lang="ts">
const props = defineProps({
  targetYear: {
    type: Number,
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
 * contentディレクトリ配下のコンテンツの全ての情報を取得する
 */
const { data: page } = await useAsyncData("articles", () =>
  queryContent("/").find(),
);

/**
 * コンテンツの作成日と更新日を取得する
 * @returns {Array} - 日付情報
 */
const activeDates = computed(() => {
  // 作成日と更新日を格納する配列
  const createdAtAndUpdatedAt: string[] = [];

  // コンテンツが存在した場合のみ実行
  if (page.value && 0 < page.value.length) {
    page.value.forEach((obj) => {
      Object.keys(obj).forEach((key) => {
        if (key === "createdAt" || key === "updatedAt") {
          // 既に同一稼働日がある場合、配列への追加は行わない
          if (!createdAtAndUpdatedAt.includes(obj[key])) {
            // 重複しない場合、配列に日付を追加する
            createdAtAndUpdatedAt.push(obj[key]);
          }
        }
      });
    });
  }

  return createdAtAndUpdatedAt;
});

/**
 * カレンダーの日にちがコンテンツの作成日もしくは更新日に該当するかどうか
 * @param {String} date - カレンダーの日付
 * @returns {Boolean} - 該当する場合はtrue、該当しない場合はfalseを返す
 */
const checkActiveDate = (date: string) => {
  return Boolean(activeDates.value.includes(date));
};
</script>

<template>
  <div>
    <ul>
      <li
        v-for="(date, index) in pastYearDates"
        :key="index"
        :class="checkActiveDate(date) && 'active'"
      />
    </ul>
  </div>
</template>

<style scoped>
div {
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
  grid-template-columns: repeat(auto-fill, minmax(14px, 1fr));
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
</style>
