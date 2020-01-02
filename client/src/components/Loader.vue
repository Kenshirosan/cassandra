<template>
    <div class="wrap">
        <div class="spinner spinner-1"></div>
    </div>
</template>

<script>
export default {
    name: 'Loader',
};
</script>

<style scoped>
body {
    padding: 100px;
}

.wrap {
    vertical-align: middle;
    position: absolute;
    top: 25%;
    left: 44%;
    padding-bottom: 100px;
}

.spinner {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: inline-block;
}
.spinner:after, .spinner:before {
    content: "";
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.spinner-1:after {
    /*position: absolute;*/
    /*top: -4px;*/
    /*left: -4px;*/
    border: 4px solid transparent;
    border-top-color: orangered;
    border-bottom-color: orangered;
    -webkit-animation: spinny 1s linear infinite;
            animation: spinny 1s linear infinite;
}

@-webkit-keyframes spinny {
    0% {
      -webkit-transform: rotate(0deg) scale(1);
              transform: rotate(0deg) scale(1);
    }
    50% {
      -webkit-transform: rotate(45deg) scale(1.2);
              transform: rotate(45deg) scale(1.2);
    }
    100% {
      -webkit-transform: rotate(360deg) scale(1);
              transform: rotate(360deg) scale(1);
    }
}

@keyframes spinny {
    0% {
      -webkit-transform: rotate(0deg) scale(1);
              transform: rotate(0deg) scale(1);
    }
    50% {
      -webkit-transform: rotate(45deg) scale(1.2);
              transform: rotate(45deg) scale(1.2);
    }
    100% {
      -webkit-transform: rotate(360deg) scale(1);
              transform: rotate(360deg) scale(1);
    }
}
</style>
