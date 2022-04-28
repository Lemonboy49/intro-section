"use strict";

const company = document.querySelector(".company");
const features = document.querySelector(".features");

const companyChild = document.querySelector(".company-nav");
const featureChild = document.querySelector(".features-nav");

const companyStyle = (companyChild.style.display = "none");
const featuresStyle = (featureChild.style.display = "none");

features.addEventListener("mouseenter", function () {
  if (featureChild.style.display == "none") {
    featureChild.style.display = "block";
  } else {
    featureChild.style.display = "none";
  }
});

featureChild.addEventListener("mouseleave", function () {
  console.log("mouse");
  if (featureChild.style.display == "block") {
    featureChild.style.display = "none";
  } else {
    featureChild.style.display = "none";
  }
});

company.addEventListener("mouseenter", function () {
  if (companyChild.style.display == "none") {
    companyChild.style.display = "block";
  } else {
    companyChild.style.display = "none";
  }
});

companyChild.addEventListener("mouseleave", function () {
  if (companyChild.style.display == "block") {
    companyChild.style.display = "none";
  } else {
    companyChild.style.display = "none";
  }
});
