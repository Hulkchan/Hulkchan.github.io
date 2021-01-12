<template>
  <span class="typer-wrap">
    <span class="cut">
      <span
        class="word"
        v-for="(letter,index) in words"
        :key="index"
      >{{letter}}</span>
    </span>
    <!-- 模拟光标-->
    <div class="typer-cursorWrap">
      <span class="typer-cursor"></span>
    </div>
  </span>
</template>

<script>

export default {
  name: 'Typer',
  props: {
    texts: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      words: [],
      str: '',
      letters: [],
      writeTime: 100,
      order: 0
    }
  },
  mounted() {
    this.str = this.texts[0]
    this.begin()
  },
  methods: {
    begin() {
      this.letters = this.str.split("")
      const len = this.letters.length
      for (var i = 0; i < len; i++) {
        setTimeout(this.write(i), i * this.writeTime);
      }
    },
    back() {
      let L = this.letters.length;
      for (var i = 0; i < L; i++) {
        setTimeout(this.wipe(i), i * 50);
      }
    },
    write(i) {
      return () => {
        let L = this.letters.length;
        this.words.push(this.letters[i]);
        let that = this;
        /*如果输入完毕，在2s后开始删除*/
        if (i == L - 1) {
          setTimeout(function() {
            that.back();
          }, 2000);
        }
      }
    },
    wipe(i) {
      return () => {
        this.words.pop(this.letters[i]);
        /*如果删除完毕，在300ms后开始输入*/
        if (this.words.length == 0) {
          this.order++;
          let that = this;
          setTimeout(function() {
            that.begin();
          }, 300);
        }
      }
    },
  },
  watch: {                     //监听order值的变化，改变str的内容
    order(old, newV) {
      const len = this.texts.length
      let index = this.order % len
      this.str = this.texts[index]
    }
  }
}

</script>
<style lang='scss' scoped='scoped'>
@keyframes twinkling {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.typer-wrap {
  position: relative;
  display: inline-block;
}
.typer-cursor {
  position: absolute;
  background-color: #fff;
  height: 100%;
  width: 4px;
  border-radius: 2px;
  top: 50%;
  transform: translateY(-50%);
  right: -10px;
  animation: twinkling 1s linear infinite;
}
.typer-cursorWrap {
  position: absolute;
  background-color: #fff;
  height: 68%;
  top: 50%;
  transform: translateY(-50%);
  right: -4px;
}
</style>