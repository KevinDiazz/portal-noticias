import "../css/content-style.css";

function Content({ datos, tema }) {
  return (
    <>
      <main>
        <h2 className="text-center fs-4 mt-3">
          News <span style={{ color: "red", fontWeight: "bold" }}>{tema}</span>
        </h2>
        <div className="container-news d-flex flex-wrap gap-5 mt-5 justify-content-center align-items-start">
          {datos
            // eslint-disable-next-line array-callback-return
            ? datos.map((value, index) => {
                if (
                  value.title !== "[Removed]" &&
                  value.urlToImage !== null &&
                  value.urlToImage.length > 1
                ) {
                  return (
                    <div
                      key={value.title}
                      className="container-sections col-12 col-sm-8 col-md-5 col-xl-3 d-flex justify-content-center"
                    >
                      <a
                        style={{ textDecoration: "none", color: "inherit" }}
                        href={value.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="img-news img-thumbnail col-12"
                          src={value.urlToImage}
                          alt="img-news"
                        ></img>
                        <p className="text-news align-self-center text-center col-12 p-3 fs-4">
                          {value.title}
                        </p>
                      </a>
                    </div>
                  );
                }
              })
            : ""}
        </div>
      </main>
    </>
  );
}
export default Content;
