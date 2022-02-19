<i18n>
## language=yaml
en:
  sponsorship: "Sponsorship(ja)"
  cfp: "Call for proposals"
  ticket: "Ticket"
  doorkeeper: "Doorkeeper"
ja:
  sponsorship: "スポンサー募集"
  cfp: "セッションに応募する"
  ticket: "チケット購入"
  doorkeeper: "Doorkeeper"
</i18n>
<template>
  <div class="banner">
    <div class="banner_list">
      <nuxt-link :to="localePath('sponsorship')" class="banner_item banner_item-sponsor">
        <span>{{ $t('sponsorship') }} </span>
      </nuxt-link>
      <!-- <nuxt-link :to="localePath('cfp')" class="banner_item banner_item-staff">
        <span>{{ $t('cfp') }}</span>
      </nuxt-link> -->
      <a
        href="https://scalaconfjp.doorkeeper.jp/events/131313"
        target="_blank"
        rel="noopener"
        class="banner_item banner_item-staff"
      >
        <span>{{ $t('ticket') }}</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  margin-top: 40px;
}
.banner_list {
  margin: 0 auto;
  max-width: 834px;
  display: flex;
  justify-content: space-between;
}
.banner_item {
  display: block;
  width: calc(50% - 10px); // NOTE: バナー2つのとき
  // margin: 0 auto; // NOTE: バナー1つのとき
  // max-width: 394px; // NOTE: バナー1つのとき
  height: 88px;
  color: #fff;
  font-weight: bold;
  line-height: 46px;
  font-size: 28px;
  text-align: center;
  letter-spacing: 0.05em;
  text-align: center;
  position: relative;
  padding: 17px 0;
  &:after {
    content: '';
    width: 18px;
    height: 18px;
    display: block;
    position: absolute;
    right: 5px;
    bottom: 5px;
    background-image: url('~assets/img/common/arrow-banner.svg');
  }
  span {
    background-position: center left;
    background-image: url('~assets/img/common/icon-happi.svg');
    padding-left: 70px;
    display: inline-block;
    height: 54px;
    line-height: 54px;
  }
  &-sponsor {
    background-color: #4f9ad5;
    span {
      background-image: url('~assets/img/common/icon-mikoshi.svg');
    }
  }
  &-staff {
    background-color: #e4ae2f;
  }
}
</style>
