安装
----
```
npm install spark-swiper
````

> 它需要一些初始样式
```html
<div class="spark-swiper">
    <div class="swiper-wrap">
        <div class="swiper-item"></div>
    </div>
</div>
```

```css
.spark-swiper {
  overflow: hidden;
  position: relative;
}

.swiper-wrap {
  overflow: hidden;
  position: relative;
}

.swipe-item {
  float: left;
  width: 100%;
  position: relative;
}
```

自定义配置选项 
---- 

滑动可以选择第二个参数: [options] 

| 参数 | 说明 | 类型 | 默认值 |
| :---:| :---:| :---: |:--: |
|startSlide | 默认的索引位置 | 	int |0 |
| speed |	动画执行时间 |	int |	300|
| auto	| 是否自动播放, 传入切换时间 |	int |	- |
continuous|	是否循环播放|	boolean	|false
width	|单个swipe的宽度，一般在需要预览多个swipe时使用|	int	|-
offset|	距离左边的偏移量，一般在需要预览多个swipe时使用	|int	|-
disableScroll|	禁用Swiper的所有触摸事件|	boolean|	false
stopPropagation	|阻止事件冒泡|	boolean	|false
callback|	事件回调	|Function	|(index, currentEl)
transitionEnd	|动画完成事件	|Function	|(index, currentEl)
swiping	|使用已刷过的全宽度的百分比（0-1）进行滑动时调用	|Function	|(percent)



例子
----

```
const mySwiper = new Swiper(document.querySelector('.spark-swiper'), {
  width: 310,
  offset: 30,
  startSlide: 2,
  speed: 400,
  auto: 3000,
  continuous: true,
  disableScroll: false,
  stopPropagation: false,
  callback: function(index, elem) {},
  transitionEnd: function(index, elem) {}
});

```


API
---

spark-swiper暴露了以下可以控制滑动的API：

`prev()` 滑动到上一页

`next() `滑动到下一页

`getPos() `返回当前位置的索引

`getNumSlides() `返回滑块总数量

`kill()` 销毁当前Swiper实例