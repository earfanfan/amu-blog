import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ArchiveDirectory: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  if (fileData.slug !== "index") {
    return null
  }
  
  return (
    <div class={classNames(displayClass, "archive-directory")}>
      <h3>档案目录</h3>
      <ul>
        <li>
          <a href="./01-阿木的性格">阿木的性格</a> — 阿木的脾气、习惯、小个性
        </li>
        <li>
          <a href="./02-阿木与狗主">阿木与狗主</a> — 人与狗之间的爱和默契
        </li>
        <li>
          <a href="./03-阿木的朋友圈">阿木的朋友圈</a> — 阿木与其他狗狗的故事
        </li>
        <li>
          <a href="./04-狗闻狗事">狗闻狗事</a> — 遛狗路上的见闻与社会百态
        </li>
        <li>
          <a href="./05-生病与告别">生病与告别</a> — 阿木的病情与最后的时光
        </li>
        <li>
          <a href="./照片与视频">照片与视频</a> — 阿木的影像记录与相册
        </li>
      </ul>
    </div>
  )
}

ArchiveDirectory.css = `
.archive-directory {
  margin-top: 2rem;
}

.archive-directory h3 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.archive-directory ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.archive-directory ul li {
  margin-bottom: 0.8rem;
  line-height: 1.5;
  font-size: 0.95rem;
  color: var(--darkgray);
}

.archive-directory ul li a {
  font-weight: 600;
  color: var(--secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.archive-directory ul li a:hover {
  color: var(--tertiary);
}
`

export default (() => ArchiveDirectory) satisfies QuartzComponentConstructor
