<template>
    <!--https://codepen.io/aaroniker/pen/XWrxyRJ-->

<nav class="rating">
  <ul>
    <li class="current">
      <svg>
        <use xlink:href="#star"></use>
      </svg>
    </li>
    <li>
      <svg>
        <use xlink:href="#star"></use>
      </svg>
    </li>
    <li>
      <svg>
        <use xlink:href="#star"></use>
      </svg>
    </li>
    <li><span></span>
      <svg>
        <use xlink:href="#star"></use>
      </svg>
    </li>
    <li><span></span>
      <svg>
        <use xlink:href="#star"></use>
      </svg>
    </li>
  </ul>
  <div><span>
      <svg>
        <use xlink:href="#star"></use>
      </svg></span></div>
</nav>
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 34" id="star">
    <path fill="currentColor" d="M19.6859343,0.861782958 L24.8136328,8.05088572 C25.0669318,8.40601432 25.4299179,8.6717536 25.8489524,8.80883508 L34.592052,11.6690221 C35.6704701,12.021812 36.2532905,13.1657829 35.8938178,14.2241526 C35.8056709,14.4836775 35.6647294,14.7229267 35.4795411,14.9273903 L29.901129,21.0864353 C29.5299163,21.4962859 29.3444371,22.0366367 29.3872912,22.5833831 L30.1116131,31.8245163 C30.1987981,32.9368499 29.3506698,33.9079379 28.2172657,33.993502 C27.9437428,34.0141511 27.6687736,33.9809301 27.4085205,33.8957918 L18.6506147,31.0307612 C18.2281197,30.8925477 17.7713439,30.8925477 17.3488489,31.0307612 L8.59094317,33.8957918 C7.51252508,34.2485817 6.34688429,33.6765963 5.98741159,32.6182265 C5.90066055,32.3628116 5.86681029,32.0929542 5.88785051,31.8245163 L6.61217242,22.5833831 C6.65502653,22.0366367 6.46954737,21.4962859 6.09833466,21.0864353 L0.519922484,14.9273903 C-0.235294755,14.0935658 -0.158766688,12.8167745 0.690852706,12.0755971 C0.899189467,11.8938516 1.14297067,11.7555303 1.40741159,11.6690221 L10.1505113,8.80883508 C10.5695458,8.6717536 10.9325319,8.40601432 11.1858308,8.05088572 L16.3135293,0.861782958 C16.9654141,-0.0521682813 18.2488096,-0.274439442 19.1800736,0.365326425 C19.3769294,0.500563797 19.5481352,0.668586713 19.6859343,0.861782958 Z"></path>
  </symbol>
  <path class="shadow" d="M18.7022469,29.7633426 L29.1611722,33.6861584 C28.8859085,33.8576358 28.5650147,33.9672494 28.2172657,33.993502 C27.9437428,34.0141511 27.6687736,33.9809301 27.4085205,33.8957918 L18.6506147,31.0307612 C18.2281197,30.8925477 17.7713439,30.8925477 17.3488489,31.0307612 L8.59094317,33.8957918 C7.98083887,34.0953792 7.34281791,33.9989813 6.83864817,33.6859784 L17.2977531,29.7633426 C17.7505234,29.5935537 18.2494766,29.5935537 18.7022469,29.7633426 Z"></path>
</svg>
</template>

<script>
export default {
    $('.rating ul li').on('click', function() {

    let li = $(this),
        ul = li.parent(),
        rating = ul.parent(),
        last = ul.find('.current');

    if(!rating.hasClass('animate-left') && !rating.hasClass('animate-right')) {

        last.removeClass('current');

        ul.children('li').each(function() {
            let current = $(this);
            current.toggleClass('active', li.index() > current.index());
        });

        rating.addClass(li.index() > last.index() ? 'animate-right' : 'animate-left');
        rating.css({
            '--x': li.position().left + 'px'
        });
        li.addClass('move-to');
        last.addClass('move-from');

        setTimeout(() => {
            li.addClass('current');
            li.removeClass('move-to');
            last.removeClass('move-from');
            rating.removeClass('animate-left animate-right');
        }, 800);

    }

})

}
</script>

