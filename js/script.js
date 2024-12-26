// //change image in home section

// var imageSources = ["./assets/images/home2.jpg", "./assets/images/home3.jpg"];

// var image = document.querySelector(".image-content-container img");

// var currentIndex = 0;

// function changeImage() {
//   image.style.opacity = 0;

//   setTimeout(function () {
//     image.src = imageSources[currentIndex];

//     currentIndex = (currentIndex + 1) % imageSources.length;

//     image.style.opacity = 1;
//   }, 1000);
// }

// changeImage();
// setInterval(changeImage, 3000);

// // Header  JavaScript to toggle the active class Header
// document.addEventListener("DOMContentLoaded", function () {
//   const navItems = document.querySelectorAll(".nav-item");
//   const section = document.querySelectorAll("section");
//   const mobileMenu = document.querySelectorAll(".mobile-menu .nav-item");

//   // Script for handling click events
//   navItems.forEach((item) => {
//     item.addEventListener("click", function (event) {
//       event.preventDefault();
//       navItems.forEach((navItem) => navItem.classList.remove("active"));
//       this.classList.add("active");

//       const targetId = this.getAttribute("href");
//       const sectionTargeted = document.querySelector(targetId);
//       if (sectionTargeted) {
//         const offset = sectionTargeted.offsetTop - 52;
//         window.scrollTo({ top: offset, behavior: "smooth" });
//       }
//     });
//   });

//   //script to handle the read more section in about us
//   var abt_read_more = document.getElementById("read-more-button");
//   abt_read_more.addEventListener("click", () => {
//     document.getElementById("read-more-section").classList.toggle("show");
//     abt_read_more.style.display = "none";
//   });
//   var abt_show_less = document.getElementById("show-less");
//   abt_show_less.addEventListener("click", () => {
//     document.getElementById("read-more-section").classList.toggle("show");
//     abt_read_more.style.display = "block";
//   });

//   // Script for handling scroll events
//   window.addEventListener("scroll", () => {
//     section.forEach((sec) => {
//       let top = window.scrollY + 350;
//       let offSet = sec.offsetTop;
//       let height = sec.offsetHeight;
//       let id = sec.getAttribute("id");

//       if (top > offSet && top < offSet + height) {
//         if (navItems) {
//           navItems.forEach((navItem) => {
//             navItem.classList.remove("active");
//           });
//           let activeNavItem = document.querySelector(
//             `.nav-item[href="#${id}"]`
//           );
//           if (activeNavItem) {
//             activeNavItem.classList.add("active");
//           }
//         } else {
//           console.error("navItems is not defined or empty.");
//         }
//       }
//     });
//   });

//   //Script for handling click events in mobile-menu
//   mobileMenu.forEach((item) => {
//     item.addEventListener("click", () => {
//       const checkbox = document.getElementById("check");
//       checkbox.checked = false;
//     });
//   });
// });
// document.addEventListener("DOMContentLoaded", () => {
//   const section = document.querySelector("#features");
//   const items = document.querySelectorAll(".animate-item");

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         // Add animation class when in view
//         items.forEach((item) => item.classList.add("animate"));
//       } else {
//         // Remove animation class when not in view
//         items.forEach((item) => item.classList.remove("animate"));
//       }
//     });
//   });

//   observer.observe(section);
// });

// //================= Counte Increase JavaScript=============== //

// $(document).ready(function () {
//   // Function to start animation when section is in view
//   function startCounterAnimation(entries, observer) {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         $("#start .counter:not(.animated)").each(function () {
//           var $this = $(this),
//             countTo = $this.attr("data-count");

//           $({ countNum: $this.text() }).animate(
//             {
//               countNum: countTo,
//             },
//             {
//               duration: 3000,
//               easing: "linear",
//               step: function () {
//                 $this.text(Math.floor(this.countNum));
//               },
//               complete: function () {
//                 $this.text(this.countNum);
//                 //alert('finished');
//               },
//             }
//           );
//           $this.addClass("animated"); // Mark the counter as animated to avoid repetition  animate?
//         });

