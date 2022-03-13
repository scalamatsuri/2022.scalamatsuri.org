<i18n>
## language=yaml
en:
  title_01: Note to speakers
  body_01: |
    Here are some notes to ScalaMatsuri speakers.
  title_02: Stay in 20min slot
  body_02: |
    The program is tightly arranged this year, with a sequence of short talks.
    We ask your cooperation to be punctual for both the starting time and the talk time (20min) to respect the attendees and other speakers.
    On the day of the talk, a time keeper will join you in the Zoom Webinar to display the remaining time, which you could glance from time to time.
    <br/>
    <b>In the event the talk runs over by 3min, please note that the MC will interrupt your talk.</b>
  title_03: Practice using Zoom Meeting
  body_03: |
    We suggest practicing using an ad-hoc <a href="https://zoom.us/start/videomeeting">Zoom Meeting</a>.
    Please confirm that your computer is setup to share Keynote etc using full screen.
    In some cases, you might need to grant macOS more permissions such as <b>Accessibility</b>.
    (see also <a href="https://support.zoom.us/hc/en-us/articles/360016688031-Using-the-Zoom-client-and-Zoom-Rooms-with-macOS">Granting macOS permissions for the Zoom client</a>)
ja:
  title_01: スピーカーの皆さんへ
  body_01: |
    ScalaMatsuri スピーカーの皆さんへの連絡事項です。
  title_02: 時間厳守
  body_02: |
    本年度のプログラムは短めのトークが次々と続く形で例年よりもタイトになっております。
    スケジュールの遅れが出ないように、開始時間およびトーク時間 (20分) の時間厳守をお願いしております。
    当日の Zoom Webinar にはタイムキーパーが同席して残り時間を表示するなどするので是非活用してください。
    <br/>
    <b>終了時間3分をオーバーした場合、司会がトークを中断させていただきます。ご了承ください。</b>
  title_03: Zoom Meeting での練習
  body_03: |
    <a href="https://zoom.us/start/videomeeting">Zoom Meeting</a> を使っての練習をお願いしております。
    お使いのコンピュータが Keynote 等を使った状態で画面共有できることを確認してください。
    macOS へ追加で<b>アクセシビリティ</b>などの権限を許可する必要があるかもしれません。
    (参考: <a href="https://support.zoom.us/hc/ja/articles/360016688031-Zoom-%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88%E3%81%A8-Zoom-Rooms-%E3%82%92-macOS-%E3%81%A7%E4%BD%BF%E7%94%A8">Zoom クライアントと Zoom Rooms を macOS で使用</a>)
</i18n>

<template>
  <div id="speakers">
    <div class="section">
      <h2 class="section_title">
        <span class="section_title_inner">{{ $t('title_01') }}</span>
      </h2>
      <p class="section_text" v-html="$t('body_01')" />
    </div>
    <div class="section">
      <h2 class="section_title">
        <span class="section_title_inner">{{ $t('title_02') }}</span>
      </h2>
      <p class="section_text" v-html="$t('body_02')" />
    </div>
    <div class="section">
      <h2 class="section_title">
        <span class="section_title_inner">{{ $t('title_03') }}</span>
      </h2>
      <p class="section_text" v-html="$t('body_03')" />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    const $t = this.$t.bind(this)
    return {
      title: $t('title_01'),
      meta: [
        { name: 'og:title', content: `${$t('title_01')} | ScalaMatsuri 2022` }
      ]
    }
  }
}
</script>
