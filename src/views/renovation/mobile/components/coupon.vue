<template>
    <div class="coupon">
        <div v-for="(item,index) in list" :key="index">
            <div class="coupon-desc">
                <span>￥{{ item.price }}</span>
                <span>{{ item.condition }}</span>
            </div>
            <div class="coupon-action">领取</div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        list:Array
    }
}
</script>
<style>
    .coupon{
        width: 100%;
        overflow-x: auto;
        padding: 10px;
        display: flex;
    }
    .coupon>div{
        display: flex;
        color: #ffffff;
        min-width: 150px;
    }
    .coupon-desc{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #d39e00;
        padding: 10px;
    }
    .coupon-desc span:last-child{
        font-size: 12px;
        margin-top: 5px;
    }
    .coupon-action{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ffc107;
        padding: 0 10px;
        font-size: 14px;
    }
</style>