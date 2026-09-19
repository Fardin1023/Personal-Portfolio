export const track = (name, data) => {
  if (typeof window === "undefined" || typeof window.va !== "function") return;

  if (data && Object.keys(data).length > 0) {
    window.va("event", { name, data });
  } else {
    window.va("event", { name });
  }
};
