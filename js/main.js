////// NAVBAR RESPONSIVE ///////////
const toggleBtn = document.getElementById('mobile-menu-toggle');
const nav = document.querySelector('.primary-nav');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    nav.classList.toggle('active');
});

////// HOME PAGE SLIDER SECTION ///////////
$(document).ready(function () {
    $('.card-row').carousel({
        padding: 200
    });
    autoplay(); 
    function autoplay() {
        $('.card-row').carousel('next');
        setTimeout(autoplay, 4500);
    }
});

////// INVESTORS - MAPS SECTION START ///////////
// Google Maps JavaScript API
src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
async
defer


// HOME - SLIDERS SECTION START

// HOME - SLIDERS SECTION END


// Initialize and add the map
function initMap() {
    const centerCoords = { lat: 20.0, lng: 0.0 }; // World center

    const map = new google.maps.Map(document.getElementById("googleMap"), {
        zoom: 2,
        center: centerCoords,
        mapTypeId: 'roadmap'
    });

    // Optional: add a marker
    new google.maps.Marker({
        position: centerCoords,
        map,
        title: "Center of the World",
    });
}
////// INVESTORS - MAPS SECTION END ///////////

////// HOME - CONTACT SECTION START ///////////

  const serviceDropdown = document.getElementById("serviceDropdown");
  const productDropdown = document.getElementById("productDropdown");

  const productOptions = {
    Pharmaceuticals: ["API’s & Bulk Drugs", "ANDA Formulations", "Specialty Drugs", "Oncology", "Infectious Diseases"],
    Vaccines: ["Infectious Diseases", "Oncolytic Virus Platform", "mRNA Covid – 19 Universal Vaccine", "Viral Vector Platform (AAV & BV)", "BV driven VLP Platform "],
    Biologics: ["Therapeutic Proteins", "Gene Therapy", "Monoclonal Antibodies", "Polyclonal Antibodies"],
    Biosimilars: ["Insulin & Insulin Analogs", "Monoclonal Antibodies (MABS)", "Conjugated Vaccines"],
    Genomic: ["VTM and Swabs best quality sold globally", "RT-PCR Kits for Covid-19", "Rapid Antigen Kits for Covid-19", "Face Mask & Gloves for Hospitals"],
  };

  serviceDropdown.addEventListener("change", function () {
    const selectedService = this.value;
    productDropdown.innerHTML = `<option value="">Select a Product</option>`;

    if (productOptions[selectedService]) {
      productOptions[selectedService].forEach(product => {
        const option = document.createElement("option");
        option.value = product;
        option.textContent = product;
        productDropdown.appendChild(option);
      });
    }
  });
////// HOME - CONTACT SECTION END ///////////