document.querySelectorAll(".Choose-Content-text").forEach((item) => {
  item.addEventListener("click", () => {
    const paragraph = item.querySelector("p");
    const h4 = item.querySelector(".sandbox_h4");

    if (paragraph.style.display === "none" || paragraph.style.display === "") {
      paragraph.style.display = "block";
      paragraph.style.opacity = 0;
      paragraph.style.height = "0";

      requestAnimationFrame(() => {
        paragraph.style.transition = "height 0.5s ease, opacity 0.5s ease";
        paragraph.style.height = paragraph.scrollHeight + "px";
        paragraph.style.opacity = 1;
      });

      h4.style.color = "#3f78e0";
    } else {
      paragraph.style.transition = "height 0.5s ease, opacity 0.5s ease";
      paragraph.style.opacity = 0;
      paragraph.style.height = "0";

      setTimeout(() => {
        paragraph.style.display = "none";
        h4.style.color = "";
      }, 500);
    }
  });
});
