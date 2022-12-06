// *! TAB SWITCHING functionality ////////

// ** all the tabs are set to display none in CSS//////

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

//  Always displaying first tab as Block
const content1 = document.querySelector(".content-1");
content1.style.display = "block";

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // tab.classList.remove("active");
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    contents.forEach((event, i) => {
      //  tabs are set to display none
      event.style.display = "none";

      //  checks if the dataset number of the tab equals to the dataset number of the content
      if (tab.dataset.tab == event.dataset.content) {
        // display the tab as block

        event.style.display = "block";
        tab.classList.add("active");
      }
    });
  });
});
