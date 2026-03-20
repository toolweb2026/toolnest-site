/* ================================================================
   ToolWeb — Shared Module
   i18n, theme, mobile menu, toast, upload helpers
   ================================================================ */

const ToolWeb = (() => {
  'use strict';

  // ────────────────────────────────────────────
  // i18n
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
  }

  // ────────────────────────────────────────────
  // Theme
  // ────────────────────────────────────────────
  function initTheme() {
    const saved = localStorage.getItem('toolweb-theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.body.classList.add('dark-theme');
    }
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('toolweb-theme', isDark ? 'dark' : 'light');
        btn.setAttribute('aria-label', isDark
          ? (currentLang === 'en' ? 'Switch to light mode' : '切換淺色模式')
          : (currentLang === 'en' ? 'Switch to dark mode' : '切換深色模式'));
      });
    }
  }

  // ────────────────────────────────────────────
  // Mobile Menu
  // ────────────────────────────────────────────
  function initMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('mobile-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      const isOpen = !nav.hidden;
      nav.hidden = isOpen;
      toggle.setAttribute('aria-expanded', String(!isOpen));
    });
    nav.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        nav.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
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
    if (!container) return;
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
    const el = document.getElementById('processing-overlay');
    if (el) el.remove();
  }

  function setupUploadZone(zoneId, fileInputId, callback) {
    const zone = document.getElementById(zoneId);
    const input = document.getElementById(fileInputId);
    if (!zone || !input) return;

    zone.addEventListener('click', (e) => {
      if (e.target === input) return;
      input.click();
    });
    zone.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); }
    });

    input.addEventListener('change', () => {
      if (input.files.length) {
        callback(input.files);
        zone.classList.add('has-file');
        let nameEl = zone.querySelector('.upload-filename');
        if (!nameEl) {
          nameEl = document.createElement('p');
          nameEl.className = 'upload-filename';
          zone.querySelector('.upload-content').appendChild(nameEl);
        }
        const names = Array.from(input.files).map(f => f.name);
        nameEl.textContent = names.length > 1 ? `${names.length} ${currentLang === 'en' ? 'files' : '個檔案'}` : names[0];
      }
    });

    zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('drag-over'); });
    zone.addEventListener('dragleave', () => { zone.classList.remove('drag-over'); });
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
        nameEl.textContent = names.length > 1 ? `${names.length} ${currentLang === 'en' ? 'files' : '個檔案'}` : names[0];
      }
    });
  }

  // ────────────────────────────────────────────
  // Init (called on every page)
  // ────────────────────────────────────────────
  function init() {
    initTheme();
    initMobileMenu();
    // Language
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
      langSelect.value = currentLang;
      langSelect.addEventListener('change', () => {
        currentLang = langSelect.value;
        localStorage.setItem('toolweb-lang', currentLang);
        applyI18n();
      });
    }
    // Highlight current nav
    const currentPage = location.pathname.split('/').pop().replace('.html', '') || 'index';
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
      const href = link.getAttribute('href').replace('.html', '').replace('./', '');
      if (href === currentPage || (currentPage === 'index' && href === './')) {
        link.classList.add('active');
      }
    });
    applyI18n();
  }

  return {
    t, applyI18n, init, showToast, formatBytes,
    loadImage, canvasToBlob, downloadBlob,
    showProcessing, hideProcessing, setupUploadZone,
    get currentLang() { return currentLang; },
  };
})();

document.addEventListener('DOMContentLoaded', () => ToolWeb.init());
