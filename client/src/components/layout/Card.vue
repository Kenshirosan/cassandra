<template>
    <div class="wrapper">
        <div class="card">
            <div class="card-title">
                <img src="img/img_avatar.png" alt="Avatar" style="width:20%">
                <slot name="uuid"></slot>
            </div>
            <div class="card-content">
                <p><slot name="name"></slot></p>
                <p><slot name="short_description"></slot></p>
                <p><slot name="description"></slot></p>
                <p><slot name="date"></slot></p>
            </div>
            <div class="card-footer">
                <p>
                    <span><slot name="posted_at"></slot></span>
                    <span><slot name="updated_at"></slot></span>
                    <button>button</button>
                </p>
            </div>
        </div>

        <div class="cards">
            <img src="img/img_avatar.png" alt="Avatar" style="width:100%">
            <div class="container">
                <h4><b><slot name="name"></slot></b></h4>
                <p><slot name="short_description"></slot></p>
                <p><slot name="description"></slot></p>
                <p><slot name="date"></slot></p>
                <p><slot name="posted_at"></slot></p>
                <p><slot name="updated_at"></slot></p>
                <button>button</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Card',

    props: [
        'data',
    ],
};
</script>
