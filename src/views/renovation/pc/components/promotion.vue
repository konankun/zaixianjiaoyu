<template>
    <div>
        <div style="height:5px;background-color: #eeeeee;"></div>
        <el-card shadow="never">
            <div slot="header" class="list-card-header">
                <span>{{ title || (listType == 'group' ? '拼团' : '限时秒杀') }}</span>
            </div>
            <!-- card body -->
            <div v-if="!list.length" class="componnent-no-data">【活动模块】请点击关联数据</div>

            <div v-else style="white-space: nowrap;overflow-x: auto;">
                <div v-for="(item,index) in list" :key="index" style="width:160px;display: inline-block;margin-right: 10px;">
                    <img :src="item.cover" style="width: 100%;">
                    <div>
                        <div class="list-title">{{ item.title }}</div>
                        <div class="list-desc" v-html="item.try"></div>
                        <div class="list-price">
                            <span>{{ listType == 'group' ? '拼团' : '限时' }}￥{{item.price}}</span>
                            <span>￥{{item.t_price}}</span>
                        </div>
                    </div>
                </div>
            </div>

        </el-card>
        
    </div>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: ""
            },
            list: Array,
            listType: {
                type: String,
                default: "one"
            },
        }
    }
</script>
<style>
    .componnent-no-data {
        border: 1px solid #cccccc;
        background-color: #eeeeee;
        color: #cccccc;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px 0;
    }
    
    .list-card-header {
        border-bottom: 0;
    }
    
    .list-card-more {
        float: right;
        padding: 0;
        color: #999999;
    }
    
    .list-title {
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 5px 0;
    }
    
    .list-desc {
        font-size: 12px;
        color: #999999;
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
    .list-price {
        display: flex;
        align-items: flex-end;
    }
    
    .list-price span:first-child {
        color: red;
    }
    
    .list-price span:last-child {
        color: #888888;
        margin-left: 5px;
        font-size: 10px;
    }
</style>