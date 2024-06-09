<script setup lang="ts">
defineOgImageComponent("NuxtSeo", {
  title: "Terms and Privacy",
});
</script>

<template>
  <main>
    <h1>利用規約とプライバシーポリシー</h1>
    <p class="date-of-issue">発行日 2024年5月2日</p>

    <p>本規約は、当サイトの利用に関する規定を定めるものです。</p>
    <p>
      当サイトを利用することにより、以下の条件に同意したものとみなされます。
    </p>

    <h2>収集される情報</h2>
    <section>
      <p>
        当サイトでは、利用者がブログ記事を閲覧する際に、IPアドレス、Cookie、ブラウザの種類、利用されたデバイスなどの一般的な情報が自動的に収集される場合があります。
      </p>
      <p>ただし、これらの情報は個人を特定するためのものではありません。</p>
    </section>

    <h2>Cookieの使用</h2>
    <section>
      <p>当サイトでは、広告配信のためにCookieを使用する場合があります。</p>
      <p>
        Cookieは、利用者のブラウジング体験を向上させるために使用されますが、個人を特定する情報は保存されません。
      </p>
    </section>

    <h2>広告配信事業者の利用</h2>
    <section>
      <p>当サイトでは、広告配信サービスを利用することがあります。</p>
      <p>
        広告配信サービスの提供者は、利用者の興味に基づいて当サイトや他のウェブサイトに広告を表示するために、Cookieやウェブビーコンなどの技術を使用する場合があります。
      </p>
      <p>これらの技術により、利用者の個人情報を収集することはありません。</p>
    </section>

    <h2>外部リンク</h2>
    <section>
      <p>当サイトには、他のウェブサイトへのリンクが含まれる場合があります。</p>
      <p>
        外部サイトにおける個人情報の保護については、当サイトは責任を負いかねます。
      </p>
      <p>
        外部サイトへのリンクをクリックされた場合は、リンク先サイトのプライバシーポリシーを確認してください。
      </p>
    </section>

    <h2>免責事項</h2>
    <section>
      <p>
        当サイトの内容は、個人のウェブサイトであり、専門的な助言を代替するものではありません。
      </p>
      <p>当サイトの情報に基づく行動は、個人の責任において行われるべきです。</p>
      <p>
        当サイトは、利用者が当サイトのコンテンツを利用したことにより直接または間接的に生じた損害について、一切の責任を負いません。
      </p>
    </section>

    <h2>本規約の変更</h2>
    <section>
      <p>
        本規約は随時変更される場合があります。変更後の規約は、当サイトに掲載された時点で効力を生じます。
      </p>
      <p>
        変更後も当サイトを利用する場合は、変更後の規約に同意したものとみなされます。
      </p>
    </section>

    <h2>お問い合わせ</h2>
    <section>
      <p>本規約に関するお問い合わせは、以下の連絡先までご連絡ください。</p>
      <a href="https://twitter.com/splendente_dev" target="_blank">
        https://twitter.com/splendente_dev
      </a>
    </section>
  </main>
</template>

<style scoped>
h1 {
  font-size: 32px;
  text-align: center;
  margin-bottom: 16px;
  color: #3c3c3c;
}

h2 {
  font-size: 24px;
  margin: 48px 0 16px;
  color: #3c3c3c;
}

p {
  color: #3c3c3c;
  margin-bottom: 8px;
}

section > p:last-child {
  margin-bottom: 0;
}

.date-of-issue {
  text-align: center;
  font-size: 14px;
  padding-bottom: 32px;
  margin-bottom: 48px;
  border-bottom: 1px solid #ddd;
}
</style>
