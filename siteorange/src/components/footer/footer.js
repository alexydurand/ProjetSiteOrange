import boosted from "boosted";

function Footer() {
  return (
    <footer class="footer navbar" data-bs-theme="dark">
      <h2 class="visually-hidden">Sitemap & information</h2>
      <div class="container-xxl footer-terms">
        <ul class="navbar-nav gap-md-3">
          <li class="fw-bold">© Orange 2025</li>
          <li>
            <a class="nav-link" href="#">
              Terms and conditions
            </a>
          </li>
          <li>
            <a class="nav-link" href="#">
              Privacy
            </a>
          </li>
          <li>
            <a class="nav-link active" href="#" aria-current="page">
              Accessibility statement
            </a>
          </li>
          <li>
            <a class="nav-link" href="#">
              Cookie policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
