<template>
    <div :class="className">
        <a href="https://github.com/Vas11a" target="_blanc">
            <img src="../imgs/ghub.png" alt="" class="w-12 h-12 m-auto">
        </a>
    </div>
</template>

<script>
export default {
    props: {
        className: {
            required: true,
            type: String
        }
    }
}
</script>