//         // Unobserve the target once animation is triggered
//         observer.unobserve(entry.target);
//       }
//     });
//   }

//   // Create an intersection observer
//   const observer = new IntersectionObserver(startCounterAnimation, {
//     threshold: 0.5,
//   });

//   // Observe the counting section
//   observer.observe(document.querySelector("#start"));
// });

// //  Destination  Slick slider
// $(function () {
//   $(".slider").slick({
//     // centerMode: true,
//     // centerPadding: '0',
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     infinite: true,
//     draggable: true,
//     dots: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: false,

//     responsive: [
//       {
//         breakpoint: 1181,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 769,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 641,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   });
// });

// //================ TESTIMONIAL SLICK SLIDER ==================== //

// $(function () {
//   $(".testimonial").slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     infinite: true,
//     draggable: true,
//     dots: false,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: false,

//     responsive: [
//       {
//         breakpoint: 1281,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 641,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   });
// });

// $("#submit-contact").submit((e) => {
//   e.preventDefault();
//   $.ajax({
//     url: "https://script.google.com/macros/s/AKfycbyCJJDa85evxS6u3RRUs80NnsJcw0BHVfpBsbsBRffhIeVIx3J0Pr0Q941gPJCzEsem4w/exec",
//     data: $("#submit-contact").serialize(),
//     method: "post",
//     success: function (response) {
//       // Use SweetAlert for success message
//       Swal.fire({
//         icon: "success",
//         title: "You subscribed successfully",
//         showConfirmButton: false,
//         timer: 1500, // Automatically close after 1.5 seconds
//       }).then(() => {
//         window.location.reload();
//       });
//     },
//     error: function (err) {
//       // Use SweetAlert for error messagec
//       Swal.fire({
//         icon: "error",
//         title: "Something went wrong",
//         text: "Please try again later.",
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "OK",
//       });
//     },
//   });
// });

// $("#destination-form").submit((e) => {
//   e.preventDefault();
//   $.ajax({
//     url: "https://script.google.com/macros/s/AKfycbwE4hj-WtVXxVEOBkGUxrDTXD8OQU_hqL-VfTwYa3dqovXkVYfVl_M7JGW0HIIPvCXS7A/exec",
//     data: $("#destination-form").serialize(),
//     method: "post",
//     success: function (response) {
//       // Use SweetAlert for success message
//       Swal.fire({
//         icon: "success",
//         title: "You subscribed successfully",
//         showConfirmButton: false,
//         timer: 1500, // Automatically close after 1.5 seconds
//       }).then(() => {
//         window.location.reload();
//       });
//     },
//     error: function (err) {
//       // Use SweetAlert for error messagec
//       Swal.fire({
//         icon: "error",
//         title: "Something went wrong",
//         text: "Please try again later.",
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "OK",
//       });
//     },
//   });
// });

// $("#subscribe").submit((e) => {
//   e.preventDefault();
//   $.ajax({
//     url: "https://script.google.com/macros/s/AKfycbwBlIFlxblmhtxh3TVO1Q8_ucnQfVWVwnv5ZBLEQQQsSzFbdZcSiPVUz9ZggyEb01cA/exec",
//     data: $("#subscribe").serialize(),
//     method: "post",
//     success: function (response) {
//       // Use SweetAlert for success message
//       Swal.fire({
//         icon: "success",
//         title: "You subscribed successfully",
//         showConfirmButton: false,
//         timer: 1500, // Automatically close after 1.5 seconds
//       }).then(() => {
//         window.location.reload();
//       });
//     },
//     error: function (err) {
//       // Use SweetAlert for error messagec
//       Swal.fire({
//         icon: "error",
//         title: "Something went wrong",
//         text: "Please try again later.",
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "OK",
//       });
//     },
//   });
// });
// // Function to validate phone number
// function validatePhoneNumber() {
//   var phoneNumber = document.getElementById("phone").value;

