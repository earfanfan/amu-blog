document.addEventListener("nav", () => {
  const root = document.getElementById("may-eleven-popup-root")
  if (!root) return

  root.innerHTML = ""

  const now = new Date()
  const month = now.getMonth() + 1
  const day = now.getDate()

  // 测试时 true；正式上线前改回 false
  const FORCE_SHOW = true

  if (!FORCE_SHOW && !(month === 5 && day === 11)) return

  const dismissKey = `amu-may-11-dismissed-${now.getFullYear()}`
  if (localStorage.getItem(dismissKey) === "1") return

  const title = root.getAttribute("data-title") || "我们第一次相遇的日子"
  const message = root.getAttribute("data-message") || ""

  const growthDay1 = "./照片与视频/20190511-01.jpg"
  const growthPuppy = "./照片与视频/这水灵灵的小眼神啊.jpg"
  const growthNaughty = "./照片与视频/阿木拆了自己的狗窝.jpg"
  const growthAdult = "./照片与视频/阿木爱意眼神-2024-8-31.jpg"

  const letterDate = `${now.getFullYear()}年5月11日`

  const escapeHtml = (str: string) =>
    String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")

  const paragraphs = message
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("")

  const globalWindow = window as Window & {
    __amuMay11Keydown?: (e: KeyboardEvent) => void
  }

  if (globalWindow.__amuMay11Keydown) {
    document.removeEventListener("keydown", globalWindow.__amuMay11Keydown)
  }

  const close = (dismissToday = false) => {
    if (dismissToday) {
      localStorage.setItem(dismissKey, "1")
    }
    root.innerHTML = ""
    if (globalWindow.__amuMay11Keydown) {
      document.removeEventListener("keydown", globalWindow.__amuMay11Keydown)
      delete globalWindow.__amuMay11Keydown
    }
  }

  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") close(false)
  }

  globalWindow.__amuMay11Keydown = onKeydown
  document.addEventListener("keydown", onKeydown)

  root.innerHTML = `
    <div class="may-eleven-popup-overlay">
      <div class="may-eleven-stage may-eleven-stage-reveal is-active">
        <div class="may-eleven-reveal-glow"></div>
        <div class="may-eleven-reveal-card">
          <div class="may-eleven-reveal-kicker">来自汪星的一封来信</div>
          <h2 class="may-eleven-reveal-title">阿木寄来了一封小小的信</h2>
          <div class="may-eleven-reveal-subtitle">
            今天，阿木想和你说说话。
          </div>
          <div class="may-eleven-reveal-date">
            发信日期：${letterDate}
          </div>
          <button class="may-eleven-reveal-btn" data-action="receive">
            点击接收来信
          </button>
        </div>
      </div>

      <div class="may-eleven-stage may-eleven-stage-letter" aria-hidden="true">
        <div
          class="may-eleven-popup-card"
          role="dialog"
          aria-modal="true"
          aria-labelledby="may-eleven-title"
        >
          <button class="may-eleven-popup-close" aria-label="关闭">×</button>

          <div class="may-eleven-popup-topline">来自汪星的一封来信</div>

          <div class="may-eleven-popup-header">
            <div class="may-eleven-popup-kicker">阿木想对你说</div>
            <h2 class="may-eleven-popup-title" id="may-eleven-title">${escapeHtml(title)}</h2>
            <div class="may-eleven-popup-subtitle">二零一九年的五月十一日</div>
            <div class="may-eleven-popup-subtitle second">从那天起，阿木就有家了</div>
          </div>

          <div class="may-eleven-popup-body">
            <div class="may-eleven-popup-growth-column">
              <div class="may-eleven-popup-growth-header">
                <div class="may-eleven-popup-growth-kicker">阿木慢慢长大的样子</div>
                <div class="may-eleven-popup-growth-subtitle">第一天 · 前几个月 · 调皮的时候 · 长大以后</div>
              </div>

              <div class="may-eleven-popup-growth-track">
                <div class="may-eleven-popup-growth-track-inner">
                  <div class="may-eleven-popup-growth-item">
                    <div class="may-eleven-popup-growth-node"></div>
                    <div class="may-eleven-popup-growth-card">
                      <div class="may-eleven-popup-growth-photo-frame tilt-left">
                        <img class="may-eleven-popup-growth-photo" src="${growthDay1}" alt="阿木第一天">
                      </div>
                      <div class="may-eleven-popup-growth-meta">
                        <div class="may-eleven-popup-growth-date">第一天</div>
                        <div class="may-eleven-popup-growth-title">刚有家的第一天</div>
                        <div class="may-eleven-popup-growth-text">
                          刚到家不久，还是一小团软乎乎的样子。
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="may-eleven-popup-growth-item">
                    <div class="may-eleven-popup-growth-node"></div>
                    <div class="may-eleven-popup-growth-card">
                      <div class="may-eleven-popup-growth-photo-frame tilt-right">
                        <img class="may-eleven-popup-growth-photo" src="${growthPuppy}" alt="阿木小时候">
                      </div>
                      <div class="may-eleven-popup-growth-meta">
                        <div class="may-eleven-popup-growth-date">前几个月</div>
                        <div class="may-eleven-popup-growth-title">水灵灵的小眼神</div>
                        <div class="may-eleven-popup-growth-text">
                          那时候的阿木，正一点点认识这个家，也开始把依赖和信任交给袁凡。
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="may-eleven-popup-growth-item">
                    <div class="may-eleven-popup-growth-node"></div>
                    <div class="may-eleven-popup-growth-card">
                      <div class="may-eleven-popup-growth-photo-frame tilt-left">
                        <img class="may-eleven-popup-growth-photo" src="${growthNaughty}" alt="阿木调皮的时候">
                      </div>
                      <div class="may-eleven-popup-growth-meta">
                        <div class="may-eleven-popup-growth-date">调皮的时候</div>
                        <div class="may-eleven-popup-growth-title">我也有很闹腾的时候</div>
                        <div class="may-eleven-popup-growth-text">
                          那时我到处扑腾、拆拆咬咬，连狗窝也没放过。你会被我气到，其实是我想用引起你关注的方式靠近你，等你对我敞开心扉
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="may-eleven-popup-growth-item">
                    <div class="may-eleven-popup-growth-node"></div>
                    <div class="may-eleven-popup-growth-card">
                      <div class="may-eleven-popup-growth-photo-frame tilt-right">
                        <img class="may-eleven-popup-growth-photo" src="${growthAdult}" alt="长大后的阿木">
                      </div>
                      <div class="may-eleven-popup-growth-meta">
                        <div class="may-eleven-popup-growth-date">长大以后</div>
                        <div class="may-eleven-popup-growth-title">长大后的阿木</div>
                        <div class="may-eleven-popup-growth-text">
                          长大以后，阿木还是会带着熟悉的爱意回头看你，像从前一样温柔。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="may-eleven-popup-letter-wrap">
              <div class="may-eleven-popup-letter">
                <div class="may-eleven-popup-letter-inner">
                  <div class="may-eleven-popup-stamp">To 袁凡</div>

                  <div class="may-eleven-popup-letter-content">
                    ${paragraphs}
                  </div>

                  <div class="may-eleven-popup-signoff">
                    <div class="may-eleven-popup-signature">—— 永远记得你的阿木</div>
                    <div class="may-eleven-popup-date">${letterDate}</div>
                  </div>

                  <div class="may-eleven-popup-note">你记得阿木，阿木也会记得你。</div>
                </div>
              </div>
            </div>
          </div>

          <div class="may-eleven-popup-actions">
            <a class="may-eleven-popup-link" href="./照片与视频">去看看阿木</a>
            <button class="may-eleven-popup-btn secondary" data-action="close">关闭</button>
            <button class="may-eleven-popup-btn primary" data-action="dismiss">今天不再提醒</button>
          </div>
        </div>
      </div>
    </div>
  `

  const overlay = root.querySelector(".may-eleven-popup-overlay")
  const revealStage = root.querySelector(".may-eleven-stage-reveal") as HTMLElement | null
  const letterStage = root.querySelector(".may-eleven-stage-letter") as HTMLElement | null
  const receiveBtn = root.querySelector('[data-action="receive"]')
  const popupCard = root.querySelector(".may-eleven-popup-card")
  const closeBtn = root.querySelector(".may-eleven-popup-close")
  const closeActionBtn = root.querySelector('[data-action="close"]')
  const dismissBtn = root.querySelector('[data-action="dismiss"]')

  const showLetter = () => {
    if (!revealStage || !letterStage) return

    revealStage.classList.add("is-leaving")

    setTimeout(() => {
      revealStage.classList.remove("is-active")
      letterStage.classList.add("is-active")
      letterStage.setAttribute("aria-hidden", "false")

      requestAnimationFrame(() => {
        popupCard?.classList.add("is-visible")
      })
    }, 480)
  }

  receiveBtn?.addEventListener("click", showLetter)

  overlay?.addEventListener("click", (e) => {
    if (e.target === overlay && letterStage?.classList.contains("is-active")) {
      close(false)
    }
  })

  closeBtn?.addEventListener("click", () => close(false))
  closeActionBtn?.addEventListener("click", () => close(false))
  dismissBtn?.addEventListener("click", () => close(true))
})