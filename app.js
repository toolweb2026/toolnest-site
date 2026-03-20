/* ================================================================
   ToolWeb — Main Application
   i18n, theme switching, router, image tools
   ================================================================ */

(function () {
  'use strict';

  // ────────────────────────────────────────────
  // i18n Translations
  // ────────────────────────────────────────────
  const LANGS = {
    'zh-TW': {
      'nav.centerPad': '置中補白邊',
      'nav.resize': '尺寸調整',
      'nav.gridCut': '九宮格切圖',
      'nav.compress': '圖片壓縮',
      'nav.about': '關於我們',
      'nav.privacy': '隱私政策',
      'nav.terms': '使用條款',
      'home.title': '免費線上圖片工具',
      'home.subtitle': '無需安裝，瀏覽器即可處理。快速、免費、保護隱私。',
      'home.privacy': '隱私安全',
      'home.fast': '極速處理',
      'home.free': '完全免費',
      'tools.centerPad.title': '置中補白邊',
      'tools.centerPad.desc': '將圖片置中並加上白邊，適合 IG 排版',
      'tools.resize.title': '尺寸調整',
      'tools.resize.desc': '自由調整圖片寬高，支援等比縮放',
      'tools.gridCut.title': '九宮格切圖',
      'tools.gridCut.desc': '一鍵切成九宮格，Instagram 排版神器',
      'tools.compress.title': '圖片壓縮',
      'tools.compress.desc': '大幅縮小檔案大小，畫質幾乎不變',
      'back': '返回',
      'settings': '設定',
      'preview': '預覽',
      'upload.text': '點擊或拖曳圖片至此',
      'upload.hint': '支援 JPG、PNG、WebP',
      'centerPad.ratio': '目標比例',
      'centerPad.customRatio': '自訂比例',
      'centerPad.bgColor': '背景顏色',
      'centerPad.padding': '額外內距',
      'ratio.1to1': '1:1 正方形',
      'ratio.4to5': '4:5 Instagram 直式',
      'ratio.16to9': '16:9 橫式',
      'ratio.9to16': '9:16 限時動態',
      'ratio.custom': '自訂',
      'resize.originalSize': '原始尺寸',
      'resize.width': '寬度 (px)',
      'resize.height': '高度 (px)',
      'resize.lockRatio': '鎖定比例',
      'resize.format': '輸出格式',
      'gridCut.gridType': '切割方式',
      'gridCut.format': '輸出格式',
      'grid.3x3': '3×3 九宮格',
      'grid.2x2': '2×2 四宮格',
      'grid.3x1': '3×1 橫切三張',
      'grid.1x3': '1×3 直切三張',
      'compress.quality': '壓縮品質',
      'compress.outputFormat': '輸出格式',
      'compress.maxWidth': '最大寬度 (px，選填)',
      'btn.process': '處理圖片',
      'btn.reset': '重設',
      'btn.download': '下載圖片',
      'btn.downloadAll': '全部下載',
      'btn.cut': '切割圖片',
      'btn.compress': '壓縮圖片',
      'footer.text': 'ToolWeb — 所有圖片皆於瀏覽器端處理，不會上傳至伺服器。',
      'about.p1': '我們致力於提供簡單、快速且免費的線上圖片處理工具，讓使用者無需安裝任何軟體，即可輕鬆完成圖片編輯。',
      'about.p2': '本網站提供多種實用功能，包括圖片置中、補白邊、尺寸調整、九宮格切圖與圖片壓縮等工具，適合用於 Instagram 排版、電商商品圖片製作及各類設計需求。',
      'about.p3': '我們相信好的工具應該是直覺且高效率的，因此所有功能皆以「上傳即用、快速輸出」為設計核心，讓每位使用者都能快速完成圖片處理。',
      'about.p4': '此外，我們重視使用者隱私，所有圖片皆於瀏覽器端進行處理，不會上傳或儲存任何檔案，確保您的資料安全。',
      'about.p5': '未來我們將持續優化與擴充更多功能，打造更完整的線上圖片工具平台。若有任何建議或合作需求，歡迎隨時與我們聯繫。',
      'privacy.p1': '本網站重視您的隱私。本網站不會主動收集任何個人身份資訊。',
      'privacy.p2': '在您使用本網站時，可能會透過第三方服務（如 Google AdSense）自動收集部分非個人識別資訊，例如 IP 位址、瀏覽器類型與使用行為，以用於廣告投放與網站分析。',
      'privacy.p3': '本網站使用 Cookies 來提升使用體驗與廣告效果。您可透過瀏覽器設定停用 Cookies。',
      'privacy.p4': '所有圖片處理皆於您的瀏覽器本地進行，本網站不會上傳或儲存您的圖片資料。',
      'terms.p1': '使用本網站即表示您同意遵守本網站之使用條款。',
      'terms.p2': '本網站提供之工具僅供一般用途使用，對於因使用本網站所產生之任何直接或間接損失，本網站不負任何責任。',
      'terms.p3': '使用者不得利用本網站從事任何非法行為或侵害他人權益之行為。',
      'terms.p4': '本網站保留隨時修改、暫停或終止服務之權利，恕不另行通知。',
      'toast.uploaded': '圖片已載入！',
      'toast.processed': '處理完成！',
      'toast.downloaded': '已下載！',
      'toast.error': '發生錯誤，請重試。',
      'toast.noFile': '請先上傳圖片。',
      'info.size': '尺寸：{w} × {h} px',
      'info.fileSize': '檔案大小：{s}',
      'info.original': '原始：{s}',
      'info.compressed': '壓縮後：{s}',
      'info.saved': '節省 {p}%',
    },
    'en': {
      'nav.centerPad': 'Center & Pad',
      'nav.resize': 'Resize',
      'nav.gridCut': 'Grid Cut',
      'nav.compress': 'Compress',
      'nav.about': 'About Us',
      'nav.privacy': 'Privacy Policy',
      'nav.terms': 'Terms of Use',
      'home.title': 'Free Online Image Tools',
      'home.subtitle': 'No installation needed. Fast, free, and privacy-first.',
      'home.privacy': 'Privacy Safe',
      'home.fast': 'Blazing Fast',
      'home.free': 'Totally Free',
      'tools.centerPad.title': 'Center & Pad',
      'tools.centerPad.desc': 'Center your image with padding, perfect for IG layout',
      'tools.resize.title': 'Resize',
      'tools.resize.desc': 'Resize images freely with aspect ratio lock',
      'tools.gridCut.title': 'Grid Cut',
      'tools.gridCut.desc': 'Split into grid for Instagram multi-post layout',
      'tools.compress.title': 'Compress',
      'tools.compress.desc': 'Dramatically reduce file size with minimal quality loss',
      'back': 'Back',
      'settings': 'Settings',
      'preview': 'Preview',
      'upload.text': 'Click or drag image here',
      'upload.hint': 'Supports JPG, PNG, WebP',
      'centerPad.ratio': 'Target Ratio',
      'centerPad.customRatio': 'Custom Ratio',
      'centerPad.bgColor': 'Background Color',
      'centerPad.padding': 'Extra Padding',
      'ratio.1to1': '1:1 Square',
      'ratio.4to5': '4:5 IG Portrait',
      'ratio.16to9': '16:9 Landscape',
      'ratio.9to16': '9:16 Story',
      'ratio.custom': 'Custom',
      'resize.originalSize': 'Original Size',
      'resize.width': 'Width (px)',
      'resize.height': 'Height (px)',
      'resize.lockRatio': 'Lock Aspect Ratio',
      'resize.format': 'Output Format',
      'gridCut.gridType': 'Grid Type',
      'gridCut.format': 'Output Format',
      'grid.3x3': '3×3 Grid',
      'grid.2x2': '2×2 Grid',
      'grid.3x1': '3×1 Horizontal',
      'grid.1x3': '1×3 Vertical',
      'compress.quality': 'Quality',
      'compress.outputFormat': 'Output Format',
      'compress.maxWidth': 'Max Width (px, optional)',
      'btn.process': 'Process',
      'btn.reset': 'Reset',
      'btn.download': 'Download',
      'btn.downloadAll': 'Download All',
      'btn.cut': 'Cut Image',
      'btn.compress': 'Compress',
      'footer.text': 'ToolWeb — All images are processed in your browser. Nothing is uploaded.',
      'about.p1': 'We are dedicated to providing simple, fast, and free online image processing tools, allowing users to edit images effortlessly without installing any software.',
      'about.p2': 'This website offers a variety of practical features, including image centering, padding, resizing, grid cutting, and compression — perfect for Instagram layouts, e-commerce product images, and various design needs.',
      'about.p3': 'We believe great tools should be intuitive and efficient. All features are designed around the concept of "upload and go, instant output," enabling every user to complete image processing quickly.',
      'about.p4': 'We value user privacy. All images are processed entirely in your browser — nothing is uploaded or stored on any server, ensuring your data remains safe.',
      'about.p5': 'We will continue to optimize and expand our features to build a more complete online image tools platform. If you have any suggestions or collaboration inquiries, feel free to contact us anytime.',
      'privacy.p1': 'This website values your privacy. We do not actively collect any personally identifiable information.',
      'privacy.p2': 'While using this website, some non-personally identifiable information may be automatically collected through third-party services (such as Google AdSense), including IP addresses, browser types, and usage behavior, for advertising and website analytics purposes.',
      'privacy.p3': 'This website uses cookies to enhance user experience and advertising effectiveness. You can disable cookies through your browser settings.',
      'privacy.p4': 'All image processing is performed locally in your browser. This website does not upload or store any of your image data.',
      'terms.p1': 'By using this website, you agree to comply with these terms of use.',
      'terms.p2': 'The tools provided by this website are for general use only. This website is not responsible for any direct or indirect damages arising from the use of this website.',
      'terms.p3': 'Users must not use this website for any illegal activities or actions that infringe upon the rights of others.',
      'terms.p4': 'This website reserves the right to modify, suspend, or terminate services at any time without prior notice.',
      'toast.uploaded': 'Image loaded!',
      'toast.processed': 'Done!',
      'toast.downloaded': 'Downloaded!',
      'toast.error': 'An error occurred. Please try again.',
      'toast.noFile': 'Please upload an image first.',
      'info.size': 'Size: {w} × {h} px',
      'info.fileSize': 'File size: {s}',
      'info.original': 'Original: {s}',
      'info.compressed': 'Compressed: {s}',
      'info.saved': 'Saved {p}%',
    },
  };

  let currentLang = localStorage.getItem('toolweb-lang') || 'zh-TW';

  function t(key, params) {
    let text = (LANGS[currentLang] && LANGS[currentLang][key]) || (LANGS['zh-TW'][key]) || key;
    if (params) {
      Object.keys(params).forEach(k => {
        text = text.replace(`{${k}}`, params[k]);
      });
    }
    return text;
  }

  function applyI18n() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      el.setAttribute('aria-label', t(key));
    });
    document.documentElement.lang = currentLang;
    // Update page title
    document.title = currentLang === 'en' ? 'ToolWeb — Free Online Image Tools' : 'ToolWeb — 免費線上圖片工具';
    // Update skip link
    const skipLink = document.getElementById('skip-link');
    if (skipLink) skipLink.textContent = currentLang === 'en' ? 'Skip to main content' : '跳至主要內容';
  }

  // ────────────────────────────────────────────
  // Theme
  // ────────────────────────────────────────────
  function initTheme() {
    const saved = localStorage.getItem('toolweb-theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.body.classList.add('dark-theme');
    }
    document.getElementById('theme-toggle').addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      const isDark = document.body.classList.contains('dark-theme');
      localStorage.setItem('toolweb-theme', isDark ? 'dark' : 'light');
      const label = isDark
        ? (currentLang === 'en' ? 'Switch to light mode' : '切換淺色模式')
        : (currentLang === 'en' ? 'Switch to dark mode' : '切換深色模式');
      document.getElementById('theme-toggle').setAttribute('aria-label', label);
    });
  }

  // ────────────────────────────────────────────
  // Router (hash-based)
  // ────────────────────────────────────────────
  const views = ['home', 'center-pad', 'resize', 'grid-cut', 'compress', 'about', 'privacy', 'terms'];

  function navigateTo(viewName) {
    if (!views.includes(viewName)) viewName = 'home';
    // Hide all
    document.querySelectorAll('.view').forEach(v => {
      v.hidden = true;
      v.classList.remove('active');
    });
    // Show target
    const target = document.getElementById(viewName + '-view');
    if (target) {
      target.hidden = false;
      target.classList.add('active');
    }
    // Update nav active state
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('data-view') === viewName);
    });
    // Close mobile nav
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav) mobileNav.hidden = true;
    document.getElementById('mobile-menu-toggle').setAttribute('aria-expanded', 'false');
    // Scroll to top
    window.scrollTo({ top: 0 });
    // Announce for screen readers
    const heading = target?.querySelector('h1');
    if (heading) heading.focus({ preventScroll: true });
  }

  function initRouter() {
    function onHashChange() {
      const hash = location.hash.slice(1) || 'home';
      navigateTo(hash);
    }
    window.addEventListener('hashchange', onHashChange);
    onHashChange();
  }

  // ────────────────────────────────────────────
  // Mobile Menu
  // ────────────────────────────────────────────
  function initMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('mobile-nav');
    toggle.addEventListener('click', () => {
      const isOpen = !nav.hidden;
      nav.hidden = isOpen;
      toggle.setAttribute('aria-expanded', String(!isOpen));
    });
    // Close on link click
    nav.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        nav.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !nav.hidden) {
        nav.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // ────────────────────────────────────────────
  // Toast
  // ────────────────────────────────────────────
  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    toast.setAttribute('role', 'status');
    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // ────────────────────────────────────────────
  // Utilities
  // ────────────────────────────────────────────
  function formatBytes(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1048576).toFixed(2) + ' MB';
  }

  function loadImage(file) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = URL.createObjectURL(file);
    });
  }

  function canvasToBlob(canvas, format = 'png', quality = 0.92) {
    const mimeType = format === 'jpeg' ? 'image/jpeg' : format === 'webp' ? 'image/webp' : 'image/png';
    return new Promise(resolve => {
      canvas.toBlob(blob => resolve(blob), mimeType, quality);
    });
  }

  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function showProcessing() {
    const overlay = document.createElement('div');
    overlay.className = 'processing-overlay';
    overlay.id = 'processing-overlay';
    overlay.innerHTML = '<div class="processing-spinner" aria-label="處理中"></div>';
    overlay.setAttribute('role', 'alert');
    overlay.setAttribute('aria-busy', 'true');
    document.body.appendChild(overlay);
  }

  function hideProcessing() {
    const overlay = document.getElementById('processing-overlay');
    if (overlay) overlay.remove();
  }

  // Upload zone setup helper
  function setupUploadZone(zoneId, fileInputId, callback) {
    const zone = document.getElementById(zoneId);
    const input = document.getElementById(fileInputId);

    // Click on zone triggers file input
    zone.addEventListener('click', (e) => {
      if (e.target === input) return;
      input.click();
    });
    zone.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        input.click();
      }
    });

    // File input change
    input.addEventListener('change', () => {
      if (input.files.length) {
        callback(input.files);
        zone.classList.add('has-file');
        // Show filename
        let nameEl = zone.querySelector('.upload-filename');
        if (!nameEl) {
          nameEl = document.createElement('p');
          nameEl.className = 'upload-filename';
          zone.querySelector('.upload-content').appendChild(nameEl);
        }
        const names = Array.from(input.files).map(f => f.name);
        nameEl.textContent = names.length > 1 ? `${names.length} 個檔案` : names[0];
      }
    });

    // Drag & drop
    zone.addEventListener('dragover', e => {
      e.preventDefault();
      zone.classList.add('drag-over');
    });
    zone.addEventListener('dragleave', () => {
      zone.classList.remove('drag-over');
    });
    zone.addEventListener('drop', e => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      const files = e.dataTransfer.files;
      if (files.length) {
        input.files = files;
        callback(files);
        zone.classList.add('has-file');
        let nameEl = zone.querySelector('.upload-filename');
        if (!nameEl) {
          nameEl = document.createElement('p');
          nameEl.className = 'upload-filename';
          zone.querySelector('.upload-content').appendChild(nameEl);
        }
        const names = Array.from(files).map(f => f.name);
        nameEl.textContent = names.length > 1 ? `${names.length} 個檔案` : names[0];
      }
    });
  }

  // ────────────────────────────────────────────
  // TOOL: Center & Pad
  // ────────────────────────────────────────────
  const CenterPad = (() => {
    let images = []; // { file, img }
    let currentIndex = 0;

    function init() {
      setupUploadZone('cp-upload', 'cp-file', onFiles);

      document.getElementById('cp-ratio').addEventListener('change', onRatioChange);
      document.getElementById('cp-bg-color').addEventListener('input', e => {
        document.getElementById('cp-color-label').textContent = e.target.value.toUpperCase();
      });
      document.getElementById('cp-bg-white').addEventListener('click', () => setColor('#ffffff'));
      document.getElementById('cp-bg-black').addEventListener('click', () => setColor('#000000'));
      document.getElementById('cp-padding').addEventListener('input', e => {
        document.getElementById('cp-padding-val').textContent = e.target.value + 'px';
      });
      document.getElementById('cp-process').addEventListener('click', process);
      document.getElementById('cp-reset').addEventListener('click', reset);
      document.getElementById('cp-download').addEventListener('click', download);
      document.getElementById('cp-download-all').addEventListener('click', downloadAll);
    }

    function setColor(hex) {
      document.getElementById('cp-bg-color').value = hex;
      document.getElementById('cp-color-label').textContent = hex.toUpperCase();
    }

    function onRatioChange() {
      const val = document.getElementById('cp-ratio').value;
      document.getElementById('cp-custom-ratio').hidden = val !== 'custom';
    }

    async function onFiles(files) {
      images = [];
      for (const file of files) {
        if (!file.type.startsWith('image/')) continue;
        const img = await loadImage(file);
        images.push({ file, img });
      }
      if (images.length === 0) return;
      document.getElementById('cp-settings').hidden = false;
      document.getElementById('cp-download-all').hidden = images.length <= 1;
      showToast(t('toast.uploaded'), 'success');
    }

    function getRatio() {
      const val = document.getElementById('cp-ratio').value;
      if (val === 'custom') {
        const w = parseInt(document.getElementById('cp-ratio-w').value) || 1;
        const h = parseInt(document.getElementById('cp-ratio-h').value) || 1;
        return w / h;
      }
      const [w, h] = val.split(':').map(Number);
      return w / h;
    }

    function processOne(img) {
      const ratio = getRatio();
      const padding = parseInt(document.getElementById('cp-padding').value) || 0;
      const bgColor = document.getElementById('cp-bg-color').value;

      const imgW = img.naturalWidth;
      const imgH = img.naturalHeight;

      // Calculate canvas size to fit image + padding with target ratio
      let canvasW, canvasH;
      const paddedW = imgW + padding * 2;
      const paddedH = imgH + padding * 2;

      if (paddedW / paddedH > ratio) {
        canvasW = paddedW;
        canvasH = Math.round(paddedW / ratio);
      } else {
        canvasH = paddedH;
        canvasW = Math.round(paddedH * ratio);
      }

      const canvas = document.createElement('canvas');
      canvas.width = canvasW;
      canvas.height = canvasH;
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvasW, canvasH);

      const x = Math.round((canvasW - imgW) / 2);
      const y = Math.round((canvasH - imgH) / 2);
      ctx.drawImage(img, x, y);

      return canvas;
    }

    async function process() {
      if (images.length === 0) { showToast(t('toast.noFile'), 'error'); return; }
      showProcessing();
      try {
        await new Promise(r => setTimeout(r, 50));
        currentIndex = 0;
        const canvas = processOne(images[0].img);
        const previewCanvas = document.getElementById('cp-canvas');
        previewCanvas.width = canvas.width;
        previewCanvas.height = canvas.height;
        previewCanvas.getContext('2d').drawImage(canvas, 0, 0);

        document.getElementById('cp-preview-area').hidden = false;
        document.getElementById('cp-info').textContent = t('info.size', { w: canvas.width, h: canvas.height });
        showToast(t('toast.processed'), 'success');
      } catch (e) {
        showToast(t('toast.error'), 'error');
      }
      hideProcessing();
    }

    async function download() {
      if (images.length === 0) return;
      const canvas = processOne(images[currentIndex].img);
      const blob = await canvasToBlob(canvas, 'png');
      const name = images[currentIndex].file.name.replace(/\.[^.]+$/, '') + '_padded.png';
      downloadBlob(blob, name);
      showToast(t('toast.downloaded'), 'success');
    }

    async function downloadAll() {
      showProcessing();
      for (let i = 0; i < images.length; i++) {
        const canvas = processOne(images[i].img);
        const blob = await canvasToBlob(canvas, 'png');
        const name = images[i].file.name.replace(/\.[^.]+$/, '') + '_padded.png';
        downloadBlob(blob, name);
      }
      hideProcessing();
      showToast(t('toast.downloaded'), 'success');
    }

    function reset() {
      images = [];
      currentIndex = 0;
      document.getElementById('cp-file').value = '';
      document.getElementById('cp-settings').hidden = true;
      document.getElementById('cp-preview-area').hidden = true;
      document.getElementById('cp-upload').classList.remove('has-file');
      const nameEl = document.querySelector('#cp-upload .upload-filename');
      if (nameEl) nameEl.remove();
    }

    return { init };
  })();

  // ────────────────────────────────────────────
  // TOOL: Resize
  // ────────────────────────────────────────────
  const Resize = (() => {
    let img = null;
    let file = null;
    let aspectRatio = 1;
    let updatingSize = false;

    function init() {
      setupUploadZone('rs-upload', 'rs-file', onFiles);

      const widthInput = document.getElementById('rs-width');
      const heightInput = document.getElementById('rs-height');
      const lockRatio = document.getElementById('rs-lock-ratio');

      widthInput.addEventListener('input', () => {
        if (lockRatio.checked && !updatingSize) {
          updatingSize = true;
          heightInput.value = Math.round(widthInput.value / aspectRatio);
          updatingSize = false;
        }
      });
      heightInput.addEventListener('input', () => {
        if (lockRatio.checked && !updatingSize) {
          updatingSize = true;
          widthInput.value = Math.round(heightInput.value * aspectRatio);
          updatingSize = false;
        }
      });

      document.getElementById('rs-process').addEventListener('click', process);
      document.getElementById('rs-reset').addEventListener('click', reset);
      document.getElementById('rs-download').addEventListener('click', download);
    }

    async function onFiles(files) {
      file = files[0];
      if (!file || !file.type.startsWith('image/')) return;
      img = await loadImage(file);
      aspectRatio = img.naturalWidth / img.naturalHeight;

      document.getElementById('rs-width').value = img.naturalWidth;
      document.getElementById('rs-height').value = img.naturalHeight;
      document.getElementById('rs-original-size').textContent = `${img.naturalWidth} × ${img.naturalHeight} px`;
      document.getElementById('rs-settings').hidden = false;
      showToast(t('toast.uploaded'), 'success');
    }

    async function process() {
      if (!img) { showToast(t('toast.noFile'), 'error'); return; }
      showProcessing();
      try {
        await new Promise(r => setTimeout(r, 50));
        const w = parseInt(document.getElementById('rs-width').value) || img.naturalWidth;
        const h = parseInt(document.getElementById('rs-height').value) || img.naturalHeight;

        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, w, h);

        const previewCanvas = document.getElementById('rs-canvas');
        previewCanvas.width = canvas.width;
        previewCanvas.height = canvas.height;
        previewCanvas.getContext('2d').drawImage(canvas, 0, 0);

        document.getElementById('rs-preview-area').hidden = false;
        document.getElementById('rs-info').textContent = t('info.size', { w, h });
        showToast(t('toast.processed'), 'success');
      } catch (e) {
        showToast(t('toast.error'), 'error');
      }
      hideProcessing();
    }

    async function download() {
      if (!img) return;
      const w = parseInt(document.getElementById('rs-width').value) || img.naturalWidth;
      const h = parseInt(document.getElementById('rs-height').value) || img.naturalHeight;
      const format = document.getElementById('rs-format').value;

      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, w, h);

      const blob = await canvasToBlob(canvas, format, 0.92);
      const ext = format === 'jpeg' ? 'jpg' : format;
      const name = file.name.replace(/\.[^.]+$/, '') + `_${w}x${h}.${ext}`;
      downloadBlob(blob, name);
      showToast(t('toast.downloaded'), 'success');
    }

    function reset() {
      img = null;
      file = null;
      document.getElementById('rs-file').value = '';
      document.getElementById('rs-settings').hidden = true;
      document.getElementById('rs-preview-area').hidden = true;
      document.getElementById('rs-upload').classList.remove('has-file');
      const nameEl = document.querySelector('#rs-upload .upload-filename');
      if (nameEl) nameEl.remove();
    }

    return { init };
  })();

  // ────────────────────────────────────────────
  // TOOL: Grid Cut
  // ────────────────────────────────────────────
  const GridCut = (() => {
    let img = null;
    let file = null;
    let cellCanvases = [];

    function init() {
      setupUploadZone('gc-upload', 'gc-file', onFiles);
      document.getElementById('gc-process').addEventListener('click', process);
      document.getElementById('gc-reset').addEventListener('click', reset);
      document.getElementById('gc-download-all').addEventListener('click', downloadAll);
    }

    async function onFiles(files) {
      file = files[0];
      if (!file || !file.type.startsWith('image/')) return;
      img = await loadImage(file);
      document.getElementById('gc-settings').hidden = false;
      showToast(t('toast.uploaded'), 'success');
    }

    function getGrid() {
      const val = document.getElementById('gc-grid').value;
      const [cols, rows] = val.split('x').map(Number);
      return { cols, rows };
    }

    async function process() {
      if (!img) { showToast(t('toast.noFile'), 'error'); return; }
      showProcessing();
      try {
        await new Promise(r => setTimeout(r, 50));
        const { cols, rows } = getGrid();

        // Make image square by cropping from center if needed for 3x3
        let srcW = img.naturalWidth;
        let srcH = img.naturalHeight;
        let srcX = 0, srcY = 0;

        // For grid cut, crop to correct ratio first
        const targetRatio = cols / rows;
        const imgRatio = srcW / srcH;
        if (imgRatio > targetRatio) {
          srcW = Math.round(srcH * targetRatio);
          srcX = Math.round((img.naturalWidth - srcW) / 2);
        } else if (imgRatio < targetRatio) {
          srcH = Math.round(srcW / targetRatio);
          srcY = Math.round((img.naturalHeight - srcH) / 2);
        }

        const cellW = Math.floor(srcW / cols);
        const cellH = Math.floor(srcH / rows);

        cellCanvases = [];
        const previewDiv = document.getElementById('gc-grid-preview');
        previewDiv.innerHTML = '';
        previewDiv.className = `grid-preview grid-${cols}x${rows}`;

        let cellNum = 1;
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const canvas = document.createElement('canvas');
            canvas.width = cellW;
            canvas.height = cellH;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img,
              srcX + c * cellW, srcY + r * cellH, cellW, cellH,
              0, 0, cellW, cellH
            );
            cellCanvases.push(canvas);

            // Create preview cell
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            cell.setAttribute('role', 'button');
            cell.setAttribute('tabindex', '0');
            cell.setAttribute('aria-label', `下載第 ${cellNum} 張`);

            const previewCvs = document.createElement('canvas');
            previewCvs.width = cellW;
            previewCvs.height = cellH;
            previewCvs.getContext('2d').drawImage(canvas, 0, 0);
            cell.appendChild(previewCvs);

            const label = document.createElement('span');
            label.className = 'grid-cell-label';
            label.textContent = cellNum;
            cell.appendChild(label);

            // Click to download individual cell
            const idx = cellCanvases.length - 1;
            const num = cellNum;
            cell.addEventListener('click', () => downloadCell(idx, num));
            cell.addEventListener('keydown', e => {
              if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); downloadCell(idx, num); }
            });

            previewDiv.appendChild(cell);
            cellNum++;
          }
        }

        document.getElementById('gc-preview-area').hidden = false;
        document.getElementById('gc-info').textContent = t('info.size', { w: cellW, h: cellH }) + ` × ${cellCanvases.length}`;
        showToast(t('toast.processed'), 'success');
      } catch (e) {
        showToast(t('toast.error'), 'error');
      }
      hideProcessing();
    }

    async function downloadCell(idx, num) {
      const format = document.getElementById('gc-format').value;
      const blob = await canvasToBlob(cellCanvases[idx], format, 0.92);
      const ext = format === 'jpeg' ? 'jpg' : format;
      const name = file.name.replace(/\.[^.]+$/, '') + `_grid_${num}.${ext}`;
      downloadBlob(blob, name);
    }

    async function downloadAll() {
      showProcessing();
      const format = document.getElementById('gc-format').value;
      const ext = format === 'jpeg' ? 'jpg' : format;
      for (let i = 0; i < cellCanvases.length; i++) {
        const blob = await canvasToBlob(cellCanvases[i], format, 0.92);
        const name = file.name.replace(/\.[^.]+$/, '') + `_grid_${i + 1}.${ext}`;
        downloadBlob(blob, name);
        await new Promise(r => setTimeout(r, 100)); // small delay between downloads
      }
      hideProcessing();
      showToast(t('toast.downloaded'), 'success');
    }

    function reset() {
      img = null;
      file = null;
      cellCanvases = [];
      document.getElementById('gc-file').value = '';
      document.getElementById('gc-settings').hidden = true;
      document.getElementById('gc-preview-area').hidden = true;
      document.getElementById('gc-grid-preview').innerHTML = '';
      document.getElementById('gc-upload').classList.remove('has-file');
      const nameEl = document.querySelector('#gc-upload .upload-filename');
      if (nameEl) nameEl.remove();
    }

    return { init };
  })();

  // ────────────────────────────────────────────
  // TOOL: Compress
  // ────────────────────────────────────────────
  const Compress = (() => {
    let files = [];
    let results = []; // { canvas, blob, original, name }

    function init() {
      setupUploadZone('cm-upload', 'cm-file', onFiles);
      document.getElementById('cm-quality').addEventListener('input', e => {
        document.getElementById('cm-quality-val').textContent = e.target.value + '%';
      });
      document.getElementById('cm-process').addEventListener('click', process);
      document.getElementById('cm-reset').addEventListener('click', reset);
      document.getElementById('cm-download-all').addEventListener('click', downloadAll);
    }

    async function onFiles(fileList) {
      files = Array.from(fileList).filter(f => f.type.startsWith('image/'));
      if (files.length === 0) return;
      document.getElementById('cm-settings').hidden = false;
      showToast(t('toast.uploaded'), 'success');
    }

    async function process() {
      if (files.length === 0) { showToast(t('toast.noFile'), 'error'); return; }
      showProcessing();
      results = [];
      const quality = parseInt(document.getElementById('cm-quality').value) / 100;
      const format = document.getElementById('cm-format').value;
      const maxWidth = parseInt(document.getElementById('cm-max-width').value) || 0;

      try {
        for (const file of files) {
          const img = await loadImage(file);
          let w = img.naturalWidth;
          let h = img.naturalHeight;

          if (maxWidth > 0 && w > maxWidth) {
            h = Math.round(h * (maxWidth / w));
            w = maxWidth;
          }

          const canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(img, 0, 0, w, h);

          const blob = await canvasToBlob(canvas, format, quality);
          results.push({
            canvas, blob,
            originalSize: file.size,
            compressedSize: blob.size,
            name: file.name,
          });
          URL.revokeObjectURL(img.src);
        }

        renderResults();
        document.getElementById('cm-preview-area').hidden = false;
        showToast(t('toast.processed'), 'success');
      } catch (e) {
        showToast(t('toast.error'), 'error');
      }
      hideProcessing();
    }

    function renderResults() {
      const container = document.getElementById('cm-results');
      container.innerHTML = '';
      const format = document.getElementById('cm-format').value;
      const ext = format === 'jpeg' ? 'jpg' : format;

      results.forEach((r, i) => {
        const saved = Math.max(0, Math.round((1 - r.compressedSize / r.originalSize) * 100));
        const item = document.createElement('div');
        item.className = 'compress-item';
        item.innerHTML = `
          <canvas class="compress-thumb" width="64" height="64" aria-hidden="true"></canvas>
          <div class="compress-details">
            <div class="compress-name">${r.name}</div>
            <div class="compress-stats">
              <span>${t('info.original', { s: formatBytes(r.originalSize) })}</span>
              <span>${t('info.compressed', { s: formatBytes(r.compressedSize) })}</span>
              <span class="compress-saved">${t('info.saved', { p: saved })}</span>
            </div>
          </div>
          <div class="compress-actions">
            <button class="btn btn-primary" aria-label="下載 ${r.name}">${t('btn.download')}</button>
          </div>
        `;

        // Draw thumbnail
        const thumbCanvas = item.querySelector('.compress-thumb');
        const ctx = thumbCanvas.getContext('2d');
        const scale = Math.min(64 / r.canvas.width, 64 / r.canvas.height);
        const dw = r.canvas.width * scale;
        const dh = r.canvas.height * scale;
        ctx.drawImage(r.canvas, (64 - dw) / 2, (64 - dh) / 2, dw, dh);

        // Download button
        item.querySelector('.btn').addEventListener('click', () => {
          const outName = r.name.replace(/\.[^.]+$/, '') + `_compressed.${ext}`;
          downloadBlob(r.blob, outName);
          showToast(t('toast.downloaded'), 'success');
        });

        container.appendChild(item);
      });
    }

    async function downloadAll() {
      const format = document.getElementById('cm-format').value;
      const ext = format === 'jpeg' ? 'jpg' : format;
      for (const r of results) {
        const outName = r.name.replace(/\.[^.]+$/, '') + `_compressed.${ext}`;
        downloadBlob(r.blob, outName);
        await new Promise(res => setTimeout(res, 100));
      }
      showToast(t('toast.downloaded'), 'success');
    }

    function reset() {
      files = [];
      results = [];
      document.getElementById('cm-file').value = '';
      document.getElementById('cm-settings').hidden = true;
      document.getElementById('cm-preview-area').hidden = true;
      document.getElementById('cm-results').innerHTML = '';
      document.getElementById('cm-upload').classList.remove('has-file');
      const nameEl = document.querySelector('#cm-upload .upload-filename');
      if (nameEl) nameEl.remove();
    }

    return { init };
  })();

  // ────────────────────────────────────────────
  // Init
  // ────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initRouter();
    initMobileMenu();

    // Language switcher
    const langSelect = document.getElementById('lang-select');
    langSelect.value = currentLang;
    langSelect.addEventListener('change', () => {
      currentLang = langSelect.value;
      localStorage.setItem('toolweb-lang', currentLang);
      applyI18n();
    });
    applyI18n();

    // Init tools
    CenterPad.init();
    Resize.init();
    GridCut.init();
    Compress.init();
  });
})();
