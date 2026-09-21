/* ============================================
   FOOTER COMMUN — Injecté dynamiquement
   Modifie ce fichier une seule fois,
   les deux pages se mettent à jour.
   ============================================ */

function loadFooter(variant = 'full') {
  const topSection = variant === 'full' ? `
    <div class="footer-top">
      <div>
        <p class="section-label" data-i18n="contact.label">Contact</p>
        <h2 class="footer-title" data-i18n="contact.title">Parlons ensemble.</h2>
        <p class="footer-desc" data-i18n="contact.desc">Étudiant ingénieur en informatique, je recherche un CDI en Data Engineering et LLMOps.</p>
      </div>
      <div class="footer-ctas">
        <a href="assets/CV_Sassi_De_Laat.pdf" download class="btn btn-primary" data-i18n="contact.cv">Télécharger mon CV</a>
      </div>
    </div>
  ` : '';

  const html = `
    <div class="footer-inner">
      ${topSection}
      <div class="footer-grid">
        <div class="footer-col">
          <p class="footer-label" data-i18n="contact.location">Localisation</p>
          <p class="footer-value">Paris, Île-de-France</p>
        </div>
        <div class="footer-col">
          <p class="footer-label" data-i18n="contact.phone">Téléphone</p>
          <p class="footer-value"><a href="tel:+33783430963">+33 7 83 43 09 63</a></p>
        </div>
        <div class="footer-col">
          <p class="footer-label">Email</p>
          <p class="footer-value"><a href="mailto:sassi.de-laat@efrei.net">sassi.de-laat@efrei.net</a></p>
        </div>
        <div class="footer-col">
          <p class="footer-label">Liens</p>
          <p class="footer-value">
            <a href="https://github.com/Sassidl" target="_blank" rel="noopener">GitHub ↗</a><br />
            <a href="https://www.linkedin.com/in/sassi-de-laat-data/" target="_blank" rel="noopener">LinkedIn ↗</a>
          </p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© <span class="footer-year"></span> Sassi De Laat</p>
        <p data-i18n="footer.built">Conçu avec soin · Paris</p>
      </div>
    </div>
  `;

  const footerEl = document.getElementById('footer-root');
  if (footerEl) {
    footerEl.innerHTML = html;
    // Mettre à jour l'année
    footerEl.querySelectorAll('.footer-year').forEach(el => {
      el.textContent = new Date().getFullYear();
    });
  }
}
