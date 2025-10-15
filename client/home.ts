const main = document.getElementById('main-content');
if (!main) {
  console.error('Main content element not found');
  throw new Error('Main content element not found');
}
main.innerHTML = `
  <div class="hero-actions">
    Register a Hello World LTI tool using <a href="https://www.imsglobal.org/spec/lti-dr/v1p0">Dynamic Registration</a>.
    <h3>Dynamic Registration URL:</h3>
    <div style="display: flex; align-items: center; gap: 10px; justify-content: center;">
      <code id="registration-url">${window.location.origin}/lti/register</code>
      <button id="copy-btn" style="background: none; border: none; cursor: pointer; padding: 4px;" title="Copy to clipboard">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      </button>
    </div>
  </div>
`;

// Add copy functionality
const copyBtn = document.getElementById('copy-btn');
const urlElement = document.getElementById('registration-url');

copyBtn?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(urlElement?.textContent || '');
    // Visual feedback
    copyBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2">
        <polyline points="20,6 9,17 4,12"></polyline>
      </svg>
    `;
    setTimeout(() => {
      copyBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      `;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
});