//   // Regular expression to match a valid phone number
//   var phoneRegex = /^[0-9]{14}$/; // For example, assuming a 10-digit phone number

//   // Check if the entered value matches the regex
//   if (phoneRegex.test(phoneNumber)) {
//     // Valid phone number
//     console.log("Valid phone number");
//   } else {
//     // Invalid phone number
//     console.log("Invalid phone number");
//   }
// }
// // Attach an event listener to the input field to trigger validation on input change
// document.getElementById("phone").addEventListener("input", validatePhoneNumber);

// for HLB

//for header
document.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
const arrowBtn = document.querySelector(".arrowBtn");
const arrowIcon = document.querySelector(".arrowBtn img");

let lastScrollPosition = 0; // Track the last scroll position

// Function to check and update arrow direction
function updateArrowDirection() {
  const currentScrollPosition = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight;
  const viewportHeight = window.innerHeight;

  if (currentScrollPosition > lastScrollPosition) {
    // Scrolling down
    arrowIcon.classList.add("rotated");
  } else if (currentScrollPosition < lastScrollPosition) {
    // Scrolling up
    arrowIcon.classList.remove("rotated");
  }

  // Save the current scroll position for the next check
  lastScrollPosition = currentScrollPosition;

  // Special case for when at the very top or bottom
  if (currentScrollPosition + viewportHeight >= documentHeight - 1) {
    arrowIcon.classList.add("rotated");
  } else if (currentScrollPosition === 0) {
    arrowIcon.classList.remove("rotated");
  }
}

// Handle button click for smooth scrolling
arrowBtn.addEventListener("click", () => {
  const currentScrollPosition = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight;
  const viewportHeight = window.innerHeight;

  if (currentScrollPosition + viewportHeight < documentHeight) {
    // Scroll to bottom
    window.scrollTo({
      top: documentHeight,
      behavior: "smooth",
    });
  } else {
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});

// Update arrow direction on scroll
document.addEventListener("scroll", updateArrowDirection);

// Ensure correct arrow direction on page load
window.addEventListener("load", updateArrowDirection);

$(document).ready(function () {
  // Initialize the slick slider
  var $slider = $(".slick-slider");

  $slider.slick({
    dots: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // Link the custom left button to go to the previous slide
  $(".slider-btn.left").on("click", function () {
    $slider.slick("slickPrev");
  });

  // Link the custom right button to go to the next slide
  $(".slider-btn.right").on("click", function () {
    $slider.slick("slickNext");
  });

  // Update the state of the buttons when the slide changes
  $slider.on("afterChange", function (event, slick, currentSlide) {
    // Disable left button if we are at the first slide
    if (currentSlide === 0) {
      $(".slider-btn.left").prop("disabled", true);
    } else {
      $(".slider-btn.left").prop("disabled", false);
    }

    // Disable right button if we are at the last slide
    if (currentSlide === slick.slideCount - 1) {
      $(".slider-btn.right").prop("disabled", true);
    } else {
      $(".slider-btn.right").prop("disabled", false);
    }
  });
});

//================= Counte Increase JavaScript=============== //

$(document).ready(function () {
  // Function to start animation when section is in view
  function startCounterAnimation(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Find all .value elements within .count-box that haven't been animated
        $(".count-box .value:not(.animated)").each(function () {
          var $this = $(this),
            countTo = $this.attr("data-count"); // Use data-count for the target number

          $({ countNum: 0 }).animate(
            {
              countNum: countTo,
            },
            {
              duration: 5000,
              easing: "linear",
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
              },
            }
          );

          // Mark the counter as animated to avoid repetition
          $this.addClass("animated");
        });

        // Unobserve the target once animation is triggered
        observer.unobserve(entry.target);
      }
    });
  }

  // Create an intersection observer
  const observer = new IntersectionObserver(startCounterAnimation, {
    threshold: 0.5,
  });

  // Observe the counting section
  observer.observe(document.querySelector(".count-section"));
});
