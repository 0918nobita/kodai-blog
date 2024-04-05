<header>
  <div class="site-title">Kodai</div>
  <div class="links">
    <nav>
      <ul class="social-links">
        <li>
          <a
            href="https://twitter.com/0918nobita"
            rel="noopener noreferrer"
            target="_blank"
          >
            X (Twitter)
          </a>
        </li>
        <li>
          <a
            href="https://bsky.app/profile/kodai.engineer"
            rel="noopener noreferrer"
            target="_blank"
          >
            Bluesky
          </a>
        </li>
      </ul>
    </nav>
    <nav>
      <ul class="site-links">
        <li><a href="/">概要・連絡先</a></li>
        <li><a href="/skills">スキル・強み</a></li>
        <li><a href="/history">自分史</a></li>
        <li><a href="/hobbies">趣味</a></li>
      </ul>
    </nav>
  </div>
</header>

<style>
  header {
    display: flex;
    align-items: center;

    color: var(--header-text);
  }

  .site-title {
    margin-right: auto;

    font-size: 2rem;
    font-weight: 600;
    color: var(--site-title-text);
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  .links li a {
    text-decoration: none;
  }

  .social-links {
    display: flex;
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  .social-links li {
    margin: 0 0.5rem;
  }

  .site-links {
    display: flex;
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  .site-links li {
    margin: 0 0.5rem;
  }
</style>
