<template>
    <div class="wrapper">
        <div class="card">
            <div class="card-title">
                <img src="img/img_avatar.png" alt="Avatar" style="width:20%">
                <span><slot name="uuid"></slot></span>
            </div>
            <div class="card-content">
                <span><slot name="name"></slot></span>
                <span><slot name="short_description"></slot></span>
                <span><slot name="description"></slot></span>
                <span><slot name="date"></slot></span>
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
                <span><slot name="short_description"></slot></span>
                <span><slot name="description"></slot></span>
                <span><slot name="date"></slot></span>
                <span><slot name="posted_at"></slot></span>
                <span><slot name="updated_at"></slot></span>
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
