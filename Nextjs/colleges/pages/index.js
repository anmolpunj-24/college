import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CollegeWorld</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className={`nav`}>
          <Link href={"/"}>
            <a>
              <h1 className="logo">CollegeWorld</h1>
            </a>
          </Link>
        </nav>
      </header>
      <main>
        <h1 className="title">welcome to CollegeWorld</h1>
        <p>Discover Dreams</p>
        <div className="grid">
          <Link href={"../pages/btech.js"}>
            <a className="card" target="_blank">
              <h3>Top B.E./B.Tech colleges &rarr;</h3>
            </a>
          </Link>

          <Link href={"../pages/mba.js"}>
            <a className="card" target="_blank">
              <h3>Top MBA/PGDM colleges &rarr;</h3>
            </a>
          </Link>

          <Link href={"../pages/medicine.js"}>
            <a className="card" target="_blank">
              <h3>Top Medicine colleges &rarr;</h3>
            </a>
          </Link>
        </div>
      </main>

      <footer>
        <a href="#" target="_blank">
          <u>Terms & Conditions</u>&nbsp;
        </a>
        © Anmol Punj
      </footer>

      <style jsx>{`
        .container {
          background-image: url("https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHw%3D&w=1000&q=80");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 2rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 50px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f1f1f1;
          font-size: 1rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #0070f3;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 1.2;
          font-size: 3rem;
          color: #edeade;
        }

        .title,
        .description {
          text-align: center;
        }

        code {
          background: #ffffff;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }

        .grid a {
          color: #e2dfd2;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          background-color: black;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.3rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
