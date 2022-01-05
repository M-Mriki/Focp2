<template>
  <div class="humain">
    <b-container>
      <b-row>
        <b-col cols="12" md="12" lg="12" xl="8">
          <div class="humain__left">
            <template v-for="item in Lists">
              <input
                :id="item.cardId"
                :key="item.id + '_'"
                class="radio"
                type="radio"
                name="card"
                checked
              >
              <label
                :key="item.id"
                class="content"
                :for="item.cardId"
                :style="{ backgroundImage: `url(${item.image})` }"
              >
                <div class="overlay" :style="{ backgroundColor: item.color }" />
                <span class="icon">
                  <b-img src="@/assets/images/flesh-blanc.png" />
                </span>
                <h3 class="card-title">{{ item.title }}</h3>
              </label>
            </template>
          </div>
        </b-col>
        <b-col cols="12" md="12" lg="12" xl="4">
          <div class="humain__right">
            <h2>Un engagement Humain</h2>
            <button class="btn btn-ciel">
              Notre vision
            </button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Lists: [
        {
          image: require('@/assets/images/huamain4.jpg'),
          title: "Promotion de l'excellence et d'une éducation inclusive",
          cardId: 'card-1',
          color: '#187BB5'
        },
        {
          image: require('@/assets/images/huamain3.jpg'),
          title: "Promotion de l'excellence et d'une éducation inclusive",
          cardId: 'card-2',
          color: '#612C7F'
        },
        {
          image: require('@/assets/images/huamain2.jpg'),
          title: "Promotion de l'excellence et d'une éducation inclusive",
          cardId: 'card-3',
          color: '#E67825'
        },
        {
          image: require('@/assets/images/huamain1.jpg'),
          title: "Promotion de l'excellence et d'une éducation inclusive",
          cardId: 'card-4',
          color: '#5CC641'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.humain {
  display: flex;
  align-items: center;
  height: 30rem;
  &__left {
    display: flex;
    height: 17rem;
    margin: 0 auto;
    max-width: 100%;
    width: 70rem;
    .radio {
      display: none;
    }
    .content {
      /* background: var(--white)
  url('https://images.unsplash.com/photo-1524572217604-17e96c89e56f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80')
  100% / cover no-repeat; */
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 100%;
      /* border-radius: 3rem; */
      cursor: pointer;
      flex: 3;
      margin-right: 0.8rem;
      overflow: hidden;
      position: relative;
      transition: all 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
      .icon {
        align-items: center;
        bottom: 2rem;
        display: flex;
        right: 2.3rem;
        position: absolute;
      }
      .card-title {
        bottom: 0.2rem;
        color: #fff;
        display: flex;
        flex-direction: column;
        font-size: 25px;
        /* font-family: 'ITC Avant Garde Gothic Std Demi Condensed'; */
        font-family: "ITC Avant Garde Gothic Std";
        font-weight: normal;
        left: 0.5rem;
        line-height: 1.5;
        opacity: 0;
        position: absolute;
        text-shadow: 0.05rem 0.05rem 0.1rem rgb(0 0 0 / 50%);
        transform: translateX(2rem);
        transition: 290ms cubic-bezier(0.05, 0.61, 0.41, 0.95) 300ms;
        transition-property: opacity, transform;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      .overlay {
        position: absolute;
        height: 5%;
        bottom: 0;
        left: 0;
        width: 100%;
      }
    }
    /* Effect */
    .radio:checked + .content {
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      box-shadow: 0.3rem 0.3rem 0.4rem rgba(0, 0, 0, 0.3);
      flex: 16;
    }
    .radio:checked + .content > .icon {
      right: 1.3rem;
    }
    .radio:checked + .content > .overlay {
      height: 40%;
      opacity: 0.8;
    }

    .radio:checked + .content > .card-title {
      opacity: 1;
      transform: translateX(0);
    }
  }
  &__right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    align-items: flex-start;
    h2 {
      &::before {
        left: 15px;
        top: 40px;
        height: 30px;
      }
    }
  }
}

/***************************** MOBILE ************************** */
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .humain {
    height: 50rem;
    .row {
      flex-direction: column-reverse;
    }
    &__right {
      margin-bottom: 30px;
      h2 {
        position: relative;
        margin-bottom: 30px;
        &::before {
          bottom: 85px;
          left: 0;
          top: initial;
        }
      }
    }
    &__left {
      flex-direction: column;
      height: 30rem;
      .content {
        flex: 5;
        .icon {
          bottom: 1.5rem;
        }
        .card-title {
          font-size: 22px;
          max-width: 299px;
          bottom: 1px;
          line-height: 1;
        }
        .overlay {
          right: 0;
          width: 2%;
          height: 100%;
          bottom: 0;
          left: inherit;
        }
      }
    }
    .humain__left .radio:checked + .content > .overlay {
      height: 40%;
      opacity: 0.8;
      width: 100%;
    }
  }
}
// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) {
  .humain {
    .row {
      flex-direction: column-reverse;
    }
    &__right {
      margin-bottom: 20px;
      h2 {
        position: relative;
        &::before {
          bottom: 40px;
          left: 0;
          top: initial;
        }
      }
      p{
        max-width: initial;
      }
    }
  }
}
// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199.98px) {
  .humain {
    .row {
      flex-direction: column-reverse;
    }
    &__right {
      margin-bottom: 20px;
      h2 {
        position: relative;
        &::before {
          bottom: 40px;
          left: 0;
          top: initial;
        }
      }
      p{
        max-width: initial;
      }
    }
  }
}
</style>
