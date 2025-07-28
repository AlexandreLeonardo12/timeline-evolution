/**
 * ScrollToTop component
 *
 * This component listens for changes to the current route via `useLocation()` and
 * scrolls the window back to the top whenever the pathname changes. This
 * ensures that when users navigate between pages, they always start at the
 * beginning of the new page rather than halfway down the previous scroll
 * position.  It does not render any visible output and should be placed
 * inside your `<BrowserRouter>` so that it can access the router context.
 */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll the window back to the top of the document whenever the
    // route's pathname changes. This improves the navigation UX.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;