<template>
    <div id="app">
  <div class="button active"></div>
  <div class="button"></div>
  <div class="button"></div>
  <div class="button"></div>
</div>
</template>

<script>
export default {
    $(function()
{
    var button = $('.button');

    function switchToNext()
    {
        var _this = $(this);

        if(_this.hasClass('active'))
            return false;
        else
        {
            $('.button.active').removeClass('active');
            _this.addClass('active');
        }
    }

    button.on('click',switchToNext);
});
}
</script>

<style>
    body
{
    height: 100%;
    margin: 0;
    user-select: none;
    -webkit-tap-highlight-color:transparent;
    background-color: #E91E63;
}

#app
{
    position: absolute;
    top: 50%;
    right:0;
    left: 0;
    width: 180px;
    height: 20px;
    margin: 0 auto;
    transform: translateY(-50%);
    overflow: hidden;
    z-index:1;
}

.button
{
    width: 20px;
    height: 20px;
    float: left;
    margin-right: 20px;
    background-color: #fff;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s ease width;
}

.button:last-child
{
    margin-right: 0;
}

.button.active
{
    width: 60px;
    cursor: auto;
}
</style>
