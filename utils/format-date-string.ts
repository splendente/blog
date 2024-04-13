/**
 * 引数で受け取った日付を文字列に変換する
 * @param {String} date 日付
 * @returns {String} フォーマットされた状態の日付情報
 */
export default function (date: string): string {
  return new Date(date).toDateString();
}