<style>
    .rating {
    --active: #FFED76;
    --active-pale: rgba(255, 237, 118, .36);
    --inactive: #121621;
    --face-active: #121621;
    --face-inactive: #1C212E;
    display: flex;
    position: relative;
    //demo
    @media(min-width: 600px) {
        zoom: 2;
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        color: var(--inactive);
        li {
            --face: var(--face-inactive);
            cursor: pointer;
            position: relative;
            &:before,
            &:after {
                content: '';
                position: absolute;
                z-index: 2;
                transition: all .2s ease;
            }
            &:before {
                --r: 0deg;
                width: 2px;
                height: 2px;
                border-radius: 1px;
                top: 15px;
                left: 13px;
                transform: rotate(var(--r));
                filter: drop-shadow(8px 0 0 var(--face));
            }
            span {
                width: 2px;
                height: 2px;
                display: block;
                position: absolute;
                left: 50%;
                top: 50%;
                border-radius: 50%;
                margin: -1px 0 0 -1px;
                transform: scale(.6);
                opacity: 0;
                box-shadow: 16px -16px 0 var(--active-pale), -16px -16px 0 var(--active-pale), -21px 8px 0 var(--active-pale), 21px 8px 0 var(--active-pale), 0 22px 0 var(--active-pale);
            }
            &:nth-child(1) {
                &:after {
                    width: 10px;
                    height: 10px;
                    top: 20px;
                    left: 13px;
                    border-radius: 50%;
                    border: 1px solid transparent;
                    border-top-color: var(--face);
                }
            }
            &:nth-child(3) {
                &:after {
                    width: 6px;
                    left: 15px;
                    top: 20px;
                    height: 1px;
                    background: var(--face);
                }
            }
            &:nth-child(4) {
                &:after {
                    width: 10px;
                    height: 10px;
                    top: 12px;
                    left: 13px;
                    border-radius: 50%;
                    border: 1px solid transparent;
                    border-bottom-color: var(--face);
                }
                &.current {
                    animation: active-4 .4s ease;
                    span {
                        animation: active-span .32s ease;
                    }
                }
            }
            &:nth-child(5) {
                &:after {
                    width: 6px;
                    height: 3px;
                    left: 15px;
                    top: 20px;
                    border-radius: 0 0 3px 3px;
                    background: var(--face);
                }
                &.current {
                    animation: active-5 .72s ease;
                    span {
                        animation: active-span .32s ease;
                    }
                }
            }
            &.current {
                --face: var(--face-active);
                svg {
                    color: var(--active);
                    fill: rgba(0, 0, 0, .2);
                }
            }
            &:not(.current) {
                svg {
                    transition: transform .2s ease;
                }
                &:active {
                    svg {
                        transform: scale(.9);
                    }
                }
            }
            &:not(:last-child) {
                margin: 0 16px 0 0;
                &:before {
                    background: var(--face);
                }
                &.current {
                    &:before {
                        animation: blink 3s linear infinite;
                    }
                }
            }
            &:last-child {
                &:before {
                    --r: -45deg;
                    width: 3px;
                    height: 3px;
                    border-top: 1px solid var(--face);
                    border-right: 1px solid var(--face);
                    border-radius: 0 1px 0 0;
                    left: 12px;
                    filter: drop-shadow(6px 6px 0 var(--face));
                }
            }
        }
    }
    svg {
        width: 36px;
        height: 34px;
        display: block;
        fill: rgba(0, 0, 0, .04);
    }
    & > div {
        left: 0;
        top: 0;
        position: absolute;
        display: none;
        transform: translateX(var(--x));
        transition: transform .3s cubic-bezier(0, 0, 0.265, 1.1) .24s;
        span {
            display: block;
            svg {
                color: var(--active);
                fill: rgba(0, 0, 0, .2);
            }
        }
    }
    &.animate-left,
    &.animate-right {
        & > div {
            display: block;
            span {
                animation: scale .28s linear .24s;
            }
        }
    }
    &.animate-left {
        li {
            &.move-to {
                &:before {
                    animation: move-to-left .31s ease .36s;
                }
            }
            &.move-from {
                &:before {
                    animation: move-to-right .28s ease;
                }
            }
        }
        & > div {
            animation: double-left .32s linear .24s;
            span {
                svg {
                    animation: left .3s ease, right-end .4s ease .4s;
                }
            }
        }
    }
    &.animate-right {
        li {
            &.move-to {
                &:before {
                    animation: move-to-right .31s ease .36s;
                }
            }
            &.move-from {
                &:before {
                    animation: move-to-left .28s ease;
                }
            }
        }
        & > div {
            animation: double-right .32s linear .24s;
            span {
                svg {
                    animation: right .3s ease, left-end .4s ease .4s;
                }
            }
        }
    }
}

@keyframes active-4 {
    40% {
        transform: scale(1.25);
    }
}

@keyframes active-span {
    60% {
        opacity: 1;
    }
    100% {
        transform: scale(1.16);
        opacity: 0;
    }
}

@keyframes active-5 {
    15% {
        transform: rotate(180deg) scale(1.1);
    }
    30% {
        transform: rotate(360deg) scale(1.2);
    }
    70% {
        transform: rotate(360deg) translateY(14%) scaleY(.72);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes double-right {
    60% {
        filter: drop-shadow(-5px 0 1px var(--active-pale)) drop-shadow(4px 0 1px var(--active-pale));
    }
}

@keyframes scale {
    60% {
        transform: scaleX(1.32);
        filter: blur(.5px);
    }
}

@keyframes blink {
    0%,
    5%,
    15%,
    100% {
        transform: scaleY(1);
    }
    10% {
        transform: scaleY(.4);
    }
}

@keyframes double-left {
    60% {
        filter: drop-shadow(5px 0 1px var(--active-pale)) drop-shadow(-4px 0 1px var(--active-pale));
    }
}

@keyframes right {
    0%,
    100% {
        transform-origin: 17% 100%;
    }
    50% {
        transform: rotate(-12deg) skewX(12deg);
    }
}

@keyframes left {
    0%,
    100% {
        transform-origin: 83% 100%;
    }
    50% {
        transform: rotate(12deg) skewX(-12deg);
    }
}

@keyframes right-end {
    0%,
    100% {
        transform-origin: 17% 100%;
    }
    40% {
        transform: rotate(-6deg) skewX(4deg) scaleX(.92);
    }
    70% {
        transform: rotate(1deg) skewX(-8deg) scaleX(1.04);
    }
}

@keyframes left-end {
    0%,
    100% {
        transform-origin: 83% 100%;
    }
    40% {
        transform: rotate(6deg) skewX(-4deg) scaleX(.92);
    }
    70% {
        transform: rotate(-1deg) skewX(8deg) scaleX(1.04);
    }
}

@keyframes move-to-right {
    40% {
        transform: translateX(3px) rotate(var(--r));
    }
}

@keyframes move-to-left {
    40% {
        transform: translateX(-3px) rotate(var(--r));
    }
}

html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
}

* {
    box-sizing: inherit;
    &:before,
    &:after {
        box-sizing: inherit;
    }
}

</style>
