(function($) {
  var myBlog = [
    {
      title: "Beautiful Kitchen",
      text: "ห้องครัว.",
      image: "kitchen/Kitchen1.jpg",
      
      link: "#"
    },
    {
      title: "Beautiful Kitchen",
      text: "Lorem ipsum dolor sit amet marlan consectetur adipiscing elit.",
      image: "kitchen/kitchen2.jpg",
      link: "#"
    },
    {
      title: "Beautiful Kitchen",
      text: "Lorem ipsum dolor sit amet marlan consectetur adipiscing elit.",
      image: "kitchen/kitchen3.jpg",
      link: "#"
    },
    {
      title: "Beautiful Kitchen",
      text: "Lorem ipsum dolor sit amet marlan consectetur adipiscing elit.",
      image: "kitchen/kitchen4.jpg",
      link: "#"
    },
    {
      title: "Beautiful Kitchen",
      text: "Lorem ipsum dolor sit amet marlan consectetur adipiscing elit.",
      image: "kitchen/kitchen5.jpg",
      link: "#"
    },
    {
      title: "Beautiful Kitchen",
      text: "Lorem ipsum dolor sit amet marlan consectetur adipiscing elit.",
      image: "kitchen/kichen6.jpg",
      link: "#"
    }
  ];
  var blog = document.getElementById("myListBlog");
  var innerHTML = "";
  for (let i = 0; i < myBlog.length; i++) {
    let data = myBlog[i];
    innerHTML += `
      <li class="list-item">
      <div class="thumb">
        <a href="${data.image}" class="lightbox">
          <img class="info_img" src="${data.image}" alt="" />
        </a>
      </div>
      <h3 class="head_color before">${data.title}</h3>
      <p>${data.text}</p>
      <div class="colored_button_div">
        <a href="${data.link}" class="colored_button">View Home</a>
      </div>
    </li>
    `;
  }
  blog.innerHTML = innerHTML;

  $("#myListBlog").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image"
  });
  // $("#myListBlog").magnificPopup({
  //   delegate: "a", // child items selector, by clicking on it popup will open
  //   type: "image"
  //   // other options
  // });
})( );
