/* =========================================================
   PRIVACY POLICY / DISCLAIMER / TERMS — content + modal logic
   ========================================================= */

const LEGAL_CONTENT = {
  privacy: {
    title: "Privacy Policy",
    html: `
      <h4>Hum kya jaankari lete hain</h4>
      <p>Anmol Digital Point par sirf wahi jaankari li jaati hai jo aap khud service ke liye dete hain (jaise naam, mobile number, document ki copy). Yeh jaankari sirf aapki requested service poori karne ke liye use hoti hai.</p>
      <h4>Free Tools (PDF/Image) ka data</h4>
      <p>Is website par diye gaye PDF/Image tools (Image to PDF, PDF to Image, Resizer, Compressor, Background Remover) me aapki file kisi server par upload nahi hoti. Sabhi processing aapke apne mobile/computer ke browser me hoti hai, isliye aapki files hamare paas store nahi hoti.</p>
      <h4>Payment Jaankari</h4>
      <p>UPI/QR code se payment seedhe aapke payment app (PhonePe/GPay/Paytm) ke through hoti hai. Hum aapki bank ya UPI PIN se juda koi detail store nahi karte.</p>
      <h4>Third-Party Links</h4>
      <p>Services section me diye gaye official links (UIDAI, NVSP, Passport Seva, RTPS Bihar, aadi) sarkari websites par le jaate hain. Un websites ki apni privacy policy hoti hai, jiske liye Anmol Digital Point zimmedar nahi hai.</p>
      <h4>Sampark</h4>
      <p>Privacy se juda koi sawal ho to hume WhatsApp ya call par sampark karein.</p>
    `
  },
  disclaimer: {
    title: "Disclaimer",
    html: `
      <h4>Sarkari sanstha nahi</h4>
      <p>Anmol Digital Point ek private digital service center hai. Yeh UIDAI, Election Commission, Passport Seva, Income Tax Department, ya kisi bhi sarkari vibhaag ka official office/branch nahi hai.</p>
      <h4>Service/Facilitation Charges</h4>
      <p>Hum aapki taraf se online form bharne, document upload karne, print/scan jaisi facilitation service dete hain, jiske liye nyay-sangat service charge liya jaata hai. Sarkari fees (agar koi ho) alag se lagti hai aur seedhe sambandhit vibhaag ko jaati hai.</p>
      <h4>Official Links</h4>
      <p>Services grid me diya gaya "Official Site" button aapko seedhe concerned sarkari website (jaise uidai.gov.in, voters.eci.gov.in, passportindia.gov.in, serviceonline.bihar.gov.in) par le jaata hai. Application/status/verification ka final control usi sarkari website/vibhaag ke paas hota hai — Anmol Digital Point sirf facilitation karta hai.</p>
      <h4>Free Tools ki simat</h4>
      <p>PDF/Image tools best-effort aadhar par diye gaye hain. Result ki quality file/device par nirbhar kar sakti hai. Kisi bhi official/legal document ke liye final PDF ki quality khud verify kar lein.</p>
      <h4>Jimmedari</h4>
      <p>Document me di gayi jaankari ki sacchai ki zimmedari applicant/customer ki khud ki hoti hai.</p>
    `
  },
  terms: {
    title: "Terms & Conditions",
    html: `
      <h4>Service ka upyog</h4>
      <p>Is website aur dukan ki service ka upyog karke aap sehmat hote hain ki di gayi jaankari sahi hai.</p>
      <h4>Payment</h4>
      <p>Service charge advance ya kaam poora hone par diya jaata hai, jaisa staff dwara bataya jaaye. UPI payment ke baad screenshot rakhna madadgaar hota hai.</p>
      <h4>Refund</h4>
      <p>Ek baar sarkari portal par application submit hone ke baad service charge refund nahi hota, kyunki kaam poora ho chuka hota hai.</p>
      <h4>Badlaav ka adhikar</h4>
      <p>Anmol Digital Point apni services, rates aur is website ki jaankari kabhi bhi update kar sakta hai.</p>
    `
  }
};

function openLegal(key) {
  const data = LEGAL_CONTENT[key];
  document.getElementById("legalModalTitle").textContent = data.title;
  document.getElementById("legalModalBody").innerHTML = data.html;
  document.getElementById("legalModal").classList.add("open");
}

function closeLegal() {
  document.getElementById("legalModal").classList.remove("open");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("openPrivacy").addEventListener("click", () => openLegal("privacy"));
  document.getElementById("openDisclaimer").addEventListener("click", () => openLegal("disclaimer"));
  document.getElementById("openTerms").addEventListener("click", () => openLegal("terms"));
  document.getElementById("legalModalClose").addEventListener("click", closeLegal);
  document.getElementById("legalModal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("legalModal")) closeLegal();
  });
});
