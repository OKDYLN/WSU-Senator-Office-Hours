(function(){
  const photo = 'data:image/jpeg;base64,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';
  const frame = document.getElementById('siteFrame');

  frame.addEventListener('load', function(){
    const doc = frame.contentDocument;
    const style = doc.createElement('style');
    style.textContent = `
      :root {
        --wsu-crimson: #981E32;
        --wsu-grey: #5E6A71;
        --wsu-light-grey: #f3f4f5;
        --linkedin-blue: #0A66C2;
      }

      body {
        background: var(--wsu-crimson) !important;
        color: var(--wsu-grey) !important;
      }

      header {
        color: white !important;
      }

      .card-header {
        background: var(--wsu-crimson) !important;
      }

      .senator-card {
        background: white !important;
        border: 1px solid rgba(94,106,113,0.18);
      }

      .search-box input {
        border: 2px solid var(--wsu-grey) !important;
        color: var(--wsu-grey) !important;
      }

      .search-box input:focus {
        box-shadow: 0 0 0 3px rgba(255,255,255,0.35) !important;
        border-color: white !important;
      }

      .info-label {
        color: var(--wsu-crimson) !important;
      }

      .card-header .role,
      .card-header .college {
        color: white !important;
      }

      .card-body {
        color: var(--wsu-grey) !important;
      }

      .linkedin-link {
        background: var(--linkedin-blue) !important;
        color: white !important;
      }

      .linkedin-link:hover {
        background: #004182 !important;
        color: white !important;
      }

      .filter-btn[data-filter="no-vacant"] {
        display: none !important;
      }
    `;
    doc.head.appendChild(style);

    // Run the roster update INSIDE the iframe's JavaScript realm so its global
    // senators/renderSenators bindings are available.
    const patch = function(photo) {
      for (let i = senators.length - 1; i >= 0; i--) {
        if (senators[i].name === "Eduardo Garduno" && senators[i].email === "jesus.lopezborges@wsu.edu") {
          senators.splice(i, 1);
        }
      }

      const moses = senators.find(s => s.name === "Moses Henning");
      if (moses) {
        moses.linkedin = "https://www.linkedin.com/in/moses-henning/";
      }

      senators.forEach(senator => {
        if (["Engagement", "Internal", "External"].includes(senator.role)) {
          senator.role = senator.role + " Committee";
        }
      });

      const formattedHours = {
        "Tiara Vasquez": "Tue 11am-12pm\nWed 11am-12pm\nThu 11am-12pm\nFri 2pm-3pm",
        "Sophia Nicole Abut": "Tue 10:30am-12pm\nWed 10:30am-12pm\nThu 10:30am-12pm\nFri 2pm-3:30pm",
        "Grace Kouassi": "Mon 11am-12pm\nTue 1:30pm-2:30pm\nWed 11am-12pm",
        "Abdelrahman (Bodi) Abdelrazek": "Wed 11am-12pm\nFri 11am-12pm\nTue 1:30pm-2:30pm",
        "Malak Bensaud": "Mon 12pm-1pm\nWed 12pm-1pm\nFri 12pm-1pm",
        "Quentin Atkinson": "Mon 2pm-3pm\nWed 2pm-3pm\nFri 2pm-3pm",
        "Mya Morales": "Tue 1:30pm-3pm\nThu 1:30pm-3pm",
        "Domenico Mazzone": "Mon 10am-12pm & 2pm-3pm\nWed 10am-12pm & 2pm-3pm\nFri 10am-12pm & 2pm-3pm",
        "Ginika Rex-Elem Sally": "Mon 11am-12pm\nWed 11am-12pm\nFri 11am-12pm",
        "Mehtabel Katana": "Mon 12pm-1pm\nWed 3pm-5pm",
        "Eva Munder": "Tue 11am-1pm\nThu 11am-1pm",
        "Dylan Batista": "Mon 12pm-1:30pm\nFri 12pm-1:30pm",
        "Erin Kang": "Wed 2pm-5pm",
        "Karely Felix-Gutierrez": "Mon 3pm-4pm\nWed 3pm-4pm\nFri 3pm-4pm",
        "Moses Henning": "Mon 11:30am-1pm\nTue 10:30am-12pm",
        "Nehemiah Mejia": "Tue 11:10am-12:10pm\nWed 11:10am-12:10pm\nThu 11:10am-12:10pm",
        "Alicia Delangle": "Tue 12:30pm-2pm\nThu 12pm-1:30pm",
        "Parker Casey": "Mon 1pm-4pm\nTue 2pm-3:30pm\nWed 1:30pm-4:30pm\nFri 1pm-2pm",
        "Sheila Dehkordi": "Tue 2pm-3pm"
      };

      senators.forEach(senator => {
        if (formattedHours[senator.name]) senator.office_hours = formattedHours[senator.name];
      });

      senators.push({
        name: "Jesus Lopez",
        college: "Uncertified",
        email: "jesus.lopezborges@wsu.edu",
        phone: "Contact via email",
        linkedin: "https://www.linkedin.com/in/jesus-lopez-borges/",
        office_hours: "Tue 1pm-12pm\nThu 1pm-12pm\nFri 1pm-12pm",
        role: "External Committee",
        status: "active",
        photo: photo
      });

      senators.push({
        name: "Eduardo Garduno",
        college: "Uncertified",
        email: "eduardo.garduno@wsu.edu",
        phone: "Contact via email",
        linkedin: null,
        office_hours: "Tue 2pm-5pm",
        role: "External Committee",
        status: "active",
        photo: ""
      });

      const filledPositionsButton = document.querySelector('.filter-btn[data-filter="no-vacant"]');
      if (filledPositionsButton) filledPositionsButton.remove();

      renderSenators(senators);
    };

    doc.defaultView.eval('(' + patch.toString() + ')(' + JSON.stringify(photo) + ')');
  });
})();