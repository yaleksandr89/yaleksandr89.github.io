(function () {
  if (window.__portfolioSiteInitialized) {
    return;
  }

  window.__portfolioSiteInitialized = true;

  let cleanupProfileHeaderMover;
  let cleanupDocumentPreviews;

  const initProfileHeaderMover = () => {
    if (typeof cleanupProfileHeaderMover === 'function') {
      cleanupProfileHeaderMover();
    }

    const shell = document.querySelector('.site-shell');
    const profileHeader = shell?.querySelector('[data-profile-header]');
    const photo = shell?.querySelector('[data-profile-photo]');
    const contentArea = shell?.querySelector('.content-area');
    const identityPanel = shell?.querySelector('[data-identity-panel]');

    if (
      !(shell instanceof HTMLElement)
      || !(profileHeader instanceof HTMLElement)
      || !(photo instanceof HTMLElement)
      || !(contentArea instanceof HTMLElement)
      || !(identityPanel instanceof HTMLElement)
    ) {
      return;
    }

    const anchor = document.createComment('profile-header-anchor');
    contentArea.insertBefore(anchor, profileHeader);

    const mediaQuery = window.matchMedia('(max-width: 48rem)');
    const syncProfileHeaderPlacement = () => {
      if (mediaQuery.matches) {
        photo.after(profileHeader);
        shell.dataset.profileHeaderPlacement = 'sidebar';
        return;
      }

      contentArea.insertBefore(profileHeader, anchor.nextSibling);
      shell.dataset.profileHeaderPlacement = 'main';
    };

    const removeMediaQueryListener = () => {
      if (typeof mediaQuery.removeEventListener === 'function') {
        mediaQuery.removeEventListener('change', syncProfileHeaderPlacement);
      } else if (typeof mediaQuery.removeListener === 'function') {
        mediaQuery.removeListener(syncProfileHeaderPlacement);
      }

      cleanupProfileHeaderMover = undefined;
    };

    cleanupProfileHeaderMover = removeMediaQueryListener;

    syncProfileHeaderPlacement();

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', syncProfileHeaderPlacement);
    } else if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(syncProfileHeaderPlacement);
    }
  };

  const initDisclosures = () => {
    const mobileCollapseQuery = window.matchMedia('(max-width: 48rem)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (mobileCollapseQuery.matches) {
      const mobileCollapseDetails = document.querySelectorAll('details[data-mobile-collapse]');

      mobileCollapseDetails.forEach((mobileCollapseDetail) => {
        if (!(mobileCollapseDetail instanceof HTMLDetailsElement)) {
          return;
        }

        if (mobileCollapseDetail.dataset.mobileCollapseInitialized === 'true') {
          return;
        }

        mobileCollapseDetail.open = false;
        mobileCollapseDetail.dataset.mobileCollapseInitialized = 'true';
      });
    }

    const disclosureDetails = document.querySelectorAll('details[data-disclosure]');

    disclosureDetails.forEach((disclosureDetail) => {
      if (!(disclosureDetail instanceof HTMLDetailsElement)) {
        return;
      }

      if (disclosureDetail.dataset.disclosureInitialized === 'true') {
        return;
      }

      const disclosureSummary = disclosureDetail.querySelector('summary');

      if (!(disclosureSummary instanceof HTMLElement)) {
        return;
      }

      disclosureDetail.dataset.disclosureInitialized = 'true';

      disclosureSummary.addEventListener('click', (event) => {
        if (disclosureDetail.dataset.disclosureAnimating === 'true') {
          event.preventDefault();
          return;
        }

        if (reducedMotionQuery.matches) {
          return;
        }

        event.preventDefault();
        disclosureDetail.dataset.disclosureAnimating = 'true';

        const isOpen = disclosureDetail.open;
        const startHeight = `${disclosureDetail.offsetHeight}px`;
        let endHeight = `${disclosureSummary.offsetHeight}px`;

        if (!isOpen) {
          disclosureDetail.open = true;
          endHeight = `${disclosureDetail.scrollHeight}px`;
        }

        const disclosureAnimation = disclosureDetail.animate(
          { height: [startHeight, endHeight] },
          {
            duration: 220,
            easing: 'cubic-bezier(0.2, 0, 0.2, 1)',
          },
        );

        disclosureAnimation.finished
          .then(() => {
            if (isOpen) {
              disclosureDetail.open = false;
            }
          })
          .catch(() => {})
          .finally(() => {
            delete disclosureDetail.dataset.disclosureAnimating;
          });
      });
    });
  };

  const initCvSelector = () => {
    const cvToggle = document.querySelector('[data-cv-toggle]');
    const cvLink = document.querySelector('[data-cv-link]');
    const cvLinkText = document.querySelector('[data-cv-link-text]');

    if (
      !(cvToggle instanceof HTMLInputElement)
      || !(cvLink instanceof HTMLAnchorElement)
      || !(cvLinkText instanceof HTMLSpanElement)
    ) {
      return;
    }

    const syncCvLink = () => {
      const href = cvToggle.checked
        ? cvLink.dataset.cvWithPhoneHref
        : cvLink.dataset.cvWithoutPhoneHref;
      const filename = cvToggle.checked
        ? cvLink.dataset.cvWithPhoneDownload
        : cvLink.dataset.cvWithoutPhoneDownload;
      const text = cvToggle.checked
        ? cvLink.dataset.cvWithPhoneText
        : cvLink.dataset.cvWithoutPhoneText;

      if (!href || !filename || !text) {
        return;
      }

      cvLink.href = href;
      cvLink.download = filename;
      cvLinkText.textContent = text;
    };

    syncCvLink();

    if (cvToggle.dataset.cvSelectorInitialized === 'true') {
      return;
    }

    cvToggle.dataset.cvSelectorInitialized = 'true';
    cvToggle.addEventListener('change', syncCvLink);
  };

  const initDocumentPreviews = () => {
    if (typeof cleanupDocumentPreviews === 'function') {
      cleanupDocumentPreviews();
    }

    const documentLinks = Array.from(
      document.querySelectorAll('[data-document-preview]'),
    ).filter((documentLink) => documentLink instanceof HTMLAnchorElement);

    if (documentLinks.length === 0 || !(document.body instanceof HTMLBodyElement)) {
      return;
    }

    document.querySelector('[data-document-preview-panel]')?.remove();

    const panel = document.createElement('div');
    const image = document.createElement('img');
    const hint = document.createElement('p');
    const previewMediaQuery = window.matchMedia(
      '(hover: hover) and (min-width: 48.0625rem)',
    );
    let activeLink;

    panel.className = 'document-preview';
    panel.dataset.documentPreviewPanel = 'true';
    image.className = 'document-preview__image';
    hint.className = 'document-preview__hint';
    panel.append(image, hint);
    document.body.append(panel);

    const positionPanel = () => {
      if (
        !(activeLink instanceof HTMLAnchorElement)
        || !panel.classList.contains('document-preview--visible')
      ) {
        return;
      }

      const margin = 12;
      const linkBounds = activeLink.getBoundingClientRect();
      const panelBounds = panel.getBoundingClientRect();
      const maximumLeft = window.innerWidth - panelBounds.width - margin;
      let left = linkBounds.right + margin;

      if (left > maximumLeft) {
        left = linkBounds.left - panelBounds.width - margin;
      }

      left = Math.max(margin, Math.min(left, maximumLeft));

      const maximumTop = window.innerHeight - panelBounds.height - margin;
      const centeredTop = linkBounds.top - (panelBounds.height - linkBounds.height) / 2;
      const top = Math.max(margin, Math.min(centeredTop, maximumTop));

      panel.style.left = `${left}px`;
      panel.style.top = `${top}px`;
    };

    const hidePreview = () => {
      panel.classList.remove('document-preview--visible');
      activeLink = undefined;
    };

    const showPreview = (documentLink) => {
      if (!previewMediaQuery.matches || !(documentLink instanceof HTMLAnchorElement)) {
        return;
      }

      const previewAlt = documentLink.dataset.previewAlt;
      const previewHint = documentLink.dataset.previewHint;

      if (!documentLink.href || !previewAlt || !previewHint) {
        return;
      }

      activeLink = documentLink;
      image.alt = previewAlt;
      hint.textContent = previewHint;

      if (image.src !== documentLink.href) {
        image.src = documentLink.href;
      }

      panel.classList.add('document-preview--visible');
      positionPanel();
    };

    const handleImageLoad = () => {
      positionPanel();
    };
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        hidePreview();
      }
    };
    const handleViewportChange = () => {
      positionPanel();
    };
    const handlePreviewMediaChange = () => {
      if (!previewMediaQuery.matches) {
        hidePreview();
      }
    };
    const listeners = documentLinks.map((documentLink) => {
      const handleMouseEnter = () => showPreview(documentLink);
      const handleMouseLeave = () => hidePreview();
      const handleFocus = () => {
        if (documentLink.matches(':focus-visible')) {
          showPreview(documentLink);
        }
      };
      const handleBlur = () => hidePreview();

      documentLink.addEventListener('mouseenter', handleMouseEnter);
      documentLink.addEventListener('mouseleave', handleMouseLeave);
      documentLink.addEventListener('focus', handleFocus);
      documentLink.addEventListener('blur', handleBlur);

      return {
        documentLink,
        handleMouseEnter,
        handleMouseLeave,
        handleFocus,
        handleBlur,
      };
    });

    image.addEventListener('load', handleImageLoad);
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('scroll', handleViewportChange, true);
    window.addEventListener('resize', handleViewportChange);
    if (typeof previewMediaQuery.addEventListener === 'function') {
      previewMediaQuery.addEventListener('change', handlePreviewMediaChange);
    } else if (typeof previewMediaQuery.addListener === 'function') {
      previewMediaQuery.addListener(handlePreviewMediaChange);
    }

    const cleanup = () => {
      listeners.forEach(({
        documentLink,
        handleMouseEnter,
        handleMouseLeave,
        handleFocus,
        handleBlur,
      }) => {
        documentLink.removeEventListener('mouseenter', handleMouseEnter);
        documentLink.removeEventListener('mouseleave', handleMouseLeave);
        documentLink.removeEventListener('focus', handleFocus);
        documentLink.removeEventListener('blur', handleBlur);
      });
      image.removeEventListener('load', handleImageLoad);
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('scroll', handleViewportChange, true);
      window.removeEventListener('resize', handleViewportChange);
      if (typeof previewMediaQuery.removeEventListener === 'function') {
        previewMediaQuery.removeEventListener('change', handlePreviewMediaChange);
      } else if (typeof previewMediaQuery.removeListener === 'function') {
        previewMediaQuery.removeListener(handlePreviewMediaChange);
      }
      panel.remove();

      if (cleanupDocumentPreviews === cleanup) {
        cleanupDocumentPreviews = undefined;
      }
    };

    cleanupDocumentPreviews = cleanup;
  };

  initProfileHeaderMover();
  initDisclosures();
  initCvSelector();
  initDocumentPreviews();

  document.addEventListener('astro:before-swap', () => {
    if (typeof cleanupProfileHeaderMover === 'function') {
      cleanupProfileHeaderMover();
    }

    if (typeof cleanupDocumentPreviews === 'function') {
      cleanupDocumentPreviews();
    }
  });

  document.addEventListener('astro:after-swap', () => {
    initProfileHeaderMover();
    initDisclosures();
    initCvSelector();
    initDocumentPreviews();
  });
})();
