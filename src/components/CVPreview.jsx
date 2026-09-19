import {
  Download,
  ExternalLink,
  FileText,
  X,
} from "lucide-react";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import { track } from "../utils/analytics";

const CV_PATH = "/cv.pdf";

export const CVPreview = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("checking");

  /* =========================================================
     OPEN PREVIEW
     ========================================================= */

  const openPreview = useCallback(() => {
    setOpen(true);
    track("cv_preview_opened");
  }, []);

  /* =========================================================
     CHECK WHETHER CV EXISTS
     ========================================================= */

  useEffect(() => {
    const checkCV = async () => {
      try {
        const response = await fetch(CV_PATH, {
          method: "HEAD",
          cache: "no-store",
        });

        const type =
          response.headers.get("content-type") || "";

        if (
          response.ok &&
          type.includes("pdf")
        ) {
          setStatus("ready");
        } else {
          setStatus("missing");
        }
      } catch {
        setStatus("missing");
      }
    };

    checkCV();
  }, []);

  /* =========================================================
     INTERCEPT THE MAIN CV BUTTON

     IMPORTANT:
     Links INSIDE the CV modal are ignored.
     This fixes Open + Download.
     ========================================================= */

  useEffect(() => {
    const onOpenEvent = () => {
      openPreview();
    };

    const onDocumentClick = (event) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest(
        'a[href="/cv.pdf"], a[data-cv-preview="true"]'
      );

      if (!anchor) {
        return;
      }

      /*
       * Do not intercept Open / Download buttons
       * inside the CV modal.
       */
      if (anchor.closest(".cv-modal")) {
        return;
      }

      event.preventDefault();

      openPreview();
    };

    window.addEventListener(
      "open-cv-preview",
      onOpenEvent
    );

    document.addEventListener(
      "click",
      onDocumentClick
    );

    return () => {
      window.removeEventListener(
        "open-cv-preview",
        onOpenEvent
      );

      document.removeEventListener(
        "click",
        onDocumentClick
      );
    };
  }, [openPreview]);

  /* =========================================================
     MODAL CONTROLS
     ========================================================= */

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    window.addEventListener(
      "keydown",
      onKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        onKeyDown
      );
    };
  }, [open]);

  /* =========================================================
     OPEN CV
     ========================================================= */

  const handleOpenCV = () => {
    track("cv_opened_new_tab");
  };

  /* =========================================================
     DOWNLOAD CV
     ========================================================= */

  const handleDownloadCV = () => {
    track("cv_downloaded");
  };

  /* =========================================================
     DON'T RENDER UNTIL OPEN
     ========================================================= */

  if (!open) {
    return null;
  }

  return (
    <div
      className="cv-modal"
      role="presentation"
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          setOpen(false);
        }
      }}
    >
      <div
        className="cv-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-label="CV preview"
      >

        {/* =====================================================
            TOP BAR
            ===================================================== */}

        <div className="cv-modal-bar">

          {/* TITLE */}

          <div className="cv-modal-title">

            <span className="cv-modal-icon">
              <FileText size={17} />
            </span>

            <span>
              <strong>
                Fardin Kamran — CV
              </strong>

              <small>
                {status === "ready"
                  ? "Preview and download"
                  : "CV update in progress"}
              </small>
            </span>

          </div>


          {/* ACTIONS */}

          <div className="cv-modal-actions">

            {status === "ready" && (
              <>

                {/* OPEN CV */}

                <a
                  href={CV_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-action-button"
                  onClick={handleOpenCV}
                  title="Open CV in new tab"
                >
                  <ExternalLink
                    size={16}
                  />

                  <span>
                    Open
                  </span>
                </a>


                {/* DOWNLOAD CV */}

                <a
                  href={CV_PATH}
                  download="Fardin-Kamran-CV.pdf"
                  className="cv-action-button"
                  onClick={
                    handleDownloadCV
                  }
                  title="Download CV"
                >
                  <Download
                    size={16}
                  />

                  <span>
                    Download
                  </span>
                </a>

              </>
            )}


            {/* CLOSE */}

            <button
              type="button"
              className="cv-close-button"
              onClick={() =>
                setOpen(false)
              }
              aria-label="Close CV preview"
              title="Close"
            >
              <X size={18} />
            </button>

          </div>

        </div>


        {/* =====================================================
            CONTENT
            ===================================================== */}

        <div className="cv-modal-content">

          {/* CHECKING */}

          {status === "checking" && (
            <div className="cv-empty-state">

              <FileText size={34} />

              <strong>
                Checking your CV…
              </strong>

            </div>
          )}


          {/* CV READY */}

          {status === "ready" && (
            <iframe
              src={`${CV_PATH}#view=FitH`}
              title="Fardin Kamran CV"
              className="cv-frame"
            />
          )}


          {/* CV MISSING */}

          {status === "missing" && (
            <div className="cv-empty-state">

              <FileText size={38} />

              <strong>
                Your polished CV can
                drop in here later.
              </strong>

              <p>
                When the final file is
                ready, place it at{" "}
                <code>
                  public/cv.pdf
                </code>
                . The preview, Open and
                Download buttons will
                start working
                automatically.
              </p>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};