# codeSegment
日常工作中常用的代码片段都在这里

# px转换成rem
首先，目前视觉稿大小分为640，750以及，1125这三种。

当前方案会把这3类视觉稿分成100份来看待（为了以后兼容vh，vw单位）。每一份被称为一个单位a。同时，1rem单位认定为10a。拿750的视觉稿举例：

1a = 7.5px
1rem = 75px
因此，对于视觉稿上的元素的尺寸换算，只需要原始px值除以rem基准px值即可。例如240px * 120px的元素，最后转换为3.2rem * 1.6rem。

#字体不使用rem的方法

字体的大小不推荐用rem作为单位。所以对于字体的设置，仍旧使用px作为单位，并配合用data-dpr属性来区分不同dpr下的的大小。

例如：

div {
    width: 1rem;
    height: 0.4rem;
    font-size: 12px; // 默认写上dpr为1的fontSize
}

[data-dpr="2"] div {
    font-size: 24px;
}

[data-dpr="3"] div {
    font-size: 36px;
}