<template>
    <div class="wrapper">
        <div class="card">
            <div class="card-title">
                <slot name="uuid"></slot>
            </div>
            <div class="card-content">
                <p><slot name="name"></slot></p>
                <p><slot name="short_description"></slot></p>
                <p><slot name="description"></slot></p>
                <p><slot name="date"></slot></p>
                <p><slot name="posted_at"></slot></p>
                <p><slot name="updated_at"></slot></p>
            </div>
            <div class="card-footer">
                <p>Footer</p>
                <p>toto</p>
                <button>button</button>
                <div class="clear-right"></div>
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
