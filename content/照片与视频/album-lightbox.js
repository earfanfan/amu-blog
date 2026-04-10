(() => {
  function initLightbox() {
    if (!window.GLightbox) return

    if (window.__amuLightboxEscCleanup) {
      window.__amuLightboxEscCleanup()
      window.__amuLightboxEscCleanup = null
    }

    if (window.__amuLightbox) {
      window.__amuLightbox.destroy()
    }

    const items = Array.from(document.querySelectorAll(".album-grid .album-item[data-src]"))
    const elements = items
      .map((el) => {
        const href = el.getAttribute("data-src") || ""
        if (!href) return null

        const explicitType = el.getAttribute("data-type") || ""
        const inferredType = /\.mp4($|\?)/i.test(href) ? "video" : "image"
        return {
          href,
          type: explicitType || inferredType,
        }
      })
      .filter(Boolean)

    const lightbox = window.GLightbox({
      selector: null,
      elements,
      touchNavigation: true,
      loop: true,
      zoomable: true,
      draggable: true,
      openEffect: "zoom",
      closeEffect: "fade",
      closeButton: true,
    })

    window.__amuLightbox = lightbox

    let lightboxOpen = false

    const onKeyDown = (event) => {
      if (!lightboxOpen || event.key !== "Escape") return
      event.preventDefault()
      event.stopImmediatePropagation()
      lightbox.close()
    }

    lightbox.on("open", () => {
      lightboxOpen = true
    })

    lightbox.on("close", () => {
      lightboxOpen = false
    })

    document.addEventListener("keydown", onKeyDown, true)
    window.__amuLightboxEscCleanup = () => {
      document.removeEventListener("keydown", onKeyDown, true)
      lightboxOpen = false
    }

    items.forEach((el, index) => {
      if (el.dataset.lbBound === "1") return
      el.dataset.lbBound = "1"

      el.addEventListener(
        "click",
        (evt) => {
          evt.preventDefault()
          evt.stopPropagation()

          if (window.__amuLightbox) {
            window.__amuLightbox.openAt(index)
          }
        },
        true,
      )
    })
  }

  function waitAndInit() {
    if (window.GLightbox) {
      initLightbox()
    } else {
      setTimeout(waitAndInit, 80)
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", waitAndInit, { once: true })
  } else {
    waitAndInit()
  }

  document.addEventListener("nav", waitAndInit)
})()
