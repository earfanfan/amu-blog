---
title: 照片与视频
---

这里整理了阿木的照片与视频，可直接点开浏览。

<style>
.album-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
	gap: 12px;
	margin: 0.8rem 0 1.2rem;
}

.album-grid figure {
	margin: 0;
	border: 1px solid var(--lightgray);
	border-radius: 10px;
	overflow: hidden;
	background: var(--light);
	transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

.album-grid img,
.album-grid video {
	width: 100%;
	aspect-ratio: 4 / 3;
	object-fit: cover;
	margin: 0;
	display: block;
	border-radius: 0;
}

.album-grid figcaption {
	font-size: 0.82rem;
	color: var(--darkgray);
	padding: 0.45rem 0.6rem;
	line-height: 1.35;
}

.album-grid figure:hover {
	transform: translateY(-2px);
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
	border-color: color-mix(in srgb, var(--secondary) 35%, var(--lightgray));
}

.album-grid .album-item {
	display: block;
	position: relative;
	cursor: zoom-in;
	width: 100%;
	padding: 0;
	border: 0;
	background: transparent;
	text-align: left;
}

.album-grid .album-item::after {
	content: "放大";
	position: absolute;
	right: 8px;
	top: 8px;
	padding: 0.15rem 0.45rem;
	font-size: 0.72rem;
	border-radius: 99px;
	background: rgba(0, 0, 0, 0.45);
	color: #fff;
	opacity: 0;
	transform: translateY(-2px);
	transition: opacity 160ms ease, transform 160ms ease;
}

.album-grid figure:hover .album-item::after {
	opacity: 1;
	transform: translateY(0);
}

@media (max-width: 700px) {
	.album-grid {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
}
</style>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" />

## 视频

<div class="album-grid">
	<figure><button type="button" class="album-item" data-src="../照片与视频/阿木.mp4" data-type="video"><video src="../照片与视频/阿木.mp4" preload="metadata" muted playsinline></video></button><figcaption>阿木.mp4</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/追逐的小狗.mp4" data-type="video"><video src="../照片与视频/追逐的小狗.mp4" preload="metadata" muted playsinline></video></button><figcaption>追逐的小狗.mp4</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/出门前的笑脸-2025-08-29.mp4" data-type="video"><video src="../照片与视频/出门前的笑脸-2025-08-29.mp4" preload="metadata" muted playsinline></video></button><figcaption>出门前的笑脸</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/阿木转尾巴-2025-8-29.mp4" data-type="video"><video src="../照片与视频/阿木转尾巴-2025-8-29.mp4" preload="metadata" muted playsinline></video></button><figcaption>阿木转尾巴</figcaption></figure>
</div>

## 照片

<div class="album-grid">
	<figure><button type="button" class="album-item" data-src="../照片与视频/人像模式下睡觉的阿木-2024-11-13.jpg"><img src="../照片与视频/人像模式下睡觉的阿木-2024-11-13.jpg" loading="lazy" alt="人像模式下睡觉的阿木"/></button><figcaption>人像模式下睡觉的阿木</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/住院中的阿木-2025-1-20.jpg"><img src="../照片与视频/住院中的阿木-2025-1-20.jpg" loading="lazy" alt="住院中的阿木"/></button><figcaption>住院中的阿木</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/公园花坛野花中的狗狗-2025-4-17.jpg"><img src="../照片与视频/公园花坛野花中的狗狗-2025-4-17.jpg" loading="lazy" alt="公园花坛野花中的狗狗"/></button><figcaption>公园花坛野花中的狗狗</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/出院的阿木-2025-7-1.jpg"><img src="../照片与视频/出院的阿木-2025-7-1.jpg" loading="lazy" alt="出院的阿木"/></button><figcaption>出院的阿木</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/剪毛的阿木1-2025-3-25.jpg"><img src="../照片与视频/剪毛的阿木1-2025-3-25.jpg" loading="lazy" alt="剪毛的阿木1"/></button><figcaption>剪毛的阿木1</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/剪毛的阿木-后视图-2025-3-25.jpg"><img src="../照片与视频/剪毛的阿木-后视图-2025-3-25.jpg" loading="lazy" alt="剪毛的阿木后视图"/></button><figcaption>剪毛的阿木（后视图）</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/可爱小狗-2024-12-9.jpg"><img src="../照片与视频/可爱小狗-2024-12-9.jpg" loading="lazy" alt="可爱小狗"/></button><figcaption>可爱小狗</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/富贵-2025-3-21.jpg"><img src="../照片与视频/富贵-2025-3-21.jpg" loading="lazy" alt="富贵"/></button><figcaption>富贵</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/富贵和小狗相遇-2025-03-21.jpg"><img src="../照片与视频/富贵和小狗相遇-2025-03-21.jpg" loading="lazy" alt="富贵和小狗相遇"/></button><figcaption>富贵和小狗相遇</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/小八与黑豆-2025-5-29.jpg"><img src="../照片与视频/小八与黑豆-2025-5-29.jpg" loading="lazy" alt="小八与黑豆"/></button><figcaption>小八与黑豆</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/小小狗-2025-3-21.jpg"><img src="../照片与视频/小小狗-2025-3-21.jpg" loading="lazy" alt="小小狗"/></button><figcaption>小小狗</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/时光小火车-2023-10-22-01.jpg"><img src="../照片与视频/时光小火车-2023-10-22-01.jpg" loading="lazy" alt="时光小火车"/></button><figcaption>时光小火车</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/炸鱼块-2024-12-26.jpg"><img src="../照片与视频/炸鱼块-2024-12-26.jpg" loading="lazy" alt="炸鱼块"/></button><figcaption>炸鱼块</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/爬山的阿木-2025-1-5.jpg"><img src="../照片与视频/爬山的阿木-2025-1-5.jpg" loading="lazy" alt="爬山的阿木"/></button><figcaption>爬山的阿木</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/穿上衣服的阿木-2025-10-27.jpg"><img src="../照片与视频/穿上衣服的阿木-2025-10-27.jpg" loading="lazy" alt="穿上衣服的阿木"/></button><figcaption>穿上衣服的阿木</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/等待的阿木-2025-3-5.jpg"><img src="../照片与视频/等待的阿木-2025-3-5.jpg" loading="lazy" alt="等待的阿木"/></button><figcaption>等待的阿木</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/趴着休息的阿木-2024-9-6.jpg"><img src="../照片与视频/趴着休息的阿木-2024-9-6.jpg" loading="lazy" alt="趴着休息的阿木"/></button><figcaption>趴着休息的阿木</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/阿木嗅猫1-2024-9-9.jpg"><img src="../照片与视频/阿木嗅猫1-2024-9-9.jpg" loading="lazy" alt="阿木嗅猫1"/></button><figcaption>阿木嗅猫1</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/阿木嗅猫2-2024-9-9.jpg"><img src="../照片与视频/阿木嗅猫2-2024-9-9.jpg" loading="lazy" alt="阿木嗅猫2"/></button><figcaption>阿木嗅猫2</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/阿木爱意眼神-2024-8-31.jpg"><img src="../照片与视频/阿木爱意眼神-2024-8-31.jpg" loading="lazy" alt="阿木爱意眼神"/></button><figcaption>阿木爱意眼神</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/阿木在此-2025-3-10.jpg"><img src="../照片与视频/阿木在此-2025-3-10.jpg" loading="lazy" alt="阿木在此"/></button><figcaption>阿木在此</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/阿木在此1-2025-3-5.jpg"><img src="../照片与视频/阿木在此1-2025-3-5.jpg" loading="lazy" alt="阿木在此1"/></button><figcaption>阿木在此1</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/阿木在此2-2025-3-5.jpg"><img src="../照片与视频/阿木在此2-2025-3-5.jpg" loading="lazy" alt="阿木在此2"/></button><figcaption>阿木在此2</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/阿木想凑过去-2025-03-21.jpg"><img src="../照片与视频/阿木想凑过去-2025-03-21.jpg" loading="lazy" alt="阿木想凑过去"/></button><figcaption>阿木想凑过去</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/阿木的等待-2025-1-15.jpg"><img src="../照片与视频/阿木的等待-2025-1-15.jpg" loading="lazy" alt="阿木的等待"/></button><figcaption>阿木的等待</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/阿木踏青.jpg"><img src="../照片与视频/阿木踏青.jpg" loading="lazy" alt="阿木踏青"/></button><figcaption>阿木踏青</figcaption></figure>
	<figure><button type="button" class="album-item" data-src="../照片与视频/雪花柯基-2025-5-29.jpg"><img src="../照片与视频/雪花柯基-2025-5-29.jpg" loading="lazy" alt="雪花柯基"/></button><figcaption>雪花柯基</figcaption></figure>
</div>

<script src="https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js"></script>
<script src="../照片与视频/album-lightbox.js"></script>
