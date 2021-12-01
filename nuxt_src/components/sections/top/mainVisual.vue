<i18n>
## language=yaml
en:
  alt: The largest international Scala conference in Asia
  date: on 19th-20th Mar. 2022 Online
ja:
  alt: アジア最大級のScalaカンファレンス
  date: 2022年3月19日(土) - 20日(日) オンライン
</i18n>

<template>
  <main class="main">
    <div class="main_inner">
      <div class="main__container">
        <h1 class="main__title">
          ScalaMatsuri 2022
          <p class="main__title-sub">
            {{ $t('alt') }}
          </p>
          <p class="main__title-sub">
            {{ $t('date') }}
          </p>
        </h1>
      </div>
    </div>
  </main>
</template>

<script>
import syoguns from '~/data/sponsors/syogun'
export default {
  data() {
    return {
      syoguns: []
    }
  },
  mounted() {
    function notDummy(sponsor) {
      return sponsor.logo && !sponsor.logo.includes('dummy')
    }
    this.syoguns = this.shuffle(syoguns.filter(s => notDummy(s)))
  }
}
</script>

<style lang="scss" scoped>
.main__container {
  display: flex;
}
.main__logo {
  flex: 1 1 33%;

  @media screen and (max-width: 600px - 1) {
    & > .logo--pc { display: none; }
    & > .logo--sp {
      display: block;
      width: 56%;
      margin-left: 50%;
      padding-top: 26%;
    }
  }
  @media screen and (min-width: 600px) {
    & > .logo--pc {
      display: block;
      width: 42%;
      margin-left: 49%;
      padding: 13% 0;
    }
    & > .logo--sp { display: none; }
  }
}

.main__title {
  flex: 1 1 67%;
  padding: 5vh;
  font-size: 5vh;
  text-shadow: 1px 2px 3px #560808;
  @media screen and (max-width: 600px - 1) {
    & > .title--pc {
      display: none;
    }
    & > .title--sp {
      display: block;
      width: 80%;
      margin: 0 2% 0 auto;
      padding: 14.4% 0;
      box-sizing: border-box;
    }
  }
  @media screen and (min-width: 600px) {
    & > .title--pc {
      display: block;
      width: 80%;
      margin: 14.4% auto 17.6%;
    }
    & > .title--sp { display: none; }
  }
}

.main__title-sub {
  font-size: 2vh;
}
</style>
