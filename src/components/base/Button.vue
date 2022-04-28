<template>
    <button
        v-bind="$attrs"
        class="button"
    >
        <slot />
    </button>
</template>

<script>
export default {
    name: "Button",
}
</script>

<style lang="scss" scoped>
    .button {
        display: inline-flex;
        align-items: center;
        height: 40px;
        padding: 0 35px;
        border: 1px solid #E2E6E8;
        background: black;
        outline: none;
        transition-duration: .2s;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        user-select: none;
        text-transform: capitalize;
        margin: 10px;

        &[disabled] {
            background: #FAFAFA;
            color: #6D7679;
            border-color: #E4E7E8;
            cursor: not-allowed;
        }
    }
</style>