// video pop up
const video_cover = document.querySelector(".video-cover");
const video = document.querySelector(".video");
const openVideo = () => {
  video_cover.classList.add("openVideo");
  video.play();
};

const closeVideo = () => {
  video_cover.classList.remove("openVideo");
  video.pause();
  video.currentTime = 0;
};

// slide pop up
const pop_h4 = document.querySelector(".pop-h4");
const pop_h3 = document.querySelector(".pop-h3");
const pop_p = document.querySelector(".pop-p");
const pop = document.querySelector(".pop-up");

// const addPop = (id) => {
const addPop = (h4TranslationKey, h3TranslationKey, pTranslationKey) => {
  pop.classList.add("openPop");

  // pop_h4.setAttribute('data-i18n-key', h4TranslationKey);
  console.log(pop_h4, h4TranslationKey, pop_h3, h3TranslationKey, pop_p, pTranslationKey);
  translateElementManual(pop_h4, h4TranslationKey);
  translateElementManual(pop_h3, h3TranslationKey);
  translateElementManual(pop_p, pTranslationKey);

  // if (id === '1-en') {
  //     pop_h4.innerHTML = "Resorts"
  //     pop_p.innerHTML = "Luxury does not end in Alma destination. Here... is a new destination for relaxation and recreation in distinctive resorts and upscale signature villas from international designers, forming with their diversity of designs and services a unique shelter away from the lights of the city. Alma destination is designed to provide exceptional experiences that meet the aspirations of its visitors, regardless of their diverse interests, to give them luxury as they want it."
  // }
  // else if (id === '2-en') {
  //     pop_h4.innerHTML = "Residential Plots"
  //     pop_h3.style.display = "flex"
  //     pop_h3.innerHTML = "The future in Alma destinationâ€¦ serenity and peace"
  //     pop_p.innerHTML = "The residential districts in Alma destination were designed to achieve the luxury of coastal life, through its prime location and its unique structure enhanced with water canals filled with stunning views of the Red Sea to create an exceptional home that combines the vitality and serenity of the sea. Alma destination provides a wide variety of residential land types to meet the different needs of its residentsâ€™ lifestyles in order to build an inclusive, diverse and harmonious community."
  // }
  // else if (id === '3-en') {
  //     pop_h4.innerHTML = "Rental Spaces and Offices"
  //     pop_p.innerHTML = "Alma destination includes a distinctive business district for anyone looking for an innovative work environment filled with elegant office solutions, a luxurious life and a fast and dynamic rhythm. The offices will provide their users with peace and tranquillity with their wide and lively views of the Red Sea canals, allowing them the opportunity to enjoy the experiences and facilities of the destination after a productive work day."
  // }
  // else if (id === '4-en') {
  //     pop_h4.innerHTML = "Hospitality/Hotel Services"
  //     pop_p.innerHTML = "Alma destination will enable visitors to enjoy various hospitality options comprised of many hotels catering to specially defined categories to suit all different lifestyles to create an inclusive destination that meets the diversity of the needs of its visitors."
  // }
  // else if (id === '5-en') {
  //     pop_h4.innerHTML = "F&B and Entertainment"
  //     pop_p.innerHTML = "Alma destination has greatly prioritised entertainment by allocating many cinema halls, gardens and open green spaces, and attracting many international restaurants, in addition to providing water entertainment activities for both residents and visitors alike. "
  // }
  // else if (id === '6-en') {
  //     pop_h4.innerHTML = "Marinas/Piers"
  //     pop_p.innerHTML = "Alma destination is distinguished by its turquoise water, which was the inspiration for the design of a primary marina that elevates the standards of luxury coastal destinations. The destination has also taken great care of water transportation by providing sea docks for water taxis that allow internal transportation between the districts."
  // }

  // // ar content
  // if (id === '1-ar') {
  //     pop_h4.innerHTML = "asdf"
  //     pop_p.innerHTML = "jasfs"
  // }
  // else if (id === '2-ar') {
  //     pop_h4.innerHTML = "asdf"
  //     pop_p.innerHTML = "asdf"
  // }
  // else if (id === '3-ar') {
  //     pop_h4.innerHTML = "asf"
  //     pop_p.innerHTML = "asdf"
  // }
  // else if (id === '4-ar') {
  //     pop_h4.innerHTML = "sdf"
  //     pop_p.innerHTML = "adf"
  // }
  // else if (id === '5-ar') {
  //     pop_h4.innerHTML = "sf"
  //     pop_p.innerHTML = "sdf"
  // }
  // else if (id === '6-ar') {
  //     pop_h4.innerHTML = "sdf"
  //     pop_p.innerHTML = "sf"
  // }
};

const closePop = () => {
  pop.classList.remove("openPop");
};
