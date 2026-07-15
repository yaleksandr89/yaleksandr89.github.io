(function () {
  if (window.__portfolioSiteInitialized) {
    return;
  }

  window.__portfolioSiteInitialized = true;

  let cleanupProfileHeaderMover;

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

  initProfileHeaderMover();
  initDisclosures();
  initCvSelector();

  document.addEventListener('astro:before-swap', () => {
    if (typeof cleanupProfileHeaderMover === 'function') {
      cleanupProfileHeaderMover();
    }
  });

  document.addEventListener('astro:after-swap', () => {
    initProfileHeaderMover();
    initDisclosures();
    initCvSelector();
  });
})();
